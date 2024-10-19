// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvPq3eM-_4Q0_vFU2dt1YWjyKsx_VmMmA",
  authDomain: "hackathon-c5de2.firebaseapp.com",
  projectId: "hackathon-c5de2",
  storageBucket: "hackathon-c5de2.appspot.com",
  messagingSenderId: "508605338927",
  appId: "1:508605338927:web:0471c71e9370892d57bdda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);