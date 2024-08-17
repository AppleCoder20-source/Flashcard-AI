// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqaRGC-uioW6YPxFmDpQJNqIA1MhR7sZg",
  authDomain: "flashcard-ai-ee64b.firebaseapp.com",
  projectId: "flashcard-ai-ee64b",
  storageBucket: "flashcard-ai-ee64b.appspot.com",
  messagingSenderId: "152219063384",
  appId: "1:152219063384:web:808c125abcf84d1d8a662d",
  measurementId: "G-N8KV04K443",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
