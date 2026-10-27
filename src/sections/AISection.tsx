import FadeIn from '../components/FadeIn';
import SectionHead from '../components/SectionHead';
import SymbolField from '../components/SymbolField';
import ClaudeMark, { ClaudeName } from '../components/ClaudeMark';

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
          lead={
            <>
              En mi flujo de trabajo incluyo agentes de inteligencia artificial, como <ClaudeName />, en el proceso de
              diseño y en entregables que ayudan al equipo de desarrollo y a los product owners a tener más claridad
              sobre los flujos y los productos.
            </>
          }
          className="mb-12 sm:mb-16 max-w-3xl"
        />

        {/* Herramientas */}
        <FadeIn
          delay={0.1}
          y={20}
          className="flex flex-col gap-8 "
        >
          <div className="">
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
