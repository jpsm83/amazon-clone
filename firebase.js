// firebase manages the frontend of the app while
// firebase-admin manages the backend
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdTWbt6iXLVYI9GXfV5HeOqjPNA3SbODw",
  authDomain: "clone-2-6642b.firebaseapp.com",
  projectId: "clone-2-6642b",
  storageBucket: "clone-2-6642b.appspot.com",
  messagingSenderId: "798120942295",
  appId: "1:798120942295:web:4e0b924c5ed57497396e92",
};

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  firebase.app();
  return firebase;
};

const db = firebaseApp().firestore();

export default db;
