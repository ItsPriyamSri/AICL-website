"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;
    let particles: Particle[] = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isDark = resolvedTheme !== "light";
    const accentColor = isDark ? "#C6FF3D" : "#436600";
    const baseLineAlpha = isDark ? 0.22 : 0.15;
    const coreAlpha = isDark ? 0.95 : 0.85;
    const auraAlpha = isDark ? 0.35 : 0.22;
    const ambientAlpha = isDark ? 0.15 : 0.08;

    const createParticles = (w: number, h: number) => {
      const count = Math.min(Math.max(Math.floor(w / 22), 35), 70);
      const list: Particle[] = [];
      for (let i = 0; i < count; i++) {
        list.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 1.8, // 1.8px - 3.6px
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.025 + 0.015,
        });
      }
      return list;
    };

    const setupCanvas = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const newWidth = rect.width || window.innerWidth;
      const newHeight = rect.height || window.innerHeight;

      if (newWidth === 0 || newHeight === 0) return;

      width = newWidth;
      height = newHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        particles = createParticles(width, height);
      } else {
        // Wrap particles gracefully within new bounds
        particles.forEach((p) => {
          if (p.x > width) p.x = Math.random() * width;
          if (p.y > height) p.y = Math.random() * height;
        });
      }
    };

    setupCanvas();

    const handleWindowResize = () => {
      setupCanvas();
    };

    window.addEventListener("resize", handleWindowResize, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      setupCanvas();
    });
    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

      // Dedicated continuous RAF loop
      const maxDistance = 125;
      const mouseMaxDistance = 150;

      const render = () => {
        if (document.hidden) {
          animationFrameRef.current = requestAnimationFrame(render);
          return;
        }

        ctx.clearRect(0, 0, width, height);

        const mouse = mouseRef.current;

        // 1. Constellation lines between nearby particles
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.hypot(dx, dy);

            if (dist < maxDistance) {
              const alpha = (1 - dist / maxDistance) * baseLineAlpha;
              ctx.strokeStyle = accentColor;
              ctx.globalAlpha = alpha;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }

          // 2. Interactive line connecting firefly to mouse cursor
          if (mouse.x !== null && mouse.y !== null) {
            const mdx = particles[i].x - mouse.x;
            const mdy = particles[i].y - mouse.y;
            const mdist = Math.hypot(mdx, mdy);
            if (mdist < mouseMaxDistance) {
              const mAlpha =
                (1 - mdist / mouseMaxDistance) * (baseLineAlpha * 1.5);
              ctx.strokeStyle = accentColor;
              ctx.globalAlpha = mAlpha;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }

        // 3. Render and animate Glowing Firefly Particles
        particles.forEach((p) => {
          if (!prefersReducedMotion) {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off canvas boundaries
            if (p.x < 0) {
              p.x = 0;
              p.vx *= -1;
            } else if (p.x > width) {
              p.x = width;
              p.vx *= -1;
            }

            if (p.y < 0) {
              p.y = 0;
              p.vy *= -1;
            } else if (p.y > height) {
              p.y = height;
              p.vy *= -1;
            }

            // Gentle mouse repulsion
            if (mouse.x !== null && mouse.y !== null) {
              const mdx = p.x - mouse.x;
              const mdy = p.y - mouse.y;
              const mdist = Math.hypot(mdx, mdy);
              if (mdist < 100 && mdist > 0) {
                const force = (100 - mdist) / 100;
                p.x += (mdx / mdist) * force * 1.5;
                p.y += (mdy / mdist) * force * 1.5;
              }
            }

            p.pulsePhase += p.pulseSpeed;
          }

          const pulseScale = 1 + Math.sin(p.pulsePhase) * 0.2;
          const currentRadius = p.radius * pulseScale;
          const pulseAlphaFactor =
            (Math.sin(p.pulsePhase) + 1) * 0.5 * 0.5 + 0.5;

          // Layer 1: Ambient outer halo
          ctx.fillStyle = accentColor;
          ctx.globalAlpha = ambientAlpha * pulseAlphaFactor;
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius + 9, 0, Math.PI * 2);
          ctx.fill();

          // Layer 2: Core aura
          ctx.fillStyle = accentColor;
          ctx.globalAlpha = auraAlpha * pulseAlphaFactor;
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius + 4, 0, Math.PI * 2);
          ctx.fill();

          // Layer 3: Solid bright firefly core
          ctx.fillStyle = accentColor;
          ctx.globalAlpha = coreAlpha * pulseAlphaFactor;
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.globalAlpha = 1;
        animationFrameRef.current = requestAnimationFrame(render);
      };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full pointer-events-none"
      />
    </div>
  );
}
