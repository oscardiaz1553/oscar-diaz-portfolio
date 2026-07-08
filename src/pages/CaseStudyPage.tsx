import { useParams, Navigate } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MoreProjects from '../components/MoreProjects';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { getCaseStudy } from '../data/caseStudies';
import type { CaseStudySection } from '../data/caseStudies';

function TextBlock({
  section,
  align = 'left',
}: {
  section: CaseStudySection;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      {section.title && (
        <FadeIn
          as="h2"
          y={30}
          className="text-[#D7E2EA] font-black uppercase tracking-tight leading-tight mb-6"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
        >
          {section.title}
        </FadeIn>
      )}
      {section.body?.map((p, i) => (
        <FadeIn key={i} delay={0.1 + i * 0.05} y={20}>
          <p
            className={`text-[#D7E2EA]/70 font-light leading-relaxed ${
              align === 'center' ? 'mx-auto' : ''
            } max-w-2xl ${i > 0 ? 'mt-4' : ''}`}
            style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
          >
            {p}
          </p>
        </FadeIn>
      ))}
    </div>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) return <Navigate to="/" replace />;

  return (
    <div style={{ background: '#0C0C0C' }} className="overflow-x-clip">
      <Navbar variant="dark" />

      {/* Hero */}
      <header className="px-5 sm:px-8 md:px-10 pt-16 sm:pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <FadeIn
              as="h1"
              y={40}
              className="hero-heading font-black uppercase tracking-tight leading-[0.95]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {study.title}
            </FadeIn>
            <FadeIn delay={0.15} y={20}>
              <p
                className="mt-6 text-[#D7E2EA]/70 font-light leading-relaxed max-w-xl"
                style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
              >
                {study.subtitle}
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} y={30}>
            <ImagePlaceholder
              src={study.heroImage}
              label={study.cardTitle}
              alt={study.cardTitle}
              rounded="rounded-[32px] sm:rounded-[40px]"
              className="w-full"
              style={{ height: 'clamp(280px, 34vw, 460px)' }}
            />
          </FadeIn>
        </div>
      </header>

      {/* Meta row */}
      <section className="px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#D7E2EA]/15 pt-10">
          {study.meta.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08} y={20}>
              <p className="text-[#D7E2EA] font-medium text-lg sm:text-xl">
                {item.label}
              </p>
              <p className="mt-2 text-[#D7E2EA]/60 font-light text-sm sm:text-base">
                {item.value}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="px-5 sm:px-8 md:px-10 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <TextBlock section={study.problem} />
        </div>
      </section>

      {/* Quote */}
      {study.quote && (
        <section className="px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24">
          <div className="max-w-4xl mx-auto">
            <FadeIn as="blockquote" y={30}>
              <p
                className="text-[#D7E2EA] font-bold text-center leading-snug"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
              >
                {study.quote}
              </p>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Carousel / gallery */}
      <section className="px-5 sm:px-8 md:px-10 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={30}>
            <ImagePlaceholder
              src={study.carousel[0]}
              label="Galería del proyecto"
              rounded="rounded-[32px] sm:rounded-[40px]"
              className="w-full"
              style={{ height: 'clamp(300px, 40vw, 560px)' }}
            />
          </FadeIn>
        </div>
      </section>

      {/* Process steps */}
      {study.steps.length > 0 && (
        <section className="px-5 sm:px-8 md:px-10 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-4">
              {study.steps.map((step, i) => (
                <FadeIn
                  key={i}
                  delay={i * 0.1}
                  y={20}
                  className="flex-1 flex sm:flex-col items-center gap-4 sm:gap-5 sm:text-center"
                >
                  <div className="flex items-center w-full sm:justify-center">
                    <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#D7E2EA]/40 flex items-center justify-center text-[#D7E2EA] font-medium">
                      {i + 1}
                    </span>
                    {i < study.steps.length - 1 && (
                      <span className="hidden sm:block h-px flex-1 bg-[#D7E2EA]/20 ml-2" />
                    )}
                  </div>
                  <p className="text-[#D7E2EA]/70 font-light text-sm sm:text-base">
                    {step}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solution */}
      <section className="px-5 sm:px-8 md:px-10 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn y={30} className="order-2 lg:order-1">
            <ImagePlaceholder
              src={study.carousel[1]}
              label="Solución diseñada"
              rounded="rounded-[32px] sm:rounded-[40px]"
              className="w-full"
              style={{ height: 'clamp(260px, 32vw, 420px)' }}
            />
          </FadeIn>
          <div className="order-1 lg:order-2">
            <TextBlock section={study.solution} />
          </div>
        </div>
      </section>

      {/* Insight / key decision */}
      {study.insight && (
        <section className="px-5 sm:px-8 md:px-10 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn y={30}>
              <ImagePlaceholder
                src={study.carousel[2]}
                label="Detalle clave"
                rounded="rounded-[32px] sm:rounded-[40px]"
                className="w-full"
                style={{ height: 'clamp(260px, 32vw, 420px)' }}
              />
            </FadeIn>
            <TextBlock section={study.insight} />
          </div>
        </section>
      )}

      {/* Result */}
      <section className="px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <TextBlock section={study.result} align="center" />
        </div>

        {study.metrics && study.metrics.length > 0 && (
          <div className="max-w-5xl mx-auto mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {study.metrics.map((metric, i) => (
              <FadeIn
                key={i}
                delay={i * 0.1}
                y={20}
                className="rounded-2xl border border-[#D7E2EA]/15 bg-[#141414] p-6 text-center"
              >
                <p className="text-[#D7E2EA] font-medium text-lg sm:text-xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-[#D7E2EA]/50 font-light text-sm leading-relaxed">
                  {metric.label}
                </p>
              </FadeIn>
            ))}
          </div>
        )}

        {study.status && (
          <FadeIn y={20} className="max-w-4xl mx-auto mt-12 text-center">
            <p
              className="text-[#D7E2EA] font-bold"
              style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2rem)' }}
            >
              {study.status}
            </p>
          </FadeIn>
        )}
      </section>

      <MoreProjects slugs={study.more} />
      <Footer />
    </div>
  );
}
