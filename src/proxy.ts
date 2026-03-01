import { NextResponse } from "next/server";

/**
 * proxy.ts — Next.js 16 Middleware für App-Subdomain-Hinweis
 *
 * Leitet Anfragen transparent weiter. Die eigentliche App läuft auf https://app.ce-pilot.de.
 */
export function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
