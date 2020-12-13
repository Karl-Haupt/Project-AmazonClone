import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAS1tmO9sGNC1rpb2uF6-FZC8jATcwR9GQ",
    authDomain: "clone-b0837.firebaseapp.com",
    projectId: "clone-b0837",
    storageBucket: "clone-b0837.appspot.com",
    messagingSenderId: "447383331798",
    appId: "1:447383331798:web:e0bde3c148f77b5788fa77",
    measurementId: "G-R0LY6LQ1HE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //Iniinialize the firebase database
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };