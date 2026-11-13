import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

// No sign-up: staff accounts are created by the owner in the Clerk dashboard.
export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Suspense>
        <SignIn />
      </Suspense>
    </main>
  );
}
