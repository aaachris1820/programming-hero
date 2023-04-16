import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCEIyKNdhuTnn-rdVnwxs3jFeJgbnY9CR4",
  authDomain: "nomadic-proton-340308.firebaseapp.com",
  projectId: "nomadic-proton-340308",
  storageBucket: "nomadic-proton-340308.appspot.com",
  messagingSenderId: "466111468035",
  appId: "1:466111468035:web:581f7427d2551cf7feb436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;