import FadeIn from '../components/FadeIn';
import SectionHead from '../components/SectionHead';
import SymbolField from '../components/SymbolField';
import ClaudeMark, { ClaudeName } from '../components/ClaudeMark';
import type { ReactNode } from 'react';

const PHASES: { title: string; copy: ReactNode }[] = [
  {
    title: 'Research',
    copy: 'Resumo entrevistas, ordeno hallazgos y hago benchmarking en menos tiempo. Contrasto los resultados con las fuentes antes de usarlos.',
  },
  {
    title: 'Descubrimiento',
    copy: 'Exploro ideas, armo mapas de oportunidad y defino el problema con más claridad. La IA propone y yo decido qué sirve.',
  },
  {
    title: 'Diseño y prototipos',
    copy: (
      <>
        Planteo flujos, pruebo variantes de UI y hago prototipos en código con <ClaudeName />, además de prototipos
        navegables en HTML de alta fidelidad, 1:1 con Figma.
      </>
    ),
  },
  {
    title: 'Documentación',
    copy: 'Con agentes escribo especificaciones, handoff y documentación de producto más rápido y con más orden. Reviso cada entrega antes de compartirla.',
  },
  {
    title: 'Mis límites',
    copy: 'Las decisiones de diseño y la validación con usuarios no se delegan. Todo lo que genera la IA lo reviso, y no entrego lo que no entiendo.',
  },
];

const TOOLS = ['Claude', 'Claude Code', 'Gemini', 'ChatGPT', 'NotebookLM', 'Figma Make'];

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
          statement="La IA acelera. El criterio es mío."
          lead={
            <>
              Trabajo con agentes y con <ClaudeName /> en mi proceso de diseño y en prototipos en código. Me ayudan a ir
              más rápido y a revisar más opciones. Las decisiones las tomo yo.
            </>
          }
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
            Con <ClaudeName /> también construyo sitios y plataformas web, de la idea al producto funcionando.
          </p>
          <div className="md:text-right">
            <p className="text-carne font-medium text-xs sm:text-sm">
              Herramientas
            </p>
            <p
              className="mt-2 text-paper-pure font-medium"
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}
            >
              {TOOLS.map((tool, i) => (
                <span key={tool}>
                  {i > 0 && (
                    <span aria-hidden className="mx-2">
                      ·
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    {tool.startsWith('Claude') && <ClaudeMark className="h-5 w-5 shrink-0" />}
                    {tool}
                  </span>
                </span>
              ))}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
