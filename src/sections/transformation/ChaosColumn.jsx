import { AlertTriangle, BellRing, CircleOff, TimerReset } from 'lucide-react';

import GlassPanel from '../../components/ui/GlassPanel';

const icons = [BellRing, TimerReset, CircleOff, AlertTriangle];

export default function ChaosColumn({ items = [] }) {
  return (
    <GlassPanel className="relative overflow-hidden p-6">
      <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Without The Platform</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Execution fragments, context slips, and ownership fog.</h3>
        </div>
        <div className="rounded-2xl border border-amber-300/15 bg-slate-950/70 px-4 py-3 text-right">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Pressure Signals</p>
          <p className="mt-2 text-2xl font-semibold text-white">{items.length}</p>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={item}
              className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-amber-300/10 bg-amber-400/10 p-3 text-amber-200">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium leading-6 text-white">{item}</p>
                  <div className="mt-4">
                    <div className="metric-bar">
                      <span style={{ width: `${78 + index * 5}%` }} />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      <span>Escalation drift</span>
                      <span>State 0{index + 1}</span>
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
