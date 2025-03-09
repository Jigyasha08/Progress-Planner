// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeSy_21zG9ufL-t_ZaZcuQKo36enyDTfg",
  authDomain: "todo-list-4d485.firebaseapp.com",
  projectId: "todo-list-4d485",
  storageBucket: "todo-list-4d485.firebasestorage.app",
  messagingSenderId: "331768837908",
  appId: "1:331768837908:web:8a774c6816adcbd6c6b401",
  measurementId: "G-MZZ9LBJ1E0"
};
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };