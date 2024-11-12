// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASbbgW-PI403RmAxa9nrC-gIbHM7ZeKZE",
  authDomain: "notion-clone-af593.firebaseapp.com",
  projectId: "notion-clone-af593",
  storageBucket: "notion-clone-af593.firebasestorage.app",
  messagingSenderId: "1036525043493",
  appId: "1:1036525043493:web:8fe9b594abe26825f764cc",
  measurementId: "G-7V9KQE76VK"
};

// Initialize Firebase

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore(app);




