import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ImageLightboxProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
}

/**
 * Visor a pantalla completa. La imagen se ve entera; un toque (o clic) la lleva
 * a su tamaño real para recorrerla con el dedo o el mouse y leer los detalles.
 */
export default function ImageLightbox({ src, alt = '', open, onClose }: ImageLightboxProps) {
  const [actual, setActual] = useState(false);
  const [natural, setNatural] = useState<number | null>(null);

  useEffect(() => {
    if (!open) {
      setActual(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt || 'Imagen ampliada'}
          className="fixed inset-0 z-[1000] bg-klein-deep/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Cerrar imagen"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-paper-pure shadow-[0_4px_18px_rgba(0,0,0,0.3)]"
          >
            <span className="absolute block h-0.5 w-5 rotate-45 bg-klein-deep" />
            <span className="absolute block h-0.5 w-5 -rotate-45 bg-klein-deep" />
          </button>

          <div
            className={`h-full w-full ${actual ? 'overflow-auto' : 'flex items-center justify-center overflow-hidden p-4 sm:p-8'}`}
          >
            <img
              src={src}
              alt={alt}
              onLoad={(e) => setNatural(e.currentTarget.naturalWidth)}
              onClick={(e) => {
                e.stopPropagation();
                setActual((v) => !v);
              }}
              className={`rounded-xl bg-paper-pure shadow-[0_30px_90px_rgba(0,0,0,0.5)] ${
                actual ? 'm-auto max-w-none cursor-zoom-out' : 'max-h-full max-w-full object-contain cursor-zoom-in'
              }`}
              style={actual && natural ? { width: natural } : undefined}
            />
          </div>

          <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-xs text-paper-pure/70">
            {actual ? 'Toca la imagen para ajustarla' : 'Toca la imagen para verla en su tamaño real'}
          </p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
