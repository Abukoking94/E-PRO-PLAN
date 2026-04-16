export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`rounded-full border border-slate-700/70 bg-slate-950/55 px-4 py-2 text-sm text-slate-300 ${className}`.trim()}
    >
      {children}
    </span>
  );
}
