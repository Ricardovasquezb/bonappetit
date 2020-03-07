import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './src/firebaseConfig';

// de aqui para adelante, es mierda
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
// aqui se acaba la mierda

const Firebase = props => {
    return (instance) => ({
        signUp: (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password),
        signIn: (email, password)=> firebase.auth().signInWithEmailAndPassword(email, password),
        
    })
}





export default Firebase



