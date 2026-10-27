import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHead from '../components/SectionHead';

// Proyectos propios y colaboraciones, con enlace.
const OWN_PROJECTS = [
  { name: 'Diario Deportes', url: '#/trabajos/diario-deportes', detail: 'Rediseño en WordPress y migración en vivo de más de 47.000 notas', internal: true },
  { name: 'BARCI', url: 'https://barci.com.co/', detail: 'Tienda en Shopify', internal: false },
];

const COLLAB_PROJECTS = [
  { name: 'Eticolor', url: 'https://eticolor.com.co/', detail: 'Tienda en Shopify' },
  { name: 'The Black Box', url: 'https://theblackboxsnack.com/', detail: 'Tienda en Shopify' },
  { name: 'Maison Caviar', url: 'https://maisoncaviar.com.co/', detail: 'Tienda en Shopify' },
];

type ListItem = { name: string; url: string; detail: string; internal?: boolean };

function ProjectList({ title, items, className = '' }: { title: string; items: ListItem[]; className?: string }) {
  const row =
    'group flex flex-wrap items-center justify-between gap-3 py-6 sm:py-7 border-t border-black/10 last:border-b transition-colors duration-300 hover:border-accent/40';
  const inner = (p: ListItem) => (
    <>
      <div className="flex flex-col gap-1">
        <h4
          className="font-display font-bold tracking-[-0.02em] text-klein-deep leading-tight group-hover:text-accent transition-colors duration-300"
          style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.75rem)' }}
        >
          {p.name}
        </h4>
        <p className="font-light" style={{ color: 'var(--muted)', fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}>
          {p.detail}
        </p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-accent-deep font-medium tracking-wide text-sm">
        {p.internal ? 'Ver caso' : 'Ver sitio'}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </>
  );
  return (
    <div className={className}>
      <h3 className="font-display font-bold text-klein tracking-[-0.03em] text-2xl sm:text-3xl">{title}</h3>
      <div className="mt-6">
        {items.map((p) =>
          p.internal ? (
            <Link key={p.name} to={p.url.replace('#', '')} className={row}>
              {inner(p)}
            </Link>
          ) : (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className={row}>
              {inner(p)}
            </a>
          ),
        )}
      </div>
    </div>
  );
}

export default function DevSection() {
  return (
    <section
      id="desarrollo"
      className="bg-paper-pure px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHead
          kind="square"
          title="Desarrollo web"
          lead="Diseño y desarrollo sitios en WordPress y tiendas en Shopify, como complemento al diseño de producto."
          className="mb-12 sm:mb-16 max-w-3xl"
        />

        {/* Proyectos en producción: los propios y las colaboraciones */}
        <ProjectList title="Proyectos propios" items={OWN_PROJECTS} />
        <ProjectList title="Tiendas en colaboración" items={COLLAB_PROJECTS} className="mt-14 sm:mt-16" />
      </div>
    </section>
  );
}
