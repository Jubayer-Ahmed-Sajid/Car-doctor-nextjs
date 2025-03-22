import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
    const token =await getToken({req, 
        secureCookie:process.env.NODE_ENV === 'production' ? true : false})
    console.log(token)
    if(!token){
        return NextResponse.redirect(new URL("/login", req.url));
    }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/myBookings", "/myBookings/:path*", "/checkOut/:path*"],
};
