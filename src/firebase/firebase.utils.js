import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config = {
  apiKey: 'AIzaSyAPmick0H_OK_Oa7Nk6q3UNloskxWYTJfc',
  authDomain: 'crwn-db-c4ee3.firebaseapp.com',
  projectId: 'crwn-db-c4ee3',
  storageBucket: 'crwn-db-c4ee3.appspot.com',
  messagingSenderId: '623125008660',
  appId: '1:623125008660:web:b85d6d4cedcd7268e03201',
  measurementId: 'G-60XJS86BBG',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
