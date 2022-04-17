// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw4uaFzcVoSzSR0Xm816SKrvrElUVAyMg",
  authDomain: "sohag-s-service.firebaseapp.com",
  projectId: "sohag-s-service",
  storageBucket: "sohag-s-service.appspot.com",
  messagingSenderId: "814691116955",
  appId: "1:814691116955:web:f21668fd73cbf9128ae33e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;