// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBb5Y1xmgXqUjDwXE2NC63QTUEa4gtbDas",
  authDomain: "facebook-messenger-clone-589c0.firebaseapp.com",
  projectId: "facebook-messenger-clone-589c0",
  storageBucket: "facebook-messenger-clone-589c0.appspot.com",
  messagingSenderId: "1007849185323",
  appId: "1:1007849185323:web:efb4460eccda1c5960ca6e",
});

// Initialize Firebase
const db = firebaseApp.firestore();

export { db };
