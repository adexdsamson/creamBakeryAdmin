import React from 'react';
import BlogList from '../../components/blog';
import { connect } from 'react-redux';
import {getBlogState} from '../../store/selector';
import NoContent from '../../views/NoContent';

const mapStateToProps = state => ({ blog: getBlogState(state) });

const ConnectedList = ({blog}) => (

  <div>
    {blog.length ? <BlogList views={blog} /> : 
      <NoContent title="No blog availiable"/>
    }
  </div>
);

const BlogView = connect(mapStateToProps)(ConnectedList);

export default BlogView;