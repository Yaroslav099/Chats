import React from 'react';
import { Link } from 'react-router-dom';

const AuthMain = () => (
  <React.Fragment>
    <h1 className="signInContainer-title joinLetters">Welcome to Chats !!!</h1>
    <div id="signInContainer">
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
