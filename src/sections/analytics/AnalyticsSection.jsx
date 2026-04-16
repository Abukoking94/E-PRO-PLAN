import SectionShell from '../../components/layout/SectionShell';
import ErrorState from '../../components/feedback/ErrorState';
import LoadingState from '../../components/feedback/LoadingState';
import GlassPanel from '../../components/ui/GlassPanel';
import { repoRef } from '../../features/github/api/githubEndpoints';
import { useRepoCommits } from '../../features/github/hooks/useRepoCommits';
import { useRepoContributors } from '../../features/github/hooks/useRepoContributors';
import { useRepoIssues } from '../../features/github/hooks/useRepoIssues';
import { useRepoOverview } from '../../features/github/hooks/useRepoOverview';
import { useRepoPullRequests } from '../../features/github/hooks/useRepoPullRequests';
import { useRepoReleases } from '../../features/github/hooks/useRepoReleases';
import { formatCompactNumber } from '../../features/github/utils/formatters';
import { buildAnalyticsSignals } from '../../features/github/utils/transformers';

import DeliverySnapshotCard from './DeliverySnapshotCard';
import InsightPanel from './InsightPanel';
import RiskDonutShell from './RiskDonutShell';
import TeamLoadBars from './TeamLoadBars';
import VelocityChartShell from './VelocityChartShell';

export default function AnalyticsSection() {
  const overviewQuery = useRepoOverview();
  const issuesQuery = useRepoIssues();
  const pullsQuery = useRepoPullRequests();
  const contributorsQuery = useRepoContributors();
  const commitsQuery = useRepoCommits();
  const releasesQuery = useRepoReleases();

  const queries = [
    overviewQuery,
    issuesQuery,
    pullsQuery,
    contributorsQuery,
    commitsQuery,
    releasesQuery,
  ];
  const isLoading = queries.some((query) => query.isLoading);
  const error = queries.find((query) => query.error)?.error;

  const analytics = buildAnalyticsSignals({
    overview: overviewQuery.data,
    issues: issuesQuery.data,
    pulls: pullsQuery.data,
    contributors: contributorsQuery.data,
    commits: commitsQuery.data,
    releases: releasesQuery.data,
  });
  const snapshotItems = [
    {
      label: 'Stars',
      value: formatCompactNumber(overviewQuery.data?.stargazers_count ?? 0),
      note: 'Public product gravity',
    },
    {
      label: 'Forks',
      value: formatCompactNumber(overviewQuery.data?.forks_count ?? 0),
      note: 'Implementation reach',
    },
    {
      label: 'Watchers',
      value: formatCompactNumber(overviewQuery.data?.subscribers_count ?? 0),
      note: 'Signal subscribers',
    },
    {
      label: 'Default Branch',
      value: overviewQuery.data?.default_branch ?? 'main',
      note: 'Primary delivery line',
    },
  ];
  const velocityPoints = [
    issuesQuery.data?.length ?? 0,
    pullsQuery.data?.length ?? 0,
    commitsQuery.data?.length ?? 0,
    contributorsQuery.data?.length ?? 0,
    releasesQuery.data?.length ?? 0,
    Math.max((overviewQuery.data?.open_issues_count ?? 0) / 10, 1),
  ].map((value) => Math.min(Math.max(value * 12, 16), 96));
  const deliveryConfidence = Math.max(
    12,
    Math.min(
      100,
      100 -
        Math.round(
          (analytics.find((signal) => signal.label === 'Backlog Pressure')?.value ?? 0) * 0.28 +
            (analytics.find((signal) => signal.label === 'Review Load')?.value ?? 0) * 0.18,
        ) +
        Math.round(
          (analytics.find((signal) => signal.label === 'Commit Velocity')?.value ?? 0) * 0.14 +
            (analytics.find((signal) => signal.label === 'Contributor Spread')?.value ?? 0) * 0.16,
        ),
    ),
  );
  const loadBars = (contributorsQuery.data ?? [])
    .slice(0, 5)
    .map((contributor) => Math.min(Math.max(contributor.contributions, 20), 100));

  return (
    <SectionShell
      id="analytics"
      eyebrow="Executive Analytics"
      title="Give the page a data-dense layer that feels built for leadership and delivery operations."
      description="These signals are derived from live public repo activity so the analytics surface feels grounded instead of decorative."
    >
      {isLoading ? (
        <LoadingState label="Building analytics from live repository activity..." />
      ) : error ? (
        <ErrorState label={error.message} />
      ) : (
        <div className="space-y-6">
          <GlassPanel className="relative overflow-hidden border border-cyan-300/12 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.08),transparent_28%),linear-gradient(180deg,rgba(8,16,30,0.88),rgba(15,23,42,0.7))] p-5 md:p-6">
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Operations Intelligence</p>
            <p className="mt-3 max-w-3xl text-lg font-medium leading-8 text-white">
              This analytics layer turns live activity from{' '}
              <span className="gradient-text">
                {repoRef.owner}/{repoRef.repo}
              </span>{' '}
              into an executive-style control plane, giving the landing page a strong organizational-software feel without inventing backend data.
            </p>
          </GlassPanel>

          <div className="grid gap-6 xl:gap-7 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="grid gap-6">
              <DeliverySnapshotCard items={snapshotItems} />
              <RiskDonutShell
                value={deliveryConfidence}
                detail={`${analytics.length} live operational signals are shaping this confidence view.`}
              />
              <TeamLoadBars values={loadBars} contributors={contributorsQuery.data ?? []} />
            </div>

            <div className="grid gap-6">
              <VelocityChartShell points={velocityPoints} />
              <GlassPanel className="relative overflow-hidden border border-blue-300/12 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.08),transparent_26%),linear-gradient(180deg,rgba(8,16,30,0.88),rgba(15,23,42,0.72))] p-5 md:p-6">
                <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-300/8 blur-2xl" />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">
                      Operational Signal Matrix
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Cross-functional delivery indicators derived from recent backlog, review, release, and contributor activity.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 xl:grid-cols-2">
                  {analytics.map((signal) => (
                    <InsightPanel
                      key={signal.label}
                      title={signal.label}
                      amount={signal.amount}
                      value={signal.value}
                    />
                  ))}
                </div>
              </GlassPanel>
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  );
}
