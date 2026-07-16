import React from "react";
import { Code2, Cpu, Database, Eye, Sparkles } from "lucide-react";

export default function About() {
  const skillCategories = [
    {
      title: "Frontend Stack",
      icon: <Code2 className="text-accent-indigo" size={20} />,
      skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Zustand", "Formik & Yup", "Framer Motion"],
    },
    {
      title: "Backend & Systems",
      icon: <Database className="text-accent-purple" size={20} />,
      skills: ["Node.js", "NestJS", "Laravel", "REST APIs", "Socket.io", "PostgreSQL", "Prisma ORM", "Redis"],
    },
    {
      title: "Tools & DevOps",
      icon: <Cpu className="text-accent-cyan" size={20} />,
      skills: ["Git & GitHub", "Docker", "Bash Scripting", "NextAuth.js", "Vite", "Vercel"],
    },
  ];

  const stats = [
    { value: "1.7", label: "Years Experience" },
    { value: "7+", label: "SaaS Modules Built" },
    { value: "100%", label: "Production-Ready Code" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-bg-secondary overflow-hidden">
      {/* Background graphic */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-indigo mb-4">
            <Sparkles size={12} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Designing code that <span className="text-gradient-purple-indigo">moves the web forward</span>
          </h2>
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Column 1: Story & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-6 text-text-secondary text-base md:text-lg leading-relaxed font-light">
              <p>
                I am a frontend-specialized software developer dedicated to creating highly optimized, responsive, and gorgeous digital interfaces.
                With a focus on performance, accessibility, and fluid interactivity, I translate complex product demands
                into robust, elegant technical implementations.
              </p>
              <p>
                Over my 1.7 years of professional experience, I have contributed to 7+ production-grade SaaS modules, including Yacht CRM systems, KYC/AML portals, and medical consultation engines. While specializing in frontend libraries like React 19, Next.js, and Zustand, I also leverage active backend knowledge (NestJS, Laravel, PostgreSQL) and DevOps automation tools to build seamless end-to-end features.
              </p>
            </div>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-extrabold text-white text-gradient-cyan-emerald">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-text-muted mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Interactive Skill Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <Eye size={18} className="text-accent-cyan" />
              <span>Core Competencies</span>
            </h3>

            {skillCategories.map((category, index) => (
              <div key={index} className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col gap-4">
                <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                  {category.icon}
                  <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-text-secondary border border-white/5 hover:border-accent-indigo/30 hover:text-white transition-all duration-300"
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
    </section>
  );
}
