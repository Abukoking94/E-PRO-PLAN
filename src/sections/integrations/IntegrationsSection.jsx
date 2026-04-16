import SectionShell from '../../components/layout/SectionShell';
import GlassPanel from '../../components/ui/GlassPanel';
import { integrations } from '../../content/integrations';

import IntegrationNode from './IntegrationNode';
import IntegrationOrbitalGrid from './IntegrationOrbitalGrid';
import WorkflowConnectionLines from './WorkflowConnectionLines';

export default function IntegrationsSection() {
  return (
    <SectionShell
      id="integrations"
      eyebrow="Integration Ecosystem"
      title="Position the platform inside a believable operational ecosystem."
      description="This section makes E-PRO PLAN feel embedded in the real systems that power planning, collaboration, design review, release operations, and executive communication."
      align="center"
    >
      <div className="space-y-6">
        <GlassPanel className="relative overflow-hidden border border-cyan-300/12 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_28%),linear-gradient(180deg,rgba(8,16,30,0.88),rgba(15,23,42,0.72))] p-5 md:p-6">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
          <div className="grid gap-4 xl:gap-5 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="max-w-2xl text-left">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Connected Stack</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-white">
                E-PRO PLAN is framed as the command layer across execution, review, communication, and release motion, so the product feels integrated into organizational reality instead of floating as a standalone UI concept.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
              {[
                { label: 'Systems', value: integrations.length },
                { label: 'Sync Mode', value: 'Signal-first' },
                { label: 'Coverage', value: 'Cross-functional' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.82))] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <WorkflowConnectionLines />

        <div className="overflow-hidden rounded-[1.75rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(8,16,30,0.78),rgba(15,23,42,0.58))] p-1">
          <IntegrationOrbitalGrid>
            {integrations.map((integration) => (
              <IntegrationNode
                key={integration.name}
                name={integration.name}
                category={integration.category}
                status={integration.status}
              />
            ))}
          </IntegrationOrbitalGrid>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
          {integrations.map((integration) => (
            <GlassPanel
              key={`${integration.name}-detail`}
              className="h-full border border-white/5 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,0.84))] p-5 text-left md:p-6"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{integration.name}</p>
              <p className="mt-2 text-sm font-medium text-white">{integration.category}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{integration.description}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-slate-500">{integration.status}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
