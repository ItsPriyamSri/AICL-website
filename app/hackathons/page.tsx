"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Trophy,
  Users,
  Code2,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { JaaliPattern } from "@/components/JaaliPattern";
import { TiltCard } from "@/components/TiltCard";

export default function HackathonsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 border-b border-border/30 overflow-hidden">
        <JaaliPattern opacity={0.035} />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-accent-2 border border-accent-2/20 bg-accent-2/5 px-4 py-1.5 rounded-full uppercase mb-6 inline-block backdrop-blur-sm">
            Hackathons &amp; Competitions
          </span>

          <h1 className="font-display font-bold leading-[1.05] tracking-tight text-center max-w-4xl mb-6 text-fg text-4xl sm:text-6xl md:text-7xl">
            Build, Compete, and{" "}
            <span className="text-accent drop-shadow-[0_0_30px_rgba(198,255,61,0.15)]">
              Win Big
            </span>
          </h1>

          <p className="font-sans text-muted max-w-2xl text-base md:text-lg leading-relaxed">
            Join our exciting hackathons and coding competitions where innovation meets opportunity.
            Showcase your AI/ML skills, collaborate with talented developers, and win amazing prizes.
          </p>
        </div>
      </section>

      {/* 2. UPCOMING HACKATHONS */}
      <section className="relative w-full py-20 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase">
              // competition schedule
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-fg">
              Upcoming Hackathons
            </h2>
          </div>

          <div className="w-full border border-border/50 bg-bg-card/25 rounded-global p-10 md:p-14 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-accent-2/5 to-transparent pointer-events-none opacity-40" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-accent-2 border border-accent-2/30 px-3 py-1 rounded-full uppercase bg-accent-2/5 animate-pulse">
              ● STATUS: IN PREPARATION
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl text-fg max-w-md">
              Next Hackathon Edition Coming Soon
            </h3>
            <p className="font-sans text-xs md:text-sm text-muted max-w-md">
              We are finalizing themes, sponsors, and prize pools for our next flagship hackathon.
              Join our community to get early announcements and team formation privileges!
            </p>
            <a
              href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="mt-2 px-6 py-2.5 bg-accent text-bg font-display font-semibold text-xs rounded-global hover:bg-fg transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              Join Hackers WhatsApp Group
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. WHY PARTICIPATE? */}
      <section className="relative w-full py-24 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase leading-none">
              // advantages
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg">
              Why Participate?
            </h2>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed max-w-2xl">
              Hackathons are intensive sprint experiences designed to accelerate learning and build
              real-world impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <TiltCard badge="BENEFIT // 01">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Win Prizes
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                    Compete for substantial cash prizes, sponsor credits, cloud resources, and
                    hardware perks.
                  </p>
                </div>
              </div>
            </TiltCard>

            <TiltCard badge="BENEFIT // 02">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent-2">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Network
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                    Meet co-founders, industry mentors, research collaborators, and hiring managers
                    from top tech startups.
                  </p>
                </div>
              </div>
            </TiltCard>

            <TiltCard badge="BENEFIT // 03">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Learn &amp; Grow
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                    Push your technical boundaries by turning an abstract concept into a working
                    deployed demo in 24–48 hours.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 4. PAST HACKATHONS */}
      <section className="relative w-full py-24 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase leading-none">
              // previous editions
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg text-3xl md:text-5xl">
              Past Hackathons
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Hackathon 1: Lucknow AI Hackathon 2025 */}
            <div className="border border-border/60 bg-bg-card/30 rounded-global overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 relative h-60 lg:h-full border-b lg:border-b-0 lg:border-r border-border/40">
                <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-bg-card to-bg flex items-center justify-center p-6 overflow-hidden">
                  <JaaliPattern opacity={0.05} />
                  <div className="px-6 text-center z-10 flex flex-col items-center gap-2">
                    <span className="font-mono text-[9px] tracking-widest text-accent-2 uppercase">
                      AI/LKO // HACKATHON
                    </span>
                    <h4 className="font-display font-bold text-lg text-fg">
                      Lucknow AI Hackathon 2025
                    </h4>
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted border border-border bg-bg/95 px-3 py-1 rounded-full">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg">
                    Lucknow AI Hackathon 2025
                  </h3>
                  <p className="font-sans text-muted text-xs md:text-sm leading-relaxed">
                    Our inaugural hackathon focused on building AI solutions for smart city
                    initiatives, LLM security, and real-world healthcare challenges.
                  </p>

                  {/* Metadata Row */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-y border-border/20 py-4 font-mono text-[10px] text-muted">
                    <div className="flex flex-col gap-1">
                      <span className="uppercase text-muted/60">Duration</span>
                      <span className="text-fg font-semibold">6 hours</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="uppercase text-muted/60">Venue</span>
                      <span className="text-fg font-semibold">Innovation Hub Lucknow</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="uppercase text-muted/60">Participants</span>
                      <span className="text-fg font-semibold">150+</span>
                    </div>
                  </div>

                  {/* Winners Showcase */}
                  <div className="flex flex-col gap-3 mt-2">
                    <h4 className="font-mono text-[10px] tracking-widest text-fg uppercase">
                      🏆 Hackathon Winners //
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* 1st Place */}
                      <div className="border border-border/40 bg-bg-elevated/20 p-3 rounded-lg flex items-center justify-between gap-4">
                        <div className="flex flex-col min-w-0">
                          <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-accent-2">
                            1st Place
                          </span>
                          <span className="font-display font-medium text-xs text-fg truncate mt-0.5">
                            Guardial | Your LLM Guard
                          </span>
                        </div>
                        <a
                          href="https://github.com/ACE-codes21/Gaurdial"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="hover"
                          className="flex items-center gap-1 px-3 py-1.5 border border-border/80 hover:border-accent hover:text-accent font-mono text-[9px] text-muted rounded-global bg-bg-card/40 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          CODE
                        </a>
                      </div>

                      {/* 2nd Place */}
                      <div className="border border-border/40 bg-bg-elevated/20 p-3 rounded-lg flex items-center justify-between gap-4">
                        <div className="flex flex-col min-w-0">
                          <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-accent-2">
                            2nd Place
                          </span>
                          <span className="font-display font-medium text-xs text-fg truncate mt-0.5">
                            PhysioCoachAi
                          </span>
                        </div>
                        <a
                          href="https://github.com/Python-kunal/physio_app"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="hover"
                          className="flex items-center gap-1 px-3 py-1.5 border border-border/80 hover:border-accent hover:text-accent font-mono text-[9px] text-muted rounded-global bg-bg-card/40 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          CODE
                        </a>
                      </div>

                      {/* 3rd Place */}
                      <div className="border border-border/40 bg-bg-elevated/20 p-3 rounded-lg flex items-center justify-between gap-4">
                        <div className="flex flex-col min-w-0">
                          <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-accent-2">
                            3rd Place
                          </span>
                          <span className="font-display font-medium text-xs text-fg truncate mt-0.5">
                            Samvedna
                          </span>
                        </div>
                        <a
                          href="https://github.com/shikhar1809/Samvedna_GenAi_Hackathon_Main"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="hover"
                          className="flex items-center gap-1 px-3 py-1.5 border border-border/80 hover:border-accent hover:text-accent font-mono text-[9px] text-muted rounded-global bg-bg-card/40 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          CODE
                        </a>
                      </div>

                      {/* Best Innovative */}
                      <div className="border border-border/40 bg-bg-elevated/20 p-3 rounded-lg flex items-center justify-between gap-4">
                        <div className="flex flex-col min-w-0">
                          <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-accent">
                            Best Innovative
                          </span>
                          <span className="font-display font-medium text-xs text-fg truncate mt-0.5">
                            Chronic AI
                          </span>
                        </div>
                        <a
                          href="https://github.com/prateek-workspace/chronic-ai-agent"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="hover"
                          className="flex items-center gap-1 px-3 py-1.5 border border-border/80 hover:border-accent hover:text-accent font-mono text-[9px] text-muted rounded-global bg-bg-card/40 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          CODE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hackathon 2: Hack to Crack 1.0 */}
            <div className="border border-border/60 bg-bg-card/30 rounded-global overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 relative h-60 lg:h-full border-b lg:border-b-0 lg:border-r border-border/40">
                <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-bg-card to-bg flex items-center justify-center p-6 overflow-hidden">
                  <JaaliPattern opacity={0.05} />
                  <div className="px-6 text-center z-10 flex flex-col items-center gap-2">
                    <span className="font-mono text-[9px] tracking-widest text-accent-2 uppercase">
                      AI/LKO // HACKATHON
                    </span>
                    <h4 className="font-display font-bold text-lg text-fg">Hack to Crack 1.0</h4>
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted border border-border bg-bg/95 px-3 py-1 rounded-full">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg">
                    Hack to Crack 1.0
                  </h3>
                  <p className="font-sans text-muted text-xs md:text-sm leading-relaxed">
                    Join us for an exciting AI/ML Hackathon where innovation meets creativity!
                    Tackle real-world challenges using artificial intelligence and machine learning
                    while collaborating with brilliant minds from diverse backgrounds. Whether you&apos;re
                    a beginner or an expert, explore domains like computer vision, NLP, and
                    reinforcement learning to build solutions that make an impact.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-y border-border/20 py-4 font-mono text-[10px] text-muted">
                    <div className="flex flex-col gap-1">
                      <span className="uppercase text-muted/60">Duration</span>
                      <span className="text-fg font-semibold">36+ hours</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="uppercase text-muted/60">Venue</span>
                      <span className="text-fg font-semibold">
                        Shri Ramswaroop Memorial University
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="uppercase text-muted/60">Participants</span>
                      <span className="text-fg font-semibold">250+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hackathon 3: Viveka 4.0 */}
            <div className="border border-border/60 bg-bg-card/30 rounded-global overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 relative h-60 lg:h-full border-b lg:border-b-0 lg:border-r border-border/40">
                <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-bg-card to-bg flex items-center justify-center p-6 overflow-hidden">
                  <JaaliPattern opacity={0.05} />
                  <div className="px-6 text-center z-10 flex flex-col items-center gap-2">
                    <span className="font-mono text-[9px] tracking-widest text-accent-2 uppercase">
                      AI/LKO // HACKATHON
                    </span>
                    <h4 className="font-display font-bold text-lg text-fg">
                      VIVEKA THE INTELLIGENCE : 4.0
                    </h4>
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted border border-border bg-bg/95 px-3 py-1 rounded-full">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg">
                    VIVEKA THE INTELLIGENCE : 4.0
                  </h3>
                  <p className="font-sans text-muted text-xs md:text-sm leading-relaxed">
                    A hackathon exclusively for students to encourage innovation and learning in
                    artificial intelligence, focusing on mental health solutions and smart study
                    tools.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-y border-border/20 py-4 font-mono text-[10px] text-muted">
                    <div className="flex flex-col gap-1">
                      <span className="uppercase text-muted/60">Duration</span>
                      <span className="text-fg font-semibold">48+ hours</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="uppercase text-muted/60">Venue</span>
                      <span className="text-fg font-semibold">
                        Shri Ramswaroop Memorial University
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="uppercase text-muted/60">Participants</span>
                      <span className="text-fg font-semibold">400+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HACKATHON GUIDELINES */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase leading-none">
              // participation code
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg text-3xl md:text-5xl">
              Hackathon Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-border/50 bg-bg-card/30 rounded-global flex flex-col gap-3">
              <h3 className="font-display font-bold text-lg text-fg">Team Formation</h3>
              <p className="font-sans text-xs text-muted leading-relaxed">
                Teams can consist of 2–4 members. Cross-institutional and multidisciplinary teams
                are strongly encouraged.
              </p>
            </div>
            <div className="p-6 border border-border/50 bg-bg-card/30 rounded-global flex flex-col gap-3">
              <h3 className="font-display font-bold text-lg text-fg">Submission</h3>
              <p className="font-sans text-xs text-muted leading-relaxed">
                All code must be submitted to a public GitHub repository with an open license and a
                2-minute demo video before deadline.
              </p>
            </div>
            <div className="p-6 border border-border/50 bg-bg-card/30 rounded-global flex flex-col gap-3">
              <h3 className="font-display font-bold text-lg text-fg">Judging Criteria</h3>
              <p className="font-sans text-xs text-muted leading-relaxed">
                Projects are objectively evaluated on originality, technical architecture, product
                usability, and societal impact.
              </p>
            </div>
            <div className="p-6 border border-border/50 bg-bg-card/30 rounded-global flex flex-col gap-3">
              <h3 className="font-display font-bold text-lg text-fg">What We Provide</h3>
              <p className="font-sans text-xs text-muted leading-relaxed">
                High-speed internet, mentorship from Senior ML Engineers, cloud API credits, food &amp;
                drinks throughout the hackathon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
