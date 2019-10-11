import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyD4DTVIjVuqEpnK9FHKMTwTSIyOdHIk-4s",
    authDomain: "chatapp-f90ef.firebaseapp.com",
    databaseURL: "https://chatapp-f90ef.firebaseio.com",
    projectId: "chatapp-f90ef",
    storageBucket: "",
    messagingSenderId: "975895246807",
    appId: "1:975895246807:web:89dcc3e9c31da00758fd92",
    measurementId: "G-LB6R6KR3MV"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 export default firebase