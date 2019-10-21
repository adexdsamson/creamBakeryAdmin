import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core';
import {connect} from 'react-redux';
import {fetchChef, postChef, storageRef} from '../../utilities/firebase';
import {clearChef} from '../../store/action';
import {checkValidityInput} from '../../utilities/checkValidityInput';
import FileUploader from 'react-firebase-file-uploader';
import {Button} from 'react-bootstrap';
import ElevatedTab from '../../components/Tab';
import {Row, Col} from 'react-bootstrap';
import Input from '../../components/Input';
import Avatar from '../../components/Avatar';
import { Grid, Typography, Tab, CircularProgress} from '@material-ui/core';
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
    isFormValid: false,
    success: false,
    isLoading: false,
    formError: false,
    imageURL: '',
    isUploading: false,
    progress: 0,
    form: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touch: false
      },
      job: {
        elementType: "input",
        elementConfig: {
          type: "text"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touch: false
      },
    }
  };


  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    let submitData = {};
    let validForm = true;
    for (let key in this.state.form) {
      submitData[key] = this.state.form[key].value;
      validForm = this.state.form[key].valid && validForm;
    };
    if(validForm) {
      let Data = {...submitData, img: this.state.imageURL}
      this.props.postChef(Data);
      this.setState({ isLoading: false});
      alert('Post Succesful!');
    };
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

  inputHandler = (e, form) => {
    const updatedForm = {
      ...this.state.form
    };
    const updatedFormElement = {
      ...updatedForm[form]
    };
    let formValid = true;
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = checkValidityInput(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touch = true;
    updatedForm[form] = updatedFormElement;

    for (let eachInput in updatedForm) {
      formValid = updatedForm[eachInput].valid && formValid;
      //console.log(formValid)
    }
    this.setState({ form: updatedForm, isFormValid: formValid });
  };

  componentDidMount(){
    this.props.fetchChef();
  }

  componentWillUnmount(){
    this.props.clearChef();
  }

  render() { 
    const { classes } = this.props;
    const { value, isFormValid, isLoading } = this.state;

    return ( 
      <DashboardLayout title='Chefs' subtitle="Trained professional bakers" icon={<ChefIcon />}>
        <Grid className={classes.root} container spacing={4}>
          <ElevatedTab
            value={value}
            change={(e, value) => this.handleChange(e, value)}
          >
            <Tab label='Chefs' />
            <Tab label='Profile' />
          </ElevatedTab>
        </Grid>
        <Grid>
          <TabPanel value={value} index={0}>
            <Grid container sm={12}>
              <Card>
                <ChefView />
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container sm={12}>
              <Card>
                <Typography variant="h5">Create Chef Profile</Typography>
                <Grid>
                  <div className="container text-center">
                    <Avatar size={150} src={this.state.imageURL || Wallpaper}/>
                  </div>
                </Grid>
                <Grid lg={12}>
                  <form className="mt-3" onSubmit={this.handleSubmit}>
                    <Input 
                      label="Full Name" 
                      placeholder="Full Name"
                      onChange={e => this.inputHandler(e, 'name')}
                      {...this.state.form.name.elementConfig}
                    />
                    <Input 
                      type="number" 
                      label="Job" 
                      placeholder="Job"
                      onChange={e => this.inputHandler(e, 'job')}
                      {...this.state.form.job.elementConfig}
                    />
                    <Row>
                      <Col sm="2">
                        <Typography variant="h5">Image</Typography>
                      </Col>
                      <Col sm="10">
                        {this.state.isUploading ? <p>Progress: {this.state.progress}</p> :
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
                        
                        }
                      </Col>
                    </Row>
                    <Button type="submit" variant="outline-success" disabled={isFormValid && isLoading} className="pr-5 mt-4 pl-5">
                      {isFormValid && isLoading ? <CircularProgress size={24} className={classes.buttonProgress} /> : 'Post' }
                    </Button>
                  </form>
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