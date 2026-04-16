import GlassPanel from '../../components/ui/GlassPanel';

export default function PricingCard({ children, featured = false }) {
  return (
    <GlassPanel
      className={`relative overflow-hidden border p-6 ${
        featured
          ? 'border-cyan-300/25 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.94),rgba(2,6,23,0.9))] shadow-glow'
          : 'border-white/6 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,0.84))]'
      }`.trim()}
    >
      {featured ? (
        <>
          <div className="absolute -right-10 top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
        </>
      ) : null}
      {!featured ? (
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      ) : null}
      <div className="relative z-10">{children}</div>
    </GlassPanel>
  );
}
