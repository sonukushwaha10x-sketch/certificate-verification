// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyC26ih040banSKM-ZJ9keJ712Hd3H0bPNQ",
authDomain: "certificate-verification-30ead.firebaseapp.com",
  projectId: "certificate-verification-30ead",
  storageBucket: "certificate-verification-30ead.firebasestorage.app",
  messagingSenderId: "888466933247",
 appId: "1:888466933247:web:96874733db93fbdb99d3ca",
measurementId: "G-7T0HL7RVCC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
