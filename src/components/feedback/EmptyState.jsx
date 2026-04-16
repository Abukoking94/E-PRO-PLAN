import GlassPanel from '../ui/GlassPanel';

export default function EmptyState({ label = 'Nothing to show yet.' }) {
  return (
    <GlassPanel className="p-5">
      <p className="text-sm text-slate-400">{label}</p>
    </GlassPanel>
  );
}
