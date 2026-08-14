"use client";

import { useEffect, useState } from "react";

type HeroTypewriterProps = {
  lines: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  lineDelay?: number;
  holdDuration?: number;
};

export function HeroTypewriter({
  lines,
  typingSpeed = 55,
  deletingSpeed = 28,
  lineDelay = 260,
  holdDuration = 1800,
}: HeroTypewriterProps) {
  const [visibleLines, setVisibleLines] = useState(() => lines.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setTimeout(() => {
        setVisibleLines(lines);
        setActiveLine(lines.length - 1);
      }, 0);
      return () => clearTimeout(timer);
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    function typeLine(lineIndex: number, charIndex: number) {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        timer = setTimeout(() => deleteLine(lines.length - 1, lines[lines.length - 1].length), holdDuration);
        return;
      }
      setActiveLine(lineIndex);
      setVisibleLines((current) => current.map((line, i) => (i === lineIndex ? lines[lineIndex].slice(0, charIndex) : line)));
      if (charIndex < lines[lineIndex].length) {
        timer = setTimeout(() => typeLine(lineIndex, charIndex + 1), typingSpeed);
      } else {
        timer = setTimeout(() => typeLine(lineIndex + 1, 1), lineDelay);
      }
    }

    function deleteLine(lineIndex: number, charIndex: number) {
      if (cancelled) return;
      if (lineIndex < 0) {
        timer = setTimeout(() => typeLine(0, 1), lineDelay);
        return;
      }
      setActiveLine(lineIndex);
      setVisibleLines((current) => current.map((line, i) => (i === lineIndex ? lines[lineIndex].slice(0, charIndex) : line)));
      if (charIndex > 0) {
        timer = setTimeout(() => deleteLine(lineIndex, charIndex - 1), deletingSpeed);
      } else {
        timer = setTimeout(() => deleteLine(lineIndex - 1, lines[lineIndex - 1]?.length ?? 0), lineDelay / 2);
      }
    }

    timer = setTimeout(() => typeLine(0, 1), 350);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [lines, typingSpeed, deletingSpeed, lineDelay, holdDuration]);

  return (
    <h1 className="hero-typewriter" aria-label={lines.join(" ")}>
      {lines.map((line, index) => (
        <span className="typewriter-line" key={`${line}-${index}`} aria-hidden="true">
          {visibleLines[index]}
          {activeLine === index && <span className="typewriter-cursor" />}
        </span>
      ))}
    </h1>
  );
}
