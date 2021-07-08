import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuarlCIjUQttf_zHEGAVcNx1o2RdE6amA",
    authDomain: "bluecube-b0867.firebaseapp.com",
    projectId: "bluecube-b0867",
    storageBucket: "bluecube-b0867.appspot.com",
    messagingSenderId: "433196473589",
    appId: "1:433196473589:web:58cd52c4696c0593aab9bc",
    measurementId: "G-SRXFGWS7GB"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


  export { db};