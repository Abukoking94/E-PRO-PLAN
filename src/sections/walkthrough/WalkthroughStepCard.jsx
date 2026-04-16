import { ChevronRight } from 'lucide-react';

import GlassPanel from '../../components/ui/GlassPanel';

export default function WalkthroughStepCard({
  step,
  index,
  active = false,
  onSelect,
}) {
  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      className="block w-full text-left"
    >
      <GlassPanel
        className={`p-6 transition duration-300 ${active ? 'border-cyan-300/25 bg-slate-950/80 shadow-glow' : ''}`.trim()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-cyan-300/15 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-100">
                {step.step}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Stage 0{index + 1}
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{step.body}</p>
          </div>
          <ChevronRight className={`mt-1 h-5 w-5 transition duration-300 ${active ? 'text-cyan-200' : 'text-slate-500'}`} />
        </div>
      </GlassPanel>
    </button>
  );
}
