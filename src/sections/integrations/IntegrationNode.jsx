import GlassPanel from '../../components/ui/GlassPanel';

export default function IntegrationNode({ name, category, status }) {
  return (
    <GlassPanel className="group p-5 text-center transition duration-300 hover:-translate-y-1">
      <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-200">{status}</p>
      <p className="mt-3 text-2xl font-semibold text-white">{name}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{category}</p>
    </GlassPanel>
  );
}
