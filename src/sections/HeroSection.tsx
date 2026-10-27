import { motion } from 'framer-motion';
import AccentButton from '../components/AccentButton';
import { BrandDot, DOT_ON_BLUE } from '../components/Brand';
import Magnetic from '../components/Magnetic';
import MorphBrackets from '../components/MorphBrackets';
import Navbar from '../components/Navbar';

const EASE = [0.16, 1, 0.3, 1] as const;

// El texto completo vive en un sr-only para lectores de pantalla y buscadores.
const SR_HEADLINE = 'Oscar Díaz. Diseñador UX/UI Senior.';

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

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
            Diseñador UX/UI Senior
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
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.7 }}
          className="mt-3 max-w-[46ch] text-paper-pure/70 leading-relaxed text-sm sm:text-base"
        >
          Desde junio de 2024 estoy en Sofka Technologies, donde también soy UX/UI Practice Lead.
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
