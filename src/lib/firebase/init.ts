// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_fbAPIKey,
  authDomain: process.env.NEXT_fbAuthDomain,
  projectId: process.env.NEXT_fbProjectId, 
  storageBucket: process.env.NEXT_fbStorageBucket,
  messagingSenderId: process.env.NEXT_fbMessagingSenderId,
  appId: process.env.NEXT_fbAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app