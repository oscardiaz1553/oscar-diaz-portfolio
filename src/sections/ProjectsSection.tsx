import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { CASE_STUDIES } from '../data/caseStudies';
import type { CaseStudy } from '../data/caseStudies';

const CARD_RADIUS = 'rounded-[32px] sm:rounded-[40px] md:rounded-[48px]';

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
  const reduce = useReducedMotion();
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const range: [number, number] = [index / totalCards, 1];
  const scale = useTransform(progress, range, reduce ? [1, 1] : [1, targetScale]);
  const number = String(index + 1).padStart(2, '0');

  return (
    <div className="h-[85vh] sticky top-28 md:top-32 flex justify-center">
      <motion.div
        style={{ scale, top: `${index * 26}px` }}
        className={`relative w-full ${CARD_RADIUS} bg-surface border border-black/10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.3)] p-4 sm:p-6 md:p-8 flex flex-col`}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-bold leading-none text-black/10"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-accent-deep font-medium tracking-wide text-xs sm:text-sm">
                {project.tag}
              </span>
              <h3
                className="text-ink font-medium leading-tight max-w-[20ch]"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
              >
                {project.cardTitle}
              </h3>
            </div>
          </div>
          <Link
            to={`/trabajos/${project.slug}`}
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-white font-medium tracking-wide px-6 py-3 text-xs sm:text-sm hover:bg-accent transition-colors duration-200"
          >
            Ver proyecto
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Bottom row: image grid (placeholders for now) */}
        <Link
          to={`/trabajos/${project.slug}`}
          className="flex gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8 group"
        >
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-[40%]">
            <ImagePlaceholder
              fit="contain"
              src={project.carousel[0]}
              label={project.cardTitle}
              rounded="rounded-2xl sm:rounded-3xl"
              className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ height: 'clamp(120px, 15vw, 210px)' }}
            />
            <ImagePlaceholder
              fit="contain"
              src={project.carousel[1]}
              label="Detalle"
              rounded="rounded-2xl sm:rounded-3xl"
              className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ height: 'clamp(150px, 20vw, 300px)' }}
            />
          </div>
          <div className="w-[60%]">
            <ImagePlaceholder
              fit="contain"
              src={project.carousel[2]}
              label="Vista principal"
              rounded="rounded-2xl sm:rounded-3xl"
              className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ height: 'clamp(282px, 35vw, 530px)' }}
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
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto mb-14 sm:mb-16">
        <p className="text-accent-deep font-medium tracking-wide text-xs sm:text-sm">
          Trabajos seleccionados
        </p>
        <h2
          className="hero-heading font-bold tracking-tight leading-[0.95] mt-3"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          Proyectos
        </h2>
      </div>

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
