import React from 'react';
import { randomKey } from '../function-helpers.js/randomKey';
import { messageStyle } from './aditionStyles';
import SendMessageForm from '../sendMessage/SendMessageForm';

const ChatWiev = ({ messages, data, activeRoom }) => {
  return (
    <div id="chatContainer" className="chatContainer">
      <div id="chat">
        <ul id="chatUl">
          {messages.map(room => (
            <li className="messageLi" style={messageStyle(room)} key={randomKey()}>
              <p className="userName">{room.userName}</p>
              <p className="userText">{room.message}</p>
              <p className="time">{room.time}</p>
            </li>
          ))}
        </ul>
      </div>
      <div id="createMessageContainer" className="createMessageContainer">
        <SendMessageForm data={data} activeRoom={activeRoom} />
      </div>
    </div>
  );
};

export default ChatWiev;
