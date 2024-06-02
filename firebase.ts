// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrmv2CsItUttV0JVj2kqpvDX1pP37ArSI",
  authDomain: "saas-68e2f.firebaseapp.com",
  databaseURL: "https://saas-68e2f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "saas-68e2f",
  storageBucket: "saas-68e2f.appspot.com",
  messagingSenderId: "980160263965",
  appId: "1:980160263965:web:fbccbaf6044435d05493f4",
  measurementId: "G-DY915HG9PQ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);


export { db, auth, functions };