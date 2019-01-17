import React from 'react';
import { Link } from 'react-router-dom';

const AuthMain = () => (
  <React.Fragment>
    <div id="signInContainer">
      <h1 className="signInContainer-title">Welcom to Chats !!!</h1>
      <div className="signInBtns">
        <Link id="signInStart" to="/auth/signIn">
          Sign In
        </Link>
        <Link id="signUpStart" to="/auth/signUp">
          Sign Up
        </Link>
      </div>
    </div>
  </React.Fragment>
);

export default AuthMain;
