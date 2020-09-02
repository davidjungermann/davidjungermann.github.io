import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { collectionData } from "rxfire/firestore";

const apiKey = process.env.REACT_APP_API_KEY;

const app = firebase.initializeApp({
  apiKey: apiKey,
  authDomain: "davidjungermann-8c0d6.firebaseapp.com",
  databaseURL: "https://davidjungermann-8c0d6.firebaseio.com",
  projectId: "davidjungermann-8c0d6",
  storageBucket: "davidjungermann-8c0d6.appspot.com",
  messagingSenderId: "978666382563",
  appId: "1:978666382563:web:675c42d279aaec413491d6",
  measurementId: "G-H9DLFFNPTR",
});

const firestore = firebase.firestore(app);
const auth = firebase.auth(app);

export { app, firestore, collectionData, auth };
export default firebase;
