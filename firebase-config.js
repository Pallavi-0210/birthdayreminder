// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Your Firebase config (replace with your actual values)
const firebaseConfig = {
  apiKey: "AIzaSyCv7KpE48RmKnwMaXyMzHzI4s1-hKu4z0M",
  authDomain: "birthdayreminder-e0f7d.firebaseapp.com",
  projectId: "birthdayreminder-e0f7d",
  storageBucket: "birthdayreminder-e0f7d.firebasestorage.app",
  messagingSenderId: "24959053539",
  appId: "1:24959053539:web:fba67c77dc23fab5ca9fd6",
  measurementId: "G-N0WLZM2BKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
