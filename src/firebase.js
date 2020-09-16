import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-JiG9jn-ebqSp3Pt3N24yq2j98VZ4_-U",
  authDomain: "clone-51ebb.firebaseapp.com",
  databaseURL: "https://clone-51ebb.firebaseio.com",
  projectId: "clone-51ebb",
  storageBucket: "clone-51ebb.appspot.com",
  messagingSenderId: "565252646408",
  appId: "1:565252646408:web:88998844b4c09f2984d3bd",
  measurementId: "G-2JXKZB1DD6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
