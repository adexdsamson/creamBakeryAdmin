import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import compose from 'recompose/compose';
import {withStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import renderBody from '../../components/Input';
import {registerUser} from '../../utilities/firebase';
import Form from '../../components/signUpForm';
import {Field} from 'redux-form';
import {Grid, Typography} from '@material-ui/core';
import styles from './styles';


class SignUp extends Component { 

  handleSubmit = values => {
    let Data = {
      name: values.firstName + ' ' + values.lastName,
      email: values.email,
      password: values.password,
      company: values.company,
      //img: values.imageURL
    }
    this.props.registerUser(Data)
    this.props.history.push('/dashboard')
  }
  
  render() { 
    const { classes } = this.props;
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
                <Form 
                  className={classes.form} 
                  buttonText="Register" 
                  onSubmit={values => this.handleSubmit(values)}
                  link='/' linkText="Sign In"
                >
                  <Typography className={classes.title} variant='h2'>
                    Register
                  </Typography>
                  <Typography className={classes.subtitle} variant='body1'>
                    Use your work email to register... it's free.
                  </Typography>
                  <div className={classes.fields}>
                    <Field 
                      className={classes.textField}
                      label='First Name'
                      name='firstname'
                      type='text'
                      component={renderBody}
                      variant='outlined'
                    />
                 
                    <Field 
                      className={classes.textField}
                      label='Last Name'
                      name='lastname'
                      type='text'
                      component={renderBody}
                      variant='outlined'
                    />
                  
                    <Field 
                      className={classes.textField}
                      label='Email'
                      name='email'
                      type='email'
                      component={renderBody}
                      variant='outlined'
                    />
                    
                    <Field 
                      className={classes.textField}
                      label='Company'
                      name='company'
                      type='text'
                      component={renderBody}
                      variant='outlined'
                    />
                   
                    <Field 
                      className={classes.textField}
                      label='Password'
                      name='password'
                      type="password"
                      component={renderBody}
                      variant='outlined'
                    />
                   
                  </div>
                </Form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
     );
  }
}
 
export default compose(withStyles(styles),withRouter, connect(null, {registerUser}))(SignUp);