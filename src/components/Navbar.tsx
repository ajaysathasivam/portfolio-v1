"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home",       id: "home" },
  { name: "About",      id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects",   id: "projects" },
  { name: "Contact",    id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const sectionHref = (id: string) => (isHomePage ? `#${id}` : `/#${id}`);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection — scroll-position based (most reliable)
  const updateActive = useCallback(() => {
    if (!isHomePage) return;

    const offsets = NAV_LINKS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return { id, top: Infinity };
      return { id, top: el.getBoundingClientRect().top };
    });

    // Pick the last section whose top is at or above 30% of viewport height
    const threshold = window.innerHeight * 0.3;
    let current = offsets[0].id;
    for (const { id, top } of offsets) {
      if (top <= threshold) current = id;
    }
    setActiveSection(current);
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) return;
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [isHomePage, updateActive]);

  // On click: immediately set active without waiting for scroll event
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-black/60 border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <a
          href={sectionHref("home")}
          onClick={() => handleNavClick("home")}
          className="text-xl font-bold tracking-tight text-white flex items-center gap-1 group select-none"
        >
          <span>Ajay</span>
          <span className="text-accent-indigo group-hover:text-accent-purple transition-colors duration-300">.dev</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse ml-0.5" aria-hidden="true" />
        </a>

        {/* Desktop Navigation — glassmorphism pill */}
        <nav
          className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = isHomePage && activeSection === link.id;
            return (
              <a
                key={link.id}
                href={sectionHref(link.id)}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {/* Active pill background */}
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(168,85,247,0.15) 100%)",
                      border: "1px solid rgba(99,102,241,0.35)",
                      boxShadow: "0 0 12px rgba(99,102,241,0.2)",
                    }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href={sectionHref("contact")}
            onClick={() => handleNavClick("contact")}
            className="flex items-center gap-1.5 text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all duration-300 group"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              boxShadow: "0 0 0 0 rgba(99,102,241,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 20px rgba(99,102,241,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 0 0 rgba(99,102,241,0.4)";
            }}
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-secondary hover:text-white p-2 rounded-lg transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[57px] z-40 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
        style={{
          background: "rgba(3,7,18,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <nav className="flex flex-col p-8 gap-3">
          {NAV_LINKS.map((link) => {
            const isActive = isHomePage && activeSection === link.id;
            return (
              <a
                key={link.id}
                href={sectionHref(link.id)}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-text-secondary hover:text-white hover:bg-white/5"
                }`}
                style={
                  isActive
                    ? {
                        background: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.1) 100%)",
                        border: "1px solid rgba(99,102,241,0.3)",
                      }
                    : {}
                }
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo" />
                )}
                {link.name}
              </a>
            );
          })}
          <a
            href={sectionHref("contact")}
            onClick={() => handleNavClick("contact")}
            className="flex items-center justify-center gap-2 mt-4 text-center font-semibold text-white px-6 py-3.5 rounded-full transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
            }}
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
