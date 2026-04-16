import GlassPanel from '../../components/ui/GlassPanel';

export default function PulseMetricCard({ label, value, note, badge, className = '' }) {
  return (
    <GlassPanel className={`min-w-[220px] flex-1 p-5 md:min-w-[0] ${className}`.trim()}>
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{label}</p>
        {badge ? <span className="rounded-full border border-slate-800 bg-slate-950/70 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">{badge}</span> : null}
      </div>
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm text-slate-400">{note}</p>
    </GlassPanel>
  );
}
