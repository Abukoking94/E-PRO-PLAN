import { useQuery } from '@tanstack/react-query';

import { fetchGitHubJson } from '../api/githubClient';
import { githubEndpoints } from '../api/githubEndpoints';

export function useRepoOverview() {
  return useQuery({
    queryKey: ['github', 'repo-overview'],
    queryFn: () => fetchGitHubJson(githubEndpoints.repo()),
    staleTime: 1000 * 60 * 5,
  });
}
