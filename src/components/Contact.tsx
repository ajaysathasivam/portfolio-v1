"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Copy, Check, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ajaysathasivam2003@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#0d0d10] border border-white/10 hover:border-white/20 focus:border-accent-indigo px-4 py-3 rounded-xl text-white placeholder-text-muted text-sm outline-none transition-all duration-200 focus:ring-1 focus:ring-accent-indigo";

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-primary relative bg-grid-pattern overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] rounded-full bg-accent-indigo/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bento-card text-xs font-semibold text-accent-indigo border border-indigo-500/20 mb-4">
            <MessageSquare size={13} />
            <span>Direct Channel</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Let&apos;s build <span className="text-gradient-purple-indigo">something exceptional</span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl text-sm md:text-base font-normal">
            Discussing full-time frontend/full-stack developer roles, contract projects, or architecture queries.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 bento-card rounded-3xl p-8 flex flex-col gap-6 border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Contact Info</h3>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  Response &lt; 24h
                </span>
              </div>
              <p className="text-xs md:text-sm text-text-secondary font-normal leading-relaxed">
                Reach out directly via email, connect on LinkedIn, or inspect my recent repositories on GitHub.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              
              {/* Direct Email Item with Copy Button */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-accent-indigo/10 border border-accent-indigo/20 flex items-center justify-center text-accent-indigo shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-text-muted block">Direct Email</span>
                    <a href="mailto:ajaysathasivam2003@gmail.com" className="text-xs md:text-sm font-semibold text-white hover:text-accent-indigo transition-colors truncate block">
                      ajaysathasivam2003@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[11px] text-text-muted block">Base Location</span>
                  <span className="text-xs md:text-sm font-semibold text-white">Chennai, Tamil Nadu, India</span>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ajaysathasivam/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-purple/40 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] text-text-muted block">LinkedIn Profile</span>
                    <span className="text-xs md:text-sm font-semibold text-white group-hover:text-accent-purple transition-colors">
                      linkedin.com/in/ajaysathasivam
                    </span>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ajaysathasivam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] text-text-muted block">GitHub Repositories</span>
                    <span className="text-xs md:text-sm font-semibold text-white group-hover:text-zinc-300 transition-colors">
                      github.com/ajaysathasivam
                    </span>
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bento-card rounded-3xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
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
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
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
                    placeholder="john@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
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
                  placeholder="Frontend Developer Role / Project Proposal"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
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
                  placeholder="Tell me about your team, tech stack, or project goals..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300 disabled:opacity-55 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <CheckCircle size={16} />
                    <span>Message delivered successfully!</span>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-xs font-semibold">
                    <AlertCircle size={16} />
                    <span>Failed to send. Please check your submission.</span>
                  </div>
                )}
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

