import PixelCard from "../components/PixelCard";

export default function EventsPage() {
  const events = [
    {
      title: "Website Development Bootcamp",
      tag: "Frontend + Backend",
      date: "Coming Soon",
      description:
        "A hands-on bootcamp for building modern websites using HTML, CSS, JavaScript, React, Next.js, and clean UI principles.",
      variant: "green",
      code: "WEB",
    },
    {
      title: "Machine Learning Bootcamp",
      tag: "AI / ML",
      date: "Coming Soon",
      description:
        "A beginner-friendly journey into machine learning concepts, datasets, models, training flow, and real-world AI applications.",
      variant: "cyan",
      code: "ML",
    },
    {
      title: "CSS Olympics",
      tag: "Flagship Event",
      date: "Coming Soon",
      description:
        "A competitive tech event with challenges, coding rounds, creative tasks, and problem-solving battles.",
      variant: "gold",
      code: "OLY",
    },
    {
      title: "CP Bootcamp",
      tag: "DSA + Contest Prep",
      date: "Coming Soon",
      description:
        "A focused competitive programming bootcamp covering patterns, problem-solving speed, contests, editorials, and practice strategy.",
      variant: "violet",
      code: "CP",
    },
  ];

  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-transparent px-4 py-16 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-300/20 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_35px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(110,231,183,0.18),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(34,211,238,0.16),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_35%)]" />

          <div className="relative z-10">
            <p className="tech-font text-sm font-black uppercase tracking-[0.3em] text-emerald-300/70">
              ./events
            </p>

            <h1 className="logo-font mt-5 bg-gradient-to-r from-emerald-200 via-white to-cyan-200 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl lg:text-7xl">
              Events that turn learning into action.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore bootcamps, competitions, and technical sessions designed
              to help students build, solve, compete, and grow with the CSS
              community.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <div className="mb-10">
          <p className="tech-font text-sm font-black uppercase tracking-[0.3em] text-emerald-300/70">
            Featured Events
          </p>

          <h2 className="logo-font mt-3 text-4xl font-black text-white sm:text-5xl">
            CSS Events
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {events.map((event, index) => (
            <PixelCard
              key={event.title}
              variant={event.variant}
              className="group"
              style={{ minHeight: "460px" }}
            >
              <div className="pixel-card-content flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-xl">
                      <p className="tech-font text-xs font-black uppercase tracking-[0.25em] text-emerald-200/75">
                        Event 0{index + 1}
                      </p>
                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-300/10 text-xl font-black text-emerald-100">
                      {event.code}
                    </div>
                  </div>

                  <p className="tech-font mt-8 text-xs font-black uppercase tracking-[0.3em] text-emerald-300/70">
                    {event.tag}
                  </p>

                  <h3 className="logo-font mt-4 max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl">
                    {event.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                    {event.description}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="mb-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
                      <p className="tech-font text-xs font-black uppercase tracking-widest text-slate-500">
                        Status
                      </p>
                      <p className="mt-2 text-sm font-black text-emerald-200">
                        {event.date}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
                      <p className="tech-font text-xs font-black uppercase tracking-widest text-slate-500">
                        Mode
                      </p>
                      <p className="mt-2 text-sm font-black text-cyan-200">
                        Offline / Online
                      </p>
                    </div>
                  </div>

                  <button className="rounded-2xl border border-emerald-300/30 bg-emerald-300 px-5 py-3 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(16,185,129,0.3)] transition hover:-translate-y-1 hover:bg-white">
                    View Details →
                  </button>
                </div>
              </div>
            </PixelCard>
          ))}
        </div>
      </section>
    </main>
  );
}