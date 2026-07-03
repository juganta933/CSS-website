"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Developers", href: "/developers" },
    { name: "Members", href: "/members" },
    { name: "Events", href: "/events" },
    { name: "Wings", href: "/wings" },
    { name: "Material", href: "/materials" },
    
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-4 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] shadow-[0_18px_70px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-2xl">
          {/* Liquid shine */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.2),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.14),transparent_35%)]" />

          <div className="relative flex items-center justify-between gap-4 px-4 py-3">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              {/* SVG Placeholder Logo */}
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_25px_rgba(34,211,238,0.25)] transition group-hover:scale-105 group-hover:border-cyan-200/60">
       <img
  src="https://res.cloudinary.com/dp4sknsba/image/upload/v1760078712/Untitled_design_xzhopc.svg"
  alt="CSS Logo"
  className="h-20 w-20 object-contain"
/>
                <span className="absolute inset-x-2 top-1 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              </div>

              <div className="leading-none">
                <h1 className="bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-sm font-black uppercase tracking-[0.22em] text-transparent sm:text-base">
                  CSS Society
                </h1>
                <p className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200/45 sm:block">
                  NIT Silchar
                </p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-black/20 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] lg:flex">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative overflow-hidden rounded-xl px-3.5 py-2 text-sm font-bold transition-all duration-300 xl:px-4
                      ${
                        isActive
                          ? "bg-cyan-300 text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.45)]"
                          : "text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {!isActive && (
                      <span className="absolute inset-x-2 top-1 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition group-hover:opacity-100" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-cyan-300/10 lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Links */}
          {open && (
            <div className="relative grid grid-cols-2 gap-2 border-t border-white/10 bg-black/20 p-3 sm:grid-cols-4 lg:hidden">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl border px-3 py-3 text-center text-sm font-bold transition
                      ${
                        isActive
                          ? "border-cyan-300/50 bg-cyan-300/20 text-cyan-100"
                          : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}