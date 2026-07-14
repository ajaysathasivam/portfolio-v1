import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "InnovateTech Solutions",
      location: "San Francisco, CA (Remote)",
      duration: "Jan 2024 - Present",
      description: [
        "Architected core Next.js application migration, resulting in a 40% improvement in first-input delay (FID) and lighthouse performance scores.",
        "Created and maintained a highly accessible custom Tailwind component library, streamlining developer workflow and cutting production time by 25%.",
        "Mentored junior engineers and instituted code review standards to bolster overall codebase health and maintainability.",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Server Components", "Vercel"],
    },
    {
      role: "Frontend Developer",
      company: "Creative Web Labs",
      location: "New York, NY (Hybrid)",
      duration: "Mar 2022 - Dec 2023",
      description: [
        "Led client-facing React web application development, handling API integrations, local state management, and real-time sockets.",
        "Optimized asset loading configurations, reducing main bundle sizes by 30% and significantly enhancing mobile client load speed.",
        "Collaborated with UX design teams to convert high-fidelity Figma mockups into pixel-perfect responsive layouts.",
      ],
      tags: ["React", "JavaScript", "Redux Toolkit", "Sass", "REST APIs", "Figma"],
    },
    {
      role: "Junior Web Developer",
      company: "PixelCraft Digital",
      location: "Boston, MA",
      duration: "Jun 2020 - Feb 2022",
      description: [
        "Developed and maintained corporate landing pages and e-commerce stores utilizing HTML, CSS, and basic JavaScript frameworks.",
        "Executed weekly cross-browser testing plans to ensure consistency across Chrome, Safari, Firefox, and Edge browsers.",
        "Handled minor search engine optimization (SEO) configurations and Google Analytics tags integrations.",
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "WordPress", "SEO", "Google Analytics"],
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-primary relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute left-[10%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-cyan mb-4">
            <Briefcase size={12} />
            <span>My Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Professional <span className="text-gradient-purple-indigo">Experience</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl font-light text-base md:text-lg">
            A timeline of my professional work history and technical achievements in web engineering.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Connector Indicator Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full bg-[#030712] border-2 border-white/30 group-hover:border-accent-cyan group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(3,7,18,1)]"></div>
              
              {/* Timeline Card */}
              <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl flex flex-col gap-4">
                {/* Meta details (Duration, Location, Company) */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-text-secondary mt-1 block">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <ul className="space-y-3 text-text-secondary text-sm md:text-base font-light leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-white/5 text-accent-indigo border border-accent-indigo/10"
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
