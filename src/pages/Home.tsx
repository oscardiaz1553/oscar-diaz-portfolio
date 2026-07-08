import HeroSection from '../sections/HeroSection';
import MarqueeSection from '../sections/MarqueeSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ProjectsSection from '../sections/ProjectsSection';
import AISection from '../sections/AISection';
import DevSection from '../sections/DevSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <AISection />
      <DevSection />
      <Footer />
    </>
  );
}
