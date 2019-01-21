import React, { Component } from 'react';
import ChatServices from '../../firebase-services/chat-services';

const { getData } = new ChatServices();

const withLoader = (Wiev, ref) => {
  return class extends Component {
    state = {
      data: null,
    };

    setData = data => {
      this.setState({ data });
    };

    componentDidMount() {
      let { activeRoom } = this.props;
      if (!activeRoom) {
        activeRoom = '';
      }

      getData(ref(activeRoom), this.setData);
    }

    componentDidUpdate(prevProps) {
      const { activeRoom } = prevProps;
      if (activeRoom !== this.props.activeRoom) {
        getData(ref(this.props.activeRoom), this.setData);
      }
    }

    render() {
      return <Wiev {...this.props} data={this.state.data} />;
    }
  };
};

export default withLoader;
