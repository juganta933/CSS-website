export default function MaterialPage() {
  const materialLinks = [
    {
      title: "PREP",
      label: "Visit PREP",
      href: "https://raj8664.github.io/Prep/",
      tag: "Study Materials",
      description:
        "Access organized preparation resources, notes, and useful references for learning and revision.",
      command: "$ open prep.resources",
      glow: "from-emerald-300/25 via-green-400/10 to-transparent",
    },
    {
      title: "CSE23.xyz",
      label: "Visit CSE23.xyz",
      href: "https://cse23.xyz",
      tag: "CSE Community",
      description:
        "Explore the CSE23 platform for resources, links, academic notes.",
      command: "$ open cse23.xyz",
      glow: "from-cyan-300/25 via-sky-400/10 to-transparent",
    },
  ];

  return (
    <main className="relative z-10 min-h-screen overflow-x-hidden bg-transparent px-4 py-16 text-white sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-72 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />

      {/* Hero */}
      <section className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-300/20 bg-black/30 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_35px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(110,231,183,0.2),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(34,211,238,0.14),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-black/30 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
              <p className="tech-font text-xs font-black uppercase tracking-[0.28em] text-emerald-200/80">
                ./material
              </p>
            </div>

            <h1 className="logo-font mt-8 max-w-4xl bg-gradient-to-r from-emerald-200 via-white to-cyan-200 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl lg:text-7xl">
              Material Hub
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              A simple gateway to important academic and technical resources.
              Choose where you want to go and continue learning without wasting
              time searching.
            </p>
          </div>
        </div>
      </section>

      {/* Material Cards */}
      <section className="mx-auto mt-20 max-w-7xl">
        <div className="grid gap-7 lg:grid-cols-2">
          {materialLinks.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/35 hover:bg-black/55 sm:p-8"
            >
              <div
                className={`pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-gradient-to-br ${item.glow} blur-3xl transition duration-500 group-hover:scale-125`}
              />
              <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />

              <div className="relative z-10">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-emerald-300/15 pb-5">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.55)]" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(253,224,71,0.55)]" />
                    <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.65)]" />
                  </div>

                  <p className="tech-font text-xs font-black uppercase tracking-[0.25em] text-emerald-200/45">
                    resource 0{index + 1}
                  </p>
                </div>

                <p className="tech-font mt-8 text-sm font-black uppercase tracking-[0.28em] text-emerald-300/70">
                  {item.tag}
                </p>

                <h2 className="logo-font mt-4 bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                  {item.title}
                </h2>

                <p className="tech-font mt-6 text-base font-black text-cyan-200/80">
                  {item.command}
                </p>

                <p className="mt-6 min-h-[120px] text-base font-semibold leading-8 text-slate-300 sm:text-lg">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-300 px-6 py-4 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(16,185,129,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_45px_rgba(255,255,255,0.25)]"
                >
                  {item.label} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}