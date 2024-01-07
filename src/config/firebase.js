// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWS1RJcirwWRb9ks0wdKcs4mXTHb_0Jps",
  authDomain: "niann-61538.firebaseapp.com",
  projectId: "niann-61538",
  storageBucket: "niann-61538.appspot.com",
  messagingSenderId: "910593800520",
  appId: "1:910593800520:web:fffed9b19c290fb19edb7d",
  measurementId: "G-21XL1Q3BSM"
};

// Initialize Firebase
if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig);
}
