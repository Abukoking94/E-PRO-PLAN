import SectionShell from '../../components/layout/SectionShell';
import ErrorState from '../../components/feedback/ErrorState';
import LoadingState from '../../components/feedback/LoadingState';
import GlassPanel from '../../components/ui/GlassPanel';
import { repoRef } from '../../features/github/api/githubEndpoints';
import { useRepoCommits } from '../../features/github/hooks/useRepoCommits';
import { useRepoIssues } from '../../features/github/hooks/useRepoIssues';
import { useRepoPullRequests } from '../../features/github/hooks/useRepoPullRequests';
import { useRepoReleases } from '../../features/github/hooks/useRepoReleases';

import CommitStrip from './CommitStrip';
import IssueStream from './IssueStream';
import PullRequestStream from './PullRequestStream';
import ReleaseTimeline from './ReleaseTimeline';

export default function RoadmapSection() {
  const issuesQuery = useRepoIssues();
  const pullsQuery = useRepoPullRequests();
  const commitsQuery = useRepoCommits();
  const releasesQuery = useRepoReleases();

  const queries = [issuesQuery, pullsQuery, commitsQuery, releasesQuery];
  const isLoading = queries.some((query) => query.isLoading);
  const error = queries.find((query) => query.error)?.error;
  const releases = (releasesQuery.data ?? []).slice(0, 4);
  const issues = (issuesQuery.data ?? []).slice(0, 4);
  const pulls = (pullsQuery.data ?? []).slice(0, 4);
  const commits = (commitsQuery.data ?? []).slice(0, 5);

  return (
    <SectionShell
      id="roadmap"
      eyebrow="Live Roadmap And Release Stream"
      title="Make the marketing page feel wired into an active software lifecycle."
      description="This section is powered by live GitHub releases, commits, issues, and pull requests to make the product story feel operationally alive."
    >
      {isLoading ? (
        <LoadingState label="Loading release timeline and engineering streams..." />
      ) : error ? (
        <ErrorState label={error.message} />
      ) : (
        <div className="space-y-6">
          <div className="grid gap-4 xl:gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <GlassPanel className="p-5 md:p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Shipping Narrative</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-white">
                The roadmap layer is anchored to{' '}
                <span className="gradient-text">
                  {repoRef.owner}/{repoRef.repo}
                </span>{' '}
                so releases, pull requests, issues, and commits read like a live operational feed rather than a decorative mockup.
              </p>
            </GlassPanel>

            <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
              {[
                { label: 'Releases', value: releases.length, note: 'Visible milestone markers' },
                { label: 'Open Issues', value: issues.length, note: 'Backlog pressure surface' },
                { label: 'Open PRs', value: pulls.length, note: 'Review throughput' },
              ].map((item) => (
                <GlassPanel key={item.label} className="p-5 md:p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.note}</p>
                </GlassPanel>
              ))}
            </div>
          </div>

          <div className="grid gap-6 xl:gap-7 xl:grid-cols-[0.84fr_1.16fr]">
            <ReleaseTimeline releases={releases} />

            <div className="grid gap-6">
              <IssueStream issues={issues} />
              <PullRequestStream pulls={pulls} />
              <CommitStrip commits={commits} />
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  );
}
