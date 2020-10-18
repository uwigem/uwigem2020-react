// firebase for email trigger
import * as firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyBuuT7n5mv_H6LrMVOrWjeTJTKRQ6r0A6Q",
  authDomain: "igem-test.firebaseapp.com",
  databaseURL: "https://igem-test.firebaseio.com",
  projectId: "igem-test",
  storageBucket: "igem-test.appspot.com",
  messagingSenderId: "793526801192",
  appId: "1:793526801192:web:287eb5cb0c787c5cda761d",
  measurementId: "G-LXDMSBZ78W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;