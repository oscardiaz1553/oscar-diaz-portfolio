import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { CASE_STUDIES } from '../data/caseStudies';
import type { CaseStudy } from '../data/caseStudies';

const CARD_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectCard({
  project,
  index,
  totalCards,
  progress,
}: {
  project: CaseStudy;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const range: [number, number] = [index / totalCards, 1];
  const scale = useTransform(progress, range, [1, targetScale]);
  const number = String(index + 1).padStart(2, '0');

  return (
    <div className="h-[85vh] sticky top-24 md:top-32 flex justify-center">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className={`relative w-full ${CARD_RADIUS} border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.tag}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight max-w-[18ch]"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.2rem)' }}
              >
                {project.cardTitle}
              </h3>
            </div>
          </div>
          <Link
            to={`/trabajos/${project.slug}`}
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10"
          >
            Ver proyecto
          </Link>
        </div>

        {/* Bottom row: image grid (placeholders for now) */}
        <Link
          to={`/trabajos/${project.slug}`}
          className="flex gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8 group"
        >
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-[40%]">
            <ImagePlaceholder
              src={project.carousel[0]}
              label={project.cardTitle}
              className="w-full transition-opacity duration-300 group-hover:opacity-90"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <ImagePlaceholder
              src={project.carousel[1]}
              label="Detalle"
              className="w-full transition-opacity duration-300 group-hover:opacity-90"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-[60%]">
            <ImagePlaceholder
              src={project.carousel[2]}
              label="Vista principal"
              className="w-full h-full transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="trabajos"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Trabajos
      </h2>

      <div ref={container} className="max-w-6xl mx-auto">
        {CASE_STUDIES.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            totalCards={CASE_STUDIES.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
