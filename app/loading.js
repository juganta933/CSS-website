export default function Loading() {
  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center bg-transparent px-4 text-white">
      <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-black/50 px-10 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-300/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative z-10">
          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-emerald-300/20 border-t-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.35)]" />

          <p className="tech-font mt-6 text-xs font-black uppercase tracking-[0.35em] text-emerald-300/80">
            Loading Route
          </p>

          <h1 className="logo-font mt-3 bg-gradient-to-r from-emerald-200 via-white to-cyan-200 bg-clip-text text-3xl font-black text-transparent">
            CSS Society
          </h1>
        </div>
      </div>
    </main>
  );
}