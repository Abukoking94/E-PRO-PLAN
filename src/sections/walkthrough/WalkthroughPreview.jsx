import GlassPanel from '../../components/ui/GlassPanel';

export default function WalkthroughPreview({ step, children }) {
  return (
    <GlassPanel className="panel-strong p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{step.step}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
        </div>
        <div className="rounded-full border border-cyan-300/20 px-3 py-1 text-xs text-cyan-200">
          Active Stage
        </div>
      </div>

      <p className="text-sm leading-7 text-slate-300">{step.body}</p>
      <div className="mt-6">{children}</div>
    </GlassPanel>
  );
}
