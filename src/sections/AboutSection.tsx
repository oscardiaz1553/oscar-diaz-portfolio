import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import SectionHead from '../components/SectionHead';
import SymbolField from '../components/SymbolField';

const ABOUT_TEXT =
  'Convierto procesos manuales y plataformas internas confusas en herramientas fáciles de usar. Armo sistemas de diseño en Figma y entrego prototipos en HTML 1:1 con el diseño, en contacto directo con producto y desarrollo.';

export default function AboutSection() {
  return (
    <section
      id="acerca"
      className="relative overflow-hidden bg-paper-pure border-t border-klein-deep/10 px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28"
    >
      <SymbolField
        color="#1B2FCC"
        opacity={0.06}
        items={[
          { kind: 'square', x: 8, y: 22, size: 'clamp(6rem, 14vw, 13rem)', rot: -8, dur: 14 },
          { kind: 'angle', x: 93, y: 84, size: 'clamp(5rem, 11vw, 11rem)', rot: 6, dur: 12, delay: 2, desktopOnly: true },
        ]}
      />

      <div className="relative max-w-[1100px] mx-auto">
        <SectionHead kind="square" title="Acerca de mí" />

        <FadeIn y={20} className="mt-8 sm:mt-10 max-w-[62ch]">
          <p className="text-ink-2 leading-relaxed" style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.35rem)' }}>
            {ABOUT_TEXT}
          </p>
        </FadeIn>

        <FadeIn y={20} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
          <ContactButton />
          <Link
            to="/acerca"
            className="font-medium text-sm sm:text-base text-klein underline underline-offset-[6px] decoration-klein/30 hover:decoration-klein transition-colors duration-200"
          >
            Ver mi trayectoria
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
