import React, { Component } from 'react';
import withData from '../hoc-helpers/withData';
import FbRefs from '../../firebase-services/fb-refs';
import { deleteRoom } from '../../firebase-services/chatRooms-services';
import UserData from '../../firebase-services/user-services';
import CreateRoomMenu from '../createRoom/CreateRoomMenu';
import ChatRoomsWiev from './ChatRoomsWiev';
import SearchRoom from '../searchRoom/SearchRoom';

const { getEmailFromStorage } = new UserData();
const { roomsListRef } = new FbRefs();

class ChatRooms extends Component {
  state = {
    filterStr: '',
  };

  filterRooms = filterStr => {
    this.setState({
      filterStr,
    });
  };

  render() {
    const { data, openRoom } = this.props;
    const { filterStr } = this.state;
    const searchedRooms = data ? Object.keys(data) : [];
    const filteredRooms = searchedRooms.filter(room => room.indexOf(filterStr) !== -1);

    return (
      <div id="rooms" className="rooms toggleDisplayNone">
        <CreateRoomMenu />
        <SearchRoom filterRooms={this.filterRooms} filterStr={filterStr} />
        <ChatRoomsWiev
          searchedRooms={filteredRooms}
          openRoom={openRoom}
          data={data}
          deleteRoom={deleteRoom}
          getEmailFromStorage={getEmailFromStorage}
        />
      </div>
    );
  }
}

export default withData(ChatRooms, roomsListRef);
