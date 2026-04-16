export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-cyan-300/15 bg-slate-950/55 px-3 py-1 text-xs uppercase tracking-[0.16em] text-cyan-200 ${className}`.trim()}
    >
      {children}
    </span>
  );
}
