import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'UX Research',
    description:
      'Evaluaciones heurísticas, mapeo de flujos y entrevistas para entender el problema real antes de diseñar la solución.',
  },
  {
    number: '02',
    name: 'UX Design',
    description:
      'Arquitectura de información, flujos y wireframes que simplifican procesos complejos y reducen la fricción operativa.',
  },
  {
    number: '03',
    name: 'UI Design',
    description:
      'Interfaces claras, consistentes y accesibles, con jerarquía visual cuidada y atención al detalle en cada estado.',
  },
  {
    number: '04',
    name: 'Design Systems',
    description:
      'Sistemas de diseño documentados —tipografía, color, grid, componentes— que dan consistencia y escalan con el producto.',
  },
  {
    number: '05',
    name: 'Prototipado',
    description:
      'Prototipos de alta fidelidad para validar decisiones, alinear al equipo y presentar la visión a stakeholders e inversores.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <p className="text-accent-deep font-medium uppercase tracking-[0.2em] text-xs sm:text-sm">
            Lo que hago
          </p>
          <h2
            className="hero-heading font-black tracking-tight leading-[0.95] mt-3"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Servicios
          </h2>
        </div>

        <div>
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.number}
              delay={i * 0.08}
              y={24}
              className="group flex items-start gap-4 sm:gap-8 md:gap-12 py-7 sm:py-9 md:py-10 border-t border-black/10 last:border-b transition-colors duration-300 hover:bg-black/[0.02] rounded-2xl px-2 sm:px-4"
            >
              <span
                className="font-black leading-none text-black/15 group-hover:text-accent transition-colors duration-300 flex-shrink-0"
                style={{ fontSize: 'clamp(2.25rem, 8vw, 96px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 pt-1 sm:pt-2">
                <div className="flex items-center gap-3">
                  <h3
                    className="text-ink font-medium leading-tight"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
                  >
                    {service.name}
                  </h3>
                  <motion.span
                    className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden
                  />
                </div>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: 'var(--muted)',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
