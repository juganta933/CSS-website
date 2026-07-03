"use client";

export default function Error({ error, reset }) {
  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center bg-transparent px-4 text-white">
      <div className="relative max-w-xl overflow-hidden rounded-[2rem] border border-red-300/20 bg-black/50 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative z-10">
          <p className="tech-font text-xs font-black uppercase tracking-[0.35em] text-red-300/80">
            system_error
          </p>

          <h1 className="logo-font mt-5 bg-gradient-to-r from-red-200 via-white to-emerald-200 bg-clip-text text-5xl font-black text-transparent">
            Something went wrong
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-300">
            The page crashed or failed to load properly. You can try again.
          </p>

          <button
            onClick={() => reset()}
            className="mt-8 rounded-2xl border border-emerald-300/30 bg-emerald-300 px-6 py-3 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(16,185,129,0.3)] transition hover:-translate-y-1 hover:bg-white"
          >
            Try Again
          </button>
        </div>
      </div>
    </main>
  );
}