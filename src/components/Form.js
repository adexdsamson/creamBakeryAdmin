import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import {Button} from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import {checkValidityInput, warn} from '../utilities/checkValidityInput';
import {CircularProgress} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core';

const styles = theme => ({

  buttonProgress: {
    color: green[500],
  },
});

const Form = ({
  handleSubmit, 
  onSubmit, 
  pristine, 
  reset, 
  buttonText,
  submitting, 
  children, 
  classes, 
  ...props
}) => (
  <form 
    {...props} 
    onSubmit={(e) => handleSubmit(e ,onSubmit)}
  >
    {children}

    <div className="mt-5">
      <Button type="submit" variant="outline-success" className="pr-5 mt-4 pl-5  mr-3" disabled={submitting}>
        {submitting ? <CircularProgress size={14} className={classes.buttonProgress} /> : 'Post'}
      </Button>
      <Button type="button" variant="outline-danger" className=" mt-4" disabled={pristine || submitting} onClick={reset}>
        Clear Values
      </Button>
    </div>
  </form>
);

Form.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
  buttonText: PropTypes.object,
  onSubmit: PropTypes.func,
}


export default  compose( withStyles(styles),reduxForm({
  form: 'form', // a unique identifier for this form
  checkValidityInput, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
}))(Form)