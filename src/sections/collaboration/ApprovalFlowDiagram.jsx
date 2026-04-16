import GlassPanel from '../../components/ui/GlassPanel';

export default function ApprovalFlowDiagram({ approvals = [] }) {
  return (
    <GlassPanel className="p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Approval Flow</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            Show how decisions move from design and engineering into release and executive visibility.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {approvals.map((approval, index) => (
          <div key={approval} className="flex items-center gap-3">
            <div className="rounded-full border border-cyan-300/15 bg-slate-950/70 px-4 py-2 text-sm text-slate-300">
              {approval}
            </div>
            {index < approvals.length - 1 ? (
              <div className="hidden h-px w-6 bg-gradient-to-r from-cyan-400/50 to-transparent md:block" />
            ) : null}
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
