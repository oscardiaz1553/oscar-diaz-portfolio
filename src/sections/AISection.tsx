import FadeIn from '../components/FadeIn';

const PHASES = [
  {
    title: 'Documentación',
    copy: 'Especificaciones, handoff y documentación de producto más rápidos y consistentes.',
  },
  {
    title: 'Research',
    copy: 'Síntesis de entrevistas, análisis de hallazgos y benchmarking en menos tiempo.',
  },
  {
    title: 'Descubrimiento',
    copy: 'Exploración de ideas, mapas de oportunidad y una definición más nítida del problema.',
  },
  {
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
      <div className="max-w-5xl mx-auto">
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

        {/* Editorial definition list */}
        <div>
          {PHASES.map((phase, i) => (
            <FadeIn
              key={phase.title}
              delay={i * 0.06}
              y={20}
              className="group grid grid-cols-1 sm:grid-cols-[minmax(150px,240px)_1fr] gap-1 sm:gap-8 md:gap-16 py-6 sm:py-8 border-t border-black/10 last:border-b"
            >
              <h3
                className="text-ink font-medium leading-tight group-hover:text-accent transition-colors duration-300"
                style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}
              >
                {phase.title}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{ color: 'var(--muted)', fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
              >
                {phase.copy}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Tools + web building, understated inline treatment */}
        <FadeIn
          delay={0.1}
          y={20}
          className="mt-12 sm:mt-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
        >
          <p
            className="font-light leading-relaxed max-w-md"
            style={{ color: 'var(--muted)', fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
          >
            También construyo sitios y plataformas web asistido por IA, del
            concepto al producto funcional.
          </p>
          <div className="md:text-right">
            <p className="text-accent-deep font-medium tracking-wide text-xs sm:text-sm">
              Herramientas
            </p>
            <p
              className="mt-2 text-ink font-medium"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}
            >
              {TOOLS.join('  ·  ')}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
