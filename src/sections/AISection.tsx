import FadeIn from '../components/FadeIn';
import SectionHead from '../components/SectionHead';
import SymbolField from '../components/SymbolField';

const PHASES = [
  {
    title: 'Documentación',
    copy: 'Escribo especificaciones, handoff y documentación de producto más rápido y con más orden.',
  },
  {
    title: 'Research',
    copy: 'Resumo entrevistas, analizo hallazgos y hago benchmarking en menos tiempo.',
  },
  {
    title: 'Descubrimiento',
    copy: 'Exploro ideas, armo mapas de oportunidad y defino el problema con más claridad.',
  },
  {
    title: 'Diseño',
    copy: 'Planteo flujos, pruebo variantes de UI y hago prototipos para validar antes.',
  },
];

const TOOLS = ['Claude', 'Claude Code', 'Gemini', 'ChatGPT', 'NotebookLM'];

export default function AISection() {
  return (
    <section
      id="ia"
      data-nav-bg="dark"
      className="relative overflow-hidden bg-klein-deep text-paper-pure px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28"
    >
      <SymbolField
        color="#F5E3B3"
        opacity={0.07}
        items={[
          { kind: 'curly', x: 6, y: 16, size: 'clamp(7rem, 15vw, 15rem)', rot: -8, dur: 14 },
          { kind: 'square', x: 92, y: 88, size: 'clamp(6rem, 12vw, 12rem)', rot: 6, dur: 12, delay: 2, desktopOnly: true },
        ]}
      />
      <div className="relative max-w-5xl mx-auto">
        <SectionHead
          kind="angle"
          title="Mi flujo con IA"
          onDark
          statement="Diseño con IA en cada etapa."
          lead="Uso IA en cada etapa del proceso para diseñar más rápido y decidir mejor. El criterio sigue siendo mío."
          className="mb-12 sm:mb-16 max-w-3xl"
        />

        {/* Editorial definition list */}
        <div>
          {PHASES.map((phase, i) => (
            <FadeIn
              key={phase.title}
              delay={i * 0.06}
              y={20}
              className="group grid grid-cols-1 sm:grid-cols-[minmax(150px,240px)_1fr] gap-1 sm:gap-8 md:gap-16 py-6 sm:py-8 border-t border-paper-pure/15 last:border-b"
            >
              <h3
                className="font-display font-bold tracking-[-0.02em] text-carne leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}
              >
                {phase.title}
              </h3>
              <p
                className="leading-relaxed max-w-2xl text-paper-pure/80"
                style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
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
            className="leading-relaxed max-w-md text-paper-pure/80"
            style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
          >
            También construyo sitios y plataformas web con ayuda de la IA, de la
            idea al producto funcionando.
          </p>
          <div className="md:text-right">
            <p className="text-carne font-medium text-xs sm:text-sm">
              Herramientas
            </p>
            <p
              className="mt-2 text-paper-pure font-medium"
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
