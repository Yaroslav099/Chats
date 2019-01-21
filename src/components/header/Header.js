import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import withLoader from '../hoc-helpers/withLoader';
import { logOut } from '../../firebase-services/auth-services';
import showMenu from './functions';

class Header extends Component {
  render() {
    const { history, showLoader } = this.props;
    return (
      <div className="logOutBtnPosition" onClick={e => showMenu(e)}>
        <div id="searchRoomBtn" data-btn="true">
          Rooms
        </div>
        <div id="openChatBtn" data-btn="true">
          Chat
        </div>
        <div id="createRoomMenu" data-btn="true">
          Create
        </div>
        <div id="logOut" className="logOut" onClick={() => logOut(history, showLoader)}>
          Log Out
        </div>
      </div>
    );
  }
}

export default withRouter(withLoader(Header));
