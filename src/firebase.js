// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = { // Firebase configuration
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "dashboard-e8182.firebaseapp.com",
    projectId: "dashboard-e8182",
    storageBucket: "dashboard-e8182.appspot.com",
    messagingSenderId: "615118146683",
    appId: "1:615118146683:web:e9d5535a202a14d2bee6de",
    measurementId: "G-EMLJ7NR12P"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);