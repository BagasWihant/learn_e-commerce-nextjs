// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.fbAPIKey,
  authDomain: process.env.fbAuthDomain,
  projectId: process.env.fbProjectId, 
  storageBucket: process.env.fbStorageBucket,
  messagingSenderId: process.env.fbMessagingSenderId,
  appId: process.env.fbAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app