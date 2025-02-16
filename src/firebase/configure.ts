import { firebaseConfig } from "@/environment";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);