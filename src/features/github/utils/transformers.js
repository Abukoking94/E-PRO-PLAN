import { formatCompactNumber, formatRelativeDate } from './formatters';

export function buildLiveMetrics({ overview, pulls, contributors, commits, releases }) {
  return [
    {
      label: 'Stars',
      value: formatCompactNumber(overview?.stargazers_count ?? 0),
      note: 'Public trust signal',
    },
    {
      label: 'Open Issues',
      value: formatCompactNumber(overview?.open_issues_count ?? 0),
      note: 'Visible backlog pressure',
    },
    {
      label: 'Open PRs',
      value: formatCompactNumber(pulls?.length ?? 0),
      note: 'Review throughput',
    },
    {
      label: 'Contributors',
      value: formatCompactNumber(contributors?.length ?? 0),
      note: 'Delivery surface',
    },
    {
      label: 'Latest Release',
      value: releases?.[0]?.tag_name ?? 'No tag',
      note: releases?.[0]?.published_at ? formatRelativeDate(releases[0].published_at) : 'No published release',
    },
    {
      label: 'Recent Commits',
      value: formatCompactNumber(commits?.length ?? 0),
      note: 'Latest sample window',
    },
  ];
}

export function buildAnalyticsSignals({ overview, issues, pulls, contributors, commits, releases }) {
  return [
    {
      label: 'Backlog Pressure',
      value: Math.min(((issues?.length ?? 0) / 8) * 100, 100),
      amount: `${issues?.length ?? 0} active issues`,
    },
    {
      label: 'Review Load',
      value: Math.min(((pulls?.length ?? 0) / 6) * 100, 100),
      amount: `${pulls?.length ?? 0} open pull requests`,
    },
    {
      label: 'Commit Velocity',
      value: Math.min(((commits?.length ?? 0) / 8) * 100, 100),
      amount: `${commits?.length ?? 0} recent commits`,
    },
    {
      label: 'Contributor Spread',
      value: Math.min(((contributors?.length ?? 0) / 8) * 100, 100),
      amount: `${contributors?.length ?? 0} visible contributors`,
    },
    {
      label: 'Release Rhythm',
      value: Math.min(((releases?.length ?? 0) / 5) * 100, 100),
      amount: `${releases?.length ?? 0} recent releases`,
    },
    {
      label: 'Fork Reach',
      value: Math.min(((overview?.forks_count ?? 0) / Math.max(overview?.stargazers_count ?? 1, 1)) * 100, 100),
      amount: formatCompactNumber(overview?.forks_count ?? 0),
    },
  ];
}
