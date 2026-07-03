import Lanyard from "../components/Lanyard";

export default function DevelopersPage() {
  const developer = {
    name: "Juganta Kaushik Boruah",
    role: "Full Stack Web Developer",
    subtitle: "Clone Website Builder",
    description:
      "A personal clone project built to explore modern frontend design, liquid glass UI, interactive animations, and clean web experiences.",
    github: "https://github.com/juganta933",
    linkedin: "https://www.linkedin.com/in/juganta-kaushik-9153a0374/",
  };

  const skills = ["Next.js", "React", "Tailwind CSS", "UI Design", "Animations"];

  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-transparent px-4 py-16 text-white sm:px-6 lg:px-8">
      {/* Background decorative glow */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[-160px] top-10 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />

      <section className="relative mx-auto min-h-[85vh] max-w-7xl">
        {/* Top label */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-white/[0.06] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" />
            <p className="tech-font text-xs font-black uppercase tracking-[0.28em] text-emerald-200/80">
              ./developers
            </p>
          </div>
        </div>

        {/* Main glass shell */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-300/20 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_35px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          {/* shine layers */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(110,231,183,0.18),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(34,211,238,0.18),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />

          <div className="relative grid min-h-[720px] gap-8 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            {/* Left Content */}
            <div className="relative z-20 flex flex-col justify-center">
              <div className="max-w-2xl">
                <p className="tech-font text-sm font-black uppercase tracking-[0.35em] text-emerald-300/70">
                  Single Developer Build
                </p>

                <h1 className="logo-font mt-5 bg-gradient-to-r from-emerald-200 via-white to-cyan-200 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl lg:text-7xl">
                  Developer behind this clone.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  This is not the official CSS Society website. This version is
                  a personal design and development experiment focused on
                  futuristic UI, glass effects, and interactive frontend
                  experiences.
                </p>

                {/* Developer mini card */}
                <div className="mt-8 max-w-xl rounded-[2rem] border border-white/10 bg-black/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    {/* SVG placeholder */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-300/10 shadow-[0_0_30px_rgba(16,185,129,0.18)]">
                      <svg
                        viewBox="0 0 64 64"
                        className="h-9 w-9 text-emerald-200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32 6L54 18.5V45.5L32 58L10 45.5V18.5L32 6Z"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <path
                          d="M24 25L17 32L24 39"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M40 25L47 32L40 39"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M35 21L29 43"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className="tech-font text-xs font-black uppercase tracking-[0.22em] text-emerald-300/70">
                        {developer.subtitle}
                      </p>

                      <h2 className="logo-font mt-2 text-2xl font-black text-white sm:text-3xl">
                        {developer.name}
                      </h2>

                      <p className="mt-1 text-base font-bold text-emerald-200">
                        {developer.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    {developer.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-6 flex max-w-xl flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition hover:border-emerald-300/40 hover:bg-emerald-300/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={developer.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-emerald-300/30 bg-emerald-300 px-7 py-3 text-center text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(16,185,129,0.35)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_55px_rgba(16,185,129,0.55)]"
                  >
                    GitHub
                  </a>

                  <a
                    href={developer.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/15 bg-white/10 px-7 py-3 text-center text-sm font-black text-emerald-100 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-300/10"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right Lanyard Area */}
            <div className="relative min-h-[620px] lg:min-h-[700px]">
              {/* terminal style small floating label */}
              <div className="absolute right-4 top-4 z-20 rounded-2xl border border-emerald-300/20 bg-black/25 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
                <p className="tech-font text-xs font-black uppercase tracking-[0.25em] text-emerald-200/80">
                  draggable.id
                </p>
              </div>

              {/* soft glass panel behind lanyard */}
              <div className="absolute inset-x-0 bottom-0 top-24 rounded-[2rem] border border-white/10 bg-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl lg:left-10">
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_40%)]" />
              </div>

              {/* Lanyard dropping from top-right */}
              <div className="absolute -right-0 -top-0 z-30 h-[760px] w-full scale-110 sm:-right-14 lg:-right-0 lg:-top-36 lg:h-[860px] lg:scale-125">
                <Lanyard
                  position={[0, 0, 24]}
                  gravity={[0, -40, 0]}
                  fov={20}
                  transparent={true}
                  frontImage="/developers/my-photo.jpeg"
                  imageFit="cover"
                />
              </div>

              {/* bottom note */}
        
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}