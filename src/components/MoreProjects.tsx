import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import ImagePlaceholder from './ImagePlaceholder';
import { getCaseStudy } from '../data/caseStudies';

interface MoreProjectsProps {
  slugs: string[];
}

export default function MoreProjects({ slugs }: MoreProjectsProps) {
  const projects = slugs
    .map((slug) => getCaseStudy(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (projects.length === 0) return null;

  return (
    <section className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28">
      <div className="max-w-6xl mx-auto">
        <FadeIn
          as="h2"
          y={30}
          className="text-[#D7E2EA] font-medium text-center mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
        >
          Mira más proyectos
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1} y={30}>
              <Link to={`/trabajos/${project.slug}`} className="group block">
                <ImagePlaceholder
                  src={project.thumb}
                  label={project.cardTitle}
                  alt={project.cardTitle}
                  rounded="rounded-2xl sm:rounded-3xl"
                  className="w-full transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ height: 'clamp(200px, 26vw, 300px)' }}
                />
                <h3 className="mt-5 text-[#D7E2EA] font-medium leading-tight group-hover:opacity-70 transition-opacity duration-200 text-lg sm:text-xl">
                  {project.cardTitle}
                </h3>
                <p className="mt-1 text-[#D7E2EA]/50 font-light text-sm uppercase tracking-widest">
                  {project.tag}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
