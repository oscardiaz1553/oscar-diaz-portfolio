import { motion } from 'framer-motion';
import type { ElementType, ReactNode, CSSProperties } from 'react';
import { useMemo } from 'react';

interface FadeInProps {
  children: ReactNode;
  /** The element type to render (e.g. 'div', 'h1', 'p', 'nav'). Defaults to 'div'. */
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Reveals its children with a fade + slide as it enters the viewport.
 * Uses motion.create() so the animated element type can be chosen at runtime.
 */
export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  const MotionTag = useMemo(() => motion.create(as), [as]);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
