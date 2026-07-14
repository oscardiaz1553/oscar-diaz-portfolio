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
   * the whole image, matted on a neutral frame (good for UI screenshots that
   * shouldn't be cut off).
   */
  fit?: 'cover' | 'contain';
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
}: ImagePlaceholderProps) {
  if (src) {
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
