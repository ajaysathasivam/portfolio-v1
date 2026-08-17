"use client";

import { useState } from "react";
import { ArrowRight, Download, ChevronDown, Copy, Check, Terminal, MapPin } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"info" | "stack" | "status">("info");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ajaysathasivam2003@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-primary bg-grid-pattern">
      {/* Background Lighting / Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-indigo/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[300px] bg-accent-purple/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Brand & Hero Messaging */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status & Location Pill */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bento-card text-xs font-semibold text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for New Roles</span>
            </div>
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-secondary">
              <MapPin size={12} className="text-accent-cyan" />
              <span>Chennai, India (IST)</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-white">
            Frontend Software Developer
            <br />
            <span className="text-gradient-purple-indigo">
              Building High-Density SaaS & Mobile Apps
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed font-normal">
            Hi, I&apos;m <strong className="text-white font-semibold">Ajay Sathasivam</strong>. With 1.7+ years of professional experience, I architect production-grade web platforms and cross-platform mobile apps using React 19, Next.js, Zustand, NestJS, and Expo.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
            >
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bento-card text-white font-semibold hover:bg-white/10 border-white/15 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Download CV</span>
              <Download size={18} />
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bento-card text-text-secondary hover:text-white border-white/10 transition-all duration-300"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span className="text-xs font-medium">Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Tech Badges Row */}
          <div className="flex items-center gap-2 flex-wrap text-xs text-text-muted">
            <span className="font-medium text-text-secondary uppercase tracking-wider text-[11px] mr-2">Specialized in:</span>
            {["React 19", "Next.js", "TypeScript", "Tailwind 4", "React Native", "Zustand", "NestJS"].map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] text-text-secondary border border-white/[0.08] hover:border-accent-indigo/40 hover:text-white transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Interactive Developer Terminal Widget */}
        <div className="lg:col-span-5 w-full">
          <div className="terminal-window rounded-2xl overflow-hidden text-left">
            {/* Terminal Header */}
            <div className="bg-[#121215] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>

              <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                <Terminal size={14} className="text-accent-indigo" />
                <span>ajay@developer-deck:~</span>
              </div>

              <div className="w-12" />
            </div>

            {/* Terminal Navigation Tabs */}
            <div className="flex border-b border-white/10 bg-[#0e0e11] text-xs font-mono">
              <button
                onClick={() => setActiveTab("info")}
                className={`px-4 py-2 flex items-center gap-1.5 transition-colors border-r border-white/10 ${
                  activeTab === "info" ? "bg-[#18181c] text-accent-cyan font-bold border-b-2 border-b-accent-cyan" : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <span>info.json</span>
              </button>
              <button
                onClick={() => setActiveTab("stack")}
                className={`px-4 py-2 flex items-center gap-1.5 transition-colors border-r border-white/10 ${
                  activeTab === "stack" ? "bg-[#18181c] text-accent-purple font-bold border-b-2 border-b-accent-purple" : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <span>stack.sh</span>
              </button>
              <button
                onClick={() => setActiveTab("status")}
                className={`px-4 py-2 flex items-center gap-1.5 transition-colors ${
                  activeTab === "status" ? "bg-[#18181c] text-emerald-400 font-bold border-b-2 border-b-emerald-400" : "text-text-muted hover:text-text-secondary"
                }`}
              >
                <span>metrics.log</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-text-secondary bg-[#0a0a0c] min-h-[260px] flex flex-col justify-between">
              {activeTab === "info" && (
                <div className="space-y-2">
                  <p className="text-text-muted"><span className="text-accent-indigo">$</span> cat developer.json</p>
                  <pre className="text-emerald-300 font-mono whitespace-pre-wrap">
{`{
  "name": "Ajay Sathasivam",
  "role": "Frontend Software Developer",
  "experience": "1.7+ Years",
  "company": "Selvi Software Technologies",
  "location": "Chennai, IN",
  "focus": "SaaS Modules & React Native Apps",
  "openForHire": true
}`}
                  </pre>
                </div>
              )}

              {activeTab === "stack" && (
                <div className="space-y-2">
                  <p className="text-text-muted"><span className="text-accent-purple">$</span> ./list-capabilities.sh</p>
                  <div className="space-y-1.5 pt-1 text-zinc-300">
                    <p><span className="text-accent-cyan">▸ Frontend:</span> React 19, Next.js 16, TypeScript, Tailwind CSS 4, Zustand</p>
                    <p><span className="text-accent-purple">▸ Mobile:</span> React Native, Expo SDK 54, Reanimated, expo-video</p>
                    <p><span className="text-accent-indigo">▸ Backend:</span> NestJS 11, Laravel 12, Socket.io, PostgreSQL, Docker</p>
                    <p><span className="text-emerald-400">▸ Realtime:</span> WebSockets, Floating Mentions, Dynamic Data Grids</p>
                  </div>
                </div>
              )}

              {activeTab === "status" && (
                <div className="space-y-2">
                  <p className="text-text-muted"><span className="text-emerald-400">$</span> tail -n 4 production-stats.log</p>
                  <div className="space-y-1.5 pt-1 text-zinc-300">
                    <p>[2026-08] <span className="text-emerald-400">SUCCESS</span> Yacht CRM Trip Planner released</p>
                    <p>[2026-08] <span className="text-emerald-400">SUCCESS</span> 7+ SaaS Modules deployed</p>
                    <p>[2026-08] <span className="text-emerald-400">SUCCESS</span> 2 Expo Apps published</p>
                    <p>[2026-08] <span className="text-accent-cyan">ACTIVE</span> Building next-gen web & mobile experiences</p>
                  </div>
                </div>
              )}

              {/* Interactive prompt line */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-text-muted text-xs">
                <span className="text-accent-indigo">ajay@dev-machine:~$</span>
                <span className="inline-block w-2 h-4 bg-accent-cyan animate-pulse" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-text-muted animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

