import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVlT-bBNaJY6R2_2XO4OJTL2dpJROAsMI",
    authDomain: "syntaxcode-b8753.firebaseapp.com",
    databaseURL: "https://syntaxcode-b8753-default-rtdb.firebaseio.com",
    projectId: "syntaxcode-b8753",
    storageBucket: "syntaxcode-b8753.firebasestorage.app",
    messagingSenderId: "702648265700",
    appId: "1:702648265700:web:58e5351c301c51aa6a35f1",
    measurementId: "G-0ZKKHPP3DK"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);