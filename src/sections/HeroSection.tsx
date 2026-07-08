import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ContactButton from '../components/ContactButton';
import HeroArtifact from '../components/HeroArtifact';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      <Navbar variant="light" />

      <div className="flex-1 flex items-center px-6 md:px-10 py-10 md:py-0">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: intro */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 text-accent-deep font-medium uppercase tracking-[0.2em] text-xs sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              UX/UI Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="hero-heading font-black tracking-tight leading-[0.95] mt-4"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)' }}
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
                className="rounded-full border border-black/15 px-7 py-3 sm:py-3.5 font-medium uppercase tracking-widest text-sm hover:bg-black/5 transition-colors duration-200"
              >
                Ver trabajos
              </button>
            </motion.div>
          </div>

          {/* Right: interactive artifact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="order-1 lg:order-2"
          >
            <HeroArtifact />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden md:flex justify-center pb-8"
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
    </section>
  );
}
