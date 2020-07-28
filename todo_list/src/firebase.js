import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAK42fj6dOXuYKpz4lp0E_caodQdIx33eA",
    authDomain: "to-do-list-3c226.firebaseapp.com",
    databaseURL: "https://to-do-list-3c226.firebaseio.com",
    projectId: "to-do-list-3c226",
    storageBucket: "to-do-list-3c226.appspot.com",
    messagingSenderId: "709888782913",
    appId: "1:709888782913:web:6a39b5e4aa67d79d560cc0",
    measurementId: "G-T69WN5PJPN"
});

const db = firebaseConfig.firestore();

export default db;