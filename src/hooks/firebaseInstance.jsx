import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebase.auth();
const firebaseDatabase = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();


const firebaseInstance = () => { 
    return {
        firebaseApp,
        firebaseAppAuth,
        provider,
        firebaseDatabase
    }
}

export default firebaseInstance