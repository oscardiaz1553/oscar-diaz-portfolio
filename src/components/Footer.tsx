import FadeIn from './FadeIn';

const EMAIL = 'oscardiaczs@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/';
const BEHANCE = 'https://www.behance.net/';

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading font-black uppercase leading-[0.95] tracking-tight"
          style={{ fontSize: 'clamp(2.25rem, 7vw, 6rem)' }}
        >
          Te gustaría que
          <br />
          trabajáramos juntos?
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block mt-6 sm:mt-8 text-[#D7E2EA] font-light hover:opacity-70 transition-opacity duration-200"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
          >
            {EMAIL}
          </a>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <div className="mt-16 sm:mt-20 md:mt-24 pt-6 border-t border-[#D7E2EA]/15 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm font-light">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('trabajos')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="hover:opacity-70 transition-opacity duration-200 uppercase"
              >
                Trabajos
              </button>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('acerca')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="hover:opacity-70 transition-opacity duration-200 uppercase"
              >
                Acerca de mí
              </button>
              <a
                href={`mailto:${EMAIL}`}
                className="hover:opacity-70 transition-opacity duration-200"
              >
                Contacto
              </a>
            </div>
            <div className="flex items-center gap-6 text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm font-light">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
              >
                LinkedIn
              </a>
              <a
                href={BEHANCE}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
              >
                Behance
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
