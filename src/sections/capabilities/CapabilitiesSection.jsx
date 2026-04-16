import { KanbanSquare, Layers3, Radar, Rocket, ShieldCheck, Workflow } from 'lucide-react';

import SectionShell from '../../components/layout/SectionShell';
import GlassPanel from '../../components/ui/GlassPanel';
import { capabilities } from '../../content/capabilities';

import CapabilitiesGrid from './CapabilitiesGrid';
import CapabilityCard from './CapabilityCard';
import CapabilityMiniPreview from './CapabilityMiniPreview';

const capabilityIcons = [KanbanSquare, Workflow, Layers3, Radar, ShieldCheck, Rocket];
const previewMetrics = [
  { metricLabel: 'Lane Clarity', metricValue: '84%', status: 'Live', progress: 84 },
  { metricLabel: 'Sprint Shape', metricValue: '12 streams', status: 'Mapped', progress: 76 },
  { metricLabel: 'Signal Density', metricValue: '28 views', status: 'Active', progress: 81 },
  { metricLabel: 'Risk Mesh', metricValue: '9 blockers', status: 'Tracked', progress: 73 },
  { metricLabel: 'Rule Coverage', metricValue: '21 automations', status: 'Armed', progress: 88 },
  { metricLabel: 'Release Rhythm', metricValue: '4 checkpoints', status: 'Stable', progress: 79 },
];

export default function CapabilitiesSection() {
  return (
    <SectionShell
      id="platform"
      eyebrow="Platform Capabilities"
      title="Present the product as a system of coordinated layers, not one isolated feature."
      description="This grid is the backbone of the landing page. Each tile should feel like part of a larger operating system."
    >
      <div className="space-y-6">
        <GlassPanel className="p-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">System View</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-white">
                Each capability is framed like a layer in a serious operational platform, so the page feels more like enterprise software than a simple feature list.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Core Layers', value: capabilities.length },
                { label: 'Planning Bias', value: 'High' },
                { label: 'Execution Tone', value: 'Command-led' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <CapabilitiesGrid>
        {capabilities.map((capability, index) => {
          const Icon = capabilityIcons[index];
          const preview = previewMetrics[index];

          return (
            <CapabilityCard key={capability.title}>
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-2xl border border-cyan-300/15 bg-slate-950/60 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{capability.label}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{capability.description}</p>

              <CapabilityMiniPreview
                metricLabel={preview.metricLabel}
                metricValue={preview.metricValue}
                status={preview.status}
                progress={preview.progress}
                layer={`Layer 0${index + 1}`}
              />
            </CapabilityCard>
          );
        })}
        </CapabilitiesGrid>
      </div>
    </SectionShell>
  );
}
