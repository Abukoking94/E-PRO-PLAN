import { ArrowRight, Orbit } from 'lucide-react';

export default function TransformationDivider() {
  return (
    <div className="relative flex items-center justify-center py-2">
      <div className="section-divider absolute inset-x-0 top-1/2 -translate-y-1/2" />
      <div className="relative flex items-center gap-3 rounded-full border border-cyan-300/15 bg-slate-950/90 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-cyan-100 shadow-glow">
        <Orbit className="h-4 w-4" />
        <span>Operational Shift</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}
