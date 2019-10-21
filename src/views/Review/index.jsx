import React, { Component } from 'react';
import ReviewView from '../../presentation/Feedback';
import compose from 'recompose/compose';
import {connect} from 'react-redux';
import {clearReview} from '../../store/action';
import Input from '../../components/Input';
import ElevatedTab from '../../components/Tab';
import FileUploader from 'react-firebase-file-uploader';
import {checkValidityInput} from '../../utilities/checkValidityInput';
import { green } from '@material-ui/core/colors';
import {Row, Col, Button} from 'react-bootstrap';
import Tab from "@material-ui/core/Tab";
import {fetchReview, postReview, storageRef} from '../../utilities/firebase';
import Avatar from '../../components/Avatar';
import Wallpaper from '../../assets/img/users/icon-72x72.png';
import { Grid, Typography, withStyles, CircularProgress} from '@material-ui/core';
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
})

class Review extends Component {
  state = { 
    value: 0,
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
      body: {
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
      }
    }
  }


  handleChange = (e, val) => {
    console.log(val)
    this.setState({value: val}) 
  }

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
      this.props.postReview(Data);
      this.setState({ isLoading: false});
      alert('Post Succesful!');
    };
  };


  handleChangeUsername = event =>
  this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
  this.setState({ isUploading: false });
  console.error(error);
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
    }
    this.setState({ form: updatedForm, isFormValid: formValid });
  };

  render() { 
    const { classes } = this.props;
    const { value, isFormValid, isLoading } = this.state;
    
    return ( 
      <DashboardLayout title='Review' subtitle='Share everyday cooking inspiration on Allrecipes' icon={<ReviewsIcon />}>
        
          <Grid className={classes.root} container spacing={4}>
            <ElevatedTab
              value={value}
              change={(e, value) => this.handleChange(e, value)}
            >
              <Tab label='Reviews' />
              <Tab label='Add Review' />
            </ElevatedTab>
          </Grid>
          <Grid>
            <TabPanel value={value} index={0}>
              <Grid container sm={12} item>
                <Card>
                  <ReviewView />
                </Card>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container sm={12}>
                <Card>
                  <Typography variant="h5">Create Review</Typography>
                  <Grid>
                    <div className="container text-center">
                      <Avatar size={150} src={this.state.imageURL || Wallpaper}/>
                    </div>
                  </Grid>
                  <Grid lg={12}>
                    <form className="mt-4" onSubmit={this.handleSubmit}>
                      <Input 
                        type="text" 
                        label="Customer's Name" 
                        placeholder="Customer's Name"
                        onChange={e => this.inputHandler(e, 'name')}
                        {...this.state.form.name.elementConfig}
                      />
                      
                      <Input 
                        type="text" 
                        tag="textarea" 
                        className="form-control" 
                        label="Body" 
                        placeholder="Body"
                        onChange={e => this.inputHandler(e, 'body')}
                        {...this.state.form.body.elementConfig}
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
 
export default compose(withStyles(styles), connect(null, {fetchReview, clearReview, postReview}))(Review);