import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC5KApwYAXFAZNeld9GF7XP865IFZ48WqM",
  authDomain: "coffee-shop-bbde8.firebaseapp.com",
  projectId: "coffee-shop-bbde8",
  storageBucket: "coffee-shop-bbde8.firebasestorage.app",
  messagingSenderId: "662795675461",
  appId: "1:662795675461:web:e2a6b7925312fab439402c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
