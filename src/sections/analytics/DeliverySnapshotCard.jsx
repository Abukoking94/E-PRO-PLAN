import GlassPanel from '../../components/ui/GlassPanel';

export default function DeliverySnapshotCard({ items = [] }) {
  return (
    <GlassPanel className="relative overflow-hidden border border-cyan-300/10 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.08),transparent_26%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.84))] p-6">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Delivery Snapshot</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            Executive-facing repository markers that make the page feel product-led and measurable.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.5rem] border border-white/6 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.8))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
            {item.note ? <p className="mt-2 text-sm leading-6 text-slate-400">{item.note}</p> : null}
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
