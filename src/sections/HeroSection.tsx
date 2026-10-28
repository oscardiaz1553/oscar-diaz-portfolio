import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import AccentButton from '../components/AccentButton';
import { BrandDot, DOT_ON_BLUE } from '../components/Brand';
import Magnetic from '../components/Magnetic';
import MorphBrackets from '../components/MorphBrackets';
import Navbar from '../components/Navbar';

const EASE = [0.16, 1, 0.3, 1] as const;
const MANGO = `${import.meta.env.BASE_URL}mango-hero.webp`;

// El texto completo vive en un sr-only para lectores de pantalla y buscadores.
const SR_HEADLINE = 'Oscar Díaz. Diseñador UX/UI.';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

/** Mango, la mascota de Out: flota y sigue al mouse con un leve parallax. */
function MangoHero() {
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const x = useSpring(px, { stiffness: 80, damping: 18 });
  const y = useSpring(py, { stiffness: 80, damping: 18 });

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      px.set((e.clientX / window.innerWidth - 0.5) * -34);
      py.set((e.clientY / window.innerHeight - 0.5) * -26);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduceMotion, px, py]);

  return (
    <motion.div
      aria-hidden
      className="absolute z-[2] pointer-events-none select-none right-[-20%] top-[12%] w-[min(66vw,320px)] sm:right-[-9%] sm:top-[16%] sm:w-[clamp(300px,37vw,620px)]"
      style={{ x, y }}
    >
      <motion.img
        src={MANGO}
        alt=""
        width={1147}
        height={930}
        loading="eager"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 40px 70px rgba(10,14,50,0.45))' }}
        initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
        animate={
          reduceMotion
            ? { opacity: 1, scale: 1, rotate: -4 }
            : { opacity: 1, scale: 1, rotate: -4, y: [0, -14, 0] }
        }
        transition={
          reduceMotion
            ? { delay: 0.3, duration: 0.9, ease: EASE }
            : {
                opacity: { delay: 0.3, duration: 0.9, ease: EASE },
                scale: { delay: 0.3, duration: 0.9, ease: EASE },
                rotate: { delay: 0.3, duration: 0.9, ease: EASE },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
              }
        }
      />
    </motion.div>
  );
}

/**
 * Portada con el estilo de Out: azul Klein sólido, los símbolos de la marca
 * cambiando de forma de fondo y una tipografía enorme que domina el primer
 * pantallazo. El nombre y el rol son el titular. Un CTA primario (hablemos) y
 * uno secundario (ver trabajos).
 */
export default function HeroSection() {
  return (
    <section data-nav-bg="dark" className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-klein">
      <Navbar />

      <MorphBrackets className="absolute z-[1] right-[-4%] top-[8%] w-[70%] sm:w-[58%] lg:w-[50%] opacity-[0.17] sm:opacity-[0.24]" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-klein-deep/40 via-transparent to-klein-deep/55 pointer-events-none"
      />

      <MangoHero />

      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-10 lg:px-16 pt-28 pb-16 sm:pb-20 lg:pb-24">
        <h1 className="font-display font-extrabold tracking-[-0.045em]" style={{ fontSize: 'clamp(2.6rem, 7.4vw, 8rem)', lineHeight: 0.94 }}>
          <span className="sr-only">{SR_HEADLINE}</span>

          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
            className="block text-paper-pure"
          >
            Oscar Díaz
            <BrandDot color={DOT_ON_BLUE} />
          </motion.span>
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
            className="block text-carne mt-2 sm:mt-3"
            style={{ fontSize: '0.62em', lineHeight: 1 }}
          >
            Diseñador UX/UI
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-6 sm:mt-7 max-w-[46ch] text-paper-pure/85 leading-relaxed text-base sm:text-lg"
        >
          Diseño plataformas enterprise para seguros, banca, logística e infraestructura pública.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
        >
          <Magnetic>
            <AccentButton onBlue onClick={() => go('contacto')} className="sm:px-12 sm:py-4">
              Contáctame
            </AccentButton>
          </Magnetic>
          <button
            type="button"
            onClick={() => go('trabajos')}
            className="text-paper-pure font-medium text-sm sm:text-base underline underline-offset-[6px] decoration-paper-pure/40 hover:decoration-carne hover:text-carne transition-colors duration-200"
          >
            Ver casos de estudio
          </button>
          <a
            href="/cv/Oscar-Diaz-CV-ES.pdf"
            download
            className="text-paper-pure/80 font-medium text-sm sm:text-base underline underline-offset-[6px] decoration-paper-pure/30 hover:decoration-carne hover:text-carne transition-colors duration-200"
          >
            Descargar CV (PDF)
          </a>
        </motion.div>

      </div>
    </section>
  );
}
