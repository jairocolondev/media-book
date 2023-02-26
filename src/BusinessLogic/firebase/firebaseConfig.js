import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY_FIREBASE,
  authDomain: "media-book-jairo-colon.firebaseapp.com",
  projectId: "media-book-jairo-colon",
  storageBucket: "media-book-jairo-colon.appspot.com",
  messagingSenderId: "722362459848",
  appId: "1:722362459848:web:f0dffa42cd4682fbd2a7fd",
  measurementId: "G-S1QVWEPMD1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
