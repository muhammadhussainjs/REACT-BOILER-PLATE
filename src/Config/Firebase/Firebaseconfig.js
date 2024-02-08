import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCTL-Qylj_Su_EzT9cjzqTasqXQtGcIx1c",
    authDomain: "practice-smit-b10.firebaseapp.com",
    projectId: "practice-smit-b10",
    storageBucket: "practice-smit-b10.appspot.com",
    messagingSenderId: "768359393300",
    appId: "1:768359393300:web:e6c49508c1d3b24203df01",
    measurementId: "G-QMS1QL3V0D"
  };

 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app
