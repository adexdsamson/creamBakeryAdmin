import React, { Component } from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import compose from 'recompose/compose';
import {connect} from 'react-redux';
import {loginUser} from '../../utilities/firebase';
import renderBody from '../../components/Input';
import Form from '../../components/signUpForm';
import {Field} from 'redux-form';
import {withStyles} from '@material-ui/core';
import {Grid, Typography} from '@material-ui/core';
import style from './styles';


class SignIn extends Component {
  state = {
    render: false
  }

  handleSubmit = values => {
    this.setState({isLoading: true});
    var email = values.email;
    var password = values.password;
    this.props.loginUser(email, password);
    this.setState({isLoading: false});
    this.props.history.push('/dashboard');
    this.setState({ render: true })
  };
  render() { 
    const {classes} = this.props;
    if (this.state.render === true) {
      return <Redirect to='/dashboard' />
    }
    return ( 
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.quoteWrapper} item lg={5}>
            <div className={classes.quote}>
              <div className={classes.quoteText}>
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
                  link="/dashboard" 
                  buttonText="Login"
                  linkText="Sign Up" 
                  onSubmit={values => this.handleSubmit(values)}
                >
                  <Typography className={classes.title} variant='h2'>
                    Sign in
                  </Typography>
                  <div className={classes.fields}>
                    <Field 
                      className={classes.textField}
                      label='Email Address'
                      name='email'
                      component={renderBody}
                      type='text'
                      variant='outlined'
                    />
                    
                    <Field 
                      className={classes.textField}
                      label='Password'
                      name='password'
                      component={renderBody}
                      type='password'
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
 
export default compose(withRouter, withStyles(style), connect(null, {loginUser}))(SignIn);