import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import FbRefs from '../../firebase-services/fb-refs';
import Loader from '../loader/Loader';
import Routs from './Routs';

const { currentUser } = new FbRefs();

class App extends Component {
  state = {
    loading: true,
    redirect: false,
  };

  componentDidMount() {
    if (!currentUser()) {
      this.setState({ redirect: true, loading: false });
    }
  }

  RedirectToAuth = () => {
    const { redirect } = this.state;
    const path = window.location.pathname;
    if (redirect && path !== '/auth' && path !== '/auth/signIn' && path !== '/auth/signUp')
      return <Redirect to="/auth" />;
    return null;
  };

  render() {
    const { loading } = this.state;
    return (
      <Router>
        <React.Fragment>
          {loading ? <Loader /> : null}
          {this.RedirectToAuth()}
          <Routs />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
