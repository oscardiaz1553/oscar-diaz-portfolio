import HeroSection from '../sections/HeroSection';
import ProjectsSection from '../sections/ProjectsSection';
import AboutSection from '../sections/AboutSection';
import AISection from '../sections/AISection';
import DevSection from '../sections/DevSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <AISection />
      <DevSection />
      <Footer />
    </>
  );
}
