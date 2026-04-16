import GlassPanel from '../../components/ui/GlassPanel';

import ReleaseTimelineItem from './ReleaseTimelineItem';

const tones = ['cyan', 'blue', 'teal', 'amber'];

export default function ReleaseTimeline({ releases = [] }) {
  return (
    <GlassPanel className="h-full p-6">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Release Timeline</p>
          <p className="mt-2 max-w-sm text-sm leading-7 text-slate-400">
            Follow the latest tagged releases and make the landing page feel synced to an active shipping rhythm.
          </p>
        </div>
        <div className="rounded-2xl border border-cyan-300/15 bg-slate-950/70 px-4 py-3 text-left sm:text-right">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Visible Releases</p>
          <p className="mt-2 text-2xl font-semibold text-white">{releases.length}</p>
        </div>
      </div>

      <div className="space-y-4">
        {releases.map((release, index) => (
          <ReleaseTimelineItem
            key={release.id}
            tagName={release.tag_name}
            publishedAt={release.published_at}
            name={release.name}
            summary={
              release.body?.split('\n').find((line) => line.trim()) || 'Published release snapshot'
            }
            href={release.html_url}
            tone={tones[index % tones.length]}
          />
        ))}
      </div>
    </GlassPanel>
  );
}
