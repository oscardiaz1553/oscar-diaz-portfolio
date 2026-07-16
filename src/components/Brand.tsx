// Identidad derivada de Out. — el punto es "lo que se sale": siempre cálido,
// nunca del color de la palabra. carne-deep sobre claro; carne sobre azul.
const DOT_ON_LIGHT = '#BC6039';
const DOT_ON_BLUE = '#F2C6B4';

interface BrandDotProps {
  color?: string;
}

/**
 * El punto de marca: un círculo gráfico (no un punto tipográfico). Medido en
 * `em` para escalar con el wordmark. Siempre cálido.
 */
export function BrandDot({ color = DOT_ON_LIGHT }: BrandDotProps) {
  return (
    <span
      aria-hidden
      className="inline-block rounded-full transition-transform duration-150 ease-out group-hover:scale-125"
      style={{ width: '0.16em', height: '0.16em', backgroundColor: color }}
    />
  );
}

interface BrandNameProps {
  dotColor?: string;
  /** true cuando el wordmark va sobre el fondo azul Klein */
  onBlue?: boolean;
  className?: string;
}

/**
 * El wordmark "Oscar Díaz" en Bricolage Grotesque ExtraBold, con el punto
 * cálido pegado al final. Deriva del sistema Out. manteniendo la misma paleta.
 */
export function BrandName({ dotColor, onBlue = false, className }: BrandNameProps) {
  const dot = dotColor ?? (onBlue ? DOT_ON_BLUE : DOT_ON_LIGHT);
  return (
    <span
      className={`font-display font-extrabold tracking-[-0.045em] ${className ?? ''}`}
    >
      Oscar Díaz
      <BrandDot color={dot} />
    </span>
  );
}

export { DOT_ON_LIGHT, DOT_ON_BLUE };
