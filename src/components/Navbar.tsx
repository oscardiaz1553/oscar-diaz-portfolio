import { useNavigate, useLocation, Link } from 'react-router-dom';

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
    <nav className="sticky top-0 z-40 flex justify-between items-center px-6 md:px-10 py-5 md:py-6 backdrop-blur-md bg-bg/70 border-b border-black/[0.06]">
      <Link
        to="/"
        className={`${textColor} font-bold text-lg md:text-xl tracking-tight transition-opacity duration-200 hover:opacity-60`}
      >
        Oscar Díaz<span className="text-accent">.</span>
      </Link>
      <div className="flex items-center gap-5 md:gap-9">
        {LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => goTo(link.id)}
            className={`${textColor} font-medium uppercase tracking-wider text-xs md:text-sm transition-colors duration-200 hover:text-accent-deep`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
