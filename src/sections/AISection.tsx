import FadeIn from '../components/FadeIn';
import SectionHead from '../components/SectionHead';
import SymbolField from '../components/SymbolField';
import ToolLogo from '../components/ToolLogo';
import type { ToolLogoName } from '../components/ToolLogo';

const TOOLS: { name: string; logo: ToolLogoName }[] = [
  { name: 'Claude', logo: 'claude' },
  { name: 'Claude Code', logo: 'claudecode' },
  { name: 'Gemini', logo: 'gemini' },
  { name: 'ChatGPT', logo: 'chatgpt' },
  { name: 'NotebookLM', logo: 'notebooklm' },
  { name: 'Figma Make', logo: 'figma' },
];

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
              En mi flujo de trabajo incluyo agentes de inteligencia artificial en el proceso de diseño y en entregables
              que ayudan al equipo de desarrollo y a los product owners a tener más claridad sobre los flujos y los
              productos.
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
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-3 text-paper-pure font-medium" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.3rem)' }}>
              {TOOLS.map((tool) => (
                <li
                  key={tool.name}
                  className="inline-flex items-center gap-2.5 rounded-full border border-paper-pure/15 bg-paper-pure/[0.06] pl-3.5 pr-4 py-2 whitespace-nowrap"
                >
                  <ToolLogo name={tool.logo} className="h-[1.15em] w-[1.15em] shrink-0" />
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
