import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from '../firebaseConfig';
import 'firebase/performance'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const perf = firebaseApp.performance();
const firebaseAppAuth = firebase.auth();
const firebaseDatabase = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();

const firebaseInstance = () => { 
    return {
        firebaseApp,
        firebaseAppAuth,
        provider,
        firebaseDatabase,
        perf
    }
}

export default firebaseInstance