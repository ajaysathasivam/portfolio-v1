"use client";

import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home",       id: "home" },
  { name: "About",      id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects",   id: "projects" },
  { name: "Contact",    id: "contact" },
];

const emptySubscribe = () => () => {};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navHeight, setNavHeight] = useState(0);

  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const sectionHref = (id: string) => (isHomePage ? `#${id}` : `/#${id}`);

  // Measure actual header height so the drawer aligns perfectly
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setNavHeight(headerRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, [scrolled]); // re-measure when scrolled toggles (py changes)

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer when screen becomes desktop-wide
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Active section detection via IntersectionObserver
  const setupObserver = useCallback(() => {
    if (!isHomePage) return;

    const observers: IntersectionObserver[] = [];

    // Track which sections are currently intersecting
    const visibleSections = new Map<string, number>();

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }

            // Pick section with highest intersection ratio among visible ones
            if (visibleSections.size > 0) {
              let best = "";
              let bestRatio = -1;
              // Prefer section order from NAV_LINKS for tie-breaking
              for (const link of NAV_LINKS) {
                const ratio = visibleSections.get(link.id) ?? -1;
                if (ratio > bestRatio) {
                  bestRatio = ratio;
                  best = link.id;
                }
              }
              if (best) setActiveSection(best);
            }
          });
        },
        {
          rootMargin: "-30% 0px -60% 0px", // trigger when section is in the middle 10% of viewport
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, [setupObserver]);

  // On click: immediately set active for instant visual feedback
  // IntersectionObserver will take over as user scrolls
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  const mobileDrawer = mounted
    ? createPortal(
        <>
          {/* Backdrop overlay */}
          <div
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 z-[998] md:hidden transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{ background: "rgba(0,0,0,0.4)" }}
          />

          {/* Drawer panel */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className={`fixed left-0 right-0 z-[999] md:hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
            style={{
              top: navHeight > 0 ? `${navHeight}px` : "64px",
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
                            background:
                              "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.1) 100%)",
                            border: "1px solid rgba(99,102,241,0.3)",
                          }
                        : {}
                    }
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo flex-shrink-0" />
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
        </>,
        document.body
      )
    : null;

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
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
                        background:
                          "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(168,85,247,0.15) 100%)",
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
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-text-secondary hover:text-white p-2 rounded-lg transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer — rendered via portal at document.body level */}
      {mobileDrawer}
    </>
  );
}
