import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuNDTJ-wbmg-ZHkiWqRJK3jqltjB4jsEg",
    authDomain: "slack-clone-c8380.firebaseapp.com",
    projectId: "slack-clone-c8380",
    storageBucket: "slack-clone-c8380.appspot.com",
    messagingSenderId: "32482822885",
    appId: "1:32482822885:web:4f2400480bb46295f9620c",
    measurementId: "G-76NYQKDGDE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {  auth, provider};
  export default db;

  