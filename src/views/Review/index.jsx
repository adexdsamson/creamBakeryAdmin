import React, { Component } from 'react';
import ReviewView from '../../presentation/Feedback';
import compose from 'recompose/compose';
import {connect} from 'react-redux';
import {clearReview} from '../../store/action';
import { Field } from 'redux-form';
import renderInput from '../../components/renderInput';
import renderBody from '../../components/renderTextarea';
import Form from '../../components/Form';
import ElevatedTab from '../../components/Tab';
import FileUploader from 'react-firebase-file-uploader';
import { green } from '@material-ui/core/colors';
import {Row, Col} from 'react-bootstrap';
import Tab from "@material-ui/core/Tab";
import {fetchReview, postReview, storageRef} from '../../utilities/firebase';
import Avatar from '../../components/Avatar';
import Wallpaper from '../../assets/img/users/icon-72x72.png';
import { Grid, Typography, withStyles} from '@material-ui/core';
import TabPanel from '../../components/TabPanel';
import { CardBody as Card } from '../../components/Cards';
import { Dashboard as DashboardLayout } from '../../layout';


import {
  FastfoodOutlined as ReviewsIcon,
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
  },
  tab: {
    textTransform: "initial",
    margin: `0 ${theme.spacing.unit * 2}px`,
    minWidth: 0,
    [theme.breakpoints.up("md")]: {
      minWidth: 0
    },
    fontWeight: "normal",
    letterSpacing: 0.5,
    color: "#ffffff",  
    paddingLeft: 10,
    paddingRight: 10,
    maxWidth: 'fit-content'    
  },
  Wrapper: {
    [theme.breakpoints.down('md')]: {
      margin: 0,
      padding: 0
    }
  },
})

class Review extends Component {
  state = { 
    value: 0,
    imageURL: '',
    isUploading: false,
    progress: 0,
    
  }


  handleChange = (e, val) => {
    console.log(val)
    this.setState({value: val}) 
  }

  handleSubmit = values => {
    this.setState({ isLoading: true });
    let submitData = {
      name: values.customer,
      body: values.body,
      img: this.state.imageURL
    };
    this.props.postReview(submitData);
    this.setState({ isLoading: false});
    alert('Post Succesful!');
  };


  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
    this.setState({ isUploading: false });
  };

  componentDidMount(){
    this.props.fetchReview();
  }

  componentWillUnmount(){
    this.props.clearReview();
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

  render() { 
    const { classes } = this.props;
    const { value, isUploading, progress, imageURL } = this.state;
    
    return (
      <DashboardLayout
        title="Review"
        subtitle="Share everyday cooking inspiration on Allrecipes"
        icon={<ReviewsIcon />}
      >
        <Grid className={classes.root} container spacing={4}>
          <ElevatedTab
            value={value}
            change={(e, value) => this.handleChange(e, value)}
          >
            <Tab label="Reviews" />
            <Tab label="Add Review" />
          </ElevatedTab>
        </Grid>
        <Grid>
          <TabPanel value={value} index={0}>
            <Grid container sm={12} item>
              <Card>
                <Typography variant="body2">Review list</Typography>
                <div className="mt-4"></div>
                <ReviewView />
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container sm={12}>
              <Card>
                <Typography variant="body2">Create Review</Typography>
                <Grid>
                  <div className="container text-center">
                    <Avatar size={150} src={imageURL || Wallpaper} />
                  </div>
                </Grid>
                <Grid lg={12}>
                  <Form
                    className="mt-4"
                    onSubmit={values => this.handleSubmit(values)}
                  >
                    <Field
                      type="text"
                      name="customer"
                      label="Customer's Name"
                      placeholder="Customer's Name"
                      component={renderInput}
                    />

                    <Field
                      type="text"
                      name="body"
                      component={renderBody}
                      label="Body"
                      placeholder="Body"
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
 
export default compose(withStyles(styles), connect(null, { fetchReview, clearReview, postReview }))(Review);