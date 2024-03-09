import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDLgSRF4JvAVgMzPlGvh3aPOJzeWyL2b5Q",
  authDomain: "nymous-ea56a.firebaseapp.com",
  projectId: "nymous-ea56a",
  storageBucket: "nymous-ea56a.appspot.com",
  messagingSenderId: "243238322842",
  appId: "1:243238322842:web:60da38f35f59076c0ad523",
  measurementId: "G-F5189ZGTQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export { app, auth };