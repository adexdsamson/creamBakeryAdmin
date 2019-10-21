import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import compose from 'recompose/compose';
import validate from 'validate.js';
import {withStyles} from '@material-ui/styles';

import {Button, CircularProgress, Grid, TextField, Typography} from '@material-ui/core';
import _ from 'underscore';
import {checked} from '../../utilities/checkValidityInput';
import schema from './schema';
import styles from './styles';

validate.checked = checked;

class SignUp extends Component { 
  state = {
    values: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      company: '',
      policy: false
    },
    touched: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      company: false,
      policy: null
    },
    errors: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      company: null,
      policy: null
    },
    isValid: false,
    isLoading: false,
    submitError: null,
    showSuccessMessage: false
  }

  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };


  validateForm = _.debounce(() => {
    const { values } = this.state;

    const newState = { ...this.state };
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors ? false : true;

    this.setState(newState);
  }, 300);

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  handleSubmit = e => {
    e.preventDefault();
  }
  
  render() { 
    const { classes } = this.props;
    const {
      values,
      touched,
      errors,
      //isValid,
      submitError,
      isLoading,
      //showSuccessMessage
    } = this.state;

    const showFirstNameError =
      touched.firstName && errors.firstName ? errors.firstName[0] : false;
    const showLastNameError =
      touched.lastName && errors.lastName ? errors.lastName[0] : false;
    const showEmailError =
      touched.email && errors.email ? errors.email[0] : false;
   // const showPasswordError =
     // touched.password && errors.password ? errors.password[0] : false;
    //const showPolicyError =
      //touched.policy && errors.policy ? errors.policy[0] : false;
    return ( 
      
      <div className={classes.root}>
        <Grid classes={classes.Grid} container>
          <Grid className={classes.quoteWrapper} item lg={5}>
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography className={classes.quoteText} variant='h1'>
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography className={classes.title} variant='h2'>
                    Register
                  </Typography>
                  <Typography className={classes.subtitle} variant='body1'>
                    Use your work email to register... it's free.
                  </Typography>
                  <div className={classes.fields}>
                    <TextField 
                      className={classes.textField}
                      label='First Name'
                      name='firstname'
                      onChange={event => this.handleFieldChange('firstName', event.target.value)}
                      value={values.firstName}
                      variant='outlined'
                    />
                    {showFirstNameError && (
                      <Typography className={classes.fieldError} variant='body1'>
                        {errors.firstName[0]}
                      </Typography>
                    )}
                    <TextField 
                      className={classes.textField}
                      label='Last Name'
                      name='lastname'
                      onChange={event => this.handleFieldChange('lastName', event.target.value)}
                      value={values.lastName}
                      variant='outlined'
                    />
                    {showLastNameError && (
                      <Typography className={classes.fieldError} variant='body1'>
                        {errors.lastName[0]}
                      </Typography>
                    )}
                    <TextField 
                      className={classes.textField}
                      label='Email'
                      name='email'
                      onChange={event => this.handleFieldChange('email', event.target.value)}
                      value={values.email}
                      variant='outlined'
                    />
                    {showEmailError && (
                      <Typography className={classes.fieldError} variant='body1'>
                        {errors.email[0]}
                      </Typography>
                    )}
                    <TextField 
                      className={classes.textField}
                      label='Company'
                      name='company'
                      onChange={event => this.handleFieldChange('company', event.target.value)}
                      value={values.company}
                      variant='outlined'
                    />
                    {showEmailError && (
                      <Typography className={classes.fieldError} variant='body1'>
                        {errors.company[0]}
                      </Typography>
                    )}
                    <TextField 
                      className={classes.textField}
                      label='Password'
                      name='password'
                      onChange={event => this.handleFieldChange('password', event.target.value)}
                      value={values.password}
                      variant='outlined'
                    />
                    {showEmailError && (
                      <Typography className={classes.fieldError} variant='body1'>
                        {errors.password[0]}
                      </Typography>
                    )}
                    {submitError && (
                      <Typography className={classes.submitError} variant='body1'> {submitError}</Typography>
                    )}
                    {isLoading ? (
                      <CircularProgress className={classes.progress}/>
                    )
                    :
                    (
                      <Button className={classes.signUpButton} color='primary' onClick={this.handleSubmit} size='medium' variant='contained'>
                        Register
                      </Button>
                    )
                  }
                  </div>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
     );
  }
}
 
export default compose(withStyles(styles),withRouter)(SignUp);