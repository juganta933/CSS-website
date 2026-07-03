"use client";

import TiltedCard from "../components/TiltedCard";

export default function MembersPage() {
  const wings = [
    {
      wing: "Leadership",
      label: "Core Direction",
      desc: "Guiding the society, planning initiatives, and keeping every wing connected.",
      members: [
        {
          name: "Swapnil Dansana",
          role: "President",
          image: "https://res.cloudinary.com/dcdxyfnfo/image/upload/v1757534745/IMG-20240719-WA0011_-_075_SWAPNIL_DANSANA_ukrr2c.webp",
        },
        {
          name: "Amborish Sarmah",
          role: "General Secretary",
          image: "https://res.cloudinary.com/dp4sknsba/image/upload/v1760262657/amborish_bhaiyaa_oe8p4q.jpg",
        },
      ],
    },
    {
      wing: "Executive",
      label: "Operations",
      desc: "Managing execution, coordination, documentation, and smooth event flow.",
      members: [
        {
          name: "Krish Bajoria",
          role: "Executive Head",
          image: "https://res.cloudinary.com/dfdiplnix/image/upload/v1757075014/55b53b07-e000-4680-91b7-4abc133e5c26_-_KRISH_BAJORIA_bey6id.webp",
        },
        {
          name: "Soumya Ranjan Dash",
          role: "Executive Head",
          image: "https://res.cloudinary.com/dfdiplnix/image/upload/v1757073352/IMG-20250510-WA0179_-_SOUMYA_RANJAN_DASH_cn8yvz.webp",
        },
      ],
    },
    {
      wing: "Development",
      label: "Product Builders",
      desc: "Building websites, tools, platforms, and digital systems for the community.",
      members: [
        {
          name: "Subhajyoti Dey",
          role: "Head",
          image: "https://res.cloudinary.com/dfdiplnix/image/upload/v1757071185/IMG-20250816-WA0006_-_SUBHAJYOTI_DEY_ot2gtd.webp",
        },
        {
          name: "Rupjyoti Patgiri",
          role: "Head",
          image: "https://res.cloudinary.com/dgechlqls/image/upload/v1757613230/gxbfsksxyudm3p2cknj9.jpg",
        },
      ],
    },
    {
      wing: "PR & Media",
      label: "Community Voice",
      desc: "Handling communication, announcements, outreach, and public presence.",
      members: [
        {
          name: "Shahadat Ali",
          role: "PR Lead",
          image: "https://res.cloudinary.com/dcdxyfnfo/image/upload/v1757531582/IMG_7939_-_Shahadat_hjs0ak.webp",
        },
        {
          name: "Bikash Bhattacharjee",
          role: "PR Lead",
          image: "https://res.cloudinary.com/dcdxyfnfo/image/upload/v1757531658/WhatsApp_Image_2025-08-31_at_22.57.20_5bab18f3_-_BIKASH_BHATTACHARJEE_qg28ln.webp",
        },
      ],
    },
    {
      wing: "Competitive Programming",
      label: "Problem Solvers",
      desc: "Practicing DSA, contests, editorials, and competitive programming culture.",
      members: [
        {
          name: "Ifkitar Hussain",
          role: "Head",
          image: "https://res.cloudinary.com/dqmjxceww/image/upload/v1757525787/WhatsApp_Image_2025-08-29_at_22.24.40_7153db13_-_IFTIKAR_HUSSAIN_ucrn4u.webp",
        },
        {
          name: "Upmanyu Jit Phukan",
          role: "Head",
          image: "https://res.cloudinary.com/dqmjxceww/image/upload/v1757527285/WhatsApp_Image_2025-08-31_at_1.04.56_PM_-_UPAMANYU_JIT_PHUKAN_cprfwf.webp",
        },
      ],
    },
    {
      wing: "Machine Learning",
      label: "AI & Research",
      desc: "Exploring ML, AI, models, automation, research ideas, and experiments.",
      members: [
        {
          name: "Nilabh Sharma",
          role: "Head",
          image: "https://res.cloudinary.com/dcdxyfnfo/image/upload/v1757529897/IMG-20250831-WA0028_-_NILABH_SARMAH_smy1sf.webp",
        },
        {
          name: "Nabarun Dutta Talukdar",
          role: "Head",
          image: "https://res.cloudinary.com/dcdxyfnfo/image/upload/v1757530022/CSSphoto_-_NABARUN_DUTTA_TALUKDAR_wzsv6m.webp",
        },
      ],
    },
    {
      wing: "Literary",
      label: "Words & Ideas",
      desc: "Writing blogs, event reports, technical articles, and society content.",
      members: [
        {
          name: "Sazzad Hossain Rafi",
          role: "Head",
          image: "https://res.cloudinary.com/dcdxyfnfo/image/upload/v1757533041/IMG_2546_-_Sazzad_Hossain_Rafi_cwuuec.webp",
        },
        {
          name: "Bavaman Divya",
          role: "Junior Member",
          image: "https://res.cloudinary.com/dcdxyfnfo/image/upload/v1757533195/IMG_20250831_225807_-_BAVANAM_DIVYA_mzk48z.webp",
        },
      ],
    },
    {
      wing: "Design",
      label: "Visual Identity",
      desc: "Creating posters, brand visuals, UI concepts, and the visual language of CSS.",
      members: [
        {
          name: "Anuj Das",
          role: "head",
          image: "https://res.cloudinary.com/dfdiplnix/image/upload/v1757084609/WhatsApp_Image_2025-09-01_at_00.05.18_d7afc969_-_ANUJ_DAS_d4l2fo.webp",
        },
        {
          name: "Bhargab Boruah",
          role: "Head",
          image: "https://res.cloudinary.com/dfdiplnix/image/upload/v1757084815/IMG-20250517-WA0257_-_BHARGAB_BARUAH_n9jp6u.webp",
        },
      ],
    },
  ];

  function placeholderImage(name, wing) {
    const svg = `
      <svg width="900" height="1100" viewBox="0 0 900 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="900" height="1100" fill="#020617"/>
        <circle cx="180" cy="160" r="260" fill="#10b981" opacity="0.22"/>
        <circle cx="790" cy="260" r="260" fill="#22d3ee" opacity="0.12"/>
        <circle cx="600" cy="970" r="340" fill="#064e3b" opacity="0.55"/>
        <path d="M0 210C210 120 420 290 900 120" stroke="#6ee7b7" stroke-opacity="0.28" stroke-width="4"/>
        <path d="M0 820C260 710 520 900 900 760" stroke="#22d3ee" stroke-opacity="0.18" stroke-width="4"/>
        <rect x="72" y="72" width="756" height="956" rx="56" fill="white" fill-opacity="0.055" stroke="white" stroke-opacity="0.16"/>
        <circle cx="450" cy="390" r="150" fill="#10b981" fill-opacity="0.16" stroke="#6ee7b7" stroke-opacity="0.35" stroke-width="3"/>
        <path d="M360 410C380 455 415 478 450 478C485 478 520 455 540 410" stroke="#d1fae5" stroke-width="14" stroke-linecap="round"/>
        <circle cx="398" cy="360" r="18" fill="#d1fae5"/>
        <circle cx="502" cy="360" r="18" fill="#d1fae5"/>
        <text x="450" y="660" text-anchor="middle" fill="#ecfeff" font-size="54" font-weight="800" font-family="Arial">${name}</text>
        <text x="450" y="720" text-anchor="middle" fill="#6ee7b7" font-size="28" font-weight="700" font-family="Arial">${wing}</text>
        <text x="450" y="900" text-anchor="middle" fill="#94a3b8" font-size="24" font-weight="700" font-family="Arial">CSS SOCIETY</text>
      </svg>
    `;

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  return (
    <main className="relative z-10 min-h-screen overflow-hidden bg-transparent px-4 py-16 text-white sm:px-6 lg:px-8">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-52 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />

      {/* Intro */}
      <section className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-300/20 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_35px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(110,231,183,0.18),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(34,211,238,0.16),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-black/25 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
                <p className="tech-font text-xs font-black uppercase tracking-[0.28em] text-emerald-200/80">
                  ./members
                </p>
              </div>

              <h1 className="logo-font mt-6 bg-gradient-to-r from-emerald-200 via-white to-cyan-200 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl lg:text-7xl">
                Our Members
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                The CSS Society works through multiple wings, each focused on a
                different part of the technical community — leadership,
                development, competitive programming, machine learning, design,
                content, media, and outreach.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {wings.map((wing, index) => (
                <a
                  key={wing.wing}
                  href={`#${wing.wing.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-emerald-300/[0.08]"
                >
                  <p className="tech-font text-xs font-black text-emerald-300/60">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-sm font-black text-white">
                    {wing.wing}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wing Sections */}
      <section className="mx-auto mt-20 max-w-7xl space-y-24">
        {wings.map((wing, wingIndex) => (
          <div
            key={wing.wing}
            id={wing.wing.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}
            className="scroll-mt-28"
          >
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="tech-font text-sm font-black uppercase tracking-[0.3em] text-emerald-300/70">
                  {wing.label}
                </p>

                <h2 className="logo-font mt-3 text-4xl font-black text-white sm:text-5xl">
                  {wing.wing}
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-slate-400">
                {wing.desc}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {wing.members.map((member, memberIndex) => (
                <MemberCard
                  key={`${wing.wing}-${member.name}-${memberIndex}`}
                  member={member}
                  wing={wing.wing}
                  number={`0${wingIndex + 1}.${memberIndex + 1}`}
                  imageSrc={
                    member.image ||
                    placeholderImage(member.name, wing.wing)
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

function MemberCard({ member, wing, number, imageSrc }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/35 hover:bg-emerald-300/[0.07]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl transition group-hover:bg-emerald-300/20" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />

      <div className="grid gap-5 sm:grid-cols-[280px_1fr] sm:items-center">
        <div className="relative h-[360px]">
          <TiltedCard
            imageSrc={imageSrc}
            altText={`${member.name} - ${wing}`}
            captionText={`${member.name} • ${member.role}`}
            containerHeight="360px"
            containerWidth="100%"
            imageHeight="340px"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="flex h-full w-full flex-col justify-between rounded-[28px] bg-gradient-to-b from-black/10 via-transparent to-black/75 p-5">
                <div className="flex justify-between">
                  <span className="rounded-full border border-emerald-300/25 bg-black/35 px-3 py-1 text-xs font-black text-emerald-100 backdrop-blur-xl">
                    {number}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-white backdrop-blur-xl">
                    CSS
                  </span>
                </div>

                <div>
                  <p className="tech-font text-xs font-black uppercase tracking-[0.22em] text-emerald-200/80">
                    {wing}
                  </p>
                  <h3 className="logo-font mt-2 text-2xl font-black text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-emerald-200">
                    {member.role}
                  </p>
                </div>
              </div>
            }
          />
        </div>

        <div className="relative z-10 p-2">
          <p className="tech-font text-xs font-black uppercase tracking-[0.26em] text-emerald-300/70">
            Member Profile
          </p>

          <h3 className="logo-font mt-3 text-3xl font-black text-white">
            {member.name}
          </h3>

          <p className="mt-2 text-lg font-bold text-emerald-200">
            {member.role}
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Part of the {wing} wing, contributing to the society through
            teamwork, creativity, learning, and execution.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-100">
              CSS Society
            </span>

            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-100">
              {wing}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}