// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "dashboard-fde25.firebaseapp.com",
    projectId: "dashboard-fde25",
    storageBucket: "dashboard-fde25.appspot.com",
    messagingSenderId: "415034092206",
    appId: "1:415034092206:web:f507bdd6109e396aebdb3f",
    measurementId: "G-ZVXRE02YSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);