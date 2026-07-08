import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function Char({ char, range, progress }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      {/* Invisible placeholder preserves layout so the animated copy can sit on top */}
      <span className="opacity-20">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

/**
 * Reveals text one character at a time as the paragraph scrolls through the
 * viewport. Each character fades from opacity 0.2 -> 1 based on its position
 * in the string relative to overall scroll progress. Words are kept whole so
 * the paragraph wraps naturally.
 */
export default function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <p ref={container} className={className} style={style}>
      {words.map((word, wi) => {
        const wordSpan = (
          <span key={wi} className="inline-block">
            {word.split('').map((char, ci) => {
              const start = charIndex / totalChars;
              const end = (charIndex + 1) / totalChars;
              charIndex += 1;
              return (
                <Char
                  key={ci}
                  char={char}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        );
        // Account for the space that split() removed between words.
        charIndex += 1;
        return (
          <span key={`w-${wi}`}>
            {wordSpan}
            {wi < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </p>
  );
}
