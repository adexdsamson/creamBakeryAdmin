import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core';
import {connect} from 'react-redux';
import {fetchChef, postChef, storageRef} from '../../utilities/firebase';
import {clearChef} from '../../store/action';
import Form from '../../components/Form';
import { Field } from 'redux-form';
import renderInput from '../../components/renderInput';
import FileUploader from 'react-firebase-file-uploader';
import ElevatedTab from '../../components/Tab';
import {Row, Col} from 'react-bootstrap';
import Avatar from '../../components/Avatar';
import { Grid, Typography, Tab} from '@material-ui/core';
import Wallpaper from '../../assets/img/users/icon-72x72.png';
import { green } from '@material-ui/core/colors';
import TabPanel from '../../components/TabPanel';
import { CardBody as Card } from '../../components/Cards';
import { Dashboard as DashboardLayout } from '../../layout';
import ChefView from '../../presentation/Chef';

import {
  PeopleOutline as ChefIcon,
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: '100%'
  },
  buttonProgress: {
    color: green[500],
  }
})

class Chef extends Component {
  state = { 
    value: 0 ,
    imageURL: '',
    isUploading: false,
    progress: 0,
    
  };


  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleSubmit = values => {
    this.setState({ isLoading: true });
    let submitData = {
      title: values.name,
      body: values.position,
      img: this.state.imageURL
    };
    this.props.postChef(submitData);
    this.setState({ isLoading: false});
    alert('Post Succesful!');
  };

  handleChange = (e, val) => {
    console.log(val)
    this.setState({value: val}) 
  }

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
      storageRef
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({
          imageURL: url
        });
      });
  };


  componentDidMount(){
    this.props.fetchChef();
  }

  componentWillUnmount(){
    this.props.clearChef();
  }

  render() { 
    const { classes } = this.props;
    const { value, isUploading, progress, imageURL } = this.state;

    return (
      <DashboardLayout
        title="Chefs"
        subtitle="Trained professional bakers"
        icon={<ChefIcon />}
      >
        <Grid className={classes.root} container spacing={4}>
          <ElevatedTab
            value={value}
            change={(e, value) => this.handleChange(e, value)}
          >
            <Tab label="Chefs" />
            <Tab label="Profile" />
          </ElevatedTab>
        </Grid>
        <Grid>
          <TabPanel value={value} index={0}>
            <Grid container sm={12}>
              <Card>
                <Typography variant="body2">Chef list</Typography>
                <ChefView />
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container sm={12}>
              <Card>
                <Typography variant="body2">Create Chef Profile</Typography>
                <Grid>
                  <div className="container text-center">
                    <Avatar size={150} src={imageURL || Wallpaper} />
                  </div>
                </Grid>
                <Grid lg={12}>
                  <Form className="mt-3" onSubmit={this.handleSubmit}>
                    <Field
                      name="name"
                      label="Full Name"
                      placeholder="Full Name"
                      type="text"
                      component={renderInput}
                    />
                    <Field
                      name="position"
                      label="Job"
                      type="text"
                      placeholder="Position"
                      component={renderInput}
                    />
                    <Row>
                      <Col sm="2">
                        <Typography variant="h5">Image</Typography>
                      </Col>
                      <Col sm="10">
                        {isUploading ? (
                          <p>Progress: {progress}</p>
                        ) : (
                          <FileUploader
                            accept="image/*"
                            name="thumbnail"
                            randomizeFilename
                            storageRef={storageRef}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                          />
                        )}
                      </Col>
                    </Row>
                  </Form>
                </Grid>
              </Card>
            </Grid>
          </TabPanel>
        </Grid>
      </DashboardLayout>
    );
  }
}
 
export default compose(withStyles(styles), connect(null, {fetchChef, postChef, clearChef}))(Chef);