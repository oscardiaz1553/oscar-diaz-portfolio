import type { ReactNode } from 'react';
import RevealText from './RevealText';
import TitleFrame from './TitleFrame';
import type { FrameKind } from './TitleFrame';

const TITLE_SIZE = 'clamp(2rem, 4vw, 3.4rem)';

interface SectionHeadProps {
  /** Símbolo de la marca que enmarca el título. */
  kind?: FrameKind;
  /** Título de la sección (la etiqueta: "Proyectos", "Contacto"…). */
  title: string;
  /** Etiqueta de nivel de encabezado del título. */
  as?: 'h1' | 'h2';
  /** Frase grande bajo el título, si la sección la lleva. */
  statement?: ReactNode;
  /** Texto de apoyo bajo la frase. */
  lead?: ReactNode;
  /** "dark" cuando la sección va sobre azul: texto claro y símbolos crema. */
  onDark?: boolean;
  /** Centra el título y la frase. */
  center?: boolean;
  className?: string;
}

/**
 * Encabezado de sección con el estilo de Out: el título enmarcado por un par
 * de símbolos de la marca y, debajo, la frase grande que dice de qué va.
 */
export default function SectionHead({
  kind = 'curly',
  title,
  as = 'h2',
  statement,
  lead,
  onDark = false,
  center = false,
  className = '',
}: SectionHeadProps) {
  return (
    <div className={`${center ? 'flex flex-col items-center text-center' : ''} ${className}`}>
      <TitleFrame kind={kind} tone={onDark ? 'light' : 'warm'} fontSize={TITLE_SIZE}>
        <RevealText
          as={as}
          text={title}
          className={`font-display font-semibold tracking-[-0.035em] ${onDark ? 'text-paper-pure' : 'text-klein'}`}
          style={{ fontSize: TITLE_SIZE }}
        />
      </TitleFrame>
      {statement && (
        <p
          className={`mt-8 sm:mt-10 max-w-[22ch] font-display font-extrabold ${onDark ? 'text-carne' : 'text-klein'} tracking-[-0.045em] leading-[0.98] ${center ? 'mx-auto' : ''}`}
          style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)' }}
        >
          {statement}
        </p>
      )}
      {lead && (
        <p
          className={`mt-6 max-w-[52ch] leading-relaxed ${onDark ? 'text-paper-pure/80' : 'text-ink-2'} ${center ? 'mx-auto' : ''}`}
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
