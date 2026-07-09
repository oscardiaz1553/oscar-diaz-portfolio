import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import Navbar from '../components/Navbar';
import ContactButton from '../components/ContactButton';
import HeroArtifact from '../components/HeroArtifact';
import useMediaQuery from '../hooks/useMediaQuery';

const ease = [0.25, 0.1, 0.25, 1] as const;

/**
 * Pinned hero scene. On large screens the section is taller than the viewport;
 * the content sticks while layers grow at different rates as you scroll
 * ("growing parallax"): the watermark type scales up, the heading grows and
 * the artifact zooms toward the viewer before the pin releases.
 *
 * The pinning + scroll parallax is dropped (static single-viewport hero) when
 * the user prefers reduced motion OR on small/touch screens, where pinned
 * scroll-jacking is janky and hurts performance.
 */
export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const simplify = reduce || !isDesktop;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  // Spring smoothing only on desktop; raw progress everywhere else.
  const spring = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  const p = simplify ? scrollYProgress : spring;

  // Growing parallax layers — collapsed to identity when simplified.
  const headingScale = useTransform(p, [0, 1], simplify ? [1, 1] : [1, 1.22]);
  const leftY = useTransform(p, [0, 1], simplify ? [0, 0] : [0, -90]);
  const leftOpacity = useTransform(p, [0, 0.75, 1], simplify ? [1, 1, 1] : [1, 1, 0]);
  const artScale = useTransform(p, [0, 1], simplify ? [1, 1] : [1, 1.45]);
  const artY = useTransform(p, [0, 1], simplify ? [0, 0] : [0, -130]);
  const watermarkScale = useTransform(p, [0, 1], simplify ? [1, 1] : [1, 1.5]);
  const watermarkY = useTransform(p, [0, 1], simplify ? [0, 0] : [0, -70]);
  const watermarkOpacity = useTransform(
    p,
    [0, 0.55, 1],
    simplify ? [0.55, 0.55, 0.55] : [0.55, 1, 0]
  );
  const cueOpacity = useTransform(p, [0, 0.18], simplify ? [1, 1] : [1, 0]);

  return (
    <section
      ref={ref}
      className={simplify ? 'relative min-h-screen' : 'relative h-[175vh]'}
      style={{ overflowX: 'clip' }}
    >
      <div
        className={
          simplify
            ? 'relative min-h-screen overflow-hidden flex flex-col'
            : 'sticky top-0 h-screen overflow-hidden flex flex-col'
        }
      >
        {/* Watermark type behind everything */}
        <motion.span
          aria-hidden
          className="outline-text absolute bottom-[2%] left-1/2 -translate-x-1/2 font-bold leading-none whitespace-nowrap pointer-events-none select-none"
          style={{
            fontSize: 'clamp(6rem, 24vw, 24rem)',
            scale: watermarkScale,
            y: watermarkY,
            opacity: watermarkOpacity,
          }}
        >
          Oscar
        </motion.span>

        <Navbar variant="light" />

        <div className="flex-1 flex items-center px-6 md:px-10 py-10 md:py-0">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: intro — drifts up and fades as the scene plays out */}
            <motion.div
              className="order-2 lg:order-1 relative z-10"
              style={{ y: leftY, opacity: leftOpacity }}
            >
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="inline-flex items-center gap-2 font-medium tracking-wide text-xs sm:text-sm"
                style={{ color: 'var(--accent-deep)' }}
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                Diseñador de Producto · UX/UI
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease }}
                className="hero-heading font-bold tracking-tight leading-[0.95] mt-4 origin-left"
                style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', scale: headingScale }}
              >
                Oscar Díaz
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="mt-6 max-w-md font-light leading-relaxed"
                style={{ color: 'var(--muted)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}
              >
                Convierto sistemas complejos —plataformas internas, procesos
                manuales y herramientas enterprise— en experiencias claras,
                consistentes y usables que llegan a producción.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32, ease }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <ContactButton label="Trabajemos juntos" />
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('trabajos')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="rounded-full border border-black/15 px-7 py-3 sm:py-3.5 font-medium tracking-wide text-sm hover:border-accent hover:text-accent-deep transition-colors duration-200"
                >
                  Ver trabajos
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.44, ease }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-surface px-4 py-2"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <span className="text-sm font-medium text-ink">
                  Disponible para nuevos proyectos
                </span>
              </motion.div>
            </motion.div>

            {/* Right: interactive artifact — grows toward the viewer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="order-1 lg:order-2"
            >
              <motion.div style={{ scale: artScale, y: artY }}>
                <HeroArtifact progress={p} simplify={simplify} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden md:flex justify-center pb-8"
          style={{ opacity: cueOpacity }}
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-xs tracking-wide"
            style={{ color: 'var(--muted)' }}
          >
            Scroll
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
