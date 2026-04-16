import { motion } from 'framer-motion';
import { GitBranch, Layers3, Radar, Workflow } from 'lucide-react';

import { hero } from '../../content/landingCopy';
import { repoRef } from '../../features/github/api/githubEndpoints';
import GlassPanel from '../../components/ui/GlassPanel';
import HeroActions from './HeroActions';
import HeroCopy from './HeroCopy';
import HeroPreviewShell from './HeroPreviewShell';
import PreviewPresenceStack from './PreviewPresenceStack';
import PreviewStatsRail from './PreviewStatsRail';
import PreviewTaskBoard from './PreviewTaskBoard';
import PreviewTimeline from './PreviewTimeline';

export default function HeroSection() {
  const titleLead = hero.title.replace('single command surface.', '').trim();
  const titleAccent = 'single command surface.';
  const boardColumns = [
    { title: 'Backlog', items: hero.systemNotes },
    { title: 'In Flight', items: ['Workload balancing', 'Review routing', 'Escalation signals'] },
    { title: 'Release', items: ['Launch readiness', 'Approval checkpoints', 'Executive visibility'] },
  ];
  const timelineItems = [
    { label: 'Scoping window', progress: 45 },
    { label: 'Dependency lock', progress: 57 },
    { label: 'Release review', progress: 69 },
    { label: 'Ship gate', progress: 81 },
  ];
  const stats = [
    {
      label: 'Command Surfaces',
      value: 13,
      description: 'Long-form landing sections designed to feel like a premium software system.',
    },
    {
      label: 'Live GitHub Signals',
      value: 6,
      description: 'Public repo metrics wired into the pulse rail, roadmap stream, and analytics layer.',
    },
  ];
  const presence = [
    { name: 'Product Lead', initials: 'PL' },
    { name: 'Engineering Ops', initials: 'EO' },
    { name: 'Release Manager', initials: 'RM' },
    { name: 'Design Systems', initials: 'DS' },
  ];

  return (
    <section className="section-shell pt-10 sm:pt-14 md:pt-24">
      <div className="grid items-center gap-8 md:gap-10 xl:gap-12 lg:grid-cols-[1.06fr_0.94fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-7 md:space-y-8"
        >
          <HeroCopy
            eyebrow={hero.eyebrow}
            titleLead={titleLead}
            titleAccent={titleAccent}
            description={hero.description}
            chips={hero.chips}
          >
            <HeroActions primary={hero.primaryCta} secondary={hero.secondaryCta} />
          </HeroCopy>

          <GlassPanel className="max-w-2xl p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Live Data Source</p>
                <p className="mt-2 break-all text-base font-medium text-white sm:text-lg">
                  {repoRef.owner}/{repoRef.repo}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Public GitHub activity powers the roadmap, pulse rail, and operational analytics.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300 md:justify-end">
                <span className="status-dot" />
                Real-time capable frontend surface
              </div>
            </div>
          </GlassPanel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <HeroPreviewShell>
            <div className="grid gap-4 2xl:grid-cols-[1.2fr_0.8fr]">
              <GlassPanel className="grid-kicker p-4 md:p-5">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Execution Layer</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">Operational Board</h3>
                  </div>
                  <Radar className="h-5 w-5 text-cyan-300" />
                </div>
                <PreviewTaskBoard columns={boardColumns} />
              </GlassPanel>

              <div className="grid gap-4">
                <GlassPanel className="p-4 md:p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Timeline</p>
                    <Workflow className="h-4 w-4 text-cyan-300" />
                  </div>
                  <PreviewTimeline items={timelineItems} />
                </GlassPanel>

                <PreviewStatsRail
                  stats={[
                    { ...stats[0], label: `${stats[0].label}` },
                    { ...stats[1], label: `${stats[1].label}` },
                  ]}
                />
                <PreviewPresenceStack items={presence} />
              </div>
            </div>
          </HeroPreviewShell>
        </motion.div>
      </div>
    </section>
  );
}
