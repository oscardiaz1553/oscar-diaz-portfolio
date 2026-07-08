import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import Navbar from '../components/Navbar';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn as="div" delay={0} y={-20}>
        <Navbar variant="dark" />
      </FadeIn>

      {/* Hero content */}
      <div className="relative flex-1 flex flex-col justify-between px-6 md:px-10">
        {/* Heading */}
        <div className="overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-[0.85] w-full text-[13.5vw] sm:text-[14.5vw] md:text-[14.5vw] lg:text-[15vw] mt-6 sm:mt-4 md:-mt-5"
          >
            <span className="block whitespace-nowrap">Hola,</span>
            <span className="block whitespace-nowrap">soy oscar</span>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
          <FadeIn
            as="p"
            delay={0.35}
            y={20}
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            diseñador ux/ui que convierte sistemas complejos en productos claros
            y usables
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Portrait — positioning lives on this outer wrapper so it doesn't
          clash with the transform Framer Motion applies for the fade-in. */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <ImagePlaceholder
              label="Retrato"
              alt="Oscar Díaz"
              rounded="rounded-[32px]"
              className="w-full"
              style={{ height: 'clamp(320px, 46vw, 560px)' }}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
