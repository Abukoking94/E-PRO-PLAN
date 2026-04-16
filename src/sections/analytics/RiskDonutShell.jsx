import GlassPanel from '../../components/ui/GlassPanel';
import DonutMiniChart from '../../components/charts/DonutMiniChart';

export default function RiskDonutShell({ value = 0, label = 'Delivery Confidence', detail }) {
  return (
    <GlassPanel className="relative overflow-hidden border border-blue-300/10 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.84))] p-6">
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-300/8 blur-3xl" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{label}</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            A high-level delivery confidence signal synthesized from backlog, review, contributor, and release activity.
          </p>
        </div>
        <DonutMiniChart value={value} />
      </div>
      {detail ? <p className="mt-5 text-sm leading-7 text-slate-400">{detail}</p> : null}
    </GlassPanel>
  );
}
