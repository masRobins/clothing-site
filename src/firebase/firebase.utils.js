import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAK-UiXXans9bq9Si4EVKqYI9HJNVpweI8",
    authDomain: "clothing-site-db.firebaseapp.com",
    databaseURL: "https://clothing-site-db.firebaseio.com",
    projectId: "clothing-site-db",
    storageBucket: "clothing-site-db.appspot.com",
    messagingSenderId: "563032705676",
    appId: "1:563032705676:web:e7717d978e4b41c46b89a9",
    measurementId: "G-4CYFJPVCC7"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;