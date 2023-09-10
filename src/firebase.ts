import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYqWnRoH0GkADXZ6SakbyBMw2X3ze3vvk",
  authDomain: "anthony-hein-web-assets.firebaseapp.com",
  projectId: "anthony-hein-web-assets",
  storageBucket: "anthony-hein-web-assets.appspot.com",
  messagingSenderId: "1017983008815",
  appId: "1:1017983008815:web:853e0ae1c9ea224e1206da",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
