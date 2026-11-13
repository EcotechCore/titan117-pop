import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { hasSecondFactor, secondFactorRequired } from "./lib/two-factor";

// The portal is for named staff with two-factor (guardrails §12b). Every page
// needs a signed-in session from the staff Clerk application (invite-only)
// that passed a second factor. Until Clerk Pro, PORTAL_TWO_FACTOR can switch
// the second factor off (lib/two-factor.ts, decisions §37).
// This keeps the pages closed; the data is protected again in Convex by
// adminQuery/adminMutation (phase 5).
const isPublic = createRouteMatcher(["/sign-in(.*)", "/two-factor"]);

export default clerkMiddleware(
  async (auth, req) => {
    if (isPublic(req)) return;
    const { userId, sessionClaims, redirectToSignIn } = await auth();
    if (!userId) return redirectToSignIn({ returnBackUrl: req.url });
    if (secondFactorRequired(process.env.PORTAL_TWO_FACTOR) && !hasSecondFactor(sessionClaims)) {
      return NextResponse.redirect(new URL("/two-factor", req.url));
    }
  },
  { signInUrl: "/sign-in" },
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|txt)).*)",
    "/(api|trpc)(.*)",
  ],
};
