// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_KEY_FIREBASE,
	authDomain: 'media-book-e4fde.firebaseapp.com',
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: 'media-book-e4fde.appspot.com',
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_ID_APP,
	measurementId: 'G-LZ1K92C3Y0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
