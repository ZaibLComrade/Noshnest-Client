// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALuLXe4DFXltODov23B3eGvcerz2D5v0w",
  authDomain: "noshnest.firebaseapp.com",
  projectId: "noshnest",
  storageBucket: "noshnest.appspot.com",
  messagingSenderId: "606908403202",
  appId: "1:606908403202:web:3d911f28f90101b3dbe11b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
