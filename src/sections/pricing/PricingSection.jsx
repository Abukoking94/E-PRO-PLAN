import SectionShell from '../../components/layout/SectionShell';
import Button from '../../components/ui/Button';
import GlassPanel from '../../components/ui/GlassPanel';
import { pricing as pricingTiers } from '../../content/pricing';

import FeatureBullet from './FeatureBullet';
import PricingCard from './PricingCard';
import PrimaryCTACluster from './PrimaryCTACluster';

export default function PricingSection() {
  return (
    <SectionShell
      id="pricing"
      eyebrow="Adoption And Pricing"
      title="Close like a product page, not a student demo."
      description="Even in a portfolio project, pricing blocks help the experience feel like a launch-ready software brand."
      align="center"
    >
      <div className="space-y-6">
        <GlassPanel className="relative overflow-hidden border border-cyan-300/12 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_30%),linear-gradient(180deg,rgba(8,16,30,0.88),rgba(15,23,42,0.7))] p-6 text-left">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Go-To-Market Layer</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-white">
                The pricing surface closes the narrative like a real software launch, making the portfolio feel commercial, structured, and intentionally productized.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                { label: 'Plans', value: pricingTiers.length },
                { label: 'Featured', value: 'Control' },
                { label: 'Positioning', value: 'Launch-ready' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.82))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} featured={tier.featured}>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{tier.name}</p>
              <div className="mt-4 flex items-end gap-2">
                <p className="text-4xl font-semibold text-white">{tier.price}</p>
                {tier.featured ? (
                  <span className="mb-1 text-xs uppercase tracking-[0.18em] text-cyan-200">Featured</span>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{tier.description}</p>
              <div className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <FeatureBullet key={feature}>{feature}</FeatureBullet>
                ))}
              </div>
              <PrimaryCTACluster>
                <Button href="#top" variant={tier.featured ? 'primary' : 'secondary'} className="w-full">
                  {tier.featured ? 'Start Operating At Scale' : 'Explore Structure'}
                </Button>
              </PrimaryCTACluster>
            </PricingCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
