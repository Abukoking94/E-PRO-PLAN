import { useQuery } from '@tanstack/react-query';

import { fetchGitHubJson } from '../api/githubClient';
import { githubEndpoints } from '../api/githubEndpoints';
import { removePullRequestIssues } from '../utils/filters';

export function useRepoIssues() {
  return useQuery({
    queryKey: ['github', 'issues'],
    queryFn: async () => {
      const issues = await fetchGitHubJson(githubEndpoints.issues());
      return removePullRequestIssues(issues);
    },
    staleTime: 1000 * 60 * 2,
  });
}
