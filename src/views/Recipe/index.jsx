import React, { Component } from 'react';
import RecipeView from '../../presentation/Recipe';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import renderInput from '../../components/renderInput';
import renderBody from '../../components/renderTextarea';
import Form from '../../components/Form';
import {fetchCategory, postRecipe, storageRef} from '../../utilities/firebase';
import { clearRecipe } from "../../store/action";
import ElevatedTab from '../../components/Tab';
import Tab from "@material-ui/core/Tab";
import { withStyles } from '@material-ui/core';
import { Grid, Typography} from '@material-ui/core';
import { green } from "@material-ui/core/colors";
import TabPanel from '../../components/TabPanel';
import { CardBody as Card } from '../../components/Cards';
import { Dashboard as DashboardLayout } from '../../layout';
import Avatar from '../../components/Avatar';
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
  indicator: {
    backgroundColor: "#ffffff"
  }
})

class Recipe extends Component {
  state = { 
    id: 0,
    value: "",
    imageURL: '',
    isUploading: false,
    progress: 0,
    
  }

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
      title: values.title,
      price: values.price,
      body: values.body,
      img: this.state.imageURL
    };
    this.props.postRecipe(submitData);
    this.setState({ isLoading: false});
    alert('Post Succesful!');
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

  componentDidMount(){
    this.props.fetchCategory();
  }

  componentWillUnmount(){
    this.props.clearRecipe();
  }

  handleDelete = (id) => {
    this.props.DeleteRecipe(id)
  }

  handleChange = (e, val) => {
    if(val === 1)
      this.setState({value: 'create blog', id: val});
    this.setState({value: 'blog', id: val})
  }

  render() { 
    const { classes } = this.props;
    const { id, isUploading, progress, imageURL } = this.state;
    
    return (
      <DashboardLayout
        title="Recipe"
        subtitle="Share everyday cooking inspiration on Allrecipes"
        icon={<RecipeIcon />}
      >
        <Grid className={classes.root} container>
          <ElevatedTab
            value={id}
            change={(e, value) => this.handleChange(e, value)}
          >
            <Tab label="Recipes" />
            <Tab label="Add" />
          </ElevatedTab>
        </Grid>
        <Grid>
          <TabPanel value={id} index={0}>
            <Grid container sm={12}>
              <Card>
                <Typography variant="body2">Chef list</Typography>
                <div className="mt-4"></div>
                <RecipeView />
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={id} index={1}>
            <Grid container sm={12}>
              <Card>
                <Typography variant="body2">Create Recipe</Typography>
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
                      name="title"
                      label="Title"
                      placeholder="Title"
                      component={renderInput}
                      type="text"
                    />
                    <Field
                      type="number"
                      label="Price"
                      placeholder="Price"
                      name="price"
                      component={renderInput}
                    />
                    <Field
                      name="body"
                      component={renderBody}
                      label="Body"
                      placeholder="Body"
                      type="text"
                    />
                    <Field
                      name="image"
                      type="file"
                      label="image"
                      component={renderInput}
                      onUploadStart={this.handleUploadStart}
                      onProgress={this.handleProgress}
                      onUploadError={this.handleUploadError}
                      isUploading={isUploading}
                      progress={progress}
                    />
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
 
export default compose(withStyles(styles), connect(null, {fetchCategory, postRecipe, clearRecipe }))(Recipe);