import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute right-[5%] bottom-[15%] w-[450px] h-[450px] rounded-full bg-accent-indigo/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-purple mb-4">
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Recent <span className="text-gradient-purple-indigo">Projects</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl font-light text-base md:text-lg">
            A handpicked selection of production-grade SaaS systems and mobile applications I have developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group glass-panel rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-accent-indigo/20 transition-all duration-300 hover:shadow-[0_15px_40px_-15px_rgba(99,102,241,0.15)]"
            >
              {/* Image Container with Link */}
              <Link href={`/projects/${project.slug}`} className="relative aspect-[3/2] block overflow-hidden bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                />
              </Link>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 gap-4">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-indigo transition-colors duration-300">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-text-secondary font-light leading-relaxed flex-1">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-text-secondary border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-white transition-colors duration-200"
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      <span>Repository</span>
                    </a>
                  ) : (
                    <span className="text-[11px] font-semibold text-text-muted flex items-center gap-1.5 py-1">
                      <span>🔒 Private Codebase</span>
                    </span>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-1 text-xs font-semibold text-accent-cyan hover:text-accent-cyan/80 transition-colors duration-200"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
