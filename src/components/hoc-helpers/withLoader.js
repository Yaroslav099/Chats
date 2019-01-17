import React, { Component } from 'react';
import Loader from '../loader/Loader';

const withLoader = Component => {
  return class extends Component {
    state = {
      loading: false,
    };

    showLoader = loading => {
      this.setState({
        loading,
      });
    };

    render() {
      const { loading } = this.state;
      const RenderComponent = loading ? (
        <Loader />
      ) : (
        <Component {...this.props} showLoader={this.showLoader} />
      );

      return <React.Fragment>{RenderComponent}</React.Fragment>;
    }
  };
};

export default withLoader;
