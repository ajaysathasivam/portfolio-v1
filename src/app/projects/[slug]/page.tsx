import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Cpu, Layers, Terminal, ShieldAlert, Briefcase } from "lucide-react";
import { projectsData } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ajay Sathasivam`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Ajay Sathasivam`,
      description: project.shortDescription,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-bg-primary text-white py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-accent-indigo/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent-purple/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors duration-200 mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Project Header */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {project.company && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-accent-indigo">
                {project.company}
              </span>
            )}
            {project.duration && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-text-muted">
                {project.duration}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-accent-cyan font-semibold flex items-center gap-2">
            <Briefcase size={18} />
            <span>Role: {project.role}</span>
          </p>
        </div>

        {/* Main Cover Image */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden bg-black/40 border border-white/5 mb-16 shadow-[0_20px_50px_rgba(3,7,18,0.4)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Main Column */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* Context / Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                <span>Project Overview</span>
              </h2>
              <p className="text-text-secondary leading-relaxed font-light text-base md:text-lg">
                {project.longDescription}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="p-6 rounded-2xl glass-panel border border-white/5 flex gap-4 items-start">
              <ShieldAlert className="text-red-500 shrink-0 mt-1" size={24} />
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">The Challenge</h3>
                <p className="text-text-secondary leading-relaxed font-light text-sm md:text-base">
                  {project.problem}
                </p>
              </div>
            </div>

            {/* Key Accomplishments */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                <Layers className="text-accent-indigo" size={22} />
                <span>Contributions & Features Implemented</span>
              </h2>
              <ul className="space-y-4">
                {project.features.map((feature, fIdx) => {
                  const [title, desc] = feature.split(": ");
                  return (
                    <li key={fIdx} className="flex gap-3 items-start text-text-secondary font-light text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0"></span>
                      <div>
                        {desc ? (
                          <>
                            <strong className="text-white font-semibold">{title}</strong>: {desc}
                          </>
                        ) : (
                          feature
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Codebase Highlights (If Any) */}
            {project.codebaseHighlights && project.codebaseHighlights.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2 border-b border-white/5 pb-2">
                  <Terminal className="text-accent-cyan" size={22} />
                  <span>Technical Codebase Highlights</span>
                </h2>
                <div className="flex flex-col gap-6">
                  {project.codebaseHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="rounded-2xl bg-[#090d16] border border-white/5 overflow-hidden flex flex-col">
                      <div className="px-6 py-3 border-b border-white/5 bg-white/2 flex items-center justify-between">
                        <span className="text-xs font-mono text-accent-cyan font-semibold">{highlight.file}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted px-2 py-0.5 rounded bg-white/5">
                          {highlight.language}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col gap-4">
                        <p className="text-xs text-text-secondary leading-relaxed font-light">
                          {highlight.explanation}
                        </p>
                        {highlight.snippet && (
                          <pre className="p-4 rounded-xl bg-black/60 border border-white/5 text-xs font-mono overflow-x-auto text-accent-indigo leading-relaxed">
                            <code>{highlight.snippet}</code>
                          </pre>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8 sticky top-28">
            {/* Quick Links */}
            <div className="p-6 rounded-2xl glass-panel border border-white/5 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white border-b border-white/5 pb-3">Project Assets</h3>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors duration-200 text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  <span>Code Repository</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-center text-xs text-text-muted font-medium">
                  🔒 Private Repository (NDA Protected)
                </div>
              )}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white font-semibold hover:bg-white/10 border border-white/10 transition-colors duration-200 text-sm"
                >
                  <span>Live Sandbox / Demo</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-center text-xs text-text-muted font-medium">
                  🔒 Internal Enterprise Platform
                </div>
              )}
            </div>

            {/* Detailed Technologies Stack */}
            <div className="p-6 rounded-2xl glass-panel border border-white/5 flex flex-col gap-6">
              <h3 className="text-lg font-bold text-white border-b border-white/5 pb-3 flex items-center gap-2">
                <Cpu size={18} className="text-accent-indigo" />
                <span>Technology Stack</span>
              </h3>
              <div className="flex flex-col gap-4">
                {project.techStackDetails.map((cat, cIdx) => (
                  <div key={cIdx} className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">{cat.category}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded text-xs bg-white/5 text-text-secondary border border-white/5"
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
        </div>
      </div>
    </main>
  );
}
