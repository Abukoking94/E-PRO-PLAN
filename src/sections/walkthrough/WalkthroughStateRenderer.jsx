const toneClasses = {
  cyan: 'border-cyan-300/10 bg-slate-950/70',
  blue: 'border-blue-300/10 bg-slate-950/70',
  teal: 'border-teal-300/10 bg-slate-950/70',
};

export default function WalkthroughStateRenderer({
  label,
  title,
  detail,
  status = 'Ready',
  tone = 'cyan',
}) {
  return (
    <div className={`rounded-[1.5rem] border p-4 ${toneClasses[tone] ?? toneClasses.cyan}`.trim()}>
      <div className="mb-2 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-slate-500">
        <span>{label}</span>
        <span className="text-cyan-200">{status}</span>
      </div>
      <p className="text-sm font-medium text-white">{title}</p>
      {detail ? <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p> : null}
    </div>
  );
}
