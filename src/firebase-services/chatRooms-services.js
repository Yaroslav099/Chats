import FbRefs from './fb-refs';
import UserData from './user-services';

const { getEmailFromStorage } = new UserData();
const { roomMessagesRef, roomRef } = new FbRefs();

const deleteRoom = (e, roomData, roomName, getUserEmailFromStorage, openRoom) => {
  const userEmail = getUserEmailFromStorage();
  const roomCreatorEmail = Object.values(roomData[roomName])[0]['userEmail'];

  e.stopPropagation();

  if (userEmail === roomCreatorEmail) {
    openRoom(roomData, 'FirstRoom');
    roomMessagesRef(roomName).set(null);
    roomRef(roomName).set(null);
  }
};

const createRoom = (roomNameInput, roomPasswordInput) => {
  const userEmail = getEmailFromStorage();
  const roomName = roomNameInput.value;
  const roomPass = roomPasswordInput.value;

  const roomData = {
    roomName: roomName,
    roomPassword: roomPass,
    userEmail,
  };

  const firstMessage = {
    id: 0,
    message: `Welcome to ${roomName}`,
  };

  roomRef(roomName).push(roomData);
  roomMessagesRef(roomName).push(firstMessage);

  roomNameInput.value = '';
  roomPasswordInput.value = '';
};

export { deleteRoom, createRoom };
