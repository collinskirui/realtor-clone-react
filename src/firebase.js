// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAesFWkgFg9rBmMAyg1fhCBOCxzVzeq55k",
  authDomain: "realtor-clone-react-50c1d.firebaseapp.com",
  projectId: "realtor-clone-react-50c1d",
  storageBucket: "realtor-clone-react-50c1d.appspot.com",
  messagingSenderId: "996635975993",
  appId: "1:996635975993:web:c769244a6550899e6508e8"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()