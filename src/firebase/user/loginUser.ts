"use server";

import { user } from "@/types/types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../configure";
import jwt from "jsonwebtoken";
import { JWT_SECRECT } from "@/environment";
import { cookies } from "next/headers";

export async function loginUser({ email, password }: Partial<user>) {
    try {
        const refCollection = collection(database, "user");
        const Query = query(refCollection, where("email", "==", email));
        const data = await getDocs(Query);
        
        for (const snap of data.docs) {
            if (snap.data().email === email) {
                if (snap.data().password === password) {
                    const payload = {
                        id: snap.id,
                        email: snap.data().email,
                        role: snap.data().role || "user"
                    }

                    const decode = jwt.sign(payload, JWT_SECRECT);
                    (await cookies()).set("token", decode);

                    return {
                        isSuccess: true,
                        msg: "Login successful."
                    }
                } else {
                    return {
                        isSuccess: false,
                        msg: "Password is invaild"
                    }
                }
            } else {
                return {
                    isSuccess: false,
                    msg: "Email is invaild"
                }
            }
        }
    } catch (error: any) {
        return {
            isSuccess: false,
            msg: error?.message || "Something went wrong"
        }
    }
}