"use server";

import { cookies } from "next/headers";

export async function useLogout() {
    (await cookies()).delete("token");
}