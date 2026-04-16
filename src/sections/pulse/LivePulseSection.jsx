import SectionShell from '../../components/layout/SectionShell';
import ErrorState from '../../components/feedback/ErrorState';
import LoadingState from '../../components/feedback/LoadingState';
import { useRepoCommits } from '../../features/github/hooks/useRepoCommits';
import { useRepoContributors } from '../../features/github/hooks/useRepoContributors';
import { useRepoOverview } from '../../features/github/hooks/useRepoOverview';
import { useRepoPullRequests } from '../../features/github/hooks/useRepoPullRequests';
import { useRepoReleases } from '../../features/github/hooks/useRepoReleases';
import { buildLiveMetrics } from '../../features/github/utils/transformers';
import { repoRef } from '../../features/github/api/githubEndpoints';
import PulseMetricCard from './PulseMetricCard';
import ReleaseChip from './ReleaseChip';
import RepoHealthBadge from './RepoHealthBadge';

export default function LivePulseSection() {
  const overviewQuery = useRepoOverview();
  const pullsQuery = useRepoPullRequests();
  const contributorsQuery = useRepoContributors();
  const commitsQuery = useRepoCommits();
  const releasesQuery = useRepoReleases();

  const queries = [overviewQuery, pullsQuery, contributorsQuery, commitsQuery, releasesQuery];
  const isLoading = queries.some((query) => query.isLoading);
  const error = queries.find((query) => query.error)?.error;

  const metrics = buildLiveMetrics({
    overview: overviewQuery.data,
    pulls: pullsQuery.data,
    contributors: contributorsQuery.data,
    commits: commitsQuery.data,
    releases: releasesQuery.data,
  });
  const latestRelease = releasesQuery.data?.[0];

  return (
    <SectionShell
      id="pulse"
      eyebrow="Live Product Pulse"
      title="Replace static trust badges with a real operational signal rail."
      description="This section uses public GitHub data so the landing page feels attached to an active software system instead of a fake marketing shell."
    >
      {isLoading ? (
        <LoadingState label="Loading repository activity for the pulse rail..." />
      ) : error ? (
        <ErrorState label={error.message} />
      ) : (
        <div className="space-y-5">
          <div className="rounded-[1.75rem] border border-cyan-300/12 bg-[linear-gradient(135deg,rgba(8,16,30,0.86),rgba(15,23,42,0.66))] p-4 shadow-[0_16px_60px_rgba(2,6,23,0.28)] md:p-5">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Realtime Signal Rail</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  E-PRO PLAN is currently reading public delivery activity from
                  <span className="ml-2 font-medium text-white">
                    {repoRef.owner}/{repoRef.repo}
                  </span>
                  , turning the hero narrative into a live operational surface.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <RepoHealthBadge label="Public Repo" detail={`${repoRef.owner}/${repoRef.repo}`} />
                {latestRelease ? (
                  <ReleaseChip tagName={latestRelease.tag_name} publishedAt={latestRelease.published_at} />
                ) : null}
              </div>
            </div>

            <div className="thin-scrollbar flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible xl:grid-cols-6">
              {metrics.map((metric, index) => (
                <PulseMetricCard
                  key={metric.label}
                  badge={index === 0 ? 'Live' : index === 4 ? 'Release' : undefined}
                  className={
                    index === 0
                      ? 'border-cyan-300/22 bg-[linear-gradient(180deg,rgba(34,211,238,0.07),rgba(15,23,42,0.9))]'
                      : 'border-white/5 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.86))]'
                  }
                  label={metric.label}
                  note={metric.note}
                  value={metric.value}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  );
}
