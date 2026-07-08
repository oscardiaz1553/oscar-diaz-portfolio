import type { CSSProperties } from 'react';

interface ImagePlaceholderProps {
  /** Optional real image URL. When absent, a labelled placeholder is shown. */
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
  rounded?: string;
}

/**
 * Renders a real image when `src` is provided, otherwise a labelled dark
 * placeholder box. Lets us build the full layout now and drop in image URLs
 * later without touching markup.
 */
export default function ImagePlaceholder({
  src,
  alt = '',
  label = 'Imagen',
  className = '',
  style,
  rounded = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]',
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
      className={`flex items-center justify-center border border-[#D7E2EA]/15 bg-[#141414] ${rounded} ${className}`}
      style={style}
    >
      <span className="text-[#D7E2EA]/30 text-xs sm:text-sm uppercase tracking-widest font-light px-4 text-center">
        {label}
      </span>
    </div>
  );
}
