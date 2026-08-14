"use client";

import { useEffect, useState } from "react";

type HeroTypewriterProps = {
  lines: string[];
  typingSpeed?: number;
  lineDelay?: number;
};

export function HeroTypewriter({ lines, typingSpeed = 70, lineDelay = 220 }: HeroTypewriterProps) {
  const [visibleLines, setVisibleLines] = useState(() => lines.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimer = setTimeout(() => {
        setVisibleLines(lines);
        setActiveLine(lines.length);
      }, 0);
      return () => clearTimeout(reducedMotionTimer);
    }

    let lineIndex = 0;
    let characterIndex = 0;
    let timer: ReturnType<typeof setTimeout>;

    const typeNextCharacter = () => {
      if (lineIndex >= lines.length) {
        setActiveLine(lines.length);
        return;
      }
      characterIndex += 1;
      setActiveLine(lineIndex);
      setVisibleLines((current) => current.map((line, index) =>
        index === lineIndex ? lines[lineIndex].slice(0, characterIndex) : line,
      ));
      if (characterIndex < lines[lineIndex].length) {
        timer = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        lineIndex += 1;
        characterIndex = 0;
        timer = setTimeout(typeNextCharacter, lineDelay);
      }
    };

    timer = setTimeout(typeNextCharacter, 350);
    return () => clearTimeout(timer);
  }, [lines, typingSpeed, lineDelay]);

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
