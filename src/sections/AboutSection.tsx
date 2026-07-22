import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const ABOUT_TEXT =
  'Soy diseñador ux/ui enfocado en producto. Me especializo en tomar sistemas complejos —plataformas internas, procesos manuales, herramientas enterprise— y convertirlos en experiencias claras, consistentes y usables. Disfruto trabajar cerca del negocio y del equipo de desarrollo para que el diseño llegue a producción y genere impacto real. ¡Construyamos algo increíble juntos!';

export default function AboutSection() {
  return (
    <section
      id="acerca"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Decorative floating shapes — flat geometry only */}
      <motion.div
        className="absolute top-[12%] left-[8%] h-16 w-16 md:h-24 md:w-24 rounded-full border-2 border-accent/25 pointer-events-none"
        animate={{ y: [0, -24, 0], x: [0, 14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.svg
        className="absolute top-[14%] right-[10%] w-24 h-24 md:w-36 md:h-36 pointer-events-none"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="rgba(14,14,12,0.15)"
          strokeWidth="1"
          strokeDasharray="1 8"
          strokeLinecap="round"
        />
      </motion.svg>
      <motion.div
        className="absolute bottom-[18%] left-[12%] h-10 w-10 rounded-xl bg-accent/80 pointer-events-none"
        animate={{ rotate: [0, 90, 0], y: [0, -14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="absolute top-[24%] left-[18%] h-6 w-6 rounded-full bg-accent/70 pointer-events-none"
        animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
        <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-14 text-center">
          <FadeIn
            as="p"
            className="text-accent-deep font-medium tracking-wide text-xs sm:text-sm"
          >
            Acerca de mí
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            y={40}
            className="hero-heading font-bold leading-[0.95] tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
          >
            Diseño con <span className="accent-text">propósito</span>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-ink font-medium text-center leading-relaxed max-w-[600px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <FadeIn delay={0.1} y={30}>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <ContactButton />
            <Link
              to="/acerca"
              className="font-medium tracking-wide text-sm transition-colors duration-200 hover:text-accent underline underline-offset-4 decoration-accent/40"
              style={{ color: 'var(--ink-2)' }}
            >
              Conoce mi trayectoria completa
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
