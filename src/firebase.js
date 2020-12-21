import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDPgne3lP5y84ktbNIH0F_FFex6lQa8QQo",
    authDomain: "chatbotidrive.firebaseapp.com",
    projectId: "chatbotidrive",
    storageBucket: "chatbotidrive.appspot.com",
    messagingSenderId: "267670642090",
    appId: "1:267670642090:web:1c63971ca12b6fca7f9fd3",
    measurementId: "G-JPGT6X5HN8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;