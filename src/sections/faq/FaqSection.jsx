import SectionShell from '../../components/layout/SectionShell';
import GlassPanel from '../../components/ui/GlassPanel';
import { faq as faqItems } from '../../content/faq';

import FaqAccordion from './FaqAccordion';

export default function FaqSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Finish with clarity around the architecture, data source, and frontend-only scope."
      description="These answers help recruiters and reviewers understand the intentional choices behind the project."
    >
      <div className="space-y-6">
        <GlassPanel className="p-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Clarity Layer</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-white">
                The FAQ closes uncertainty around architecture, data sourcing, and intentional frontend-only decisions so reviewers can understand the thinking behind the build.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Answers', value: faqItems.length },
                { label: 'API', value: 'GitHub' },
                { label: 'Scope', value: 'Frontend-only' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <div className="grid gap-4">
          {faqItems.map((item) => (
            <GlassPanel key={item.question} className="p-0">
              <FaqAccordion question={item.question} answer={item.answer} />
            </GlassPanel>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
