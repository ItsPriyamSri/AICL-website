import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-bg-card/30 border-t border-border/40 py-12 px-6 md:px-12 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/brand/logo.png"
                  alt="AI Community Lucknow Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wide text-fg leading-none">
                  AI Community
                </span>
                <span className="font-display font-medium text-[10px] tracking-widest text-accent-2 leading-none uppercase mt-0.5">
                  Lucknow
                </span>
              </div>
            </div>
            <p className="font-sans text-xs text-muted max-w-sm leading-relaxed mt-2">
              Building AI/ML community in the City of Nawabs. Connecting developers, researchers,
              and creators to foster next-generation innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 md:items-center">
            <div className="w-full md:max-w-[120px] flex flex-col gap-3">
              <h4 className="font-mono text-[10px] tracking-widest text-fg uppercase border-b border-border/40 pb-2">
                Links
              </h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="font-sans text-xs text-muted hover:text-accent transition-colors duration-300 cursor-pointer"
                  data-cursor="hover"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="font-sans text-xs text-muted hover:text-accent transition-colors duration-300 cursor-pointer"
                  data-cursor="hover"
                >
                  About
                </Link>
                <Link
                  href="/events"
                  className="font-sans text-xs text-muted hover:text-accent transition-colors duration-300 cursor-pointer"
                  data-cursor="hover"
                >
                  Events
                </Link>
                <Link
                  href="/hackathons"
                  className="font-sans text-xs text-muted hover:text-accent transition-colors duration-300 cursor-pointer"
                  data-cursor="hover"
                >
                  Hackathons
                </Link>
                <Link
                  href="/team"
                  className="font-sans text-xs text-muted hover:text-accent transition-colors duration-300 cursor-pointer"
                  data-cursor="hover"
                >
                  Team
                </Link>
                <Link
                  href="/contact"
                  className="font-sans text-xs text-muted hover:text-accent transition-colors duration-300 cursor-pointer"
                  data-cursor="hover"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          {/* Social / Connect */}
          <div className="flex flex-col gap-4 md:items-end">
            <div className="w-full md:max-w-[240px] flex flex-col gap-3">
              <h4 className="font-mono text-[10px] tracking-widest text-fg uppercase border-b border-border/40 pb-2 md:text-right">
                Connect
              </h4>
              <div className="flex flex-wrap gap-2 md:justify-end mt-1">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/tensorflow-user-group-lucknow/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/40 cursor-pointer"
                  data-cursor="hover"
                  aria-label="LinkedIn"
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
                  className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/40 cursor-pointer"
                  data-cursor="hover"
                  aria-label="Twitter/X"
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
                  className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/40 cursor-pointer"
                  data-cursor="hover"
                  aria-label="Instagram"
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
                  className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/40 cursor-pointer"
                  data-cursor="hover"
                  aria-label="Discord"
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
                  className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/40 cursor-pointer"
                  data-cursor="hover"
                  aria-label="Commudle"
                >
                  <Globe className="w-4 h-4" />
                </a>

                {/* Gmail */}
                <a
                  href="mailto:aicommunitylucknow@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/40 cursor-pointer"
                  data-cursor="hover"
                  aria-label="Gmail"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and tag */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/30 pt-6">
          <p className="font-mono text-[10px] text-muted text-center sm:text-left leading-normal">
            © 2026 AI Community Lucknow. Building AI/ML community in the City of Nawabs.
          </p>
          <p className="font-mono text-[10px] text-muted/60 text-center sm:text-right">
            LKO // FNDN_M02
          </p>
        </div>
      </div>
    </footer>
  );
}
