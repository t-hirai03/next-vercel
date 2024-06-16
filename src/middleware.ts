import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = new URL(req.url, process.env.NEXT_PUBLIC_NEXTAUTH_URL);

  if (token && pathname === "/login") {
    const redirectUrl = new URL("/", process.env.NEXT_PUBLIC_NEXTAUTH_URL).toString();
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/login",
};
