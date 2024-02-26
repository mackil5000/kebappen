import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import validateToken from "./app/actions";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes("/admin/dashboard")) {
    // if user has sessionToken
    let token = request.cookies.get("sessionToken");
    let email = request.cookies.get("currentUserEmail");

    if (!token || !email) {
      return NextResponse.redirect(new URL("/admin/signin", request.url));
    }

    const res = await validateToken();
    if (res.success) {
      console.log("User is authenticated");
    } else {
      return NextResponse.redirect(new URL("/admin/signin", request.url));
    }
  }
}
