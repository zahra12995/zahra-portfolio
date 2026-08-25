"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const LINES = [
  "initializing enrichment workflow...",
  "connecting to Clay via webhook...",
  "847 leads found from funding alerts...",
  "running ICP qualification...",
  "203 leads qualified...",
  "cleaning list via MillionVerifier...",
  "189 valid emails confirmed...",
  "pushing to Smartlead campaign...",
  "done. pipeline incoming 🚀",
  "next run: tomorrow 9:00 AM PKT",
];

const CHAR_MS = 28;
const LINE_PAUSE_MS = 250;
const LOOP_PAUSE_MS = 2500;

export function AnimatedTerminal() {
  const reducedMotion = usePrefersReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    if (lineIndex >= LINES.length) {
      const timeout = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, LOOP_PAUSE_MS);
      return () => clearTimeout(timeout);
    }

    const currentLine = LINES[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), CHAR_MS);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, LINE_PAUSE_MS);
    return () => clearTimeout(timeout);
  }, [lineIndex, charIndex, reducedMotion]);

  const completedLines = reducedMotion ? LINES : LINES.slice(0, lineIndex);
  const typingLine =
    !reducedMotion && lineIndex < LINES.length ? LINES[lineIndex].slice(0, charIndex) : null;

  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-black shadow-xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="h-72 overflow-hidden p-6 font-mono text-sm leading-relaxed text-emerald-400 sm:text-base">
        {completedLines.map((line, index) => (
          <p key={index}>
            <span className="text-emerald-600">$</span> {line}
          </p>
        ))}
        {typingLine !== null ? (
          <p>
            <span className="text-emerald-600">$</span> {typingLine}
            <span className="animate-caret ml-0.5 inline-block w-[2px] translate-y-0.5 bg-emerald-400 align-middle">
              &nbsp;
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
