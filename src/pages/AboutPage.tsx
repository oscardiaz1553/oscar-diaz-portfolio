import { Download } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import PageHead from '../components/SectionHead';
import TitleFrame from '../components/TitleFrame';
import type { FrameKind } from '../components/TitleFrame';
import ClaudeMark, { ClaudeName } from '../components/ClaudeMark';

/*
  /acerca, "Acerca de mí": la historia + el CV navegable, con la misma
  identidad Out. del resto del sitio. La pestaña CV se fusionó aquí; /cv
  redirige a esta página. Fuente de verdad del contenido: el CV impreso
  (PDF ES/EN en /public/cv).
*/

const ABOUT_TEXT = (
  <>
    Soy diseñador UX/UI Senior, con foco en plataformas enterprise. Tomo sistemas complejos, como plataformas internas,
    procesos manuales y herramientas enterprise, y los vuelvo experiencias claras y fáciles de usar. Trabajo cerca del
    negocio y del equipo de desarrollo para que el diseño llegue a producción y sirva de verdad. Uso IA con criterio,
    con agentes y <ClaudeName />, para investigar, documentar y prototipar en código. Como complemento, diseño y
    desarrollo sitios en WordPress, y diseño, desarrollo y construyo tiendas en Shopify.
  </>
);

const EXPERIENCE = [
  {
    title: 'UI/UX Specialist, proyectos enterprise',
    org: 'Sofka Technologies',
    dates: 'De junio de 2024 a la actualidad',
    desc: 'Diseño interfaces para plataformas enterprise complejas de seguros, banca, logística e infraestructura pública. Soy responsable del sistema visual: componentes y UI Kits en Figma, con estilos e interacciones documentados. Entrego prototipos navegables en HTML de alta fidelidad, 1:1 con Figma, para que desarrollo tenga una referencia clara.',
    projects: [
      ['UX/UI Practice Lead', 'hago revisiones de calidad, entrevistas técnicas y acompaño a los diseñadores del equipo.'],
      ['Sura México', 'lideré la interfaz de la plataforma de cotización y emisión de pólizas. Entregué un sistema responsive y flujos multi-rol, con acompañamiento continuo a desarrollo.'],
      ['Summa', 'migración completa de la plataforma interna. Entregué el sistema de diseño, la librería de componentes y prototipos HTML que hacen de especificación viva.'],
      ['Metro de Medellín', 'rediseñé la gestión de usuarios y permisos. Los flujos clave quedaron más simples y mejoró la trazabilidad.'],
      ['Yappy', 'diseñé el flujo de inscripción de cuentas multi-dispositivo, con prototipo navegable de alta fidelidad y microinteracciones.'],
      ['Logyca', 'diseñé de punta a punta la plataforma de gestión de inventario, con prototipos animados.'],
      ['Crystal', 'diseñé desde cero la arquitectura de flujos, el sistema visual y los prototipos navegables.'],
    ] as [string, string][],
  },
  {
    title: 'UI/UX Designer, freelance',
    org: 'Clientes de salud, retail y servicios',
    dates: 'De enero de 2021 a la actualidad',
    desc: 'Diseño interfaces y sistemas visuales, con prototipos navegables en Figma. Desarrollo y personalizo sitios en WordPress y Shopify (temas, secciones y maquetación propia). Hablo directamente con cada cliente y le muestro avances a medida que los tengo.',
    projects: [] as [string, string][],
  },
  {
    title: 'Visual/UI Designer',
    org: 'SanMarteam',
    dates: 'De enero de 2021 a noviembre de 2022',
    desc: 'Lideré el diseño de identidades de marca e interfaces web para varios clientes de la agencia, cuidando que la marca y el producto digital fueran coherentes.',
    projects: [] as [string, string][],
  },
];

const EDUCATION = [
  ['Master en Diseño UX/UI', 'Nuclio Digital School · 2023 a 2024'],
  ['Profesional en Diseño Gráfico', 'Universidad del Norte · 2015 a 2019'],
  ['Technical Animator y FX 2D', 'Harmony · 2020'],
];

const SKILLS = [
  'Sistemas de diseño y UI Kits',
  'Diseño de interfaces y jerarquía visual',
  'Documentación y specs de interacción',
  'Prototipado y microinteracciones',
  'Arquitectura de información',
  'Research y validación',
  'Stakeholder management',
  'Diseño acelerado con IA',
  'Consistencia con identidad de marca',
  'Maquetación HTML / CSS',
  'Diseño y desarrollo en WordPress',
  'Diseño, desarrollo y construcción en Shopify',
];

const TOOLS = [
  ['Figma', 'incluido Figma Make'],
  ['Claude / Claude Code', 'prototipos en código'],
  ['v0 (Vercel) · Gemini', 'IA generativa'],
  ['HTML / CSS', 'maquetación'],
  ['Azure DevOps · Miro', 'gestión y colaboración'],
  ['Adobe', 'Ps · Ai · Ae'],
  ['WordPress', 'diseño y desarrollo de sitios'],
  ['Shopify', 'diseño, desarrollo y construcción de tiendas'],
];

function SectionHead({ kind, title }: { kind: FrameKind; title: string }) {
  return (
    <div className="mb-5">
      <TitleFrame kind={kind} tone="warm" fontSize="1.6rem">
        <h2 className="font-display font-semibold text-klein tracking-[-0.03em]" style={{ fontSize: '1.6rem' }}>
          {title}
        </h2>
      </TitleFrame>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="px-5 sm:px-8 md:px-10 pt-28 md:pt-36 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <PageHead kind="square" as="h1" title="Acerca de mí" statement="Diseño para que funcione." />

          <FadeIn delay={0.12} y={20}>
            <p
              className="mt-6 max-w-2xl font-medium leading-relaxed"
              style={{ color: 'var(--ink)', fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)' }}
            >
              {ABOUT_TEXT}
            </p>
          </FadeIn>

          <FadeIn delay={0.16} y={20}>
            <p
              className="mt-5 max-w-2xl font-light leading-relaxed"
              style={{ color: 'var(--muted)', fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
            >
              Diseño interfaces y productos digitales desde enero de 2021. Desde
              junio de 2024 lo hago en Sofka Technologies, en plataformas de
              sectores regulados: seguros, banca, logística e infraestructura
              pública. Diseño la UI sobre sistemas de diseño y UI Kits en Figma, y
              maqueto en HTML/CSS para validar la viabilidad técnica y agilizar el
              handoff con desarrollo.
            </p>
          </FadeIn>

          {/* Descargas */}
          <FadeIn delay={0.18} y={20}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/cv/Oscar-Diaz-CV-ES.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-transform duration-200 hover:scale-[1.03]"
                style={{ background: 'var(--klein)', color: 'var(--paper-pure)' }}
              >
                <Download size={16} strokeWidth={2.2} />
                Descargar CV en español (PDF)
              </a>
              <a
                href="/cv/Oscar-Diaz-CV-EN.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm border transition-colors duration-200 hover:text-accent"
                style={{ borderColor: 'var(--line)', color: 'var(--ink-2)' }}
              >
                <Download size={16} strokeWidth={2.2} />
                CV in English (PDF)
              </a>
            </div>
          </FadeIn>

          {/* Cuerpo en dos columnas */}
          <div className="mt-16 md:mt-24 grid md:grid-cols-[1fr_320px] gap-12 md:gap-16">
            {/* Experiencia */}
            <div>
              <FadeIn y={20}>
                <SectionHead kind="curly" title="Experiencia" />
              </FadeIn>
              <div className="space-y-10">
                {EXPERIENCE.map((job) => (
                  <FadeIn key={job.title} y={24}>
                    <article>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <h3 className="font-display font-bold tracking-tight text-lg md:text-xl">
                          {job.title}
                        </h3>
                        <span className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>
                          {job.dates}
                        </span>
                      </div>
                      <p className="mt-1 font-medium text-sm accent-text">{job.org}</p>
                      <p className="mt-3 font-light leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                        {job.desc}
                      </p>
                      {job.projects.length > 0 && (
                        <ul className="mt-4 space-y-2.5">
                          {job.projects.map(([name, detail]) => (
                            <li key={name} className="flex gap-3">
                              <span
                                aria-hidden
                                className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: 'var(--klein)' }}
                              />
                              <p className="font-light leading-relaxed" style={{ color: 'var(--ink-2)' }}>
                                <b className="font-semibold" style={{ color: 'var(--klein-deep)' }}>
                                  {name}
                                </b>
                                {': '}
                                {detail}
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Columna lateral */}
            <div className="md:border-l md:pl-10 space-y-12" style={{ borderColor: 'var(--line)' }}>
              <FadeIn y={20}>
                <section>
                  <SectionHead kind="square" title="Educación" />
                  <div className="space-y-4">
                    {EDUCATION.map(([title, org]) => (
                      <div key={title}>
                        <p className="font-semibold text-sm" style={{ color: 'var(--klein-deep)' }}>
                          {title}
                        </p>
                        <p className="text-sm" style={{ color: 'var(--muted)' }}>
                          {org}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>

              <FadeIn y={20}>
                <section>
                  <SectionHead kind="angle" title="Competencias" />
                  <ul className="space-y-2">
                    {SKILLS.map((skill) => (
                      <li key={skill} className="flex gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
                        <span
                          aria-hidden
                          className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: 'var(--klein-soft)' }}
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </section>
              </FadeIn>

              <FadeIn y={20}>
                <section>
                  <SectionHead kind="curly" title="Herramientas" />
                  <div className="space-y-2">
                    {TOOLS.map(([name, detail]) => (
                      <p key={name} className="text-sm" style={{ color: 'var(--ink-2)' }}>
                        <b className="font-semibold" style={{ color: 'var(--klein-deep)' }}>
                          {name.startsWith('Claude') && (
                            <ClaudeMark className="inline-block h-4 w-4 align-[-0.2em] mr-1.5" />
                          )}
                          {name}
                        </b>
                        <span style={{ color: 'var(--muted)' }}>: {detail}</span>
                      </p>
                    ))}
                  </div>
                </section>
              </FadeIn>

              <FadeIn y={20}>
                <section>
                  <SectionHead kind="square" title="Idiomas" />
                  <div className="space-y-1.5 text-sm">
                    <p className="flex justify-between" style={{ color: 'var(--ink-2)' }}>
                      <b className="font-semibold" style={{ color: 'var(--klein-deep)' }}>Español</b>
                      <span style={{ color: 'var(--muted)' }}>Nativo</span>
                    </p>
                    <p className="flex justify-between" style={{ color: 'var(--ink-2)' }}>
                      <b className="font-semibold" style={{ color: 'var(--klein-deep)' }}>Inglés</b>
                      <span style={{ color: 'var(--muted)' }}>B2</span>
                    </p>
                  </div>
                </section>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
