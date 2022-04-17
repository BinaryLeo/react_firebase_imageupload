// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "dashboard-88b0b.firebaseapp.com",

    projectId: "dashboard-88b0b",

    storageBucket: "dashboard-88b0b.appspot.com",

    messagingSenderId: "6349174575",

    appId: "1:6349174575:web:2228bea2b68826b6ea53da",

    measurementId: "G-S2Y70LBTYP"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);