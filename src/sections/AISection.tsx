import { FileText, Search, Compass, PenTool } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const PHASES = [
  {
    icon: FileText,
    title: 'Documentación',
    copy: 'Especificaciones, handoff y documentación de producto más rápidos y consistentes.',
  },
  {
    icon: Search,
    title: 'Research',
    copy: 'Síntesis de entrevistas, análisis de hallazgos y benchmarking en menos tiempo.',
  },
  {
    icon: Compass,
    title: 'Descubrimiento',
    copy: 'Exploración de ideas, mapas de oportunidad y una definición más nítida del problema.',
  },
  {
    icon: PenTool,
    title: 'Diseño',
    copy: 'Ideación de flujos, variantes de UI y prototipos para validar antes y mejor.',
  },
];

const TOOLS = ['Claude', 'Gemini', 'ChatGPT', 'NotebookLM'];

export default function AISection() {
  return (
    <section
      id="ia"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <FadeIn as="p" className="text-accent-deep font-medium tracking-wide text-xs sm:text-sm">
            IA en mi flujo de trabajo
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            y={30}
            className="hero-heading font-bold tracking-tight leading-[0.95] mt-3"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Diseño potenciado por <span className="accent-text">IA</span>
          </FadeIn>
          <FadeIn delay={0.12} y={20}>
            <p
              className="mt-6 font-light leading-relaxed"
              style={{ color: 'var(--muted)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
            >
              Integro la IA en cada etapa del proceso para diseñar más rápido y
              con mejores decisiones, sin perder el criterio. No reemplaza el
              diseño — lo amplifica.
            </p>
          </FadeIn>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PHASES.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <FadeIn
                key={phase.title}
                delay={i * 0.08}
                y={24}
                className="group rounded-[24px] sm:rounded-[28px] bg-surface border border-black/10 p-6 sm:p-7 hover:border-accent/40 transition-colors duration-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-ink font-medium text-lg">{phase.title}</h3>
                <p
                  className="mt-2 font-light leading-relaxed"
                  style={{ color: 'var(--muted)', fontSize: 'clamp(0.9rem, 1.4vw, 1rem)' }}
                >
                  {phase.copy}
                </p>
              </FadeIn>
            );
          })}
        </div>

        {/* Tools */}
        <FadeIn
          delay={0.1}
          y={24}
          className="mt-6 rounded-[24px] sm:rounded-[28px] bg-surface border border-black/10 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <p
            className="font-light leading-relaxed max-w-md"
            style={{ color: 'var(--muted)', fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}
          >
            También construyo sitios y plataformas web asistido por IA — del
            concepto al producto funcional.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-black/12 bg-bg px-4 py-2 text-sm font-medium text-ink"
              >
                {tool}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
