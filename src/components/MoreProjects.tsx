import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
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
        <FadeIn as="h2" y={30} className="text-ink font-bold tracking-tight mb-12 sm:mb-16" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
          Mira más proyectos
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1} y={30}>
              <Link to={`/trabajos/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
                  <ImagePlaceholder
                    src={project.thumb}
                    label={project.cardTitle}
                    alt={project.cardTitle}
                    rounded="rounded-2xl sm:rounded-3xl"
                    className="w-full transition-transform duration-500 group-hover:scale-[1.05]"
                    style={{ height: 'clamp(200px, 26vw, 300px)' }}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-ink font-medium leading-tight group-hover:text-accent transition-colors duration-200 text-lg sm:text-xl">
                      {project.cardTitle}
                    </h3>
                    <p className="mt-1 uppercase tracking-widest text-xs font-medium" style={{ color: 'var(--muted)' }}>
                      {project.tag}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 mt-1 text-ink transition-all duration-200 group-hover:text-accent2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
