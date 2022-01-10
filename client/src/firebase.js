import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
let config = {
    apiKey: "AIzaSyAjqs2S_9R4um7-V6WRBCzI-Ycn0Zlr9uY",
    authDomain: "eebow-8047d.firebaseapp.com",
    projectId: "eebow-8047d",
    storageBucket: "eebow-8047d.appspot.com",
    messagingSenderId: "1008698366096",
    appId: "1:1008698366096:web:0bdd48e7db3e5808d26015"
};

// Initialize Firebase
firebase.initializeApp(config)
var db = firebase.firestore();

export { db };