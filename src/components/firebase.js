// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLbolIBPI2Zvbmuya8DFBCDWAPLAVzpI0",
  authDomain: "login-auth-d8997.firebaseapp.com",
  projectId: "login-auth-d8997",
  storageBucket: "login-auth-d8997.appspot.com",
  messagingSenderId: "1058610664396",
  appId: "1:1058610664396:web:5d28131367239d8927c369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db=getFirestore(app);
export default app;