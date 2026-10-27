import { Link } from 'react-router-dom';
import AccentButton from './AccentButton';
import { BrandName } from './Brand';
import RevealText from './RevealText';
import TitleFrame from './TitleFrame';

const EMAIL = 'oscardiaczs@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/oscarddiaz/';

/**
 * Contacto y pie de página, con el estilo de Out: panel azul profundo, el
 * título enmarcado por símbolos de la marca y una frase grande en crema.
 */
export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden bg-klein-deep text-paper-pure px-6 md:px-10 lg:px-16 pt-16 sm:pt-20 md:pt-24 pb-10"
    >
      <div className="relative max-w-[1400px] mx-auto">
        <TitleFrame kind="angle" tone="light" fontSize="clamp(2rem, 4vw, 3.4rem)">
          <RevealText
            as="h2"
            text="Contacto"
            className="font-display font-semibold text-paper-pure tracking-[-0.035em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}
          />
        </TitleFrame>

        <p
          className="mt-8 sm:mt-10 max-w-[18ch] font-display font-extrabold text-carne tracking-[-0.045em] leading-[0.98]"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)' }}
        >
          ¿Trabajamos juntos?
        </p>

        <p className="mt-6 max-w-[48ch] leading-relaxed text-paper-pure/85" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
          Estoy abierto a roles de diseño UX/UI y producto, y también a proyectos freelance y colaboraciones. Cuéntame
          qué estás buscando o construyendo y te respondo en menos de 24 horas.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <AccentButton href={`mailto:${EMAIL}`} onBlue>
            Escríbeme
          </AccentButton>
          <a
            href={`mailto:${EMAIL}`}
            className="text-paper-pure/85 hover:text-carne transition-colors duration-200 underline underline-offset-4 decoration-paper-pure/30"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
          >
            {EMAIL}
          </a>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24 pt-6 border-t border-paper-pure/15 flex flex-wrap items-center justify-between gap-4">
          <Link to="/" className="text-xl text-paper-pure">
            <BrandName onBlue />
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium text-paper-pure/80">
            <a href="/cv/Oscar-Diaz-CV-ES.pdf" download className="hover:text-carne transition-colors duration-200">
              Descargar CV
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-carne transition-colors duration-200">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
