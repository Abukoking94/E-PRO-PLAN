import SectionShell from '../../components/layout/SectionShell';
import GlassPanel from '../../components/ui/GlassPanel';
import { transformation } from '../../content/landingCopy';

import ChaosColumn from './ChaosColumn';
import ControlColumn from './ControlColumn';
import TransformationDivider from './TransformationDivider';

export default function TransformationSection() {
  return (
    <SectionShell
      id="transformation"
      eyebrow="From Chaos To Control"
      title="Show the emotional shift from scattered execution to coordinated momentum."
      description="This is where the product story stops sounding like a feature list and starts feeling like an organizational upgrade."
    >
      <div className="space-y-6">
        <GlassPanel className="p-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Narrative Layer</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-white">
                This section reframes the platform as an organizational reset: less scattered reporting, fewer invisible blockers, and more confidence in what ships next.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Before', value: 'Fragmented', note: 'Tools, context, and updates drift apart' },
                { label: 'After', value: 'Aligned', note: 'One surface coordinates work, risk, and releases' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <ChaosColumn items={transformation.pain} />
          <TransformationDivider />
          <ControlColumn items={transformation.outcome} />
        </div>
      </div>
    </SectionShell>
  );
}
