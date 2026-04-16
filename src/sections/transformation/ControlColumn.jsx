import { CheckCircle2, Network, Radar, Sparkles } from 'lucide-react';

import GlassPanel from '../../components/ui/GlassPanel';

const icons = [Sparkles, Radar, Network, CheckCircle2];

export default function ControlColumn({ items = [] }) {
  return (
    <GlassPanel className="relative overflow-hidden p-6">
      <div className="absolute -right-10 top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">With E-PRO PLAN</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">One command surface for flow, risk, and release clarity.</h3>
        </div>
        <div className="rounded-2xl border border-cyan-300/15 bg-slate-950/70 px-4 py-3 text-right">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Control Signals</p>
          <p className="mt-2 text-2xl font-semibold text-white">{items.length}</p>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={item}
              className="rounded-[1.5rem] border border-cyan-300/10 bg-slate-950/70 p-4"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-cyan-300/10 bg-cyan-400/10 p-3 text-cyan-200">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium leading-6 text-white">{item}</p>
                  <div className="mt-4">
                    <div className="metric-bar">
                      <span style={{ width: `${68 + index * 7}%` }} />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      <span>Signal confidence</span>
                      <span>Layer 0{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </GlassPanel>
  );
}
