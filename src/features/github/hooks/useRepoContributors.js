import { useQuery } from '@tanstack/react-query';

import { fetchGitHubJson } from '../api/githubClient';
import { githubEndpoints } from '../api/githubEndpoints';

export function useRepoContributors() {
  return useQuery({
    queryKey: ['github', 'contributors'],
    queryFn: () => fetchGitHubJson(githubEndpoints.contributors()),
    staleTime: 1000 * 60 * 10,
  });
}
