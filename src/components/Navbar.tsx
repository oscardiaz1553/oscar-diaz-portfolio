import { useNavigate, useLocation, Link } from 'react-router-dom';
import { BrandName } from './Brand';

const LINKS: { label: string; id: string }[] = [
  { label: 'Trabajos', id: 'trabajos' },
  { label: 'Acerca de mí', id: 'acerca' },
  { label: 'Contacto', id: 'contacto' },
];

interface NavbarProps {
  variant?: 'light' | 'dark';
}

export default function Navbar({ variant = 'light' }: NavbarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goTo = (id: string) => {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const textColor = variant === 'dark' ? 'text-white' : 'text-ink';

  return (
    <nav className="sticky top-0 z-40 flex justify-between items-center px-6 md:px-10 py-5 md:py-6 bg-bg/95 md:bg-bg/70 md:backdrop-blur-md border-b border-black/[0.06]">
      <Link
        to="/"
        className={`group ${textColor} text-lg md:text-xl transition-opacity duration-200 hover:opacity-70`}
      >
        <BrandName onBlue={variant === 'dark'} />
      </Link>
      <div className="flex items-center gap-5 md:gap-9">
        {LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => goTo(link.id)}
            className={`${textColor} font-medium tracking-wide text-xs md:text-sm transition-colors duration-200 hover:text-accent-deep`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
