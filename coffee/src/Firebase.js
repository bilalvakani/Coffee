// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5KApwYAXFAZNeld9GF7XP865IFZ48WqM",
  authDomain: "coffee-shop-bbde8.firebaseapp.com",
  projectId: "coffee-shop-bbde8",
  storageBucket: "coffee-shop-bbde8.firebasestorage.app",
  messagingSenderId: "662795675461",
  appId: "1:662795675461:web:e2a6b7925312fab439402c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };