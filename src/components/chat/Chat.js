import React, { Component } from 'react';
import withData from '../hoc-helpers/withData';
import FbRefs from '../../firebase-services/fb-refs';
import ChatWiev from './ChatWiev';

const { roomMessagesRef } = new FbRefs();

class Chat extends Component {
  scrollToTheChatBottom = () => {
    const chat = document.getElementById('chat');
    if (chat) {
      const scrollHeight = chat.scrollHeight;
      const clientHeight = chat.clientHeight;
      chat.scrollTop = scrollHeight - clientHeight;
    }
  };
  componentDidMount() {
    this.scrollToTheChatBottom();
  }

  componentDidUpdate() {
    this.scrollToTheChatBottom();
  }

  render() {
    const { data, activeRoom } = this.props;
    const messages = data ? Object.values(data) : [];

    return <ChatWiev messages={messages} data={data} activeRoom={activeRoom} />;
  }
}

export default withData(Chat, roomMessagesRef);
