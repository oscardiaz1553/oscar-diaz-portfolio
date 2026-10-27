import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AccentButton from './AccentButton';
import { BrandName } from './Brand';
import { Sym } from './TitleFrame';
import type { FrameKind } from './TitleFrame';

interface NavbarProps {
  /** Se conserva por compatibilidad: la barra siempre tiene fondo propio. */
  variant?: 'light' | 'dark';
}

type NavTarget = { id: string } | { to: string };

type NavItem = {
  label: string;
  /** id de la sección en la home, o ruta propia. */
  target: NavTarget;
  kind: FrameKind;
  bg: string;
  fg: string;
  tilt: number;
};

// Cada opción lleva su lámina en el menú del celular: el par de símbolos de la
// marca sobre un color del sistema (nada de rosado ni azul claro).
const ITEMS: NavItem[] = [
  { label: 'Trabajos', target: { id: 'trabajos' }, kind: 'curly', bg: '#1B2FCC', fg: '#F5E3B3', tilt: -2.5 },
  { label: 'Acerca de mí', target: { to: '/acerca' }, kind: 'square', bg: '#F5E3B3', fg: '#1B2FCC', tilt: 2 },
  { label: 'Contacto', target: { id: 'contacto' }, kind: 'angle', bg: '#FBF8F5', fg: '#141E5C', tilt: -1.5 },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

function useGo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (target: NavTarget) => {
    if ('to' in target) {
      navigate(target.to);
      return;
    }
    if (pathname === '/') {
      document.getElementById(target.id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      window.setTimeout(() => {
        document.getElementById(target.id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };
}

function MobileMenu({ onClose, go }: { onClose: () => void; go: (t: NavTarget) => void }) {
  const reduceMotion = useReducedMotion();
  const pick = (t: NavTarget) => {
    onClose();
    window.setTimeout(() => go(t), 60);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[960] bg-klein-deep flex flex-col px-6 pt-6 pb-10 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
    >
      <div className="flex items-center justify-between">
        <Link to="/" onClick={onClose} className="text-paper-pure text-xl">
          <BrandName onBlue />
        </Link>
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={onClose}
          className="relative w-10 h-10 flex items-center justify-center"
        >
          <span className="absolute block w-6 h-0.5 bg-paper-pure rotate-45" />
          <span className="absolute block w-6 h-0.5 bg-paper-pure -rotate-45" />
        </button>
      </div>

      <nav aria-label="Navegación móvil" className="flex-1 grid grid-cols-2 content-center gap-x-4 gap-y-5 py-5">
        {ITEMS.map((item, i) => (
          <motion.button
            key={item.label}
            type="button"
            onClick={() => pick(item.target)}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, rotate: 0, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, rotate: reduceMotion ? 0 : item.tilt, scale: 1 }}
            whileTap={{ scale: 0.96, rotate: 0 }}
            transition={{ delay: 0.06 + i * 0.06, type: 'spring', stiffness: 260, damping: 22 }}
            className={`group flex flex-col gap-2.5 text-left ${i === 2 ? 'col-span-2' : ''}`}
          >
            <span
              aria-hidden
              className={`relative flex items-center justify-center w-full rounded-[20px] overflow-hidden shadow-[0_14px_34px_rgba(10,15,50,0.45)] ${
                i === 2 ? 'aspect-[16/7]' : 'aspect-[4/5] [@media(max-height:900px)]:aspect-[1/1]'
              }`}
              style={{ background: item.bg, color: item.fg }}
            >
              <span className="flex gap-[0.3em]" style={{ fontSize: i === 2 ? '3.4rem' : '4.6rem' }}>
                <Sym kind={item.kind} />
                <Sym kind={item.kind} flip />
              </span>
            </span>
            <span className="font-display font-extrabold tracking-[-0.03em] text-paper-pure text-[1.7rem] leading-none pl-1">
              {item.label}
            </span>
          </motion.button>
        ))}
      </nav>

      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 240, damping: 22 }}
        className="flex flex-col items-center gap-2.5"
      >
        <motion.button
          type="button"
          onClick={() => pick({ id: 'contacto' })}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-between gap-4 rounded-full bg-carne pl-7 pr-2 py-2 shadow-[0_16px_40px_rgba(245,227,179,0.22)]"
        >
          <span className="font-display font-extrabold tracking-[-0.03em] text-klein-deep text-[clamp(1.1rem,5.6vw,1.4rem)] leading-none whitespace-nowrap">
            Contáctame
          </span>
          <span className="w-12 h-12 shrink-0 rounded-full bg-klein-deep text-paper-pure flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

/** Enlaces centrados: un halo viaja detrás del que tiene el mouse encima. */
function NavPill({ go, onDark }: { go: (t: NavTarget) => void; onDark: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <ul onMouseLeave={() => setHovered(null)} className="hidden md:flex items-center gap-0.5">
      {ITEMS.map((item) => {
        const active = hovered === item.label;
        return (
          <li key={item.label} className="relative">
            {active && (
              <motion.span
                layoutId="nav-hover-pill"
                className={`absolute inset-0 rounded-full ${onDark ? 'bg-paper-pure/15 backdrop-blur-sm' : 'bg-klein'}`}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <button
              type="button"
              onClick={() => go(item.target)}
              onMouseEnter={() => setHovered(item.label)}
              className={`relative z-10 block px-4 lg:px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                onDark ? 'text-paper-pure' : active ? 'text-paper-pure' : 'text-klein-deep'
              }`}
            >
              {item.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const SCROLLED_AT = 24;

export default function Navbar(_props: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkBehind, setDarkBehind] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const go = useGo();
  // Con fondo propio (scrolled) la barra es siempre clara: texto oscuro.
  const onDark = darkBehind && !scrolled;

  useEffect(() => {
    let raf = 0;
    const update = () => setScrolled(window.scrollY > SCROLLED_AT);
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Detecta qué hay realmente detrás de la barra: cualquier sección marcada
  // data-nav-bg="dark" que cruce la altura del encabezado.
  useLayoutEffect(() => {
    const NAV_Y = 40;
    let raf = 0;
    const measure = () => {
      const dark = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-bg="dark"]')).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= NAV_Y && r.bottom > NAV_Y;
      });
      setDarkBehind(dark);
    };
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40">
        {/* Al hacer scroll: barra con fondo propio, para que el nombre y los
            enlaces se vean sobre cualquier cosa. */}
        <div
          aria-hidden
          className={`absolute inset-0 bg-paper/90 backdrop-blur-md border-b border-klein-deep/10 shadow-[0_6px_24px_rgba(20,20,60,0.06)] pointer-events-none transition-opacity duration-300 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className={`relative px-4 sm:px-6 md:px-10 transition-[padding] duration-300 ${scrolled ? 'py-3' : 'pt-4 md:pt-6'}`}>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <Link
              to="/"
              className={`justify-self-start text-lg md:text-xl transition-colors duration-300 ${onDark ? 'text-paper-pure' : 'text-klein'}`}
            >
              <BrandName onBlue={onDark} />
            </Link>

            <div className="justify-self-center">
              <NavPill go={go} onDark={onDark} />
            </div>

            <div className="justify-self-end flex items-center gap-3">
              <div className="hidden sm:block">
                <AccentButton onClick={() => go({ id: 'contacto' })} onBlue={onDark} className="px-6 py-2.5 text-sm">
                  Contáctame
                </AccentButton>
              </div>
              <button
                type="button"
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
                className="md:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 rounded-full bg-paper-pure shadow-[0_4px_18px_rgba(20,20,60,0.14)]"
              >
                <span className="block w-5 h-0.5 bg-klein" />
                <span className="block w-5 h-0.5 bg-klein" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>{menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} go={go} />}</AnimatePresence>
    </>
  );
}
