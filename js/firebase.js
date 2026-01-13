// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

// Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// 🔥 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpY8uZxBOPQfceY4bOheoahg9qq5clGCs",
  authDomain: "mytime-app-d4de2.firebaseapp.com",
  projectId: "mytime-app-d4de2",
  storageBucket: "mytime-app-d4de2.appspot.com",
  messagingSenderId: "217731566234",
  appId: "1:217731566234:web:bedcc43dae16d28e56ed23"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
const db = getFirestore(app);

// ✅ Export ONLY db
export { db };
