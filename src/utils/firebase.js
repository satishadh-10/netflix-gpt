// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDnk4DrZyPdO3dK1mxh9HIlDzYCGQOUbg",
  authDomain: "netflixgpt-209fb.firebaseapp.com",
  projectId: "netflixgpt-209fb",
  storageBucket: "netflixgpt-209fb.appspot.com",
  messagingSenderId: "669007075662",
  appId: "1:669007075662:web:9e002fdec2b03f0603261f",
  measurementId: "G-K2D4YK89HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();