import HeroSection from '../sections/HeroSection';
import ScrollVideoSection from '../sections/ScrollVideoSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ProjectsSection from '../sections/ProjectsSection';
import AISection from '../sections/AISection';
import DevSection from '../sections/DevSection';
import EditorialPlate from '../components/EditorialPlate';
import { MANGOS } from '../data/botanica';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Secuencia de scroll botánica con el wordmark gigante */}
      <ScrollVideoSection />

      <MarqueeSection />
      <ProjectsSection />

      {/* Lámina I — peonía azul + mango fugado, titular calado */}
      <EditorialPlate
        caption="Peonía azul, mango fugado"
        objectPosition="30% 45%"
        minH="min-h-[88vh]"
        quoteObeys="Casi todo obedece."
        quoteEscapes="Una se sale."
      />

      <AboutSection />
      <ServicesSection />

      {/* Lámina II — los mangos fugados, respiro antes de IA/Desarrollo */}
      <EditorialPlate
        caption="Mango fugado, escala 1:1"
        image={MANGOS}
        objectPosition="50% 50%"
        minH="min-h-[76vh]"
        hideWithoutImage
      />

      <AISection />
      <DevSection />
      <Footer />
    </>
  );
}
