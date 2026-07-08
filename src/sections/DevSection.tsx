import { LayoutTemplate, ShoppingBag, ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const CAPABILITIES = [
  {
    icon: LayoutTemplate,
    title: 'Sitios en WordPress',
    copy: 'Desarrollo webs a medida en WordPress: landing pages, sitios corporativos y blogs, listos para gestionar y escalar.',
    tag: 'Desarrollo',
  },
  {
    icon: ShoppingBag,
    title: 'Tiendas en Shopify',
    copy: 'Monto tiendas online en Shopify de principio a fin: catálogo, checkout y una experiencia de compra cuidada.',
    tag: 'E-commerce',
  },
];

export default function DevSection() {
  return (
    <section
      id="desarrollo"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <FadeIn as="p" className="text-accent-deep font-medium tracking-wide text-xs sm:text-sm">
            Más allá del diseño
          </FadeIn>
          <FadeIn
            as="h2"
            delay={0.05}
            y={30}
            className="hero-heading font-bold tracking-tight leading-[0.95] mt-3"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            También lo construyo
          </FadeIn>
          <FadeIn delay={0.12} y={20}>
            <p
              className="mt-6 font-light leading-relaxed"
              style={{ color: 'var(--muted)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
            >
              No solo diseño la experiencia: también la llevo a la web. Entiendo
              el producto de punta a punta, desde la interfaz hasta su puesta en
              marcha.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <FadeIn
                key={cap.title}
                delay={i * 0.1}
                y={24}
                as="article"
                className="group rounded-[24px] sm:rounded-[28px] bg-surface border border-black/10 p-7 sm:p-9 hover:border-accent/40 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium tracking-wide text-accent-deep">
                    {cap.tag}
                  </span>
                </div>
                <h3
                  className="mt-6 text-ink font-medium leading-tight flex items-center gap-2"
                  style={{ fontSize: 'clamp(1.25rem, 2.4vw, 1.9rem)' }}
                >
                  {cap.title}
                  <ArrowUpRight className="h-5 w-5 text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p
                  className="mt-3 font-light leading-relaxed"
                  style={{ color: 'var(--muted)', fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}
                >
                  {cap.copy}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
