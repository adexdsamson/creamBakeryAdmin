import React from 'react';
import BlogList from '../../components/blog';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const mapStateToProps = state => ({ blog: state.Blog });

const ConnectedList = ({blog}) => (

  <div>
    {blog.length ? <BlogList views={blog} /> : 
      <Typography variant="h5">No Blogs </Typography>
    }
  </div>
);

const BlogView = connect(mapStateToProps)(ConnectedList);

export default BlogView;