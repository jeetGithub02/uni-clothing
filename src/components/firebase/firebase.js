// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMXgCdXmBSulCmvoL_unKVz8V-eTMcruI",
  authDomain: "uni-clothing-1.firebaseapp.com",
  projectId: "uni-clothing-1",
  storageBucket: "uni-clothing-1.appspot.com",
  messagingSenderId: "1038427388004",
  appId: "1:1038427388004:web:d16eefc42f1aaeb1b14771",
  measurementId: "G-0VKVBTC0LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();
export default app;