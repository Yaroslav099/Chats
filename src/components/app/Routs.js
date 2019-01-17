import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../main/Main';
import AuthMain from '../authentication/AuthMain';
import SignIn from '../authentication/SignIn';
import SignUp from '../authentication/SignUp';

const Routs = () => (
  <React.Fragment>
    <Route exact path="/" component={Main} />
    <Route exact path="/auth" component={AuthMain} />
    <Route path="/auth/signIn" component={SignIn} />
    <Route path="/auth/signUp" component={SignUp} />
  </React.Fragment>
);

export default Routs;
