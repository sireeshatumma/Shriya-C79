import firebase from 'firebase';
require('@firebase/firestore');
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDt1I2q4w0_-eQHny8WZy36qxV3UpB3kw4",
    authDomain: "bartersystem-bcaf6.firebaseapp.com",
    projectId: "bartersystem-bcaf6",
    storageBucket: "bartersystem-bcaf6.appspot.com",
    messagingSenderId: "1097331301660",
    appId: "1:1097331301660:web:503665e49450dff915eed9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();