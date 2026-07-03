export default function Footer() {
  return (
    <footer className="w-full px-4 py-5 font-mono">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0b0f17]/90 px-5 py-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_-10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        
        <p className="mb-2 text-sm font-bold tracking-[0.25em] text-cyan-300">
          $~ CONTACT
        </p>

        <a
          href="mailto:computersciencesociety@cse.nits.ac.in"
          className="block text-sm text-slate-300 transition hover:text-cyan-200"
        >
          computersciencesociety@cse.nits.ac.in
        </a>

        <p className="mt-2 text-sm text-slate-400">
          National Institute of Technology, Silchar
        </p>

      </div>
    </footer>
  );
}