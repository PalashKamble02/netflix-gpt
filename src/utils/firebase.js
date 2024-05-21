// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFu_UzIW99FC4Ok805kGyvxNNs9yr-BDA",
  authDomain: "netflixgpt-bcccf.firebaseapp.com",
  projectId: "netflixgpt-bcccf",
  storageBucket: "netflixgpt-bcccf.appspot.com",
  messagingSenderId: "536654884962",
  appId: "1:536654884962:web:ea42f07d78dc4ddc42e13b",
  measurementId: "G-SQ21PXWXEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();