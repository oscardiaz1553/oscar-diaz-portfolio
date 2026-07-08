import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Search, Compass, PenTool, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const PHASES = [
  {
    icon: FileText,
    title: 'Documentación',
    copy: 'Especificaciones, handoff y documentación de producto más rápidos y consistentes.',
  },
  {
    icon: Search,
    title: 'Research',
    copy: 'Síntesis de entrevistas, análisis de hallazgos y benchmarking en una fracción del tiempo.',
  },
  {
    icon: Compass,
    title: 'Descubrimiento',
    copy: 'Exploración de ideas, mapas de oportunidad y una definición más nítida del problema.',
  },
  {
    icon: PenTool,
    title: 'Diseño',
    copy: 'Ideación de flujos, variantes de UI y prototipos para validar antes y mejor.',
  },
];

const TOOLS = ['Claude', 'Gemini', 'ChatGPT', 'NotebookLM'];

export default function AISection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax layers.
  const watermarkY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const panelY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      id="ia"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Parallax watermark */}
      <motion.span
        aria-hidden
        className="outline-text pointer-events-none select-none absolute -top-6 right-4 font-bold leading-none"
        style={{ fontSize: 'clamp(5rem, 16vw, 15rem)', y: watermarkY }}
      >
        IA
      </motion.span>

      <div className="max-w-6xl mx-auto relative">
        <FadeIn as="p" className="text-accent-deep font-medium tracking-wide text-xs sm:text-sm">
          IA en mi flujo de trabajo
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.05}
          y={30}
          className="hero-heading font-bold tracking-tight leading-[0.98] mt-3 max-w-4xl"
          style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)' }}
        >
          Diseño potenciado por <span className="accent-text">inteligencia artificial</span>
        </FadeIn>
        <FadeIn delay={0.12} y={20}>
          <p
            className="mt-6 max-w-2xl font-light leading-relaxed"
            style={{ color: 'var(--muted)', fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
          >
            Integro la IA en cada etapa del proceso para diseñar más rápido, con
            mejores decisiones y sin perder el criterio. No reemplaza el
            diseño — lo amplifica.
          </p>
        </FadeIn>

        {/* Dark feature panel */}
        <motion.div
          style={{ y: panelY }}
          className="relative mt-12 sm:mt-16 rounded-[32px] sm:rounded-[40px] bg-ink text-white overflow-hidden p-6 sm:p-10 md:p-14"
        >
          {/* Parallax blue accent block */}
          <motion.div
            aria-hidden
            style={{ y: glowY }}
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20"
          />

          <div className="relative flex items-center gap-3 mb-8 sm:mb-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <p className="text-white/70 font-light text-sm sm:text-base max-w-md">
              Uso la IA a diario en documentación, research, descubrimiento y diseño.
            </p>
          </div>

          {/* Phase grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {PHASES.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="rounded-2xl border border-white/12 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors duration-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-white font-medium text-lg">{phase.title}</h3>
                  <p className="mt-2 text-white/55 font-light text-sm leading-relaxed">
                    {phase.copy}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Building with AI + tools */}
          <div className="relative mt-8 sm:mt-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-white/10 pt-8">
            <p className="text-white/80 font-light max-w-md leading-relaxed">
              También construyo sitios y plataformas web asistido por IA — del
              concepto al producto funcional.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/80 font-medium"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
