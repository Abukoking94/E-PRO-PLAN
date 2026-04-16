import GlassPanel from '../../components/ui/GlassPanel';

export default function CommandPaletteMockup({ commands = [] }) {
  return (
    <GlassPanel className="panel-strong p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Command Surface</p>
      <div className="mt-5 rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-4">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <span className="rounded-full border border-slate-700 px-2 py-1 text-xs">Ctrl</span>
          <span className="rounded-full border border-slate-700 px-2 py-1 text-xs">K</span>
          <span className="min-w-0 leading-6">
            Trigger a workflow, jump to a lane, or inspect release risk
          </span>
        </div>
        <div className="mt-4 space-y-3">
          {commands.map((line) => (
            <div
              key={line}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm leading-6 text-slate-300"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}
