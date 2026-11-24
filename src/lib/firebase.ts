import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChFqD-Ah6cwQecCl9PE_2XHWApGGVxC1o",
  authDomain: "cbt-spentribet.firebaseapp.com",
  databaseURL: "https://cbt-spentribet-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cbt-spentribet",
  storageBucket: "cbt-spentribet.firebasestorage.app",
  messagingSenderId: "257950078402",
  appId: "1:257950078402:web:c072a932a5e956d36a725b",
  measurementId: "G-N02HX38QQK"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
