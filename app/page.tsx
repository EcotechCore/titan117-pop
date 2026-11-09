// Phase 0: an empty portal that proves the app builds and deploys. Sign-in
// with two-factor (Clerk, MFA enforced) and the first screens come in phase 5
// (guardrails §12b); every screen will refuse without the admin role.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 p-4 text-center">
      <h1 className="text-2xl font-semibold">Titan117 portal</h1>
      <p className="text-zinc-500">For the Titan117 team only. Nothing here yet.</p>
    </main>
  );
}
