// import { initializeApp } from 'firebase/app';
// import { GoogleAuthProvider } from 'firebase/auth';

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_KEY_FIREBASE,
// 	authDomain: 'media-book-e4fde.firebaseapp.com',
// 	projectId: process.env.REACT_APP_PROJECT_ID,
// 	storageBucket: 'media-book-e4fde.appspot.com',
// 	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_ID_APP,
// 	measurementId: 'G-LZ1K92C3Y0',
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const google = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdGJIFgUaUyTc9_OjHWfUG3XeF4Jy4Rzs",
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
