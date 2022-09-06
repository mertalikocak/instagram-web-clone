import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfwFzvxYpQIaglwtFMYMSnjPaI8g-3uHs",
  authDomain: "instagram-clone-mak.firebaseapp.com",
  projectId: "instagram-clone-mak",
  storageBucket: "instagram-clone-mak.appspot.com",
  messagingSenderId: "823002990692",
  appId: "1:823002990692:web:98c15530990f28632c7771",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  userHandle(user || false);
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast.error(error.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};
