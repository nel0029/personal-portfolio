/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5GkTyxEU7riu0kxkBTFTgsa7D5-mel3Y",
  authDomain: "email-59449.firebaseapp.com",
  projectId: "email-59449",
  storageBucket: "email-59449.appspot.com",
  messagingSenderId: "537383741400",
  appId: "1:537383741400:web:8d8d23a3736d948c1074ad",
  measurementId: "G-DYHCWNME04",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
