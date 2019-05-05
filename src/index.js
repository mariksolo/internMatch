import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebaseui from 'firebaseui'
import firebase from 'firebase';
import 'firebase/firestore';

import firebaseRef from './classes/firebase.js';

import {addNewUser} from './userFunctions/addNewUser';

import BusinessPage from './pages/BusinessPage';



// var config = {
//     apiKey: "AIzaSyADmiKEldsnw1CAfJDythMTAn7yKuZd7oc",
//     authDomain: "internmatch-525f0.firebaseapp.com",
//     databaseURL: "https://internmatch525f0.firebaseio.com",
//     projectId: 'internmatch-525f0',
//     storageBucket: "gs://internmatch-525f0.appspot.com",
//   };
//   firebase.initializeApp(config);

  var db = firebaseRef.firestore();

  // var storage = firebase.storage();

// FirebaseUI config.
// let signInSuccess = '/BusinessPage';
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {

      var user = authResult.user;
      var credential = authResult.credential;
      var isNewUser = authResult.additionalUserInfo.isNewUser;
      var providerId = authResult.additionalUserInfo.providerId;
      var operationType = authResult.operationType;
      // Do something with the returned AuthResult.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.

      // console.log("got to isNewUser");
      // if (isNewUser) {
      //   addNewUser(user, db);
      //   console.log("is new user");
      //   // signInSuccess = '/NewUser';
      // }
      
      // console.log("hola");
      // console.log(authResult.user.email);


      return true;
    }
  },
  signInSuccessUrl: '/InternPage',
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


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load 1faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
