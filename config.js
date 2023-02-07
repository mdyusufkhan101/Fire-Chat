// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBpdkSlCILZ4IRR6PGiGFee57Dwi69TTCA",
  authDomain: "fire-chat-13cd3.firebaseapp.com",
  projectId: "fire-chat-13cd3",
  storageBucket: "fire-chat-13cd3.appspot.com",
  messagingSenderId: "361926827049",
  appId: "1:361926827049:web:794dfdc1cf2a9234481038"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const AuthState = onAuthStateChanged;