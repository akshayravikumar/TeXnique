// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYHw9oVZ84207EQYobb7DcxYHJAeazov8",
  authDomain: "texnique-v3.firebaseapp.com",
  projectId: "texnique-v3",
  storageBucket: "texnique-v3.firebasestorage.app",
  messagingSenderId: "59805088347",
  appId: "1:59805088347:web:f780a0440e4e78d0c1dd7e",
  measurementId: "G-B052LGHXCW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
