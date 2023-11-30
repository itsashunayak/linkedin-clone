import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// initialize firebaseApp with firebase-config values
const firebaseConfig = {
  apiKey: "AIzaSyD_TE8rQfYDdqCqEUVfIqNOYAX78faX0nY",
  authDomain: "linkedin-clone-f7dec.firebaseapp.com",
  databaseURL: "https://linkedin-clone-f7dec-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "linkedin-clone-f7dec",
  storageBucket: "linkedin-clone-f7dec.appspot.com",
  messagingSenderId: "689380448200",
  appId: "1:689380448200:web:3369ce03f0c89ed6bf92fd",
  measurementId: "G-XMDBKYGMWG"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// firebase - Data-Base
const db = app.firestore();

// firebase - Storage
const storage = firebase.storage();

// firebase - Auth
const auth = firebase.auth();

// firebase -Auth Provider (Google)
const provider = new firebase.auth.GoogleAuthProvider();

export { storage, auth, provider };

export default db;
