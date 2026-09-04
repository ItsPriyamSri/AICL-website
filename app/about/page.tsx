"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Code, GraduationCap } from "lucide-react";
import { JaaliPattern } from "@/components/JaaliPattern";
import { TiltCard } from "@/components/TiltCard";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 border-b border-border/30 overflow-hidden">
        <JaaliPattern opacity={0.035} />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-accent-2 border border-accent-2/20 bg-accent-2/5 px-4 py-1.5 rounded-full uppercase mb-6 inline-block backdrop-blur-sm">
            About AI Community Lucknow
          </span>

          <h1 className="font-display font-bold leading-[1.05] tracking-tight text-center max-w-4xl mb-6 text-fg text-4xl sm:text-6xl md:text-7xl">
            Building AI/ML Community in the{" "}
            <span className="text-accent drop-shadow-[0_0_30px_rgba(198,255,61,0.15)]">
              City of Nawabs
            </span>
          </h1>

          <p className="font-sans text-muted max-w-2xl text-base md:text-lg leading-relaxed">
            AI Community Lucknow is a vibrant community of AI enthusiasts, machine learning
            practitioners, and technology innovators dedicated to advancing artificial intelligence
            in Uttar Pradesh&apos;s capital city.
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="relative w-full py-20 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="relative p-8 md:p-12 border border-border/60 bg-bg-card/40 rounded-global flex flex-col gap-6 overflow-hidden">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase">
                // core commitment
              </span>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-fg">
                Our Mission
              </h2>
            </div>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed">
              Committed to empowering the AI/ML landscape in Lucknow by delivering accessible
              educational pathways, actively fostering innovation, and building a supportive
              ecosystem for developers, students, and researchers to collaboratively grow and make
              significant contributions.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative p-8 md:p-12 border border-border/60 bg-bg-card/40 rounded-global flex flex-col gap-6 overflow-hidden">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent-2 uppercase">
                // future horizon
              </span>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-fg">
                Our Vision
              </h2>
            </div>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed">
              Aspire to transform Lucknow into a pivotal center for Artificial Intelligence and
              Machine Learning innovation in North India, bridging advanced research with tangible
              applications, and empowering future AI practitioners to drive impactful solutions for
              global challenges.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="relative w-full py-24 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase leading-none">
              // what we do
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg">
              What We Do
            </h2>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed max-w-2xl">
              Our activities span across education, innovation, and community building in the AI/ML
              space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <TiltCard badge="PILLAR // 01">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Community Events
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                    Regular meetups, workshops, and seminars featuring industry experts, researchers,
                    and community members sharing knowledge and experiences in AI/ML.
                  </p>
                </div>
              </div>
            </TiltCard>

            <TiltCard badge="PILLAR // 02">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent-2">
                  <Code className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Hands-on Workshops
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                    Practical training sessions covering TensorFlow, PyTorch, computer vision, NLP,
                    and other cutting-edge AI technologies with real-world project implementations.
                  </p>
                </div>
              </div>
            </TiltCard>

            <TiltCard badge="PILLAR // 03">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Mentorship Programs
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                    Connecting experienced practitioners with newcomers to provide guidance, career
                    advice, and support for personal and professional growth in the AI/ML field.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 4. OUR GROWING COMMUNITY (METRICS) */}
      <section className="relative w-full py-24 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase leading-none">
              // impact &amp; reach
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg">
              Our Growing Community
            </h2>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed max-w-xl">
              Since our inception, we&apos;ve been steadily building a strong foundation for AI/ML
              education in Lucknow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
            <div className="flex flex-col gap-2 border-l border-border/50 pl-4 py-2">
              <span className="font-display font-bold text-4xl md:text-6xl text-accent">500+</span>
              <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Community Members
              </span>
            </div>
            <div className="flex flex-col gap-2 border-l border-border/50 pl-4 py-2">
              <span className="font-display font-bold text-4xl md:text-6xl text-accent">15+</span>
              <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Events Organized
              </span>
            </div>
            <div className="flex flex-col gap-2 border-l border-border/50 pl-4 py-2">
              <span className="font-display font-bold text-4xl md:text-6xl text-accent">20+</span>
              <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Expert Speakers
              </span>
            </div>
            <div className="flex flex-col gap-2 border-l border-border/50 pl-4 py-2">
              <span className="font-display font-bold text-4xl md:text-6xl text-accent">30+</span>
              <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Projects Showcased
              </span>
            </div>
            <div className="flex flex-col gap-2 border-l border-border/50 pl-4 py-2">
              <span className="font-display font-bold text-4xl md:text-6xl text-accent">3+</span>
              <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Annual Hackathons
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOIN OUR JOURNEY CTA */}
      <section className="w-full py-24 px-6 md:px-12 bg-transparent">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4 items-center">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent-2 uppercase">
              // community ecosystem
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg text-3xl md:text-5xl">
              Join Our Journey
            </h2>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed max-w-lg">
              Whether you&apos;re a student, professional, researcher, or simply curious about
              AI/ML, you&apos;re welcome to be part of our growing community in Lucknow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="w-full sm:w-auto px-8 py-3.5 bg-accent text-bg font-display font-semibold text-sm rounded-global hover:bg-fg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(198,255,61,0.15)] flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Join Community
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              data-cursor="hover"
              className="w-full sm:w-auto px-8 py-3.5 border border-border bg-bg-elevated/20 text-fg hover:border-accent hover:text-accent font-display font-semibold text-sm rounded-global transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
