import { Bot, Command, ShieldAlert } from 'lucide-react';

import SectionShell from '../../components/layout/SectionShell';
import GlassPanel from '../../components/ui/GlassPanel';
import { automation } from '../../content/landingCopy';

import AutomationRuleCard from './AutomationRuleCard';
import CommandPaletteMockup from './CommandPaletteMockup';
import RiskScannerCard from './RiskScannerCard';
import SignalPanel from './SignalPanel';

const automationIcons = [Command, ShieldAlert, Bot];
const commandLines = [
  'Scan dependency pressure across active squads',
  'Summarize blockers affecting the next release lane',
  'Open the executive delivery snapshot',
];
const signalCards = [
  { title: 'Automation Coverage', value: '21 rules', note: 'Commandable product actions across planning, review, and release flow.' },
  { title: 'Escalation Signals', value: '9 flags', note: 'The system highlights stale movement, approval drag, and dependency pressure.' },
];
const automationRules = [
  {
    title: 'Release checkpoint nudge',
    trigger: 'When a lane remains blocked beyond the planned checkpoint window.',
    action: 'Notify release ops, surface the blocker in the command surface, and escalate the approval trail.',
    status: 'Armed',
  },
  {
    title: 'Leadership summary compile',
    trigger: 'When high-severity risks cross multiple squads during the same cycle.',
    action: 'Generate a compact delivery summary with risk ownership, timeline impact, and current mitigation state.',
    status: 'Live',
  },
];
const risks = [
  {
    title: 'Approval delay across design and release checkpoints',
    detail: 'Cross-functional sign-off is slowing handoff readiness for the next visible milestone.',
    severity: 'High',
  },
  {
    title: 'Dependency cluster in platform-facing work lanes',
    detail: 'Shared changes are stacking on the same execution surface and raising coordination cost.',
    severity: 'Medium',
  },
];

export default function AutomationSection() {
  return (
    <SectionShell
      id="intelligence"
      eyebrow="Automation Layer"
      title="Add an AI and automation narrative that feels product-grade, not gimmicky."
      description="Keep this part restrained: command interfaces, signal panels, and system decisions rather than fake chat screenshots."
    >
      <div className="space-y-6">
        <GlassPanel className="p-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Decision Layer</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-white">
                The automation story is framed as disciplined product intelligence: fast commands, clear rules, and high-signal interventions instead of decorative AI noise.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                { label: 'Modules', value: automation.length },
                { label: 'Tone', value: 'Controlled' },
                { label: 'Interface', value: 'Keyboard-first' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            <CommandPaletteMockup commands={commandLines} />
            <div className="grid gap-5 md:grid-cols-2">
              {signalCards.map((item) => (
                <SignalPanel
                  key={item.title}
                  title={item.title}
                  value={item.value}
                  note={item.note}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {automation.map((item, index) => {
                const Icon = automationIcons[index];

                return (
                  <GlassPanel key={item.title} className="p-6">
                    <div className="mb-5 inline-flex rounded-2xl border border-cyan-300/15 bg-slate-950/70 p-3 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                  </GlassPanel>
                );
              })}
            </div>

            <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
              <RiskScannerCard risks={risks} />
              <div className="grid gap-5">
                {automationRules.map((rule) => (
                  <AutomationRuleCard
                    key={rule.title}
                    title={rule.title}
                    trigger={rule.trigger}
                    action={rule.action}
                    status={rule.status}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
