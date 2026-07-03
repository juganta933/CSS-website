import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center bg-transparent px-4 text-white">
      <div className="relative max-w-xl overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-black/50 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative z-10">
          <p className="tech-font text-xs font-black uppercase tracking-[0.35em] text-emerald-300/80">
            404_not_found
          </p>

          <h1 className="logo-font mt-5 bg-gradient-to-r from-emerald-200 via-white to-cyan-200 bg-clip-text text-6xl font-black text-transparent">
            Page Lost
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-300">
            The page you are looking for does not exist or has been moved.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-2xl border border-emerald-300/30 bg-emerald-300 px-6 py-3 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(16,185,129,0.3)] transition hover:-translate-y-1 hover:bg-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
);
}