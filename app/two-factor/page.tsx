import { SignOutButton } from "@clerk/nextjs";

export default function TwoFactorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 p-4 text-center">
      <h1 className="text-2xl font-semibold">Two-factor required</h1>
      <p className="max-w-sm text-zinc-500">
        The portal opens only after a second factor. Set one up in your account, then sign in again.
      </p>
      <SignOutButton redirectUrl="/sign-in">
        <button className="rounded-md border border-zinc-300 px-4 py-2 text-sm">Sign out</button>
      </SignOutButton>
    </main>
  );
}
