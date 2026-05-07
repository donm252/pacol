import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4wxuvludgvuWzWDkCatdBzlPhC2_4J6o",
  authDomain: "heartconnect-relationship-quiz.firebaseapp.com",
  projectId: "heartconnect-relationship-quiz",
  storageBucket: "heartconnect-relationship-quiz.firebasestorage.app",
  messagingSenderId: "908569541126",
  appId: "1:908569541126:web:2d44463935d8bc2c71a187",
  measurementId: "G-XNBYVR99EJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
