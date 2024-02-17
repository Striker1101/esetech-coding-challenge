//  Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtMjxmc6uwTfzfRXdp5L7pLjp17UuLnjg",
  authDomain: "esetech-fcb5e.firebaseapp.com",
  projectId: "esetech-fcb5e",
  storageBucket: "esetech-fcb5e.appspot.com",
  messagingSenderId: "615656088640",
  appId: "1:615656088640:web:0eb3d09e99fb0ff685aba5",
  measurementId: "G-FJFV5LMJPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);

export { auth,app };