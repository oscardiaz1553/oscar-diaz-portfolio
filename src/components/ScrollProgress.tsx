import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin accent progress bar fixed to the top of the viewport that fills as the
 * page is scrolled.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-50"
      style={{ scaleX, background: 'var(--accent)' }}
    />
  );
}
