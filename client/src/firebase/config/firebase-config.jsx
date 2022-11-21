import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBh3w_8dOvAh_DOxpcob5ykKZntAYMe4g",
  authDomain: "greenshop-fa359.firebaseapp.com",
  projectId: "greenshop-fa359",
  storageBucket: "greenshop-fa359.appspot.com",
  messagingSenderId: "1060789830880",
  appId: "1:1060789830880:web:45a01e1a4e87a68c18bc85",
  measurementId: "G-FW0VBYTYG0",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);