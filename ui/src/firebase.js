// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH_0SQureT7ARmcLV3nc8amKb-qubPMjY",
  authDomain: "video-sharing-8dabf.firebaseapp.com",
  projectId: "video-sharing-8dabf",
  storageBucket: "video-sharing-8dabf.appspot.com",
  messagingSenderId: "1029867962926",
  appId: "1:1029867962926:web:79ca51b8f5377281c595bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
export const provider = new GoogleAuthProvider();