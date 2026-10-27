import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandDot } from '../components/Brand';
import SectionHead from '../components/SectionHead';
import { Sym } from '../components/TitleFrame';
import type { FrameKind } from '../components/TitleFrame';
import { CASE_STUDIES } from '../data/caseStudies';
import type { CaseStudy } from '../data/caseStudies';

const KINDS: FrameKind[] = ['square', 'curly', 'paren', 'angle'];
const SPRING = { type: 'spring', stiffness: 320, damping: 26 } as const;
// El nombre va en una sola línea: el tamaño baja con el ancho de la pantalla.
const NAME_SIZE = 'clamp(2rem, 7.4vw, 6rem)';

// Colores del sistema para las tarjetas del celular (nada de rosado ni azul claro).
const LOOKS = [
  { bg: '#1B2FCC', fg: '#F5E3B3', accent: '#F5E3B3' },
  { bg: '#F5E3B3', fg: '#1B2FCC', accent: '#BC6039' },
  { bg: '#141E5C', fg: '#FBF8F5', accent: '#F5E3B3' },
];

/** "Sura México: Cotizadores" → nombre "Sura México", resto "Cotizadores". Parte por el primer ":" y sin ":" todo es nombre. */
function splitTitle(title: string): { name: string; rest: string } {
  const i = title.indexOf(':');
  if (i === -1) return { name: title.trim(), rest: '' };
  return { name: title.slice(0, i).trim(), rest: title.slice(i + 1).trim() };
}

function NewBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-klein px-2.5 py-1 text-[11px] font-medium text-carne ${className}`}
    >
      New
    </span>
  );
}

function ProjectRow({
  project,
  index,
  active,
  onHover,
}: {
  project: CaseStudy;
  index: number;
  active: boolean;
  onHover: (i: number | null) => void;
}) {
  const { name, rest } = splitTitle(project.cardTitle);
  const kind = KINDS[index % KINDS.length];

  return (
    <li className="border-t border-klein-deep/20 last:border-b">
      <Link
        to={`/trabajos/${project.slug}`}
        onPointerEnter={(e) => e.pointerType === 'mouse' && onHover(index)}
        onPointerLeave={(e) => e.pointerType === 'mouse' && onHover(null)}
        className="group grid grid-cols-1 lg:grid-cols-[1fr_19rem] items-center gap-x-6 gap-y-3 py-6 sm:py-8"
      >
        <div className="relative min-w-0 px-[0.62em]" style={{ fontSize: NAME_SIZE }}>
          <span className="relative inline-flex items-center">
            <motion.span
              aria-hidden
              className="absolute right-full mr-[0.1em] flex text-carne-deep"
              initial={false}
              animate={{ opacity: active ? 1 : 0, x: active ? 0 : '0.35em' }}
              transition={SPRING}
            >
              <Sym kind={kind} />
            </motion.span>
            <h3
              className="font-display font-extrabold tracking-[-0.045em] leading-[1.02] whitespace-nowrap transition-colors duration-300"
              style={{ color: active ? '#1B2FCC' : 'rgba(188,96,57,0.3)' }}
            >
              {name}
            </h3>
            <motion.span
              aria-hidden
              className="absolute left-full ml-[0.1em] flex text-carne-deep"
              initial={false}
              animate={{ opacity: active ? 1 : 0, x: active ? 0 : '-0.35em' }}
              transition={SPRING}
            >
              <Sym kind={kind} flip />
            </motion.span>
            {/* El punto: quieto junto al nombre; activo, salta fuera del marco. */}
            <motion.span
              aria-hidden
              className="absolute left-full bottom-[0.2em] ml-[0.04em] flex"
              initial={false}
              animate={{ x: active ? '0.56em' : 0, y: active ? ['0em', '-0.5em', '0em'] : '0em' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <BrandDot />
            </motion.span>
          </span>
        </div>

        <div className="flex flex-col gap-2 lg:items-end lg:text-right">
          {project.isNew && <NewBadge className="self-start lg:self-end" />}
          <p className="text-ink-2 leading-relaxed text-sm sm:text-base max-w-[40ch]">
            {rest || project.short}
          </p>
          <span className="text-xs font-medium text-klein-deep/70">{project.tag}</span>
        </div>
      </Link>
    </li>
  );
}

function PhoneCard({ project, index }: { project: CaseStudy; index: number }) {
  const { name } = splitTitle(project.cardTitle);
  const look = LOOKS[index % LOOKS.length];
  const kind = KINDS[index % KINDS.length];

  return (
    <Link
      to={`/trabajos/${project.slug}`}
      className="shrink-0 snap-start w-[78%] max-w-[320px] flex flex-col rounded-[24px] overflow-hidden active:scale-[0.99] transition-transform"
      style={{ background: look.bg, color: look.fg }}
    >
      <div className="relative aspect-[4/3] bg-paper-pure">
        {project.thumb && (
          <img
            src={project.thumb}
            alt={`${name}, vista del proyecto`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {project.isNew && <NewBadge className="absolute top-3 left-3 shadow-[0_2px_10px_rgba(20,30,92,0.25)]" />}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 pt-5 pb-6">
        <span aria-hidden className="flex gap-[0.3em] text-[1.4rem]" style={{ color: look.accent }}>
          <Sym kind={kind} />
          <Sym kind={kind} flip />
        </span>
        <span className="font-display font-extrabold tracking-[-0.045em] leading-[0.98] text-[1.9rem]">{name}</span>
        <span className="text-sm" style={{ opacity: 0.8 }}>
          {project.short ?? project.tag}
        </span>
      </div>
    </Link>
  );
}

export default function ProjectsSection() {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Escritorio: una vista previa del proyecto sigue al cursor sobre cada fila.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 400, damping: 32, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 400, damping: 32, mass: 0.5 });
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !listRef.current) return;
    const r = listRef.current.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };
  const hoveredProject = hovered === null ? null : CASE_STUDIES[hovered];
  const showPreview = !reduceMotion && Boolean(hoveredProject?.thumb);

  return (
    <section
      id="trabajos"
      className="relative z-10 overflow-hidden bg-paper-pure md:bg-carne border-b border-klein-deep/10 md:border-b-0 px-6 md:px-10 lg:px-16 py-14 sm:py-16 md:py-20"
    >
      <div className="relative max-w-[1400px] mx-auto">
        <SectionHead kind="curly" title="Proyectos" className="mb-8 sm:mb-12" />

        {/* Celular: todos los proyectos como tarjetas, en un carrusel a todo el ancho. */}
        <div
          role="region"
          aria-label="Proyectos"
          tabIndex={0}
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory overscroll-x-contain scroll-px-6 pb-2 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            marginInline: 'calc(50% - 50vw)',
            paddingInline: 'calc(50vw - 50%)',
          }}
        >
          {CASE_STUDIES.map((p, i) => (
            <PhoneCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <ul ref={listRef} onPointerMove={onMove} className="relative hidden md:block">
          {CASE_STUDIES.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} active={hovered === i} onHover={setHovered} />
          ))}

          {!reduceMotion && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
              style={{ x: sx, y: sy }}
            >
              <div className="translate-x-6 translate-y-6">
                <motion.div
                  initial={false}
                  animate={{ scale: showPreview ? 1 : 0.6, opacity: showPreview ? 1 : 0 }}
                  transition={SPRING}
                  className="w-[300px] aspect-[4/3] rounded-2xl overflow-hidden bg-paper-pure shadow-[0_20px_60px_rgba(20,30,92,0.35)]"
                >
                  {hoveredProject?.thumb && (
                    <img src={hoveredProject.thumb} alt="" className="w-full h-full object-cover" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </ul>
      </div>
    </section>
  );
}
