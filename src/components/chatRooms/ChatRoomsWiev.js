import React from 'react';
import { randomKey } from '../function-helpers.js/randomKey';

const ChatRoomsWiev = ({ searchedRooms, openRoom, data, deleteRoom, getEmailFromStorage }) => {
  return (
    <div id="roomsContainer" className="roomsContainer toggleDisplayNone">
      <ul id="roomsUl" className="roomsUl">
        {searchedRooms.map(room => (
          <li className="roomNameLi" key={randomKey()} onClick={() => openRoom(data, room)}>
            <p>{room}</p>
            <i
              id="deleteBtn"
              className="far fa-trash-alt"
              onClick={e => deleteRoom(e, data, room, getEmailFromStorage, openRoom)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ChatRoomsWiev;
