import GlassPanel from '../../components/ui/GlassPanel';

export default function SignalPanel({ title, value, note }) {
  return (
    <GlassPanel className="p-6">
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{note}</p>
    </GlassPanel>
  );
}
