import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOOd5_mL46vNfGVrNf7dBQ-mCz_tIw_ew",
  authDomain: "instagram-clone-461fe.firebaseapp.com",
  databaseURL: "https://instagram-clone-461fe-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-461fe",
  storageBucket: "instagram-clone-461fe.appspot.com",
  messagingSenderId: "599472718528",
  appId: "1:599472718528:web:0836d542e79fb1d15c2325"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };