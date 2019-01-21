import React, { Component } from 'react';
import ChatServices from '../../firebase-services/chat-services';

const { sendMessage } = new ChatServices();

class SendMessageForm extends Component {
  sendMessageToDb = (textInputOrBtn, text) => {
    if (textInputOrBtn.id === 'sendMessageBtn' || textInputOrBtn.keyCode === 13) {
      const { activeRoom, data } = this.props;

      sendMessage(text, activeRoom, data);
    }
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          className="sendMessageInput"
          ref={input => (this.text = input)}
          onKeyDown={e => this.sendMessageToDb(e, e.target)}
        />
        <button id="sendMessageBtn" onClick={e => this.sendMessageToDb(e.target, this.text)}>
          Send
        </button>
      </React.Fragment>
    );
  }
}

export default SendMessageForm;
