"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-primary relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute left-[20%] top-[10%] w-[350px] h-[350px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-indigo mb-4">
            <Mail size={12} />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Let&apos;s build <span className="text-gradient-purple-indigo">something together</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl font-light text-base md:text-lg">
            Have a project idea, want to discuss a role, or just say hello? Drop a message below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Column 1: Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="p-8 rounded-2xl glass-panel flex flex-col gap-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed">
                Feel free to reach out. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-indigo">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">Email Me</span>
                    <a href="mailto:contact@example.com" className="text-sm font-semibold text-white hover:text-accent-indigo transition-colors duration-200">
                      contact@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">Location</span>
                    <span className="text-sm font-semibold text-white">
                      San Francisco, California, US
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass-panel flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    disabled={status === "submitting" || status === "success"}
                    placeholder="John Doe"
                    className="w-full bg-[#0b0f19] border border-white/10 hover:border-white/20 focus:border-accent-indigo px-4 py-3 rounded-xl text-white placeholder-text-muted text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-accent-indigo"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    disabled={status === "submitting" || status === "success"}
                    placeholder="john@example.com"
                    className="w-full bg-[#0b0f19] border border-white/10 hover:border-white/20 focus:border-accent-indigo px-4 py-3 rounded-xl text-white placeholder-text-muted text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-accent-indigo"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  disabled={status === "submitting" || status === "success"}
                  placeholder="Project Collaboration"
                  className="w-full bg-[#0b0f19] border border-white/10 hover:border-white/20 focus:border-accent-indigo px-4 py-3 rounded-xl text-white placeholder-text-muted text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-accent-indigo"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  disabled={status === "submitting" || status === "success"}
                  placeholder="Tell me about your project detail..."
                  className="w-full bg-[#0b0f19] border border-white/10 hover:border-white/20 focus:border-accent-indigo px-4 py-3 rounded-xl text-white placeholder-text-muted text-sm outline-none transition-all duration-300 focus:ring-1 focus:ring-accent-indigo resize-none"
                />
              </div>

              {/* Submit / Status Alert */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 disabled:opacity-55 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "submitting" ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-accent-emerald text-sm font-semibold mt-2 sm:mt-0">
                    <CheckCircle size={18} />
                    <span>Message sent successfully!</span>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm font-semibold mt-2 sm:mt-0">
                    <AlertCircle size={18} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Footer Container */}
        <footer className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-secondary font-light">
          <div>
            <span>&copy; {new Date().getFullYear()} CreativeDev. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          </div>
          <div className="flex items-center gap-1.5 text-text-muted">
            <span>Powered by</span>
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-indigo transition-colors duration-200 font-medium">Next.js</a>
            <span>&amp;</span>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-cyan transition-colors duration-200 font-medium">Vercel</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
