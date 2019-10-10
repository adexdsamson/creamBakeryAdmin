import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { fetchUser } from '../store/action';


class AuthForm extends Component {

  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    axios.post('/api/user/register_user')
      .then(res => {

      })
      .catch(err => {
        console.log(err)
      });
  };

  componentDidMount(){
    this.props.fetchUser();
  }


  render() { 
   
    return ( 
      <div className='limit'>
          <div className='container-login'>
            <div className='wrap-login pt-5 pb-5'>
              <span className='login-form-title mb-5'>
                Login
              </span>
              <form className='login-form pt-2 pb-4'>

                <div className='wrap-input'>
                  <input className="input" type="text" name="username" placeholder="User name" />
                  <span className="focus-input" data-placeholder="&#xe82a;"></span>
                </div>

                <div
                  className="wrap-input validate-input" data-validate="Enter password">
                <input
                  className="input"
                  type="password"
                  name="pass"
                  placeholder="Password" />
                  <span
                    className="focus-input"
                    data-placeholder="&#xe80f;"
                  ></span>
                </div>

                <div
                  className="container-login-form-btn mt-3">
                <button
                  className="login-form-btn"
                  onClick = {
                    this.handleLoginSubmit
                  } >
                    Login
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  handleSubmit: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
    className : "input"
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
    className:"input"
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
    className: "input"
  },
};
 

const mapStateToProps = ({isAuth}) => {
  return {isAuth}
}


export default connect(mapStateToProps, { fetchUser })(AuthForm);