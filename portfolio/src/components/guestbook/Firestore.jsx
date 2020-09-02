import firebase from "firebase/app";
import "firebase/firestore";
import { collectionData } from "rxfire/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBFar1rJshSf-8ypeLkW3UibATroBG8SMY",
  authDomain: "portfolio-a995c.firebaseapp.com",
  databaseURL: "https://portfolio-a995c.firebaseio.com",
  projectId: "portfolio-a995c",
  storageBucket: "portfolio-a995c.appspot.com",
  messagingSenderId: "413605765447",
  appId: "1:413605765447:web:4a961720753b65a0a12c62",
  measurementId: "G-7DQJ11CZND",
});

const firestore = firebase.firestore(app);

export { app, firestore, collectionData };
export default firebase;
