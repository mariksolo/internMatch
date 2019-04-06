import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebaseui from 'firebaseui'
import firebase from 'firebase';

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");
import 'firebase/firestore';

console.log(firebaseui)

var config = {
    apiKey: "AIzaSyADmiKEldsnw1CAfJDythMTAn7yKuZd7oc",
    authDomain: "internmatch-525f0.firebaseapp.com",
    databaseURL: "https://internmatch525f0.firebaseio.com",
    projectId: 'internmatch-525f0',
    storageBucket: "gs://internmatch-525f0.appspot.com",
  };
  firebase.initializeApp(config);

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'https://www.success.com/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  
  // Terms of service url/callback.
  tosUrl: 'https://www.google.com/',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('https://github.com/firebase/firebaseui-web#demo');
  }
};
  
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

var db = firebase.firestore();

db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load 1faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
