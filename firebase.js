// firebase manages the frontend of the app while
// firebase-admin manages the backend
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqii0xE7nC3AMzhzU5-hUhbGC7fme8XGs",
  authDomain: "clone-79acc.firebaseapp.com",
  projectId: "clone-79acc",
  storageBucket: "clone-79acc.appspot.com",
  messagingSenderId: "360086139304",
  appId: "1:360086139304:web:04d2dfe97ff2e0586ded9d"
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;