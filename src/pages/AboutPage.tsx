import { Download } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

/*
  /acerca — "Acerca de mí": la historia + el CV navegable, con la misma
  identidad Out. del resto del sitio. La pestaña CV se fusionó aquí; /cv
  redirige a esta página. Fuente de verdad del contenido: el CV impreso
  (PDF ES/EN en /public/cv).
*/

const ABOUT_TEXT =
  'Soy diseñador ux/ui enfocado en producto. Me especializo en tomar sistemas complejos —plataformas internas, procesos manuales, herramientas enterprise— y convertirlos en experiencias claras, consistentes y usables. Disfruto trabajar cerca del negocio y del equipo de desarrollo para que el diseño llegue a producción y genere impacto real.';

const EXPERIENCE = [
  {
    title: 'UI/UX Specialist — Proyectos enterprise',
    org: 'Sofka Technologies',
    dates: 'Junio 2024 – Actual',
    desc: 'Diseño de interfaces para plataformas enterprise complejas: sistema visual, componentes y UI Kits en Figma, documentación de estilos e interacción, y prototipos navegables en HTML de alta fidelidad (1:1 con Figma).',
    projects: [
      ['Sura México', 'lideré la interfaz de la plataforma de cotización y emisión de pólizas: sistema responsive, flujos multi-rol y acompañamiento continuo a desarrollo.'],
      ['Summa', 'migración completa de la plataforma interna: sistema de diseño, librería de componentes y prototipos HTML como especificación viva.'],
      ['Metro de Medellín', 'rediseño de la gestión de usuarios y permisos, simplificando flujos clave y mejorando la trazabilidad.'],
      ['Yappy', 'flujo de inscripción de cuentas multi-dispositivo, con prototipo navegable de alta fidelidad y microinteracciones.'],
      ['Logyca', 'diseño end-to-end de la plataforma de gestión de inventario, incluyendo prototipos animados.'],
      ['Crystal', 'diseño completo desde cero: arquitectura de flujos, sistema visual y prototipos navegables.'],
      ['UX/UI Practice Lead', 'revisiones de calidad, entrevistas técnicas y acompañamiento a diseñadores del equipo.'],
    ] as [string, string][],
  },
  {
    title: 'UI/UX Designer — Freelance',
    org: 'Clientes de salud, retail y servicios',
    dates: 'Enero 2021 – Actual',
    desc: 'Diseño de interfaces y sistemas visuales con prototipos navegables en Figma. Desarrollo y personalización de sitios en WordPress y Shopify (temas, secciones y maquetación propia), comunicando avances directamente con cada cliente.',
    projects: [] as [string, string][],
  },
  {
    title: 'Visual/UI Designer',
    org: 'SanMarteam',
    dates: 'Enero 2021 – Noviembre 2022',
    desc: 'Lideré el diseño de identidades de marca e interfaces web para múltiples clientes de la agencia, garantizando coherencia entre marca y producto digital.',
    projects: [] as [string, string][],
  },
];

const EDUCATION = [
  ['Master en Diseño UX/UI', 'Nuclio Digital School · 2023 – 2024'],
  ['Profesional en Diseño Gráfico', 'Universidad del Norte · 2015 – 2019'],
  ['Technical Animator y FX 2D', 'Harmony · 2020'],
];

const SKILLS = [
  'Diseño de interfaces y jerarquía visual',
  'Sistemas de diseño y UI Kits',
  'Maquetación HTML / CSS',
  'Documentación y specs de interacción',
  'Prototipado y microinteracciones',
  'Consistencia con identidad de marca',
  'Arquitectura de información',
  'Research y validación',
  'Stakeholder management',
  'Diseño acelerado con IA',
];

const TOOLS = [
  ['Figma', 'con Figma Make'],
  ['Claude / Claude Code', 'prototipos en código'],
  ['Adobe', 'Ps · Ai · Ae'],
  ['v0 (Vercel) · Gemini', 'IA generativa'],
  ['HTML / CSS', 'maquetación'],
  ['WordPress · Shopify', 'sitios web'],
  ['Azure DevOps · Miro', 'gestión y colaboración'],
];

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-5">
      <span className="font-display font-bold text-xs carne-text">{num}</span>
      <h2 className="font-display font-bold tracking-tight text-2xl md:text-3xl">{title}</h2>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="px-5 sm:px-8 md:px-10 pt-14 md:pt-20 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <FadeIn as="p" className="text-accent-deep font-medium tracking-wide text-xs sm:text-sm">
            Acerca de mí
          </FadeIn>
          <FadeIn
            as="h1"
            delay={0.05}
            y={40}
            className="hero-heading font-bold leading-[0.95] tracking-tight mt-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}
          >
            Diseño con <span className="accent-text">propósito</span>
          </FadeIn>

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
              Más de 3 años creando productos digitales para sectores regulados:
              seguros, banca, logística e infraestructura pública. Diseño UI
              apoyado en sistemas de diseño y UI Kits en Figma, con maquetación
              HTML/CSS para agilizar el handoff con desarrollo.
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
                Descargar CV (español)
              </a>
              <a
                href="/cv/Oscar-Diaz-CV-EN.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm border transition-colors duration-200 hover:text-accent"
                style={{ borderColor: 'var(--line)', color: 'var(--ink-2)' }}
              >
                <Download size={16} strokeWidth={2.2} />
                English version
              </a>
            </div>
          </FadeIn>

          {/* Cuerpo en dos columnas */}
          <div className="mt-16 md:mt-24 grid md:grid-cols-[1fr_320px] gap-12 md:gap-16">
            {/* Experiencia */}
            <div>
              <FadeIn y={20}>
                <SectionHead num="01" title="Experiencia" />
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
                                </b>{' '}
                                — {detail}
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
                  <SectionHead num="02" title="Educación" />
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
                  <SectionHead num="03" title="Competencias" />
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
                  <SectionHead num="04" title="Herramientas" />
                  <div className="space-y-2">
                    {TOOLS.map(([name, detail]) => (
                      <p key={name} className="text-sm" style={{ color: 'var(--ink-2)' }}>
                        <b className="font-semibold" style={{ color: 'var(--klein-deep)' }}>
                          {name}
                        </b>{' '}
                        <span style={{ color: 'var(--muted)' }}>— {detail}</span>
                      </p>
                    ))}
                  </div>
                </section>
              </FadeIn>

              <FadeIn y={20}>
                <section>
                  <SectionHead num="05" title="Idiomas" />
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
