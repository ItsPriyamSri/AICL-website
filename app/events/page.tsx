"use client";

import React, { useState } from "react";
import { ArrowUpRight, Calendar, Clock, Filter, Sparkles, Trophy, Users, Terminal } from "lucide-react";
import { JaaliPattern } from "@/components/JaaliPattern";
import { TiltCard } from "@/components/TiltCard";
import eventsData from "@/lib/eventsData.json";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);

  const categories = ["All", "Workshops", "Tech Talks", "Meetups", "Sessions"];

  const filteredEvents =
    selectedCategory === "All"
      ? eventsData
      : eventsData.filter((ev) => ev.category === selectedCategory);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 border-b border-border/30 overflow-hidden">
        <JaaliPattern opacity={0.035} />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-accent-2 border border-accent-2/20 bg-accent-2/5 px-4 py-1.5 rounded-full uppercase mb-6 inline-block backdrop-blur-sm">
            Events &amp; Workshops
          </span>

          <h1 className="font-display font-bold leading-[1.05] tracking-tight text-center max-w-4xl mb-6 text-fg text-4xl sm:text-6xl md:text-7xl">
            Learn, Connect, and{" "}
            <span className="text-accent drop-shadow-[0_0_30px_rgba(198,255,61,0.15)]">
              Grow Together
            </span>
          </h1>

          <p className="font-sans text-muted max-w-2xl text-base md:text-lg leading-relaxed">
            Advance your AI/ML proficiency and integrate with Lucknow&apos;s thriving tech community
            through our regular professional events, workshops, and meetups.
          </p>
        </div>
      </section>

      {/* 2. UPCOMING EVENTS */}
      <section className="relative w-full py-20 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase">
              // schedule
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-fg">
              Upcoming Events
            </h2>
          </div>

          <div className="w-full border border-border/50 bg-bg-card/25 rounded-global p-10 md:p-14 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial from-accent-2/5 to-transparent pointer-events-none opacity-40" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-accent-2 border border-accent-2/30 px-3 py-1 rounded-full uppercase bg-accent-2/5">
              ● SYSTEM DIAGNOSTIC: VACANT
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl text-fg max-w-md">
              No upcoming events scheduled right now
            </h3>
            <p className="font-sans text-xs md:text-sm text-muted max-w-md">
              We are curating high-impact hackathons, agent workshops, and developer sprints. Follow
              our WhatsApp and Discord channels to be the first to know!
            </p>
            <a
              href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="mt-2 px-6 py-2.5 bg-accent text-bg font-display font-semibold text-xs rounded-global hover:bg-fg transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              Join Announcement Channel
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. TYPES OF EVENTS */}
      <section className="relative w-full py-24 px-6 md:px-12 border-b border-border/30 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="max-w-3xl flex flex-col gap-4">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase leading-none">
              // event classification
            </span>
            <h2 className="font-display font-bold leading-tight tracking-tight text-fg">
              Types of Events
            </h2>
            <p className="font-sans text-muted text-sm md:text-base leading-relaxed max-w-2xl">
              We organize various types of events to cater to different learning styles and
              experience levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <TiltCard badge="FORMAT // 01">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Workshops
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                    Hands-on learning sessions where you&apos;ll build projects, write code, and
                    gain practical experience with AI/ML tools and frameworks.
                  </p>
                </div>
              </div>
            </TiltCard>

            <TiltCard badge="FORMAT // 02">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent-2">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Tech Talks
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                    Expert presentations on cutting-edge research, industry trends, and real-world
                    applications of AI/ML technologies.
                  </p>
                </div>
              </div>
            </TiltCard>

            <TiltCard badge="FORMAT // 03">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-12 h-12 rounded-full border border-border/80 bg-bg-elevated/40 flex items-center justify-center text-accent">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-fg leading-none tracking-tight">
                    Meetups
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                    Casual networking events where community members share experiences, discuss
                    projects, and build lasting professional relationships.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 4. PAST EVENTS ARCHIVE */}
      <section className="relative w-full py-24 px-6 md:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-accent uppercase leading-none">
                // event archive
              </span>
              <h2 className="font-display font-bold leading-tight tracking-tight text-fg text-3xl md:text-5xl">
                Past Events
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-3.5 h-3.5 text-muted mr-1 hidden sm:inline" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  data-cursor="hover"
                  className={`font-mono text-[10px] tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-accent text-bg border-accent font-semibold"
                      : "border-border/80 text-muted hover:border-accent hover:text-accent bg-bg-elevated/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((ev) => {
              const isExpanded = expandedEventId === ev.id;
              return (
                <div
                  key={ev.id}
                  className="border border-border/50 bg-bg-card/35 p-6 md:p-8 rounded-global flex flex-col justify-between hover:border-border transition-colors duration-300"
                >
                  <div className="flex flex-col gap-4">
                    {/* Header badges */}
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex flex-wrap gap-2">
                        {ev.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                              tIdx === 0
                                ? "text-accent border-accent/20 bg-accent/5"
                                : "text-accent-2 border-accent-2/20 bg-accent-2/5"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-[8px] text-accent-2 border border-accent-2/30 bg-accent-2/5 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                        {ev.attendees}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg md:text-xl text-fg hover:text-accent transition-colors duration-300 mt-2">
                      <a
                        href={ev.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                      >
                        {ev.title}
                      </a>
                    </h3>

                    {/* Description with expand */}
                    <p className="font-sans text-xs md:text-sm text-muted leading-relaxed">
                      {isExpanded
                        ? ev.description
                        : ev.description.length > 150
                        ? `${ev.description.slice(0, 150)}...`
                        : ev.description}
                      {ev.description.length > 150 && (
                        <button
                          type="button"
                          onClick={() => setExpandedEventId(isExpanded ? null : ev.id)}
                          className="font-mono text-[9px] text-accent hover:underline font-bold uppercase ml-2 cursor-pointer"
                          data-cursor="hover"
                        >
                          {isExpanded ? "[Show Less]" : "[Show More]"}
                        </button>
                      )}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-border/20">
                    <div className="flex flex-col gap-1 font-mono text-[9px] text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-accent" />
                        <span>{ev.date}</span>
                      </div>
                      {ev.time && (
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-accent" />
                          <span>{ev.time}</span>
                        </div>
                      )}
                    </div>

                    <a
                      href={ev.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="font-mono text-[10px] tracking-wider text-accent hover:underline flex items-center gap-1 cursor-pointer uppercase"
                    >
                      View Details
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
