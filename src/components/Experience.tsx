"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, GraduationCap, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const experiences = [
    {
      type: "work",
      role: "Software Developer (Frontend Specialist)",
      company: "Selvi Software Technologies Pvt Ltd",
      location: "Chennai, India (Remote)",
      duration: "Feb 2025 - Present",
      description: [
        "Engineered an interactive multi-destination Trip Planner & Timeline Builder in React 19, enabling seamless day-by-day scheduling and validation rules preventing conflicting timelines.",
        "Developed a high-density Guest Preference Matrix featuring sticky section headers, scroll-to-error validation, and localized configurations that resolved legacy re-render bottlenecks.",
        "Built a full-stack real-time messaging engine using NestJS and Socket.io, supporting group chat channels, floating mentions (@username), and direct sharing overlays.",
        "Created a drag-and-drop dashboard widget engine utilizing @dnd-kit, allowing users to customize and persist layouts across sessions.",
        "Architected role-based authentication flows and payment gateways using NextAuth.js and Stripe, ensuring secure client routes.",
        "Programmed a local database branch-sync Bash utility, sanitizing Git branch states to automatically spin up isolated development databases in Docker, preventing schema collisions.",
      ],
      tags: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Zustand / Redux", "NestJS", "Laravel", "PostgreSQL", "Socket.io", "Docker"],
    },
    {
      type: "education",
      role: "B.E. Computer Science & Engineering",
      company: "Sri Sairam Engineering College",
      location: "Chennai, India",
      duration: "2020 - 2024",
      description: [
        "Graduated with a Bachelor of Engineering degree in Computer Science & Engineering.",
        "Focused on data structures, algorithms, web technologies, and modern software engineering principles.",
        "Developed foundational full-stack web applications using PHP, MySQL, and JavaScript.",
      ],
      tags: ["C", "Java", "Python", "Data Structures", "DBMS", "Web Technologies"],
    },
  ];

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === "all") return true;
    return exp.type === filter;
  });

  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-secondary relative bg-grid-pattern overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute right-10 top-10 w-[450px] h-[450px] rounded-full bg-accent-cyan/5 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bento-card text-xs font-semibold text-accent-cyan border border-cyan-500/20 mb-4">
            <Briefcase size={13} />
            <span>Career Timeline</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Professional <span className="text-gradient-cyan-emerald">Experience</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl text-sm md:text-base font-normal">
            A chronological breakdown of my software engineering career, production achievements, and education.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-8 p-1.5 rounded-2xl bento-card border border-white/10">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                filter === "all" ? "bg-white text-black shadow-md" : "text-text-secondary hover:text-white"
              }`}
            >
              All Timeline ({experiences.length})
            </button>
            <button
              onClick={() => setFilter("work")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                filter === "work" ? "bg-accent-indigo text-white shadow-md" : "text-text-secondary hover:text-white"
              }`}
            >
              <Briefcase size={13} />
              <span>Full-Time Work</span>
            </button>
            <button
              onClick={() => setFilter("education")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                filter === "education" ? "bg-accent-purple text-white shadow-md" : "text-text-secondary hover:text-white"
              }`}
            >
              <GraduationCap size={13} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Timeline Line & Cards */}
        <div className="relative border-l border-white/15 pl-6 md:pl-10 ml-2 md:ml-6 space-y-12">
          {filteredExperiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Connector Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-2 w-3.5 h-3.5 rounded-full bg-bg-primary border-2 border-accent-cyan group-hover:bg-accent-cyan group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

              {/* Bento Timeline Card */}
              <div className="bento-card bento-card-hover p-6 md:p-8 rounded-3xl flex flex-col gap-5 border border-white/10">
                
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {exp.type === "education" ? (
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                          Degree
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Full-Time
                        </span>
                      )}
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">
                        {exp.role}
                      </h3>
                    </div>
                    <span className="text-sm font-semibold text-text-secondary">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs font-mono text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-accent-cyan" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-accent-purple" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-3 text-text-secondary text-xs md:text-sm font-normal leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-accent-cyan shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

