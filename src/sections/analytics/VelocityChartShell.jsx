import GlassPanel from '../../components/ui/GlassPanel';
import AreaTrendChart from '../../components/charts/AreaTrendChart';
import Sparkline from '../../components/charts/Sparkline';

export default function VelocityChartShell({ points = [] }) {
  return (
    <GlassPanel className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Velocity Shape</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            A stylized trend layer built from live repo motion so the analytics section feels active and directional.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-right">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Signal Window</p>
          <p className="mt-2 text-2xl font-semibold text-white">{points.length}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <AreaTrendChart />
        <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4">
          <Sparkline points={points} />
        </div>
      </div>
    </GlassPanel>
  );
}
