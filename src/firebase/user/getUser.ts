"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

interface decode {
    id: string
    email: string
    role: "user" | "admin"
    iat: number
}

export async function getUser() {
    const token = (await cookies()).get("token")?.value;
    const decode: decode = jwtDecode(token as string);
    return decode;
}

export default getUser;