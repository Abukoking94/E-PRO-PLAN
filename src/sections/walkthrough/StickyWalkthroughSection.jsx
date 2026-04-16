import { useState } from 'react';

import SectionShell from '../../components/layout/SectionShell';
import GlassPanel from '../../components/ui/GlassPanel';
import { walkthroughSteps } from '../../content/walkthroughSteps';

import WalkthroughPreview from './WalkthroughPreview';
import WalkthroughStateRenderer from './WalkthroughStateRenderer';
import WalkthroughStepCard from './WalkthroughStepCard';
import WalkthroughSteps from './WalkthroughSteps';

export default function StickyWalkthroughSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = walkthroughSteps[activeIndex];
  const previewCards = activeStep.outputs.map((item, index) => ({
    label: `Output 0${index + 1}`,
    title: item,
    detail: `This surface makes ${activeStep.step.toLowerCase()} feel operational and visible across teams.`,
    tone: index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'blue' : 'teal',
  }));

  return (
    <SectionShell
      id="walkthrough"
      eyebrow="Product Walkthrough"
      title="Make one scroll section feel like a product tour, a system demo, and a design flex at the same time."
      description="Use the right-hand sequence to swap the left preview. This gives the page motion and narrative without needing a backend."
    >
      <div className="space-y-6">
        <GlassPanel className="p-6">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Interactive Product Story</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-white">
                This sequence simulates a guided product tour, letting one section shift from intake to shipping momentum without relying on mock backend logic.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Stages', value: walkthroughSteps.length },
                { label: 'Current', value: activeStep.step },
                { label: 'Mode', value: 'Interactive' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <WalkthroughPreview step={activeStep}>
            <div className="grid gap-3">
              {previewCards.map((card) => (
                <WalkthroughStateRenderer
                  key={card.label}
                  label={card.label}
                  title={card.title}
                  detail={card.detail}
                  tone={card.tone}
                />
              ))}
            </div>
          </WalkthroughPreview>
        </div>

        <WalkthroughSteps>
          {walkthroughSteps.map((step, index) => {
            return (
              <WalkthroughStepCard
                key={step.step}
                step={step}
                index={index}
                active={index === activeIndex}
                onSelect={() => setActiveIndex(index)}
              />
            );
          })}
        </WalkthroughSteps>
        </div>
      </div>
    </SectionShell>
  );
}
