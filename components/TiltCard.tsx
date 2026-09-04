"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { JaaliPattern } from "./JaaliPattern";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  showWatermark?: boolean;
}

export function TiltCard({
  children,
  className,
  badge,
  showWatermark = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      data-cursor="hover"
      className={cn(
        "group relative h-full flex flex-col justify-between p-8 md:p-10 border border-border/60 bg-bg-card/45 rounded-global overflow-hidden select-none hover:border-accent/40 shadow-sm hover:shadow-[0_20px_50px_rgba(198,255,61,0.03)] cursor-pointer",
        className
      )}
    >
      {showWatermark && (
        <div className="absolute right-0 bottom-0 w-28 h-28 overflow-hidden rounded-br-global opacity-[0.06] group-hover:opacity-[0.16] transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 scale-125 translate-x-4 translate-y-4 rotate-12">
            <JaaliPattern opacity={1} color="var(--accent-2)" />
          </div>
        </div>
      )}

      {children}

      {badge && (
        <div className="relative mt-8 font-mono text-[9px] tracking-widest text-muted group-hover:text-accent transition-colors duration-300 flex items-center gap-1">
          {badge}
        </div>
      )}
    </div>
  );
}
