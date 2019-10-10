import React, { Component } from 'react';
import './index.css';
import AuthForm, { STATE_LOGIN } from '../../components/AuthForm';


class Login extends Component {
  handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/register');
    }
  };

  render() { 
    return ( 
      <AuthForm
        authState={this.props.authState}
        onChangeAuthState={this.handleAuthState} />
    );
  }
}
 
export default Login;