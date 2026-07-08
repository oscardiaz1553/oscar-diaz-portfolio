import { motion } from 'framer-motion';

interface ContactButtonProps {
  className?: string;
  label?: string;
  targetId?: string;
}

/**
 * Primary CTA — accent green pill with a subtle lift on hover.
 */
export default function ContactButton({
  className = '',
  label = 'Contáctame',
  targetId = 'contacto',
}: ContactButtonProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = 'mailto:oscardiaczs@gmail.com';
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`rounded-full bg-accent text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-9 sm:py-3.5 text-sm hover:bg-accent-deep transition-colors duration-200 ${className}`}
    >
      {label}
    </motion.button>
  );
}
