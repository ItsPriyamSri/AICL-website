"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, Users, Sparkles } from "lucide-react";
import { JaaliPattern } from "@/components/JaaliPattern";
import volunteersData from "@/lib/volunteersData.json";

export default function TeamPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2025");

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 border-b border-border/30 overflow-hidden">
        <JaaliPattern opacity={0.035} />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-accent-2 border border-accent-2/20 bg-accent-2/5 px-4 py-1.5 rounded-full uppercase mb-6 inline-block backdrop-blur-sm">
            Community Leadership
          </span>

          <h1 className="font-display font-bold leading-[1.05] tracking-tight text-center max-w-4xl mb-6 text-fg text-4xl sm:text-6xl md:text-7xl">
            The People Behind{" "}
            <span className="text-accent drop-shadow-[0_0_30px_rgba(198,255,61,0.15)]">
              AI Community Lucknow
            </span>
          </h1>

          <p className="font-sans text-muted max-w-2xl text-base md:text-lg leading-relaxed">
            Meet the passionate organizers, core contributors, and student leaders dedicated to
            advancing artificial intelligence in Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* 2. LEAD ORGANIZER */}
      <section className="w-full py-20 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase">
              // lead organizer
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-fg mt-1">
              Organizers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border bg-bg-card/40 rounded-global p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-accent/40 transition-colors duration-300">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-border/80 group-hover:border-accent transition-colors duration-300 mb-5">
                <Image
                  src="/team/prashant-shukla.png"
                  alt="Prashant Shukla"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded-full mb-3">
                Lead Organizer
              </span>
              <h3 className="font-display font-bold text-xl text-fg">Prashant Shukla</h3>
              <span className="font-mono text-[11px] text-muted mt-1">@prashant-shukla30</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE MEMBERS */}
      <section className="w-full py-20 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase">
              // technical leadership
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-fg mt-1 mb-2">
              Core Members
            </h2>
            <p className="font-sans text-muted text-xs md:text-sm leading-relaxed">
              Meet the visionary technical leaders who have shaped our AI/ML community across the
              years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Anshul Yadav */}
            <div className="border border-border/60 bg-bg-card/30 rounded-global p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-accent/40 transition-colors duration-300 relative group">
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-bg-card to-border flex items-center justify-center border border-border/40 text-accent font-display font-semibold text-2xl">
                  AY
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/anshul-yadav-0479111b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-colors duration-300 bg-bg-elevated/40 cursor-pointer"
                    data-cursor="hover"
                    title="LinkedIn Profile"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://anshul-yadav.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-colors duration-300 bg-bg-elevated/40 cursor-pointer"
                    data-cursor="hover"
                    title="Personal Website"
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="font-display font-bold text-lg text-fg">Anshul Yadav</h3>
                  <span className="font-mono text-[9px] text-accent uppercase tracking-wider mt-0.5 inline-block">
                    AI/ML Engineer at Kitsa
                  </span>
                </div>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  Passionate about leveraging cutting-edge technologies to create innovative
                  AI-driven solutions. With a solid foundation in Python and expertise in AI, ML,
                  and LLM applications, I have developed impactful projects, including multimodal
                  chatbots, personalized assistants, and automation tools for large-scale community
                  engagement.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted border border-border/60 bg-bg-elevated/20 px-2 py-0.5 rounded-full">
                    Machine Learning
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted border border-border/60 bg-bg-elevated/20 px-2 py-0.5 rounded-full">
                    NLP
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted border border-border/60 bg-bg-elevated/20 px-2 py-0.5 rounded-full">
                    RAG
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted border border-border/60 bg-bg-elevated/20 px-2 py-0.5 rounded-full">
                    Computer Vision
                  </span>
                </div>
              </div>
            </div>

            {/* Ayush Sharma */}
            <div className="border border-border/60 bg-bg-card/30 rounded-global p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-accent/40 transition-colors duration-300 relative group">
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-bg-card to-border flex items-center justify-center border border-border/40 text-accent font-display font-semibold text-2xl">
                  AS
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/company/tensorflow-user-group-lucknow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-colors duration-300 bg-bg-elevated/40 cursor-pointer"
                    data-cursor="hover"
                    title="LinkedIn Profile"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://aicommunitylucknow.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-colors duration-300 bg-bg-elevated/40 cursor-pointer"
                    data-cursor="hover"
                    title="Website"
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="font-display font-bold text-lg text-fg">Ayush Sharma</h3>
                  <span className="font-mono text-[9px] text-accent uppercase tracking-wider mt-0.5 inline-block">
                    AI/ML Engineer at Kitsa
                  </span>
                </div>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  AI/ML Engineer at Kitsa, where I design and deploy intelligent agent systems to
                  streamline data curation and accelerate clinical trial processes. My work blends
                  ML engineering, backend architecture, and AWS cloud to build scalable,
                  production-grade solutions for real-world healthcare impact.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted border border-border/60 bg-bg-elevated/20 px-2 py-0.5 rounded-full">
                    RAG
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted border border-border/60 bg-bg-elevated/20 px-2 py-0.5 rounded-full">
                    CI/CD
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted border border-border/60 bg-bg-elevated/20 px-2 py-0.5 rounded-full">
                    Cloud Deployments
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-wider text-muted border border-border/60 bg-bg-elevated/20 px-2 py-0.5 rounded-full">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Leaders Meta Bar */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-wider text-muted uppercase border-t border-border/20 pt-8 mt-2 w-full">
            <span>2 Total Leaders</span>
            <span className="text-border/60">•</span>
            <span>3+ Years Active</span>
            <span className="text-border/60">•</span>
            <span>2023 Founded</span>
          </div>
        </div>
      </section>

      {/* 4. OUR VOLUNTEERS */}
      <section className="w-full py-20 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase">
                // backbone
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-fg mt-1">
                Our Volunteers
              </h2>
            </div>

            {/* Year Switcher */}
            <div className="flex gap-2 border-b border-border/30 pb-1 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setSelectedYear("2025")}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border-b-2 transition-all duration-300 -mb-[6px] cursor-pointer ${
                  selectedYear === "2025"
                    ? "border-accent text-accent font-semibold"
                    : "border-transparent text-muted hover:text-fg"
                }`}
              >
                2025 ({volunteersData.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedYear("2024")}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border-b-2 transition-all duration-300 -mb-[6px] cursor-pointer ${
                  selectedYear === "2024"
                    ? "border-accent text-accent font-semibold"
                    : "border-transparent text-muted hover:text-fg"
                }`}
              >
                2024 (0)
              </button>
            </div>
          </div>

          {selectedYear === "2025" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {volunteersData.map((v, idx) => (
                <div
                  key={idx}
                  className="border border-border/40 bg-bg-card/25 rounded-global p-4 flex items-center gap-4 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border flex-shrink-0">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-display font-medium text-sm text-fg truncate">
                      {v.name}
                    </span>
                    <span className="font-mono text-[9px] text-muted uppercase tracking-wider">
                      Volunteer
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 border border-dashed border-border/60 rounded-global text-center font-mono text-xs text-muted">
              Historical archives for 2024 are being consolidated.
            </div>
          )}
        </div>
      </section>

      {/* 5. WANT TO JOIN OUR TEAM CTA */}
      <section className="w-full py-24 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4 items-center">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent-2 uppercase">
              // opportunities
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg text-3xl md:text-5xl">
              Want to Join Our Team?
            </h2>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed max-w-lg">
              We&apos;re always looking for passionate individuals who want to contribute to the AI/ML
              ecosystem in Lucknow. From event operations to speaker relations, there&apos;s a role for
              you.
            </p>
          </div>

          <Link
            href="/contact"
            data-cursor="hover"
            className="px-8 py-3.5 bg-accent text-bg font-display font-semibold text-sm rounded-global hover:bg-fg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(198,255,61,0.15)] flex items-center gap-2 cursor-pointer"
          >
            Apply as Volunteer
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. TEAM IMPACT STATS */}
      <section className="w-full py-20 px-6 md:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase">
              // numbers
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-fg mt-1">
              Team Impact
            </h2>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed mt-2">
              Together, we&apos;ve built something amazing for the Lucknow tech community.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-border/50 bg-bg-card/30 p-6 rounded-global flex flex-col items-center justify-center text-center gap-1.5 hover:border-accent/30 transition-colors duration-300">
              <span className="font-display font-bold text-2xl md:text-4xl text-accent drop-shadow-[0_0_15px_rgba(198,255,61,0.05)]">
                5+
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                Core Team Members
              </span>
            </div>
            <div className="border border-border/50 bg-bg-card/30 p-6 rounded-global flex flex-col items-center justify-center text-center gap-1.5 hover:border-accent/30 transition-colors duration-300">
              <span className="font-display font-bold text-2xl md:text-4xl text-accent drop-shadow-[0_0_15px_rgba(198,255,61,0.05)]">
                18+
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                Active Volunteers
              </span>
            </div>
            <div className="border border-border/50 bg-bg-card/30 p-6 rounded-global flex flex-col items-center justify-center text-center gap-1.5 hover:border-accent/30 transition-colors duration-300">
              <span className="font-display font-bold text-2xl md:text-4xl text-accent drop-shadow-[0_0_15px_rgba(198,255,61,0.05)]">
                500+
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                Hours Contributed
              </span>
            </div>
            <div className="border border-border/50 bg-bg-card/30 p-6 rounded-global flex flex-col items-center justify-center text-center gap-1.5 hover:border-accent/30 transition-colors duration-300">
              <span className="font-display font-bold text-2xl md:text-4xl text-accent drop-shadow-[0_0_15px_rgba(198,255,61,0.05)]">
                15+
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                Events Organized
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
