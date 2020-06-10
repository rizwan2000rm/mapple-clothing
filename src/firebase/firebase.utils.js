import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBMGPwm7DYldWkN16gVk_sMUye68J-Zr34",
  authDomain: "mapple-clothing.firebaseapp.com",
  databaseURL: "https://mapple-clothing.firebaseio.com",
  projectId: "mapple-clothing",
  storageBucket: "mapple-clothing.appspot.com",
  messagingSenderId: "127651130857",
  appId: "1:127651130857:web:47086e04623f992087af78",
  measurementId: "G-6B7JX9411P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
