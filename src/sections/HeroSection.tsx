import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import ContactButton from '../components/ContactButton';
import HeroArtifact from '../components/HeroArtifact';

const ease = [0.25, 0.1, 0.25, 1] as const;

/**
 * Pinned hero scene. The section is taller than the viewport; the content
 * sticks while layers grow at different rates as you scroll ("growing
 * parallax"): color blobs expand, the watermark type scales up, the heading
 * grows and the artifact zooms toward the viewer before the pin releases.
 */
export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  // Growing parallax layers — each moves/scales at its own rate.
  const headingScale = useTransform(p, [0, 1], [1, 1.22]);
  const leftY = useTransform(p, [0, 1], [0, -90]);
  const leftOpacity = useTransform(p, [0, 0.75, 1], [1, 1, 0]);
  const artScale = useTransform(p, [0, 1], [1, 1.45]);
  const artY = useTransform(p, [0, 1], [0, -130]);
  const blobGreenScale = useTransform(p, [0, 1], [1, 2.4]);
  const blobBlueScale = useTransform(p, [0, 1], [1, 2.9]);
  const blobBlueX = useTransform(p, [0, 1], [0, -80]);
  const watermarkScale = useTransform(p, [0, 1], [1, 1.5]);
  const watermarkY = useTransform(p, [0, 1], [0, -70]);
  const watermarkOpacity = useTransform(p, [0, 0.55, 1], [0.55, 1, 0]);
  const cueOpacity = useTransform(p, [0, 0.18], [1, 0]);

  return (
    <section ref={ref} className="relative h-[175vh]" style={{ overflowX: 'clip' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Growing color blobs */}
        <motion.div
          aria-hidden
          className="absolute -top-[12%] -left-[8%] h-[46vmax] w-[46vmax] rounded-full blur-3xl pointer-events-none"
          style={{
            scale: blobGreenScale,
            background:
              'radial-gradient(circle at 40% 40%, rgba(20,160,90,0.22), rgba(20,160,90,0) 70%)',
          }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-[18%] -right-[10%] h-[52vmax] w-[52vmax] rounded-full blur-3xl pointer-events-none"
          style={{
            scale: blobBlueScale,
            x: blobBlueX,
            background:
              'radial-gradient(circle at 60% 60%, rgba(45,91,227,0.2), rgba(45,91,227,0) 70%)',
          }}
        />

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
          OSCAR
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
                className="inline-flex items-center gap-2 font-medium uppercase tracking-[0.2em] text-xs sm:text-sm"
                style={{ color: 'var(--accent-2-deep)' }}
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                UX/UI Designer
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
                <ContactButton />
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('trabajos')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="rounded-full border border-black/15 px-7 py-3 sm:py-3.5 font-medium uppercase tracking-widest text-sm hover:border-accent2 hover:text-accent2-deep transition-colors duration-200"
                >
                  Ver trabajos
                </button>
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
                <HeroArtifact progress={p} />
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
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: 'var(--muted)' }}
          >
            Scroll
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
