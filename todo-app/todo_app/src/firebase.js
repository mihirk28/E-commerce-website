import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-q5mR7sM0Redx0_kuFZRD9vOb586oQVs",
  authDomain: "todo-app-e4bb9.firebaseapp.com",
  projectId: "todo-app-e4bb9",
  storageBucket: "todo-app-e4bb9.appspot.com",
  messagingSenderId: "72131598991",
  appId: "1:72131598991:web:f5d11034d57b490fd1aefa"

});

const db = firebaseApp.firestore();

export default db;