// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDoj6ZU7eW38jCUmhGKjqV2vrrMILhAy6s",
  authDomain: "clone-dcda9.firebaseapp.com",
  projectId: "clone-dcda9",
  storageBucket: "clone-dcda9.appspot.com",
  messagingSenderId: "129299148307",
  appId: "1:129299148307:web:5ecf699af4508d102d59e6",
  measurementId: "G-69G36T9XRD"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  db
};