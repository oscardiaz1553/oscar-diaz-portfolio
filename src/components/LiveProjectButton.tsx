interface LiveProjectButtonProps {
  className?: string;
  label?: string;
}

/**
 * Ghost / outline pill button for the light theme.
 */
export default function LiveProjectButton({
  className = '',
  label = 'Ver proyecto',
}: LiveProjectButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-full border border-black/20 text-ink font-medium uppercase tracking-widest px-7 py-3 text-sm transition-colors duration-200 hover:bg-black/5 ${className}`}
    >
      {label}
    </button>
  );
}
