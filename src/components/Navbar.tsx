import { useNavigate, useLocation, Link } from 'react-router-dom';

const LINKS: { label: string; id: string }[] = [
  { label: 'Trabajos', id: 'trabajos' },
  { label: 'Acerca de mí', id: 'acerca' },
  { label: 'Contacto', id: 'contacto' },
];

interface NavbarProps {
  /** On dark pages the brand/links are light; on light pages they invert. */
  variant?: 'dark' | 'light';
}

export default function Navbar({ variant = 'dark' }: NavbarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goTo = (id: string) => {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      // Wait for the home route to mount before scrolling to the section.
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const textColor = variant === 'dark' ? 'text-[#D7E2EA]' : 'text-[#0C0C0C]';

  return (
    <nav className="relative z-30 flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
      <Link
        to="/"
        className={`${textColor} font-black text-lg md:text-xl tracking-tight transition-opacity duration-200 hover:opacity-70`}
      >
        Oscar Díaz
      </Link>
      <div className="flex items-center gap-6 md:gap-10">
        {LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => goTo(link.id)}
            className={`${textColor} font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
