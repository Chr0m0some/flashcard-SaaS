// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getFirebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnUlQ0yMEshjqA2bZIQGtZTcztO32802s",
  authDomain: "flashcards-saas-14f74.firebaseapp.com",
  projectId: "flashcards-saas-14f74",
  storageBucket: "flashcards-saas-14f74.appspot.com",
  messagingSenderId: "457915182821",
  appId: "1:457915182821:web:96e347de84da804690ae0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirebase(app);

export { db };
