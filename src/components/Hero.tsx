import React from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-bg-primary">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Glowing Orb 1 */}
        <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] rounded-full bg-accent-indigo/15 blur-[120px] animate-pulse-slow"></div>
        {/* Glowing Orb 2 */}
        <div className="absolute bottom-[25%] right-[15%] w-[400px] h-[400px] rounded-full bg-accent-purple/15 blur-[130px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        {/* Subtle Grid overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{ maskImage: "radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)", WebkitMaskImage: "radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs md:text-sm font-medium text-accent-cyan mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping"></span>
          <span>Open to new opportunities</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-4xl">
          Crafting Next-Gen
          <br />
          <span className="text-gradient-rainbow">Web Experiences</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed font-light">
          Hi, I&apos;m <span className="font-semibold text-white">Ajay Sathasivam</span>. I am a frontend-specialized software developer with 1.7 years of experience building high-performance, responsive SaaS web applications using React, Next.js, and modern tools.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full sm:w-auto">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
          >
            <span>View My Work</span>
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-semibold hover:bg-white/10 border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-text-secondary">
          <a
            href="https://github.com/ajaysathasivam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="GitHub"
          >
            <svg
              className="w-[22px] h-[22px] fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ajaysathasivam/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg
              className="w-[22px] h-[22px] fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:ajaysathasivam@2003gmail.com"
            className="hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
