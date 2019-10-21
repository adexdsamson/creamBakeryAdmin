import React from 'react';
import Comment from '../../components/feedback';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';


const mapStateToProps = state => ({ feedback: state.Feedback })

const ConnectedList = ({feedback}) => (
  <div className='pt-2'>
    {feedback.length ? <Comment views={feedback} /> : 
      <Typography variant='h5'>No Reviews </Typography>
    }
  </div>
);

const feedbackView = connect(mapStateToProps)(ConnectedList);


export default feedbackView;
