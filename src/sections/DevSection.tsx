import FadeIn from '../components/FadeIn';

const CAPABILITIES = [
  {
    title: 'Sitios en WordPress',
    copy: 'Desarrollo webs a medida en WordPress: landing pages, sitios corporativos y blogs, listos para gestionar y escalar.',
  },
  {
    title: 'Tiendas en Shopify',
    copy: 'Monto tiendas online en Shopify de principio a fin: catálogo, checkout y una experiencia de compra cuidada.',
  },
];

export default function DevSection() {
  return (
    <section
      id="desarrollo"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-5xl mx-auto">
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

        <div>
          {CAPABILITIES.map((cap, i) => (
            <FadeIn
              key={cap.title}
              delay={i * 0.08}
              y={20}
              as="article"
              className="group grid grid-cols-1 sm:grid-cols-[minmax(150px,240px)_1fr] gap-1 sm:gap-8 md:gap-16 py-6 sm:py-8 border-t border-black/10 last:border-b"
            >
              <h3
                className="text-ink font-medium leading-tight group-hover:text-accent transition-colors duration-300"
                style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}
              >
                {cap.title}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{ color: 'var(--muted)', fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)' }}
              >
                {cap.copy}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
