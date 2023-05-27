import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOCD6Go7iGVgO1M3Qs8TfQmzDi1AXkElM',
  authDomain: 'firstproyect-e4795.firebaseapp.com',
  projectId: 'firstproyect-e4795',
  storageBucket: 'firstproyect-e4795.appspot.com',
  messagingSenderId: '416806027652',
  appId: '1:416806027652:web:eabbf42051ea066fd85dd1',
  measurementId: 'G-SVLH871R94',
}

const app = initializeApp(firebaseConfig)

export const authentication = getAuth(app)

/*
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCOCD6Go7iGVgO1M3Qs8TfQmzDi1AXkElM",

  authDomain: "firstproyect-e4795.firebaseapp.com",

  projectId: "firstproyect-e4795",

  storageBucket: "firstproyect-e4795.appspot.com",

  messagingSenderId: "416806027652",

  appId: "1:416806027652:web:eabbf42051ea066fd85dd1",

  measurementId: "G-SVLH871R94"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


adiconal

npm install -g firebase-tools
*/
/***firstproyect-e4795 */
