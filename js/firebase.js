// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpY8uZxBOPQfceY4bOheoahg9qq5clGCs",
  authDomain: "mytime-app-d4de2.firebaseapp.com",
  projectId: "mytime-app-d4de2",
  storageBucket: "mytime-app-d4de2.firebasestorage.app",
  messagingSenderId: "217731566234",
  appId: "1:217731566234:web:bedcc43dae16d28e56ed23",
  measurementId: "G-G7L0DDXY5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
