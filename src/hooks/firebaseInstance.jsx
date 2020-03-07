import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const firebaseDatabase = firebaseApp.database();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


const firebaseInstance = () => { 
    return {
        firebaseApp,
        firebaseAppAuth,
        providers,
        firebaseDatabase
    }
}

export default firebaseInstance