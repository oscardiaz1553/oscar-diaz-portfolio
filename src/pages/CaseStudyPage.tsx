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
          className="text-ink font-black tracking-tight leading-tight mb-6"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
        >
          {section.title}
        </FadeIn>
      )}
      {section.body?.map((p, i) => (
        <FadeIn key={i} delay={0.1 + i * 0.05} y={20}>
          <p
            className={`font-light leading-relaxed ${
              align === 'center' ? 'mx-auto' : ''
            } max-w-2xl ${i > 0 ? 'mt-4' : ''}`}
            style={{ color: 'var(--muted)', fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
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
    <div style={{ background: 'var(--bg)' }} className="overflow-x-clip">
      <Navbar variant="light" />

      {/* Hero */}
      <header className="px-5 sm:px-8 md:px-10 pt-14 sm:pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <FadeIn as="p" className="text-accent-deep font-medium uppercase tracking-[0.2em] text-xs sm:text-sm mb-5">
              {study.tag}
            </FadeIn>
            <FadeIn
              as="h1"
              y={40}
              className="hero-heading font-black tracking-tight leading-[0.95]"
              style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)' }}
            >
              {study.title}
            </FadeIn>
            <FadeIn delay={0.15} y={20}>
              <p
                className="mt-6 font-light leading-relaxed max-w-xl"
                style={{ color: 'var(--muted)', fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
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
              rounded="rounded-[28px] sm:rounded-[36px]"
              className="w-full shadow-[0_30px_80px_-40px_rgba(0,0,0,0.3)]"
              style={{ height: 'clamp(280px, 34vw, 460px)' }}
            />
          </FadeIn>
        </div>
      </header>

      {/* Meta row */}
      <section className="px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/10 pt-10">
          {study.meta.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08} y={20}>
              <p className="text-accent-deep font-medium uppercase tracking-widest text-xs">
                {item.label}
              </p>
              <p className="mt-2 text-ink font-medium text-base sm:text-lg">
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
                className="text-ink font-black text-center leading-snug tracking-tight"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
              >
                {study.quote}
              </p>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="px-5 sm:px-8 md:px-10 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn y={30}>
            <ImagePlaceholder
              src={study.carousel[0]}
              label="Galería del proyecto"
              rounded="rounded-[28px] sm:rounded-[36px]"
              className="w-full shadow-[0_30px_80px_-45px_rgba(0,0,0,0.3)]"
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
                    <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent-deep font-medium">
                      {i + 1}
                    </span>
                    {i < study.steps.length - 1 && (
                      <span className="hidden sm:block h-px flex-1 bg-black/15 ml-2" />
                    )}
                  </div>
                  <p className="font-light text-sm sm:text-base" style={{ color: 'var(--muted)' }}>
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
              rounded="rounded-[28px] sm:rounded-[36px]"
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
                rounded="rounded-[28px] sm:rounded-[36px]"
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
                className="rounded-2xl bg-surface border border-black/10 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.4)] p-6 text-center"
              >
                <p className="text-accent font-black text-2xl sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-light text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {metric.label}
                </p>
              </FadeIn>
            ))}
          </div>
        )}

        {study.status && (
          <FadeIn y={20} className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-accent-deep font-bold" style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2rem)' }}>
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
