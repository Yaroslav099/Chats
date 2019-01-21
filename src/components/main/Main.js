import React, { Component } from 'react';
import Header from '../header/Header';
import Chat from '../chat/Chat';
import ChatRooms from '../chatRooms/ChatRooms';
import Loader from '../loader/Loader';
import { deleteRoom } from '../../firebase-services/chatRooms-services';

class Main extends Component {
  state = {
    activeRoom: 'FirstRoom',
  };

  changeActiveRoom = activeRoom => {
    this.setState({
      activeRoom,
    });
  };

  openRoom = (roomData, activeRoom) => {
    let roomPass;
    activeRoom === 'FirstRoom'
      ? (roomPass = false)
      : (roomPass = Object.values(roomData[activeRoom])[0]['roomPassword']);

    if (roomPass) {
      const promptPass = prompt('Введіть пароль');
      if (promptPass === roomPass) {
        this.changeActiveRoom(activeRoom);
      }
    } else if (!roomPass && activeRoom !== 'FirstRoom') this.changeActiveRoom(activeRoom);
    else if (activeRoom === 'FirstRoom') this.changeActiveRoom('FirstRoom');
  };

  componentHasGotData = () => {
    this.setState(state => ({
      componentsGotData: state.componentsGotData + 1,
    }));
  };

  render() {
    const { activeRoom } = this.state;

    return (
      <React.Fragment>
        <Header />
        <Chat activeRoom={activeRoom} />
        <ChatRooms openRoom={this.openRoom} />
      </React.Fragment>
    );
  }
}

export default Main;
