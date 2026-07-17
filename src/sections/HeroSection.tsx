import Navbar from '../components/Navbar';
import FadeIn from '../components/FadeIn';
import AccentButton from '../components/AccentButton';
import ConceptGrid from '../components/ConceptGrid';
import { BrandName } from '../components/Brand';

/**
 * Portada editorial (sistema Out.): texto a la izquierda, la retícula-concepto
 * a sangre a la derecha. El wordmark gigante es el nombre; la retícula anima
 * "casi todo obedece, una se sale" — los puntos esquivan el cursor y cada
 * pocos segundos uno cálido se escapa cruzando el borde.
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-paper overflow-hidden">
      <Navbar variant="light" />

      <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] items-stretch">
        {/* Texto */}
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-16 py-14 md:py-0 order-2 md:order-1">
          <FadeIn delay={0.1} y={16}>
            <span className="text-base sm:text-lg text-carne-tinta">
              Diseñador de Producto · UX/UI
            </span>
          </FadeIn>

          <FadeIn delay={0.2} y={24}>
            <h1
              className="font-display font-extrabold text-klein tracking-[-0.05em] leading-[0.86] mt-5"
              style={{ fontSize: 'clamp(3.25rem, 11vw, 10rem)' }}
              aria-label="Oscar Díaz"
            >
              <BrandName />
            </h1>
          </FadeIn>

          <FadeIn delay={0.34} y={18}>
            <p
              className="font-display font-semibold text-klein-mid tracking-[-0.03em] mt-6"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.6rem)' }}
            >
              Never the usual.
            </p>
          </FadeIn>

          <FadeIn delay={0.46} y={16}>
            <p className="text-ink-2 leading-relaxed max-w-[46ch] mt-6 text-base sm:text-lg">
              Casi todo obedece. Una cosa se sale. Diseño el sistema, no la pieza
              suelta, y sé exactamente dónde romperlo — sistemas complejos vueltos
              experiencias claras que llegan a producción.
            </p>
          </FadeIn>

          <FadeIn delay={0.58} y={16} className="mt-9 flex flex-wrap items-center gap-4">
            <AccentButton href="#contacto" className="sm:px-12 sm:py-4">
              Hablemos
            </AccentButton>
            <a
              href="#trabajos"
              className="rounded-full border border-klein/20 px-7 py-3 sm:py-3.5 font-sans font-medium text-sm text-klein-deep hover:border-klein hover:text-klein transition-colors duration-200"
            >
              Ver trabajos
            </a>
          </FadeIn>
        </div>

        {/* La retícula-concepto a sangre: toca los bordes derecho, superior e inferior */}
        <FadeIn
          delay={0.3}
          y={0}
          duration={1}
          className="relative order-1 md:order-2 h-[42vh] md:h-auto md:min-h-[86vh] overflow-hidden"
        >
          <ConceptGrid className="absolute inset-0" />
        </FadeIn>
      </div>
    </section>
  );
}
