import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ElevatedTab from '../../components/Tab';
import Input from '../../components/Input';
import {Button} from 'react-bootstrap';
import { withStyles } from '@material-ui/core';
import {Row, Col} from 'react-bootstrap';
import {clearBlog} from '../../store/action';
import { Grid, Tab, Typography, CircularProgress} from '@material-ui/core';
import FileUploader from 'react-firebase-file-uploader';
import {checkValidityInput} from '../../utilities/checkValidityInput';
import { green } from '@material-ui/core/colors';
import { Dashboard as DashboardLayout } from '../../layout';
import { CardBody as Card } from '../../components/Cards';
import {fetchBlog, postBlog, storageRef} from '../../utilities/firebase';
import TabPanel from '../../components/TabPanel';
import BlogView from '../../presentation/Blog';

import {
  PostAddOutlined as BlogIcon,
} from '@material-ui/icons';



const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: '100%'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
  },
});

class Blog extends Component {
  state = { 
    id: 0,
    value: "",
    isFormValid: false,
    success: false,
    isLoading: false,
    formError: false,
    imageURL: '',
    isUploading: false,
    progress: 0,
    form: {
      title: {
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
  };


  componentDidMount(){
    this.props.fetchBlog();
  }

  componentWillMount(){
    this.props.clearBlog();
  }


  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  
  handleChange = (e, val) => {
    if(val === 1)
      this.setState({value: 'create blog', id: val});
    this.setState({value: 'blog', id: val})
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
      this.props.postBlog(Data);
      this.setState({ isLoading: false});
      alert('Post Succesful!');
    };
  };

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

  render() { 
    const { classes } = this.props;
    const { id, isLoading, isFormValid } = this.state;
   
    return ( 
      <DashboardLayout title='Blog' subtitle="Share your knowledge, experiences or the latest news, create a unique and beautiful blog" icon={<BlogIcon  fontSize="large"/>}>
        
          <Grid className={classes.root} container spacing={4}>
            <ElevatedTab
              value={id}
              change={(e, value) => this.handleChange(e, value)}
            >
              <Tab label='Blog' />
              <Tab label='create Blog' />
            </ElevatedTab>
          </Grid>
          <Grid>
            <TabPanel value={id} index={0}>
              <Grid container sm={12} item>
                <Card>
                  <BlogView />
                </Card>
              </Grid>
            </TabPanel>
            <TabPanel value={id} index={1}>
              <Grid container sm={12} item>
                <Card>
                  <Typography variant="h5">Create Blog</Typography>
                  
                  <Grid lg={12} item>
                  
                    <form className="mt-4" onSubmit={this.handleSubmit}>
                      <Input 
                        type="text" 
                        label="Title" 
                        placeholder="Title"
                        onChange={e => this.inputHandler(e, 'title')}
                        {...this.state.form.title.elementConfig}
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
 
export default compose(withStyles(styles),connect(null, {fetchBlog, postBlog, clearBlog}) )(Blog);