"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/hackathons", label: "Hackathons" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled
          ? "border-b border-border/40 bg-bg/85 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 select-none group cursor-pointer"
          data-cursor="hover"
        >
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/brand/logo.png"
              alt="AI Community Lucknow Logo"
              fill
              priority
              sizes="32px"
              className="object-contain group-hover:rotate-6 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-fg group-hover:text-accent transition-colors duration-300 leading-none">
              AI Community
            </span>
            <span className="font-display font-medium text-[10px] tracking-widest text-accent-2 leading-none uppercase mt-0.5">
              Lucknow
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="hover"
                className={cn(
                  "font-sans text-sm font-medium transition-all duration-300 relative py-1 cursor-pointer",
                  isActive ? "text-accent" : "text-muted hover:text-fg"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider text-muted border border-border/80 bg-bg-card/40 px-2.5 py-1 rounded-full uppercase">
            Lucknow, India
          </span>

          <ThemeToggle />

          <div className="hidden sm:block">
            <a
              href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="px-5 py-2.5 bg-accent text-bg font-display font-semibold text-xs tracking-wide rounded-global hover:bg-fg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(198,255,61,0.1)] flex items-center gap-1.5 cursor-pointer"
            >
              Join Community
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 border border-border bg-bg-elevated flex items-center justify-center rounded-full hover:border-accent text-fg transition-colors duration-300 cursor-pointer"
            data-cursor="hover"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-bg/95 backdrop-blur-xl border-b border-border/60 p-6 flex flex-col gap-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-display font-medium transition-colors py-2 border-b border-border/20 flex items-center justify-between",
                    isActive ? "text-accent" : "text-muted hover:text-fg"
                  )}
                >
                  {link.label}
                  {isActive && <span className="w-2 h-2 rounded-full bg-accent" />}
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-accent text-bg font-display font-semibold text-sm rounded-global flex items-center justify-center gap-2"
            >
              Join Community
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <span className="text-center font-mono text-[10px] text-muted uppercase tracking-widest pt-2">
              Lucknow, India // Est. 2024
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
