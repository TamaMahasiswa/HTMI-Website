// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpq4idYVkvrNuko-PEEb6z9Y7T_Y5vaKM",
  authDomain: "htmi-websi.firebaseapp.com",
  projectId: "htmi-websi",
  storageBucket: "htmi-websi.appspot.com",
  messagingSenderId: "1026206793502",
  appId: "1:1026206793502:web:a6b38b982c5d538a02d30f",
  measurementId: "G-ZB7KBFJFET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;