import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC01gbtwKgchKtUroY2FrDSTBPjc5TwbVA",
  authDomain: "challenge-8fabf.firebaseapp.com",
  projectId: "challenge-8fabf",
  storageBucket: "challenge-8fabf.appspot.com",
  messagingSenderId: "194308170730",
  appId: "1:194308170730:web:4aa413f1a3d2e9577c8893",
};
// initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize database = db, firestore = real time database in firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
