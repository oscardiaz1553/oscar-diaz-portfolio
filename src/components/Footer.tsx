import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import { BrandName } from './Brand';

const EMAIL = 'oscardiaczs@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/oscarddiaz/';

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-10"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn as="p" className="text-accent-deep font-medium tracking-wide text-xs sm:text-sm">
          Contacto
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.05}
          y={40}
          className="hero-heading font-bold leading-[0.95] tracking-tight mt-4"
          style={{ fontSize: 'clamp(2.25rem, 7vw, 6rem)' }}
        >
          Te gustaría que
          <br />
          trabajáramos <span className="accent-text">juntos?</span>
        </FadeIn>

        <FadeIn delay={0.12} y={20}>
          <p className="mt-6 max-w-xl font-light leading-relaxed" style={{ color: 'var(--muted)', fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}>
            Abierto a roles de producto, freelance y colaboraciones. Cuéntame
            qué estás construyendo — respondo en menos de 24 horas.
          </p>
        </FadeIn>

        <FadeIn delay={0.18} y={20}>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ContactButton label="Escríbeme" />
            <a
              href={`mailto:${EMAIL}`}
              className="font-light hover:text-accent transition-colors duration-200"
              style={{ color: 'var(--muted)', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
            >
              {EMAIL}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <div className="mt-16 sm:mt-20 md:mt-24 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
            <BrandName className="text-lg" />

            <div className="flex items-center gap-6 tracking-wide text-xs sm:text-sm font-medium" style={{ color: 'var(--muted)' }}>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors duration-200">
                LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
