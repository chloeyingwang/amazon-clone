import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHXR6TtX2S5ofa4BGW24gLaQkv89Q2aY0",
  authDomain: "clone-ffb93.firebaseapp.com",
  databaseURL: "https://clone-ffb93.firebaseio.com",
  projectId: "clone-ffb93",
  storageBucket: "clone-ffb93.appspot.com",
  messagingSenderId: "510234041427",
  appId: "1:510234041427:web:696857a380c83f8c0cfaa6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
