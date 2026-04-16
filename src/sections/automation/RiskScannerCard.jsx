import GlassPanel from '../../components/ui/GlassPanel';

export default function RiskScannerCard({ risks = [] }) {
  return (
    <GlassPanel className="p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Risk Scanner</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            Surface stale lanes, dependency drag, and overloaded checkpoints from one disciplined signal view.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-right">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Live Flags</p>
          <p className="mt-2 text-2xl font-semibold text-white">{risks.length}</p>
        </div>
      </div>

      <div className="space-y-3">
        {risks.map((risk, index) => (
          <div key={risk.title} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4">
            <div className="mb-2 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-white">{risk.title}</p>
              <span className="text-[11px] uppercase tracking-[0.18em] text-amber-200">
                {risk.severity}
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-400">{risk.detail}</p>
            <div className="mt-4">
              <div className="metric-bar">
                <span style={{ width: `${72 + index * 6}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
