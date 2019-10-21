import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import RecipeView from '../../presentation/Recipe';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import {fetchCategory, postRecipe, storageRef} from '../../utilities/firebase';
import {clearRecipe} from '../../store/action';
import {checkValidityInput} from '../../utilities/checkValidityInput';
import {Button} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import FileUploader from 'react-firebase-file-uploader';
import Input from '../../components/Input';
import ElevatedTab from '../../components/Tab';
import Tab from "@material-ui/core/Tab";
import { withStyles } from '@material-ui/core';
import { Grid, Typography, CircularProgress} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import TabPanel from '../../components/TabPanel';
import { CardBody as Card } from '../../components/Cards';
import { Dashboard as DashboardLayout } from '../../layout';
import RectImage from '../../components/RectImage';
import Wallpaper from '../../assets/img/users/icon-72x72.png';


import {
  FastfoodOutlined as RecipeIcon,
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

class Recipe extends Component {
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
      price: {
        elementType: "input",
        elementConfig: {
          type: "number"
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
      this.props.postRecipe(Data);
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

  componentDidMount(){
    this.props.fetchCategory();
  }

  componentWillUnmount(){
    this.props.clearRecipe();
  }

  handleChange = (e, val) => {
    if(val === 1)
      this.setState({value: 'create blog', id: val});
    this.setState({value: 'blog', id: val})
  }

  render() { 
    const { classes } = this.props;
    const { id, isLoading, isFormValid} = this.state;
    
    return ( 
      <DashboardLayout title='Recipe' subtitle='Share everyday cooking inspiration on Allrecipes' icon={<RecipeIcon />}>
        
          <Grid className={classes.root} container>
            <ElevatedTab
              value={id}
              change={(e, value) => this.handleChange(e, value)}
            >
              <Tab label='Recipes' />
              <Tab label='Add' />
            </ElevatedTab>
          </Grid>
          <Grid>
            <TabPanel value={id} index={0}>
              <Grid container sm={12}>
                <Card>
                  <RecipeView />
                </Card>
              </Grid>
            </TabPanel>
            <TabPanel value={id} index={1}>
              <Grid container sm={12}>
                <Card>
                  <Typography variant="h5">Create Recipe</Typography>
                  <Grid>
                    <div className="container text-center">
                      <RectImage 
                        width={150}
                        height={100} 
                        src={this.state.imageURL || Wallpaper}/>
                    </div>
                  </Grid>
                  <Grid lg={12}>
                    <form className="mt-4" onSubmit={this.handleSubmit}>
                      <Input 
                        label="Title" 
                        placeholder="Title"
                        onChange={e => this.inputHandler(e, 'title')}
                        {...this.state.form.title.elementConfig}
                      />
                      <Input 
                        type="number" 
                        label="Price" 
                        placeholder="Price"
                        onChange={e => this.inputHandler(e, 'price')}
                        {...this.state.form.price.elementConfig}
                      />
                      <Input 
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
 
export default compose(withStyles(styles), connect(null, {fetchCategory, postRecipe, clearRecipe}))(Recipe);