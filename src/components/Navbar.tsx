"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // On non-home pages (e.g. /projects/stream-client), anchor links must
  // include the full path so the browser navigates back to the homepage.
  const isHomePage = pathname === "/";
  const sectionHref = (hash: string) => (isHomePage ? hash : `/${hash}`);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in view for the active nav indicator
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = ["home", "about", "experience", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [isHomePage]);

  const navLinks = [
    { name: "Home",       hash: "#home" },
    { name: "About",      hash: "#about" },
    { name: "Experience", hash: "#experience" },
    { name: "Projects",   hash: "#projects" },
    { name: "Contact",    hash: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-bg-primary border-b border-white/5 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href={sectionHref("#home")} className="text-xl font-bold tracking-tight text-white flex items-center gap-1 group">
          <span>Ajay</span>
          <span className="text-accent-indigo group-hover:text-accent-purple transition-colors duration-300">.dev</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" aria-hidden="true"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.hash.replace("#", "");
            const isActive = isHomePage && activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={sectionHref(link.hash)}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  isActive
                    ? "text-white"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-accent-indigo" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href={sectionHref("#contact")}
            className="flex items-center gap-1 text-sm font-medium text-white px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={14} className="opacity-60" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-secondary hover:text-white p-2"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer — fully opaque so content never bleeds through */}
      <div
        className={`fixed inset-0 top-[65px] z-40 bg-bg-primary border-t border-white/5 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={sectionHref(link.hash)}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-text-secondary hover:text-white transition-colors duration-200 border-b border-white/5 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href={sectionHref("#contact")}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 mt-4 text-center font-medium text-black bg-white hover:bg-zinc-200 px-6 py-3 rounded-full transition-all duration-200"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
