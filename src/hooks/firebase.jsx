import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const Firebase = props => {
  return () => ({
    signUp: (email, password) =>
      firebase.auth().createUserWithEmailAndPassword(email, password),
    signIn: (email, password) =>
      firebase.auth().signInWithEmailAndPassword(email, password)
  });
};

export default Firebase;
