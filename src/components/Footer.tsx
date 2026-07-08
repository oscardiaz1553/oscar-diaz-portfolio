import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const EMAIL = 'oscardiaczs@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/';
const BEHANCE = 'https://www.behance.net/';

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-10"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn as="p" className="text-accent2-deep font-medium uppercase tracking-[0.2em] text-xs sm:text-sm">
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
          trabajáramos <span className="duo-text">juntos?</span>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ContactButton />
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
            <p className="text-ink font-bold tracking-tight">
              Oscar Díaz<span className="text-accent">.</span>
            </p>
            <div className="flex items-center gap-6 uppercase tracking-widest text-xs sm:text-sm font-medium" style={{ color: 'var(--muted)' }}>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-accent2 transition-colors duration-200">
                LinkedIn
              </a>
              <a href={BEHANCE} target="_blank" rel="noreferrer" className="hover:text-accent2 transition-colors duration-200">
                Behance
              </a>
              <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors duration-200">
                Email
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
