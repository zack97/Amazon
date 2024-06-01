import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTkPx7GsC6699pyacfY7z81rzD5zbK7SY",
  authDomain: "app-8e291.firebaseapp.com",
  projectId: "app-8e291",
  storageBucket: "app-8e291.appspot.com",
  messagingSenderId: "1069716952681",
  appId: "1:1069716952681:web:f351abf1d77d6fe869f4f8",
  measurementId: "G-NCG30FSQYS",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
