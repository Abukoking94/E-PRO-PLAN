export default function Button({
  href = '#',
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';
  const variants = {
    primary:
      'border-cyan-300/30 bg-cyan-300/10 text-cyan-50 shadow-[0_0_24px_rgba(103,232,249,0.18)] hover:border-cyan-200/50 hover:bg-cyan-300/15',
    secondary:
      'border-slate-700 bg-slate-950/50 text-slate-100 hover:border-slate-500 hover:bg-slate-900/70',
  };

  return (
    <a
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`.trim()}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}
