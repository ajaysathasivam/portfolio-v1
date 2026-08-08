import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react";

export default function Experience() {
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
        "Graduated with a degree in Computer Science & Engineering.",
        "Focused on data structures, algorithms, web technologies, and software engineering principles.",
        "Developed foundational full-stack projects using PHP, MySQL, and JavaScript.",
      ],
      tags: ["C", "Java", "Python", "Data Structures", "DBMS", "Web Tech"],
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
            A timeline of my professional work history, technical achievements, and education.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Connector Indicator Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full bg-bg-primary border-2 border-white/30 group-hover:border-accent-cyan group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(3,7,18,1)]"></div>

              {/* Timeline Card */}
              <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl flex flex-col gap-4">
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {exp.type === "education" ? (
                        <GraduationCap size={16} className="text-accent-purple" />
                      ) : (
                        <Briefcase size={16} className="text-accent-cyan" />
                      )}
                      <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">
                        {exp.role}
                      </h3>
                    </div>
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
