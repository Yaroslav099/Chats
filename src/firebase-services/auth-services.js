import fb from './config';

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
        history.push('/mainPage');
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

const logOut = history => {
  fb.auth().signOut();
  fb.auth().onAuthStateChanged(firebaseUser => {
    if (!firebaseUser) {
      history.replace('/');
    }
  });
};

export { signInUser, signUpUser };
