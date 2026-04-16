export default function CapabilityMiniPreview({
  metricLabel,
  metricValue,
  layer,
  status,
  progress,
}) {
  return (
    <div className="mt-6 space-y-3">
      <div className="rounded-[1.25rem] border border-slate-800 bg-slate-950/70 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{metricLabel}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{metricValue}</p>
          </div>
          <div className="rounded-full border border-cyan-300/15 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-100">
            {status}
          </div>
        </div>
        <div className="mt-4">
          <div className="metric-bar">
            <span style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate-500">
            <span>Operational depth</span>
            <span>{layer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
