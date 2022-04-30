// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Firebase configuration
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'dashboard-7b166.firebaseapp.com',
  projectId: 'dashboard-7b166',
  storageBucket: 'dashboard-7b166.appspot.com',
  messagingSenderId: '314486544890',
  appId: '1:314486544890:web:c21c8e12d818b9365d6c43',
  measurementId: 'G-G2PS4LYB8S',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
