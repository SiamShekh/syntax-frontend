"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

interface decode {
    id: string
    email: string
    role: "user" | "admin"
    iat: number
}
export async function getCurrentUser() {
    const cookie = (await cookies()).get("token")?.value;
    let decode = undefined;
    if (cookie) {
        decode = jwtDecode(cookie as string);
        return decode
    }
    return decode;
}