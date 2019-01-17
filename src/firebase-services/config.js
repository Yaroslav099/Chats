import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDbwJWzotBKkeqGW7_zOhkwufA7tZAzVHw',
  authDomain: 'auth-65cc9.firebaseapp.com',
  databaseURL: 'https://auth-65cc9.firebaseio.com',
  projectId: 'auth-65cc9',
  storageBucket: 'auth-65cc9.appspot.com',
  messagingSenderId: '137874445704',
};

const fb = firebase.initializeApp(config);

export default fb;
