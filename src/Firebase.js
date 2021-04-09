import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAaKy5PiaOmiXbzFAyTTxItwkHG8EbzIaE",
    authDomain: "tweetx-7f4ef.firebaseapp.com",
    projectId: "tweetx-7f4ef",
    storageBucket: "tweetx-7f4ef.appspot.com",
    messagingSenderId: "1013303204376",
    appId: "1:1013303204376:web:15a2526aebd657b3a1016d"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;