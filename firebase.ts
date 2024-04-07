import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDB5M0twciDKZkApQXnZ0QXKF3gD97ceds",
    authDomain: "loginchat-1e969.firebaseapp.com",
    projectId: "loginchat-1e969",
    storageBucket: "loginchat-1e969.appspot.com",
    messagingSenderId: "805857080195",
    appId: "1:805857080195:web:170398ae358ff73d183cb6",
    measurementId: "G-2DBTRQS0C6"
  };

const firebaseApp = initializeApp(firebaseConfig);

// Autentication
const firebaseAuth = getAuth();
firebaseAuth.useDeviceLanguage();
const googleAuthProvider = new GoogleAuthProvider();

// Firestore database
const firebaseDb = getFirestore(firebaseApp)

export {
  firebaseApp,
  firebaseAuth,
  googleAuthProvider,
  firebaseDb
}