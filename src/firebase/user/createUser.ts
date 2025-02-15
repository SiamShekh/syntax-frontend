"use server";

import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { database } from "../configure";
import { user } from "@/types/types";

export async function createUser({ firstName, lastName, email, password }: user) {
    try {
        const usersRef = collection(database, "user");
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            for (const snap of querySnapshot.docs) {
                if (snap.data().email === email) {
                    return {
                        msg: "Already have an account? Please log in.",
                        isSuccess: false,
                        isError: true
                    };
                }
            }
        }

        const ref = await addDoc(collection(database, "user"), {
            firstName,
            lastName,
            email,
            password,
            role: "user"
        });

        if (ref.id) {
            return {
                msg: "Registration complete. Please log in!",
                isSuccess: true,
                isError: false
            };
        } else {
            return {
                msg: "Something went wrong",
                isSuccess: false,
                isError: true
            };
        }
    } catch (error: any) {
        return {
            msg: error?.message || "Something went wrong",
            isSuccess: false,
            isError: true
        };
    }
}
