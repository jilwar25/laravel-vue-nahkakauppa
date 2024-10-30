import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm8CgN5Rkssg5tuc1mRts6lEfRDOA4W1Y",
  authDomain: "josali.firebaseapp.com",
  databaseURL: "https://josali-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "josali",
  storageBucket: "josali.appspot.com",
  messagingSenderId: "779877282776",
  appId: "1:779877282776:web:b7865455a0804170a8f8ad",
  measurementId: "G-GLQGEJQBEV"
};

// Alustetaan Firebase sovelluksessa
const app = initializeApp(firebaseConfig);

// Firestore-instanssi nimettynä vientinä
export const db = getFirestore(app);

export default firebaseConfig;