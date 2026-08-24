"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  typeSpeedMs?: number;
  deleteSpeedMs?: number;
  pauseMs?: number;
  disabled?: boolean;
}

export function useTypewriter(
  phrases: string[],
  {
    typeSpeedMs = 55,
    deleteSpeedMs = 30,
    pauseMs = 1600,
    disabled = false,
  }: UseTypewriterOptions = {}
): string {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState(disabled ? phrases[0] ?? "" : "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (disabled || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === "") {
      // Small delay before starting the next phrase, wrapped in the timeout
      // (rather than set synchronously) so the transition reads as a
      // deliberate beat, not an instant jump.
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      }, typeSpeedMs);
    } else {
      const nextLength = text.length + (isDeleting ? -1 : 1);
      timeout = setTimeout(
        () => setText(currentPhrase.slice(0, nextLength)),
        isDeleting ? deleteSpeedMs : typeSpeedMs
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typeSpeedMs, deleteSpeedMs, pauseMs, disabled]);

  return disabled ? phrases[phraseIndex % phrases.length] ?? "" : text;
}
