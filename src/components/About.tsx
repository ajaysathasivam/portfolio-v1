"use client";

import { useState } from "react";
import { Code2, Database, Sparkles, Layers, Zap, CheckCircle2, ShieldCheck } from "lucide-react";

export default function About() {
  const [activeHighlight, setActiveHighlight] = useState<number>(0);

  const skillCategories = [
    {
      title: "Frontend Stack",
      icon: <Code2 className="text-accent-indigo" size={18} />,
      skills: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS 4", "Zustand", "Redux", "Framer Motion", "Formik & Yup"],
    },
    {
      title: "Mobile Development",
      icon: <Layers className="text-accent-purple" size={18} />,
      skills: ["React Native", "Expo SDK 54", "expo-video", "Reanimated", "AsyncStorage", "Mobile UI Patterns"],
    },
    {
      title: "Backend & Systems",
      icon: <Database className="text-accent-cyan" size={18} />,
      skills: ["NestJS 11", "Laravel 12", "Node.js", "Socket.io", "PostgreSQL", "Prisma ORM", "Docker", "Bash Utility"],
    },
  ];

  const highlights = [
    {
      title: "Multi-Destination Trip Planner",
      tech: "React 19 • State Engine",
      summary: "Engineered a drag-and-drop itinerary builder preventing timeline collisions and date boundary errors.",
    },
    {
      title: "Guest Preference Sheet Matrix",
      tech: "React 19 • High Density Grid",
      summary: "Designed a sticky header matrix view with scroll-to-error validation, resolving legacy re-render bottlenecks.",
    },
    {
      title: "Realtime WebSocket Hub",
      tech: "NestJS 11 • Socket.io",
      summary: "Built low-latency chat hubs supporting group channels and floating @username mention autocomplete engines.",
    },
    {
      title: "Docker DB Branch Isolation",
      tech: "Bash • Docker Engine",
      summary: "Automated local Postgres container spin-up per Git branch state to make dev feature branches completely collision-safe.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-bg-secondary bg-grid-pattern overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-accent-indigo/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bento-card text-xs font-semibold text-accent-indigo border border-indigo-500/20 mb-4">
            <Sparkles size={13} />
            <span>Architectural Engineering</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Designing code that <span className="text-gradient-purple-indigo">moves products forward</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Box 1: Core Story (7 Cols) */}
          <div className="lg:col-span-7 bento-card bento-card-hover rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-accent-cyan uppercase tracking-widest mb-4">
                <ShieldCheck size={16} />
                <span>Background & Experience</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                Frontend-specialized software engineer focused on high-density user interfaces and cross-platform mobile apps.
              </h3>

              <div className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed font-normal">
                <p>
                  Over my 1.7+ years of professional software engineering, I have contributed to 7+ production-grade SaaS modules—ranging from Yacht CRM scheduling systems and guest preference matrices to KYC compliance platforms and real-time WebSocket messaging networks.
                </p>
                <p>
                  I specialize in modern client architecture using React 19, Next.js, and Zustand, while taking mobile applications to market using React Native & Expo. I also maintain backend competency in NestJS, Laravel, PostgreSQL, and Docker dev utilities.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-6 flex-wrap">
              <div className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Performance-Driven Rendering</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Production State Systems</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Clean Code Discipline</span>
              </div>
            </div>
          </div>

          {/* Bento Box 2: Metrics Dashboard (5 Cols) */}
          <div className="lg:col-span-5 bento-card bento-card-hover rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-accent-purple uppercase tracking-widest mb-6">
                <Zap size={16} />
                <span>Impact & Deliverables</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-text-muted block">Professional Experience</span>
                    <span className="text-3xl font-extrabold text-white text-gradient-cyan-emerald">1.7+ Years</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan font-bold text-sm">
                    EXP
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-text-muted block">SaaS Modules Built</span>
                    <span className="text-3xl font-extrabold text-white text-gradient-purple-indigo">7+ Modules</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple font-bold text-sm">
                    SaaS
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-text-muted block">Cross-Platform Mobile Apps</span>
                    <span className="text-3xl font-extrabold text-white text-gradient-cyan-emerald">2 Apps</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                    EXPO
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-text-muted">
              <span>Continuous integration, zero-downtime mentality, and automated environment isolation.</span>
            </div>
          </div>

          {/* Bento Box 3: Technical Skills Radar (6 Cols) */}
          <div className="lg:col-span-6 bento-card bento-card-hover rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Code2 size={18} className="text-accent-indigo" />
                <span>Technical Stack & Toolkit</span>
              </h4>

              <div className="space-y-6">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">
                      {cat.icon}
                      <span>{cat.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08] hover:border-accent-indigo/40 hover:text-white transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Box 4: Interactive Engineering Highlights (6 Cols) */}
          <div className="lg:col-span-6 bento-card bento-card-hover rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-accent-purple" />
                <span>Featured Technical Breakthroughs</span>
              </h4>
              <p className="text-xs text-text-muted mb-6">Click a milestone below to inspect key implementation highlights.</p>

              {/* Selector Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {highlights.map((item, hIdx) => (
                  <button
                    key={hIdx}
                    onClick={() => setActiveHighlight(hIdx)}
                    className={`p-3 rounded-xl text-left border transition-all duration-200 ${
                      activeHighlight === hIdx
                        ? "bg-accent-indigo/15 border-accent-indigo/40 text-white shadow-lg"
                        : "bg-white/[0.02] border-white/5 text-text-secondary hover:bg-white/[0.05]"
                    }`}
                  >
                    <span className="text-xs font-semibold block text-white truncate">{item.title}</span>
                    <span className="text-[11px] text-accent-cyan font-mono block mt-0.5">{item.tech}</span>
                  </button>
                ))}
              </div>

              {/* Active Item Details Card */}
              <div className="p-5 rounded-2xl bg-[#0d0d10] border border-white/10">
                <span className="text-xs font-mono text-accent-indigo uppercase block mb-1">
                  {highlights[activeHighlight].tech}
                </span>
                <h5 className="text-base font-bold text-white mb-2">
                  {highlights[activeHighlight].title}
                </h5>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal">
                  {highlights[activeHighlight].summary}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

