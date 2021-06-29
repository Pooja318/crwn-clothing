import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDJj6b2qVzuwbGCbx6cIU_3GKtVZ4xb1yA",
  authDomain: "cwrn-dbing.firebaseapp.com",
  projectId: "cwrn-dbing",
  storageBucket: "cwrn-dbing.appspot.com",
  messagingSenderId: "443888150964",
  appId: "1:443888150964:web:7604cb7e1ce4280002aae1",
  measurementId: "G-6C3K7CVC4F"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
