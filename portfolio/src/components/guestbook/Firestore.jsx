// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCEdIpDD5RSD3_9JPyCw8gI06dSEX9h2Qg',
  authDomain: 'davidjungermann-8c0d6.firebaseapp.com',
  databaseURL: 'https://davidjungermann-8c0d6.firebaseio.com',
  projectId: 'davidjungermann-8c0d6',
  storageBucket: 'davidjungermann-8c0d6.appspot.com',
  messagingSenderId: '978666382563',
  appId: '1:978666382563:web:675c42d279aaec413491d6',
  measurementId: 'G-H9DLFFNPTR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };
