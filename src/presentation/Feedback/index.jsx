import React from 'react';
import Comment from '../../components/feedback';
import { connect } from 'react-redux';
import {getReviewState} from '../../store/selector';
import NoContent from '../../views/NoContent';


const mapStateToProps = state => ({ feedback: getReviewState(state) })

const ConnectedList = ({feedback}) => (
  <div className='pt-2'>
    {feedback.length ? <Comment Views={feedback} /> : 
      <NoContent title="No Review availiable"/>
    }
  </div>
);

const feedbackView = connect(mapStateToProps)(ConnectedList);


export default feedbackView;
