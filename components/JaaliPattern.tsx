import React from "react";
import { cn } from "@/lib/utils";

interface JaaliPatternProps extends React.SVGProps<SVGSVGElement> {
  opacity?: number;
  color?: string;
  className?: string;
}

export function JaaliPattern({
  opacity = 0.045,
  color = "currentColor",
  className,
  ...props
}: JaaliPatternProps) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none select-none overflow-hidden", className)}
      style={{ opacity }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
          <pattern
            id="jaali-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 80 40 L 40 80 L 0 40 Z"
              fill="none"
              stroke={color}
              strokeWidth="0.75"
            />
            <path
              d="M 40 12 C 36 26, 26 36, 12 40 C 26 44, 36 54, 40 68 C 44 54, 54 44, 68 40 C 54 36, 44 26, 40 12 Z"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
            <path
              d="M 0 0 L 80 80 M 80 0 L 0 80"
              fill="none"
              stroke={color}
              strokeWidth="0.25"
              strokeDasharray="2 2"
            />
            <circle cx="40" cy="0" r="3.5" fill="none" stroke={color} strokeWidth="0.75" />
            <circle cx="40" cy="80" r="3.5" fill="none" stroke={color} strokeWidth="0.75" />
            <circle cx="0" cy="40" r="3.5" fill="none" stroke={color} strokeWidth="0.75" />
            <circle cx="80" cy="40" r="3.5" fill="none" stroke={color} strokeWidth="0.75" />
            <circle cx="0" cy="0" r="4.5" fill="none" stroke={color} strokeWidth="0.75" />
            <circle cx="80" cy="0" r="4.5" fill="none" stroke={color} strokeWidth="0.75" />
            <circle cx="0" cy="80" r="4.5" fill="none" stroke={color} strokeWidth="0.75" />
            <circle cx="80" cy="80" r="4.5" fill="none" stroke={color} strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#jaali-pattern)" />
      </svg>
    </div>
  );
}
