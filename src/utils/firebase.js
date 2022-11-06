// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlUl0pRmdyU2m797GXX_qaHwSRmRf6YqI",
  authDomain: "tienda-perfumes-20254.firebaseapp.com",
  projectId: "tienda-perfumes-20254",
  storageBucket: "tienda-perfumes-20254.appspot.com",
  messagingSenderId: "247910374329",
  appId: "1:247910374329:web:6405fe08d1c239542bf468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const baseDatos =getFirestore(app);
