import React, { Component } from 'react';
import withLoader from '../hoc-helpers/withLoader';
import { withRouter } from 'react-router-dom';
import { signInUser } from '../../firebase-services/auth-services';

class SignIn extends Component {
  render() {
    const { history, showLoader } = this.props;
    return (
      <div id="signInFormContainer">
        <input type="email" id="emailInput" placeholder="Email" ref={inp => (this.email = inp)} />
        <input
          type="password"
          id="passInput"
          placeholder="Password"
          ref={inp => (this.pass = inp)}
        />
        <button id="signIn" onClick={() => signInUser(this.email, this.pass, history, showLoader)}>
          Sign In
        </button>
      </div>
    );
  }
}

export default withRouter(withLoader(SignIn));
