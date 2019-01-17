import fb from './config';

class FbRefs {
  currentUser = () => fb.auth().currentUser;
}

export default FbRefs;
