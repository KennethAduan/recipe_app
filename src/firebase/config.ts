// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAstFb1TQt1phfYSiXCh1xnuT8PL1dRSM",
  authDomain: "sideprojects-da10c.firebaseapp.com",
  projectId: "sideprojects-da10c",
  storageBucket: "sideprojects-da10c.appspot.com",
  messagingSenderId: "988335217625",
  appId: "1:988335217625:web:e86b92bb86f937864457c8",
  measurementId: "G-6Q4K64PXVK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
