export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/10 py-10 px-6 md:px-12 bg-grid-pattern">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-text-secondary">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Ajay Sathasivam</span>
          <span className="text-text-muted">•</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          <span className="px-2 py-0.5 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-[10px] font-mono">
            ui-v2
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>

        <div className="flex items-center gap-1.5 text-text-muted font-mono text-[11px]">
          <span>Built with Next.js 16, React 19 &amp; Tailwind 4</span>
        </div>
      </div>
    </footer>
  );
}
