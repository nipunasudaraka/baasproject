// src/firebase/index.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Import the getDatabase function
import { LocalStorage } from "quasar";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCktbJ5q9XA0Kna5GAWOWtJKiLwtGKfkGQ",
  authDomain: "baasproject1.firebaseapp.com",
  projectId: "baasproject1",
  storageBucket: "baasproject1.appspot.com",
  messagingSenderId: "859533630111",
  appId: "1:859533630111:web:12e89f313bc53d0334a0aa",
  measurementId: "G-NL42N59XQS",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export const rtdb = getDatabase(app); // Initialize the Realtime Database

onAuthStateChanged(auth, (user) => {
  if (user) {
    LocalStorage.set("user", user);
  } else {
    LocalStorage.remove("user");
  }
});
