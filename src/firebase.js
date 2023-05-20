import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWW1YhwzUMksNaA-fENpgrDW1XBMEJdXo",
  authDomain: "chat-app-11a60.firebaseapp.com",
  projectId: "chat-app-11a60",
  storageBucket: "chat-app-11a60.appspot.com",
  messagingSenderId: "893354258424",
  appId: "1:893354258424:web:c544d95082414d02c3300d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();