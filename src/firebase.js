import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqGlp_geZ_2QY6lkpBLbJsbUxEZul2A5g",
  authDomain: "clone-eb9f7.firebaseapp.com",
  databaseURL: "https://clone-eb9f7.firebaseio.com",
  projectId: "clone-eb9f7",
  storageBucket: "clone-eb9f7.appspot.com",
  messagingSenderId: "251138361390",
  appId: "1:251138361390:web:6f5fa76b5323f44199f7bf",
  measurementId: "G-TG6XV82FRF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
