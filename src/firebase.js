import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1OXZkUtVSIZir6oTNjLF83ERBiglomK0",
  authDomain: "clone-761b4.firebaseapp.com",
  databaseURL: "https://clone-761b4.firebaseio.com",
  projectId: "clone-761b4",
  storageBucket: "clone-761b4.appspot.com",
  messagingSenderId: "876309433599",
  appId: "1:876309433599:web:9f624f330fbd6e5f0b50ca",
  measurementId: "G-H1HY51F4F7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };