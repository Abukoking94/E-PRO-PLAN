import GlassPanel from '../../components/ui/GlassPanel';

export default function CapabilityCard({ children, className = '' }) {
  return (
    <GlassPanel
      className={`group relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 ${className}`.trim()}
    >
      <div className="absolute -right-8 top-8 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/15" />
      <div className="relative z-10">{children}</div>
    </GlassPanel>
  );
}
