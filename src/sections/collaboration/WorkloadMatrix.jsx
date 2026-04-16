import GlassPanel from '../../components/ui/GlassPanel';

export default function WorkloadMatrix({ lanes = [] }) {
  return (
    <GlassPanel className="p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Workload Matrix</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            Give the collaboration story a planning signal with visible load pressure across teams.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-right">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Active Lanes</p>
          <p className="mt-2 text-2xl font-semibold text-white">{lanes.length}</p>
        </div>
      </div>

      <div className="space-y-3">
        {lanes.map((lane, index) => {
          const level = 58 + index * 8;

          return (
            <div key={lane} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-white">{lane}</p>
                <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  {level}%
                </span>
              </div>
              <div className="mt-3 metric-bar">
                <span style={{ width: `${level}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </GlassPanel>
  );
}
