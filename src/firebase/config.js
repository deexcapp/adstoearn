//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDacC7uMJI9ojp7U2xAYF4V5iQA2NJF7Q",
  authDomain: "adstoearn-819a1.firebaseapp.com",
  projectId: "adstoearn-819a1",
  storageBucket: "adstoearn-819a1.firebasestorage.app",
  messagingSenderId: "847919019099",
  appId: "1:847919019099:web:6be01d30d4a306805dfb7e",
  measurementId: "G-R6616WG8E8",
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app; 
