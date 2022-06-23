// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Importar os recursos do firebase
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnkFGVN0zSbZKie2eKUmD9y4lCfD0fvSE",
  authDomain: "crud-simples-b67c3.firebaseapp.com",
  projectId: "crud-simples-b67c3",
  storageBucket: "crud-simples-b67c3.appspot.com",
  messagingSenderId: "764289281035",
  appId: "1:764289281035:web:ce6b9aa567953a62bb6b0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);