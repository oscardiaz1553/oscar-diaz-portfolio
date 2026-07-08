import type { CSSProperties } from 'react';

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
  rounded?: string;
}

/**
 * Renders a real image when `src` is provided, otherwise a labelled light
 * placeholder box so the full layout can be built before images exist.
 */
export default function ImagePlaceholder({
  src,
  alt = '',
  label = 'Imagen',
  className = '',
  style,
  rounded = 'rounded-[28px] sm:rounded-[36px]',
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`object-cover ${rounded} ${className}`}
        style={style}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-black/10 bg-[linear-gradient(135deg,#ECEBE4_0%,#F4F3EE_100%)] ${rounded} ${className}`}
      style={style}
    >
      <span className="text-black/30 text-xs sm:text-sm uppercase tracking-widest font-light px-4 text-center">
        {label}
      </span>
    </div>
  );
}
