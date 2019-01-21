import FbRefs from './fb-refs';
import UserData from '../firebase-services/user-services';

const { getNameFromStorage } = new UserData();
const { roomMessagesRef } = new FbRefs();

export default class ChatServices {
  getData = (ref, setData) => {
    ref.on('value', snapshot => {
      setData(snapshot.val());
    });
  };

  sendMessage = (textInput, activeRoom, data) => {
    const roomsArr = Object.values(data);
    const id = roomsArr[roomsArr.length - 1].id + 1;
    const userName = getNameFromStorage();

    const message = {
      id,
      message: textInput.value,
      userName,
      time: new Date().toLocaleTimeString()
    };
    textInput.value = '';
    roomMessagesRef(activeRoom).push(message);
  };
}
