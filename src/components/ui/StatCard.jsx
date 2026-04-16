import AnimatedCounter from './AnimatedCounter';
import GlassPanel from './GlassPanel';

export default function StatCard({ label, value, suffix = '', description, className = '' }) {
  return (
    <GlassPanel className={`p-4 ${className}`.trim()}>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      {description ? <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p> : null}
    </GlassPanel>
  );
}
