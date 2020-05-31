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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  // console.log(firestore.doc("users/123e2hd97h1789"));

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
