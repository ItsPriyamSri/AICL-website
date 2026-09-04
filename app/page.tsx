"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Calendar,
  Trophy,
  Users,
  Globe,
  Mail,
} from "lucide-react";
import { JaaliPattern } from "@/components/JaaliPattern";
import { TiltCard } from "@/components/TiltCard";
import { NeuralCanvas } from "@/components/NeuralCanvas";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-center items-center py-20 px-6 md:px-12 select-none overflow-hidden">
        {/* Background Neural Canvas & Jaali Pattern */}
        <div className="hero-bg-container absolute inset-0 -z-10 h-[115%] w-full pointer-events-none">
          <NeuralCanvas />
          <JaaliPattern opacity={0.04} />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10">
          {/* Lucknow Badge */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-accent-2 border border-accent-2/20 bg-accent-2/5 px-4 py-1.5 rounded-full uppercase mb-6 inline-block backdrop-blur-sm"
          >
            Lucknow, India
          </motion.span>

          {/* Massive Display Heading */}
          <h1 className="font-display font-bold leading-[1.05] tracking-tight text-center max-w-4xl mb-6 text-fg text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            <motion.span
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mr-3 sm:mr-4"
            >
              AI
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block mr-3 sm:mr-4"
            >
              Community
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-accent drop-shadow-[0_0_30px_rgba(198,255,61,0.15)] inline-block"
            >
              Lucknow
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-sans text-muted max-w-2xl mb-10 text-base md:text-lg leading-relaxed px-2"
          >
            Building the AI/ML community in the City of Nawabs. Join us for workshops, hackathons,
            and collaborative projects that push the boundaries of machine learning and artificial
            intelligence.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 mb-12"
          >
            <Link
              href="/events"
              data-cursor="hover"
              className="w-full sm:w-auto px-7 py-3.5 bg-accent text-bg font-display font-semibold text-sm rounded-global transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(198,255,61,0.15)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              Upcoming Events
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/about"
              data-cursor="hover"
              className="w-full sm:w-auto px-7 py-3.5 border border-border bg-bg-elevated/20 text-fg hover:border-accent hover:text-accent font-display font-semibold text-sm rounded-global transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              Learn More
            </Link>

            <a
              href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="w-full sm:w-auto px-7 py-3.5 border border-accent-2/30 bg-accent-2/10 text-accent-2 hover:bg-accent-2 hover:text-bg font-display font-semibold text-sm rounded-global transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Join Now
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[9px] tracking-widest text-muted uppercase mr-1">
              Follow //
            </span>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/tensorflow-user-group-lucknow/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-border/40 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/20 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/TFUGlucknow"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              aria-label="Twitter/X"
              className="w-8 h-8 rounded-full border border-border/40 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/20 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aicommunitylucknow/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-border/40 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/20 cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-none stroke-current stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/channels/1165604190475792434/1165604190475792436"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              aria-label="Discord"
              className="w-8 h-8 rounded-full border border-border/40 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/20 cursor-pointer"
            >
              <svg viewBox="0 0 128 128" className="w-4 h-4 fill-current">
                <path d="M107.7 22.9C95.2 17 81.8 14.1 68.3 14.1c-1.7 3-3.3 6.8-5 10.8A96.7 96.7 0 0053.2 24.9c-1.7-4-3.3-7.8-5-10.8-13.5 0-26.9 2.9-39.4 8.8C3.7 46.4-1.9 69.5 1 92.4A105.7 105.7 0 0032 111.2a77.7 77.7 0 006.6-10.8 68.4 68.4 0 01-10.5-5c1.9-1.4 3.7-2.9 5.5-4.5 19.5 9 40.5 9 60 0 1.8 1.6 3.6 3.1 5.5 4.5a68.4 68.4 0 01-10.5 5 77.7 77.7 0 006.6 10.8 105.7 105.7 0 0031-18.8c3.2-22.9-2.3-46-18-69.5zM42.4 80.5c-6.3 0-11.4-5.7-11.4-12.7s5.1-12.7 11.4-12.7 11.4 5.7 11.4 12.7-5.1 12.7-11.4 12.7zm42.3 0c-6.3 0-11.4-5.7-11.4-12.7s5.1-12.7 11.4-12.7 11.4 5.7 11.4 12.7-5.1 12.7-11.4 12.7z" />
              </svg>
            </a>

            {/* Commudle */}
            <a
              href="https://www.commudle.com/communities/tfug-lucknow"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              aria-label="Commudle"
              className="w-8 h-8 rounded-full border border-border/40 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/20 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
            </a>

            {/* Gmail */}
            <a
              href="mailto:aicommunitylucknow@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              aria-label="Gmail"
              className="w-8 h-8 rounded-full border border-border/40 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/20 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT WE DO (CORE PILLARS) */}
      <section className="relative w-full py-24 px-6 md:px-12 border-t border-border/30 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase leading-none">
              // core pillars
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg">
              What We Do
            </h2>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed max-w-2xl">
              We foster a robust ecosystem for knowledge acquisition and innovation in AI/ML,
              spanning foundational workshops to advanced research discourse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <TiltCard badge="LKO // DO_01">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Regular Events
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed max-w-xs">
                    Monthly meetups, workshops, and tech talks featuring industry experts and
                    community members.
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Card 2 */}
            <TiltCard badge="LKO // DO_02">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent-2">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Hackathons
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed max-w-xs">
                    Competitive coding events focused on solving real-world problems using
                    TensorFlow and ML.
                  </p>
                </div>
              </div>
            </TiltCard>

            {/* Card 3 */}
            <TiltCard badge="LKO // DO_03">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Community
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed max-w-xs">
                    Connect with like-minded developers, researchers, and AI enthusiasts in
                    Lucknow.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 3. LATEST NEWS & UPDATES */}
      <section className="relative w-full py-24 px-6 md:px-12 border-t border-border/30 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase leading-none">
              // news &amp; announcements
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg">
              Latest News &amp; Updates
            </h2>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed max-w-2xl">
              Stay updated with the latest happenings, events, and achievements from AI Community
              Lucknow.
            </p>
          </div>

          <div className="w-full border border-border/50 bg-bg-card/20 rounded-global p-8 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-accent-2/5 to-transparent pointer-events-none opacity-40" />

            <div className="max-w-xl flex flex-col items-center gap-6 relative z-10">
              <span className="font-mono text-[10px] tracking-[0.2em] text-accent-2 border border-accent-2/30 px-3.5 py-1.5 rounded-full uppercase bg-accent-2/5 animate-pulse">
                ● STATUS: WAITING FOR BROADCAST
              </span>
              <h3 className="font-display font-bold text-xl md:text-3xl text-fg max-w-md leading-tight">
                New updates dropping soon — follow our socials to be first to know
              </h3>

              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.linkedin.com/company/tensorflow-user-group-lucknow/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/50 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/TFUGlucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label="Twitter/X"
                  className="w-9 h-9 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/50 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/aicommunitylucknow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/50 cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-none stroke-current stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://discord.com/channels/1165604190475792434/1165604190475792436"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label="Discord"
                  className="w-9 h-9 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/50 cursor-pointer"
                >
                  <svg viewBox="0 0 128 128" className="w-4 h-4 fill-current">
                    <path d="M107.7 22.9C95.2 17 81.8 14.1 68.3 14.1c-1.7 3-3.3 6.8-5 10.8A96.7 96.7 0 0053.2 24.9c-1.7-4-3.3-7.8-5-10.8-13.5 0-26.9 2.9-39.4 8.8C3.7 46.4-1.9 69.5 1 92.4A105.7 105.7 0 0032 111.2a77.7 77.7 0 006.6-10.8 68.4 68.4 0 01-10.5-5c1.9-1.4 3.7-2.9 5.5-4.5 19.5 9 40.5 9 60 0 1.8 1.6 3.6 3.1 5.5 4.5a68.4 68.4 0 01-10.5 5 77.7 77.7 0 006.6 10.8 105.7 105.7 0 0031-18.8c3.2-22.9-2.3-46-18-69.5zM42.4 80.5c-6.3 0-11.4-5.7-11.4-12.7s5.1-12.7 11.4-12.7 11.4 5.7 11.4 12.7-5.1 12.7-11.4 12.7zm42.3 0c-6.3 0-11.4-5.7-11.4-12.7s5.1-12.7 11.4-12.7 11.4 5.7 11.4 12.7-5.1 12.7-11.4 12.7z" />
                  </svg>
                </a>
                <a
                  href="https://www.commudle.com/communities/tfug-lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label="Commudle"
                  className="w-9 h-9 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/50 cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="mailto:aicommunitylucknow@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label="Gmail"
                  className="w-9 h-9 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/50 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. READY TO JOIN CTA */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-transparent overflow-hidden">
        <div className="max-w-6xl mx-auto border border-border bg-bg-card/30 rounded-global p-10 md:p-20 text-center relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-radial from-accent/5 to-transparent pointer-events-none" />
          <JaaliPattern opacity={0.03} />

          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 relative z-10">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase">
              // join the network
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg text-center text-3xl md:text-5xl">
              Ready to Join Our Community?
            </h2>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed text-center max-w-lg mb-4">
              Whether you&apos;re a beginner or an expert, there&apos;s a place for you in AI
              Community Lucknow. Let&apos;s build the future of AI together.
            </p>
            <Link
              href="/contact"
              data-cursor="hover"
              className="px-8 py-4 bg-accent text-bg font-display font-semibold text-sm rounded-global hover:bg-fg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(198,255,61,0.15)] flex items-center gap-2 group cursor-pointer"
            >
              Get Involved
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
