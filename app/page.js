export default function Home() {
  const sponsors = [
    {
      name: "Momo Magic Cafe",
      type: "Official Food Partner",
      description:
        "",
      website: "https://momomagiccafe.in/",
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/e7c77d64db9308e431c22da94119b1ce1710786891.png",
    },
    {
      name: "Campa-Cola",
      type: "Official Bevergae Partner",
      description:
        "",
      website: "https://campabeverages.com/",
      image: "https://images.squarespace-cdn.com/content/66e806e6c1862d4e0dcade8e/d9052b5e-b80b-45d3-9b14-509d3ac16ccd/Elephant+Design_Reliance_Campa+Cola_Packaging+Design_Food+%26+Beverage_Soft+Drink_thumbnail.jpg?content-type=image%2Fjpeg",
    },
  ];

  const pillars = [
    {
      title: "Umkanta Majhi",
      subtitle: "Faculty advisor",
      description:
        "Promoting a culture of innovation and creativity. We encourage students to think outside the box, experiment with new ideas, and develop solutions that make a difference.",
      image: "https://cs.nits.ac.in/storage/FacultyDetails/IMG_175345198568838dd11b534.jpg",
    },
    {
      title: "Swapnil Dansana",
      subtitle: "President",
      description:
        "Encouraging innovative thinking and research-oriented approach. We support projects in AI, ML, web development, and emerging technologies to push boundaries of what's possible.",
      image: "https://res.cloudinary.com/dp4sknsba/image/upload/v1760007735/Swapneel_Bhaiya_ltkb53.jpg",
    },
    {
      title: "Amborish Sarmah",
      subtitle: "General Secretary",
      description:
        "Creating a supportive network where students can learn, grow, and collaborate. We organize tech talks, networking events, and mentorship programs to foster meaningful connections.",
      image: "https://res.cloudinary.com/dp4sknsba/image/upload/v1760007829/Amborish_xqum5s.jpg",
    },
    {
      title: "Raj Kumar Roy",
      subtitle: "Technical Head",
      description:
        "Providing opportunities for professional development through interview preparation, resume building, and industry interactions. We bridge the gap between academia and industry.",




      image: "https://res.cloudinary.com/dcdxyfnfo/image/upload/v1757535079/WhatsApp_Image_2025-08-31_at_11.28.29_AM_-_002_RAJ_KUMAR_ROY_uopc4j.webp",
    },
    {
      title: "Tarun Chandak",
      subtitle: "Finance and Ops Co-ordinator",
      description:
        "Fostering a culture of continuous learning and curiosity. We encourage students to explore new technologies, participate in hackathons, and stay updated with industry trends.",





      image: "https://res.cloudinary.com/dcdxyfnfo/image/upload/v1757535268/IMG-20250510-WA0014_-_CSE_100_TARUN_CHANDAK_w0cny9.webp",
    },
  ];

  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-transparent px-4 py-12 text-white sm:px-6 lg:px-8">
      {/* ABOUT HERO */}
      <section className="mx-auto flex min-h-[86vh] max-w-7xl items-center">
        <div className="relative w-full overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-emerald-950/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8 lg:p-10">
          {/* liquid glow */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_45%)]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
                Computer Science Society
              </div>

              <h1 className="max-w-4xl bg-gradient-to-r from-emerald-200 via-white to-cyan-200 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl lg:text-7xl">
                Computer Science Society.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
               The Computer Science Society, run by the CSE department of NIT Silchar, aims to impart academic, technical, and socio-cultural awareness to the students of our college.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          

          
              </div>

            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-black/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-emerald-300/15 bg-emerald-300/[0.06] p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
              
                    <p className="text-xs text-emerald-200/60">
                      society.core
                    </p>
                  </div>
<div className="space-y-4 pt-6">
  {[
    {
      title: "Real Projects",
      desc: "Build products that solve actual student and tech problems.",
      icon: "◆",
    },
    {
      title: "Events & Workshops",
      desc: "Host coding sessions, tech talks, hackathons, and hands-on learning.",
      icon: "✦",
    },
    {
      title: "Senior-Junior Network",
      desc: "Connect learners, builders, mentors, and experienced developers.",
      icon: "⬡",
    },
    {
      title: "Learn by Building",
      desc: "Create a strong culture where skills grow through execution.",
      icon: "◈",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="group relative overflow-hidden rounded-2xl border border-emerald-300/15 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-300/[0.08] hover:shadow-[0_0_28px_rgba(16,185,129,0.18)]"
    >
      {/* top shine */}
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent opacity-60" />

      {/* glow blob */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:bg-emerald-400/20" />

      <div className="relative z-10 flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-lg font-black text-emerald-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_18px_rgba(16,185,129,0.18)] transition group-hover:scale-105 group-hover:bg-emerald-300 group-hover:text-slate-950">
          {item.icon}
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.16em] text-emerald-100">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="mx-auto mt-20 max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-300/70">
              Our Support System
            </p>
            <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              Sponsors & Partners
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Organizations and communities that help CSS create better technical
            experiences for students.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sponsors.map((sponsor) => (
            <article
              key={sponsor.name}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/35 hover:bg-emerald-300/[0.08]"
            >
              <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-56 overflow-hidden rounded-[1.5rem] border border-emerald-300/15 bg-emerald-950/30">
                  {sponsor.image ? (
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full min-h-56 items-center justify-center bg-[radial-gradient(circle_at_center,rgba(110,231,183,0.22),rgba(15,23,42,0.25)_45%,rgba(0,0,0,0.2))]">
                      <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-widest text-emerald-100 backdrop-blur-xl">
                        Add Photo
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                </div>

                <div className="flex flex-col justify-between p-2">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300/70">
                      {sponsor.type}
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-white">
                      {sponsor.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {sponsor.description}
                    </p>
                  </div>

                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-5 py-3 text-sm font-black text-emerald-100 transition hover:border-emerald-200/50 hover:bg-emerald-300 hover:text-slate-950"
                  >
                    Go to Website
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto mt-24 max-w-7xl pb-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-300/70">
            What Holds CSS Together
          </p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Pillars of CSS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
           The five foundational pillars that define the Computer Science Society and drive our mission forward.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_18px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition duration-300 hover:-translate-y-3 hover:border-emerald-300/35 hover:bg-emerald-300/[0.08] ${
                index === 0 ? "lg:mt-10" : ""
              } ${index === 1 ? "lg:mt-0" : ""} ${
                index === 2 ? "lg:mt-14" : ""
              } ${index === 3 ? "lg:mt-4" : ""} ${
                index === 4 ? "lg:mt-10" : ""
              }`}
            >
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-emerald-300/15 bg-emerald-950/30">
                {pillar.image ? (
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(110,231,183,0.25),rgba(15,23,42,0.25)_45%,rgba(0,0,0,0.25))]">
                    <span className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-emerald-100 backdrop-blur-xl">
                      Photo
                    </span>
                  </div>
                )}

                <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-black text-emerald-100 backdrop-blur-xl">
                  0{index + 1}
                </div>
              </div>

              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300/60">
                {pillar.subtitle}
              </p>

              <h3 className="mt-2 text-xl font-black text-white">
                {pillar.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {pillar.description}
              </p>

              <div className="pointer-events-none absolute inset-x-6 top-3 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}