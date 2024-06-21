// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdWZnEWi69kJCMRGGoZ-H-VlNqMJkQH_w",
  authDomain: "foody-delivery-app-edb57.firebaseapp.com",
  projectId: "foody-delivery-app-edb57",
  storageBucket: "foody-delivery-app-edb57.appspot.com",
  messagingSenderId: "1072096638514",
  appId: "1:1072096638514:web:19ace39de264b602926e2b",
  measurementId: "G-RE0V7ZH7GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
