import type { CSSProperties } from 'react';

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
  rounded?: string;
  /**
   * 'cover' fills and crops (good for decorative thumbnails); 'contain' shows
   * the whole image inside a fixed box. Only used in bounded (non-natural) mode.
   */
  fit?: 'cover' | 'contain';
  /**
   * Frameless mode: render the real image at its natural aspect ratio (capped by
   * `maxHeight`), centered, with a soft shadow — no box, no mat, no border. This
   * keeps screenshots fully visible and prominent instead of matted inside a
   * container. Best for case-study images.
   */
  natural?: boolean;
  /** Cap for the natural-mode image height (e.g. 'clamp(360px, 46vw, 600px)'). */
  maxHeight?: string;
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
  fit = 'cover',
  natural = false,
  maxHeight,
}: ImagePlaceholderProps) {
  if (src) {
    // Frameless: the image is the element — no wrapper box, no mat, no border.
    if (natural) {
      return (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`block mx-auto max-w-full h-auto object-contain shadow-[0_35px_90px_-45px_rgba(0,0,0,0.4)] ${rounded} ${className}`}
          style={{ maxHeight, ...style }}
        />
      );
    }

    // Bounded: image fills a fixed box (used for cards and the marquee). A
    // subtle border + neutral mat keeps each thumbnail defined inside the card.
    return (
      <div
        className={`overflow-hidden border border-black/10 ${rounded} ${className}`}
        style={{ background: fit === 'contain' ? '#ECEBE4' : undefined, ...style }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full ${
            fit === 'contain' ? 'object-contain' : 'object-cover'
          }`}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-black/10 bg-[#ECEBE4] ${rounded} ${className}`}
      style={style}
    >
      <span className="text-black/30 text-xs sm:text-sm tracking-wide font-light px-4 text-center">
        {label}
      </span>
    </div>
  );
}
