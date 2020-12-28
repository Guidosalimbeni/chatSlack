import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDcuV28QyRd_DvQWBlkkC9bUN_X-n_ua-A",
  authDomain: "chat-ff78a.firebaseapp.com",
  databaseURL: "https://chat-ff78a-default-rtdb.firebaseio.com",
  projectId: "chat-ff78a",
  storageBucket: "chat-ff78a.appspot.com",
  messagingSenderId: "620475394916",
  appId: "1:620475394916:web:940d36d99e5e9da5b32871"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

export default firebase;