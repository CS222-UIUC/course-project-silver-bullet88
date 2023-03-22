// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpMuUuVx6Dzs3gFnM6no1e4DRFkdYzS_w",
  authDomain: "cs222-cf66b.firebaseapp.com",
  databaseURL: "https://cs222-cf66b-default-rtdb.firebaseio.com",
  projectId: "cs222-cf66b",
  storageBucket: "cs222-cf66b.appspot.com",
  messagingSenderId: "625820938844",
  appId: "1:625820938844:web:7c9133778ca554d4172c99"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db  = getFirestore(app);