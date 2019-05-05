import * as firebaseui from 'firebaseui'
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyADmiKEldsnw1CAfJDythMTAn7yKuZd7oc",
    authDomain: "internmatch-525f0.firebaseapp.com",
    databaseURL: "https://internmatch525f0.firebaseio.com",
    projectId: 'internmatch-525f0',
    storageBucket: "gs://internmatch-525f0.appspot.com",
  };
  var firebaseRef = firebase.initializeApp(config);

//   module.exports.firebaseRef = firebaseRef;
export default firebaseRef;