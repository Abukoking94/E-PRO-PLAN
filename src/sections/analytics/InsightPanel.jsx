import GlassPanel from '../../components/ui/GlassPanel';

export default function InsightPanel({ title, amount, value }) {
  return (
    <GlassPanel className="p-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-white">{title}</p>
        <span className="text-xs uppercase tracking-[0.16em] text-slate-500">{amount}</span>
      </div>
      <div className="metric-bar">
        <span style={{ width: `${value}%` }} />
      </div>
    </GlassPanel>
  );
}
