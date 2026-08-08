export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-white/5 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-secondary font-light">
        <div>
          <span>&copy; {new Date().getFullYear()} Ajay Sathasivam. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
        </div>
        <div className="flex items-center gap-1.5 text-text-muted">
          <span>Powered by</span>
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-indigo transition-colors duration-200 font-medium">Next.js</a>
          <span>&amp;</span>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-cyan transition-colors duration-200 font-medium">Vercel</a>
        </div>
      </div>
    </footer>
  );
}
