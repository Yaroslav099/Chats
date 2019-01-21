const showMenu = e => {
  if (e.target.dataset.btn === 'true') {
    const chat = document.getElementById('chatContainer');
    const roomsContainer = document.getElementById('rooms');
    const rooms = document.getElementById('roomsContainer');
    const searchInput = document.getElementById('searchInput');
    const createRoomMenu = document.getElementById('roomsMenuContainer');

    const chatId = 'openChatBtn';
    const searchId = 'searchRoomBtn';

    const addDisplayNone = el => {
      el.classList.add('toggleDisplayNone');
    };

    const deleteDisplayNone = el => {
      el.classList.remove('toggleDisplayNone');
    };

    const showChatMenu = () => {
      addDisplayNone(searchInput);
      addDisplayNone(createRoomMenu);
      addDisplayNone(rooms);
      addDisplayNone(roomsContainer);
      deleteDisplayNone(chat);
    };
    const showSearchMenu = () => {
      deleteDisplayNone(searchInput);
      deleteDisplayNone(rooms);
      addDisplayNone(createRoomMenu);
      addDisplayNone(chat);
      deleteDisplayNone(roomsContainer);
    };
    const showCreateRoomMenu = () => {
      addDisplayNone(searchInput);
      addDisplayNone(chat);
      addDisplayNone(rooms);
      deleteDisplayNone(createRoomMenu);
      deleteDisplayNone(roomsContainer);
    };
    if (e) {
      if (e.target.id === chatId) showChatMenu();
      else if (e.target.id === searchId) showSearchMenu();
      else showCreateRoomMenu();
    } else {
      showChatMenu();
    }
  }
};

export default showMenu;
