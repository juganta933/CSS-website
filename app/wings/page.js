"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WingsPage() {
  const wings = [
    {
      name: "Executive Wing",
      command: "$ executive --about",
      comment:
        "// Focuses on leadership, management, and organizational strategies.",
      side: "left",
      description:
        "The Executive Wing of CSS is considered to be the backbone of the entire Computer Science Society. With the goal of making every event, module, and session organized under the banner of CSS a grand success, the wing manages, coordinates, and arranges resources and assets to ensure a smooth workflow among all the individual wings. The wing forms the binding force between the various sub-wings, thereby making every inch of hard work a grand success.",
    },
    {
      name: "Development Wing",
      command: "$ development --build",
      comment:
        "// Focuses on websites, software projects, and product development.",
      side: "right",
      description:
        "The Development Wing focuses on building digital products, websites, applications, and technical platforms for the society. It helps members move beyond theoretical knowledge and work on real projects where they can improve their frontend, backend, UI, logic-building, and problem-solving skills. The wing creates a culture where students learn by building and grow by contributing.",
    },
    {
      name: "PR & Media Wing",
      command: "$ pr-media --broadcast",
      comment:
        "// Focuses on communication, outreach, publicity, and media presence.",
      side: "left",
      description:
        "The PR & Media Wing handles the voice, visibility, and public presence of CSS. It manages announcements, event promotions, social media updates, outreach, and communication with the student community. The wing ensures that the work done by CSS reaches the right audience in a clear, attractive, and professional way.",
    },
    {
      name: "CP Wing",
      command: "$ cp --solve",
      comment:
        "// Focuses on competitive programming, DSA, and problem solving.",
      side: "right",
      description:
        "The CP Wing builds and strengthens the competitive programming culture inside CSS. It focuses on data structures, algorithms, coding contests, problem discussions, editorials, and regular practice. The wing helps students improve logical thinking, speed, accuracy, and confidence while solving challenging programming problems.",
    },
    {
      name: "ML Wing",
      command: "$ machine-learning --train",
      comment:
        "// Focuses on artificial intelligence, machine learning, and research.",
      side: "left",
      description:
        "The ML Wing explores the world of artificial intelligence and machine learning. It works around datasets, models, automation, research ideas, and real-world applications of AI. The wing helps students understand how intelligent systems are created and how machine learning can be used to solve meaningful problems.",
    },
    {
      name: "Literary Wing",
      command: "$ literary --write",
      comment:
        "// Focuses on content writing, blogs, reports, and documentation.",
      side: "right",
      description:
        "The Literary Wing gives words to the work and ideas of CSS. It creates blogs, event reports, captions, documentation, articles, and written content for technical initiatives. The wing ensures that every idea, event, and achievement is expressed clearly, professionally, and creatively.",
    },
    {
      name: "Design Wing",
      command: "$ design --visualize",
      comment:
        "// Focuses on posters, UI, branding, visuals, and creative identity.",
      side: "left",
      description:
        "The Design Wing shapes the visual identity of CSS. It works on posters, UI concepts, branding, social media creatives, event designs, and the overall look and feel of the society. The wing combines creativity with clarity and makes technology feel more engaging, polished, and alive.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".wing-row");

      rows.forEach((row) => {
        const side = row.getAttribute("data-side");
        const fromX = side === "left" ? -80 : 80;

        gsap.fromTo(
          row,
          {
            x: fromX,
            y: 50,
            opacity: 0,
            scale: 0.97,
            filter: "blur(8px)",
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              end: "top 52%",
              scrub: 1.4,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative z-10 min-h-screen overflow-x-hidden bg-transparent px-4 py-16 text-white sm:px-6 lg:px-8">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-96 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-300/20 bg-black/30 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_35px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(110,231,183,0.18),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(34,211,238,0.12),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-black/30 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
              <p className="tech-font text-xs font-black uppercase tracking-[0.28em] text-emerald-200/80">
                ./wings
              </p>
            </div>

            <h1 className="logo-font mt-8 bg-gradient-to-r from-emerald-200 via-white to-cyan-200 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl lg:text-7xl">
              Wings of CSS
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              CSS works through multiple wings, each handling a specific part of
              the society. Every wing has its own responsibility, but together
              they create one strong technical community.
            </p>
          </div>
        </div>
      </section>

      {/* Wing Description Sections */}
      <section className="mx-auto mt-24 max-w-7xl space-y-24 pb-24">
        {wings.map((wing, index) => (
          <div
            key={wing.name}
            data-side={wing.side}
            className={`wing-row grid items-center gap-8 opacity-100 lg:grid-cols-[0.8fr_1.2fr] ${
              wing.side === "right" ? "lg:grid-cols-[1.2fr_0.8fr]" : ""
            }`}
          >
            {/* Wing Name */}
            <div
              className={`${
                wing.side === "right" ? "lg:order-2 lg:text-right" : ""
              }`}
            >
              <p className="tech-font text-sm font-black uppercase tracking-[0.35em] text-emerald-300/70">
                Wing 0{index + 1}
              </p>

              <h2 className="logo-font mt-4 bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-6xl">
                {wing.name}
              </h2>
            </div>

            {/* Terminal Description Card */}
            <article className="relative transform-gpu overflow-hidden rounded-[1.8rem] border border-emerald-300/15 bg-black/55 p-0 opacity-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent" />

              {/* Terminal Top Bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-emerald-300/15 bg-white/[0.04] px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.6)]" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(253,224,71,0.6)]" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.7)]" />
                </div>

                <p className="tech-font text-xs font-black uppercase tracking-[0.22em] text-emerald-200/50">
                  css-wing-terminal
                </p>
              </div>

              {/* Terminal Content */}
              <div className="relative z-10 p-6 sm:p-8">
                <p className="tech-font text-base font-black text-emerald-300 sm:text-lg">
                  {wing.command}
                </p>

                <p className="tech-font mt-5 text-sm font-bold leading-7 text-cyan-200/80 sm:text-base">
                  {wing.comment}
                </p>

                <p className="mt-6 text-base font-semibold leading-8 text-slate-100 sm:text-lg">
                  {wing.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
}