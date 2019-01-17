import React, { Component } from 'react';
import withLoader from '../hoc-helpers/withLoader';
import { withRouter } from 'react-router-dom';
import { signUpUser } from '../../firebase-services/auth-services';

class SignUp extends Component {
  render() {
    const { history, showLoader } = this.props;
    return (
      <div id="signUpFormContainer">
        <input
          type="text"
          id="userNameInput"
          placeholder="Enter your name"
          ref={inp => (this.userName = inp)}
        />
        <input type="email" id="emailInput" placeholder="Email" ref={inp => (this.email = inp)} />
        <input
          type="password"
          id="passInput"
          placeholder="Password"
          ref={inp => (this.pass = inp)}
        />
        <button
          id="signUp"
          onClick={() => signUpUser(this.userName, this.email, this.pass, history, showLoader)}
        >
          Sign Up
        </button>
      </div>
    );
  }
}

export default withRouter(withLoader(SignUp));
