import fb from './config';
import UserData from '../firebase-services/user-services';

const { setNameToStorage, setEmailToStorage } = new UserData();

const signInUser = (emailInput, passInput, history, showLoader) => {
  showLoader(true);
  const auth = fb.auth();

  const promise = auth
    .signInWithEmailAndPassword(emailInput.value, passInput.value)
    .catch(error => {
      showLoader(false);
      const errorMessage = error.message;
      alert(errorMessage);
    });

  emailInput.value = '';
  passInput.value = '';

  fb.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      if (firebaseUser.displayName) {
        setNameToStorage(firebaseUser.displayName);
        setEmailToStorage(firebaseUser.email);
        history.push('/');
      }
    }
  });
};

const signUpUser = (userNameInput, emailInput, passInput, history, showLoader) => {
  showLoader(true);
  const auth = fb.auth();

  const promise = auth
    .createUserWithEmailAndPassword(emailInput.value, passInput.value)
    .then(() => {
      const userData = fb.auth().currentUser;

      userData.updateProfile({
        displayName: userNameInput.value,
      });
    })
    .then(() => {
      userNameInput.value = '';
      emailInput.value = '';
      passInput.value = '';
      alert('You created a new account! Now you can log in the page with your email and password.');
      logOut(history);
    })
    .catch(error => {
      showLoader(false);
      const errorMessage = error.message;
      emailInput.value = '';
      passInput.value = '';

      alert(errorMessage);
    });
};

const logOut = (history, showLoader) => {
  fb.auth().signOut();
  fb.auth().onAuthStateChanged(firebaseUser => {
    if (!firebaseUser) {
      window.sessionStorage.clear();
      history.replace('/auth');
    }
  });
};

export { signInUser, signUpUser, logOut };
