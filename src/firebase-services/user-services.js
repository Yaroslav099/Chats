import fb from '../firebase-services/config';

export default class UserData {
  setNameToStorage = name => {
    window.sessionStorage.setItem('userName', name);
  };
  setEmailToStorage = email => {
    window.sessionStorage.setItem('userEmail', email);
  };

  getEmailFromStorage = () => window.sessionStorage.getItem('userEmail');
  getNameFromStorage = () => window.sessionStorage.getItem('userName');
}
