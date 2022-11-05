// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDya2SCkTJ2iS7LkuVBd_PTI0xz_1PhJcI",
  authDomain: "tienda-perfumes.firebaseapp.com",
  projectId: "tienda-perfumes",
  storageBucket: "tienda-perfumes.appspot.com",
  messagingSenderId: "34009758174",
  appId: "1:34009758174:web:b2650fb69836665c6fc54f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const baseDatos =getFirestore(app);