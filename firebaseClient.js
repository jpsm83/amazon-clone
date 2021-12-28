// firebase manages the frontend of the app while
// firebase-admin manages the backend
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdPnyacqMu58aiApCmV1jhBo5P-fDRHR4",
  authDomain: "clone-f2e41.firebaseapp.com",
  projectId: "clone-f2e41",
  storageBucket: "clone-f2e41.appspot.com",
  messagingSenderId: "608880089989",
  appId: "1:608880089989:web:6c71a75def3704a3d642ec"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore();

export default db;
