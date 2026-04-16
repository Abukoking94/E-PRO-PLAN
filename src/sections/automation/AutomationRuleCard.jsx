import GlassPanel from '../../components/ui/GlassPanel';

export default function AutomationRuleCard({ title, trigger, action, status }) {
  return (
    <GlassPanel className="p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-white">{title}</p>
        <span className="rounded-full border border-cyan-300/15 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-100">
          {status}
        </span>
      </div>
      <div className="mt-4 space-y-3">
        <div className="rounded-[1.25rem] border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Trigger</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{trigger}</p>
        </div>
        <div className="rounded-[1.25rem] border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Action</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{action}</p>
        </div>
      </div>
    </GlassPanel>
  );
}
