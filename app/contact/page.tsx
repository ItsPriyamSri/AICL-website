"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  MessageSquare,
  Copy,
  Check,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Send,
  Loader2,
  Globe,
} from "lucide-react";
import { JaaliPattern } from "@/components/JaaliPattern";

const FAQS = [
  {
    q: "How can I join AI Community Lucknow?",
    a: "Simply attend one of our events or join our online community channels. There's no formal membership process – everyone interested in AI/ML is welcome!",
  },
  {
    q: "Are events free to attend?",
    a: "Yes! All our regular meetups, workshops, and most events are completely free. Some special workshops might have a nominal fee to cover materials.",
  },
  {
    q: "Do I need prior AI/ML experience?",
    a: "Not at all! We welcome people of all skill levels, from complete beginners to experienced practitioners. We have events tailored for different experience levels.",
  },
  {
    q: "Can I speak at an event?",
    a: "We're always looking for speakers to share their knowledge and experiences. Contact us with your topic idea and we'll help you prepare.",
  },
];

export default function ContactPage() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResponse, setFormResponse] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // Copy email state
  const [copied, setCopied] = useState(false);

  // Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aicommunitylucknow@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, botField }),
      });
      const data = await res.json();

      if (res.ok) {
        setFormResponse({
          message: data.message || "Your message has been sent successfully!",
          type: "success",
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setFormResponse({
          message: data.error || "Failed to send message. Please try again.",
          type: "error",
        });
      }
    } catch {
      setFormResponse({
        message: "An unexpected connection error occurred. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 border-b border-border/30 overflow-hidden">
        <JaaliPattern opacity={0.035} />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-accent-2 border border-accent-2/20 bg-accent-2/5 px-4 py-1.5 rounded-full uppercase mb-6 inline-block backdrop-blur-sm">
            Get In Touch
          </span>

          <h1 className="font-display font-bold leading-[1.05] tracking-tight text-center max-w-4xl mb-6 text-fg text-4xl sm:text-6xl md:text-7xl">
            Connect with{" "}
            <span className="text-accent drop-shadow-[0_0_30px_rgba(198,255,61,0.15)]">
              AI Community Lucknow
            </span>
          </h1>

          <p className="font-sans text-muted max-w-2xl text-base md:text-lg leading-relaxed">
            Have questions, ideas, or interested in speaking or partnering? Reach out to us directly
            or drop us a message below.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM */}
      <section className="relative w-full py-20 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Checklist */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase">
                // reach out
              </span>
              <h2 className="font-display font-bold text-3xl text-fg mt-1">Get In Touch</h2>
            </div>

            {/* Email Card */}
            <div className="border border-border/60 bg-bg-card/30 p-5 rounded-global flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-full border border-border bg-bg-elevated/40 flex items-center justify-center text-accent flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    EMAIL
                  </span>
                  <span className="font-sans text-xs md:text-sm text-fg font-medium truncate">
                    aicommunitylucknow@gmail.com
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                data-cursor="hover"
                title="Copy email address"
                className="w-8 h-8 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-colors bg-bg-elevated/30 flex-shrink-0 cursor-pointer"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="border border-border/60 bg-bg-card/30 p-5 rounded-global flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-border bg-bg-elevated/40 flex items-center justify-center text-accent flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                  LOCATION
                </span>
                <span className="font-sans text-xs md:text-sm text-fg font-medium">
                  Lucknow, Uttar Pradesh, India
                </span>
              </div>
            </div>

            {/* Community Channels Card */}
            <div className="border border-border/60 bg-bg-card/30 p-5 rounded-global flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-border bg-bg-elevated/40 flex items-center justify-center text-accent flex-shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                  COMMUNITY CHANNELS
                </span>
              </div>
              <div className="flex flex-col gap-2 pl-13 pt-1">
                <a
                  href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="font-sans text-xs md:text-sm text-fg hover:text-accent flex items-center gap-2 transition-colors cursor-pointer"
                >
                  💬 WhatsApp: AI Community Lucknow
                </a>
                <a
                  href="https://discord.com/channels/1165604190475792434/1165604190475792436"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="font-sans text-xs md:text-sm text-fg hover:text-accent flex items-center gap-2 transition-colors cursor-pointer"
                >
                  🤖 Discord Server
                </a>
              </div>
            </div>

            {/* Social Follow Icons */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
                CONNECT GLOBALLY //
              </span>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.linkedin.com/company/tensorflow-user-group-lucknow/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/40 cursor-pointer"
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
                  className="w-9 h-9 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/40 cursor-pointer"
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
                  className="w-9 h-9 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/40 cursor-pointer"
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
                  href="https://www.commudle.com/communities/tfug-lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label="Commudle"
                  className="w-9 h-9 rounded-full border border-border/60 hover:border-accent hover:text-accent flex items-center justify-center text-muted transition-all duration-300 hover:scale-105 bg-bg-elevated/40 cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Checklist */}
            <div className="border-t border-border/30 pt-6 flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
                ● JOIN OUR COMMUNITY //
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Attend our monthly meetups and workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Participate in hackathons and competitions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Contribute to open-source projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Share your knowledge through talks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Volunteer for event organization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="border border-border/60 bg-bg-card/40 rounded-global p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden">
              <div className="flex flex-col gap-2">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-fg">
                  Send a Message
                </h2>
                <p className="font-sans text-xs md:text-sm text-muted">
                  Fill out the form below, and we will get back to you shortly.
                </p>
              </div>

              {formResponse && (
                <div
                  className={`p-4 rounded-global font-sans text-xs border ${
                    formResponse.type === "success"
                      ? "bg-accent/10 border-accent/30 text-accent"
                      : "bg-red-500/10 border-red-500/30 text-red-400"
                  }`}
                >
                  {formResponse.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="botField"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[9px] uppercase tracking-wider text-muted">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-global border border-border bg-bg-elevated/40 text-fg text-xs md:text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[9px] uppercase tracking-wider text-muted">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-global border border-border bg-bg-elevated/40 text-fg text-xs md:text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Subject of message"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-global border border-border bg-bg-elevated/40 text-fg text-xs md:text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-global border border-border bg-bg-elevated/40 text-fg text-xs md:text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="hover"
                  className="mt-2 w-full sm:w-auto self-start px-8 py-3.5 bg-accent text-bg font-display font-semibold text-xs tracking-wide rounded-global hover:bg-fg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(198,255,61,0.1)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HEART OF LUCKNOW MAP CARD */}
      <section className="w-full py-16 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-display font-bold text-xl md:text-2xl text-fg">
              Find us in the heart of Lucknow, the City of Nawabs.
            </h3>
            <p className="font-sans text-xs text-muted">Lucknow, Uttar Pradesh, India</p>
          </div>

          <div className="relative w-full h-80 rounded-global border border-border overflow-hidden bg-bg-card">
            <iframe
              title="Lucknow Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.16854124976!2d80.8793393962649!3d26.848623098583416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.6) contrast(1.1) opacity(0.85)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full py-24 px-6 md:px-12 bg-transparent">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center items-center">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase">
              // knowledge base
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-fg">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-muted text-xs md:text-sm max-w-md">
              Quick answers to common questions about AI Community Lucknow.
            </p>
          </div>

          <div className="flex flex-col gap-4 border border-border/50 bg-bg-card/25 p-4 md:p-6 rounded-global">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-border/25 last:border-b-0 pb-4 last:pb-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    data-cursor="hover"
                    aria-expanded={isOpen}
                    className="w-full py-3 text-left flex justify-between items-center gap-4 text-fg hover:text-accent transition-colors duration-300 font-display font-bold text-sm md:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-1 pb-2 font-sans text-xs md:text-sm text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
