import React from 'react';
import { reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {checkValidityInput, warn} from '../utilities/checkValidityInput';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import {Button, CircularProgress, withStyles, Typography} from '@material-ui/core';

const styles = theme => ({
  progress: {
    display: 'block',
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  signUpButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  },
});

const SignForm = ({
  children,
  handleSubmit,
  submitting,
  buttonText,
  classes,
  onSubmit,
  link,
  linkText,
  ...props
}) => {
  
  return (
    <form {...props} onSubmit={(e) => handleSubmit(e, onSubmit)}> 
      {children}
      {submitting ? (
      <CircularProgress className={classes.progress} />) : (
        <Button className={classes.signUpButton} color="primary" type="submit" size="large" variant="contained">
          {buttonText}
        </Button>
      )}
      <div className="mt-3"></div>
      <Typography
        className={classes.signUp}
        variant='body1'
      >
        Don't have an account?{'  '} 
        <Link className={classes.signUpUrl} to={link}>
          {linkText}
        </Link>
      </Typography>
    </form>
  )
};

SignForm.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func
};

export default compose( withStyles(styles),reduxForm({
  form: 'SignForm', // a unique identifier for this form
  checkValidityInput, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
}))(SignForm);