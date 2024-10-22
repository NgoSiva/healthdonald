// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "healthdonald-9e1e1.firebaseapp.com",
  projectId: "healthdonald-9e1e1",
  storageBucket: "healthdonald-9e1e1.appspot.com",
  messagingSenderId: "870818258360",
  appId: "1:870818258360:web:4db47cd1c9fbf91e99834d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
