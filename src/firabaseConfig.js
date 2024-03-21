import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhZ174TeliMqnh8VVTGZT4BQcyFM2DUbE",
  authDomain: "robonymous-fdfa4.firebaseapp.com",
  projectId: "robonymous-fdfa4",
  storageBucket: "robonymous-fdfa4.appspot.com",
  messagingSenderId: "685842117432",
  appId: "1:685842117432:web:b7b0f235696f19915247cd"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);