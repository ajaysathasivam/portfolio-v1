"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone, Globe, ExternalLink, Lock, Layers } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile">("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    return project.platform === activeFilter;
  });

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-primary relative bg-grid-pattern overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/3 bottom-10 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bento-card text-xs font-semibold text-accent-purple border border-purple-500/20 mb-4">
              <Layers size={13} />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Featured <span className="text-gradient-purple-indigo">Engineering Work</span>
            </h2>
            <p className="text-text-secondary mt-3 max-w-xl text-sm md:text-base font-normal">
              Production SaaS platforms, complex data grids, real-time engines, and cross-platform mobile apps.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bento-card border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === "all"
                  ? "bg-white text-black shadow-md"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeFilter === "web"
                  ? "bg-accent-indigo text-white shadow-md"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              <Globe size={13} />
              <span>SaaS Web</span>
            </button>
            <button
              onClick={() => setActiveFilter("mobile")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeFilter === "mobile"
                  ? "bg-accent-purple text-white shadow-md"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              <Smartphone size={13} />
              <span>Mobile Apps</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bento-card bento-card-hover rounded-3xl overflow-hidden flex flex-col h-full border border-white/10"
            >
              {/* Image Preview Container */}
              <Link href={`/projects/${project.slug}`} className="relative aspect-[16/10] block overflow-hidden bg-[#0a0a0d]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-85 group-hover:opacity-100"
                />
                
                {/* Platform Badge */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  {project.platform === "mobile" ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-black/75 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      <Smartphone size={12} />
                      React Native & Expo
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-black/75 text-accent-cyan border border-cyan-500/30 backdrop-blur-md">
                      <Globe size={12} />
                      SaaS Web App
                    </span>
                  )}
                </div>
              </Link>

              {/* Content Body */}
              <div className="p-6 md:p-7 flex flex-col flex-1 gap-4 justify-between">
                <div>
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-indigo transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-xs md:text-sm text-text-secondary font-normal leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-white transition-colors duration-200"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                          </svg>
                          <span>Repository</span>
                        </a>
                      ) : (
                        <span className="text-[11px] font-medium text-text-muted flex items-center gap-1">
                          <Lock size={10} />
                          <span>Client Confidential</span>
                        </span>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                        >
                          <ExternalLink size={12} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-1 text-xs font-bold text-accent-cyan hover:text-accent-indigo transition-colors duration-200"
                    >
                      <span>Case Study</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

