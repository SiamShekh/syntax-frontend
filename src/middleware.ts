import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtDecode } from 'jwt-decode';

export interface payloadUser {
    id: string
    email: string
    role: "user" | "admin"
    iat: number
}

const path = {
    user: ["/dashboard"],
    admin: ["/admin/:path*"],
    auth: ["/register", "/login"]
}

export async function middleware(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

    const token = (await cookies()).get("token")?.value;
    if (!token) {
        if (path.auth.includes(pathName)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    const decode: payloadUser = await jwtDecode(token as string);

    const accessPath = path[decode.role];

    if (accessPath.includes(pathName)) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: [
        "/dashboard",
        "/register",
        "/login",
        "/admin/:path*"
    ],
}