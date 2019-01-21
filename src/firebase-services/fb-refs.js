import fb from './config';

class FbRefs {
  baseRef = ref => fb.database().ref(ref);

  currentUser = () => fb.auth().currentUser;
  roomMessagesRef = (roomName = 'FirstRoom') => this.baseRef(`messages/${roomName}`);
  roomRef = roomName => this.baseRef(`rooms/${roomName}`);
  roomsListRef = () => this.baseRef('rooms');
}

export default FbRefs;
