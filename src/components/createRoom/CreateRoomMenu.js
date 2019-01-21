import React, { Component } from 'react';
import { createRoom } from '../../firebase-services/chatRooms-services';

class CreateRoomMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="roomsMenuContainer" className="roomsMenuContainer toggleDisplayNone">
          <input
            type="text"
            id="enterRoomName"
            placeholder="Введіть назву кімнати ..."
            ref={input => (this.roomName = input)}
          />
          <input
            id="roomPass"
            type="text"
            placeholder="Введіть пароль ..."
            ref={input => (this.roomPass = input)}
          />
          <button id="createNewRoomBtn" onClick={() => createRoom(this.roomName, this.roomPass)}>
            Create room
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateRoomMenu;
