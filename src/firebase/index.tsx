// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnvIcVH3JAh2xHaG5fJvJ8PgvY5nZBZuQ",
  authDomain: "livedemo-5aeba.firebaseapp.com",
  projectId: "livedemo-5aeba",
  storageBucket: "livedemo-5aeba.appspot.com",
  messagingSenderId: "873108932749",
  appId: "1:873108932749:web:421b339b5aa60ac5473ac4",
  measurementId: "G-F95BMJJ71H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
