import React, { Component } from 'react';
import Avatar from '../../components/Avatar';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import ElevatedTab from '../../components/Tab';
import { Field } from 'redux-form';
import renderInput from '../../components/renderInput';
import renderBody from '../../components/renderTextarea';
import Form from '../../components/Form';
import { withStyles } from '@material-ui/core';
import {Row, Col} from 'react-bootstrap';
import {clearBlog} from '../../store/action';
import { Grid, Tab, Typography} from '@material-ui/core';
import FileUploader from 'react-firebase-file-uploader';
import { Dashboard as DashboardLayout } from '../../layout';
import { CardBody as Card } from '../../components/Cards';
import {fetchBlog, postBlog, storageRef} from '../../utilities/firebase';
import TabPanel from '../../components/TabPanel';
import BlogView from '../../presentation/Blog';
import Wallpaper from '../../assets/img/users/icon-72x72.png';
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
});

class Blog extends Component {
  state = { 
    id: 0,
    value: "",
    imageURL: '',
    isUploading: false,
    progress: 0,
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

  handleSubmit = (values) => {
    this.setState({ isLoading: true });
    let submitData = {
      title: values.Title,
      body: values.Body,
      img: this.state.imageURL
    };
    this.props.postBlog(submitData);
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


  

  render() { 
    const { classes } = this.props;
    const { id, isUploading, progress, imageURL } = this.state;
   
    return (
      <DashboardLayout
        title="Blog"
        subtitle="Share your knowledge, experiences or the latest news, create a unique and beautiful blog"
        icon={<BlogIcon fontSize="large" />}
      >
        <Grid className={classes.root} container spacing={4}>
          <ElevatedTab
            value={id}
            change={(e, value) => this.handleChange(e, value)}
          >
            <Tab label="Blog" />
            <Tab label="create Blog" />
          </ElevatedTab>
        </Grid>
        <Grid>
          <TabPanel value={id} index={0}>
            <Grid container sm={12} item>
              <Card>
                <Typography variant="body2">Blog list</Typography>
                <BlogView />
              </Card>
            </Grid>
          </TabPanel>
          <TabPanel value={id} index={1}>
            <Grid container sm={12} item>
              <Card>
                <Typography variant="body2">Create Blog</Typography>
                <Grid>
                  <div className="container text-center">
                    <Avatar size={150} src={imageURL || Wallpaper} />
                  </div>
                </Grid>
                <Grid lg={12} item>
                  <Form
                    className="mt-4 pt-4"
                    onSubmit={values => this.handleSubmit(values)}
                  >
                    <Field
                      name="Title"
                      type="text"
                      component={renderInput}
                      placeholder="Title"
                      label="Title"
                    />

                    <Field
                      name="Body"
                      type="text"
                      component={renderBody}
                      placeholder="Body"
                      label="Body"
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
 
export default compose(withStyles(styles),connect(null, {fetchBlog, postBlog, clearBlog}) )(Blog);