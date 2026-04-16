import { useQuery } from '@tanstack/react-query';

import { fetchGitHubJson } from '../api/githubClient';
import { githubEndpoints } from '../api/githubEndpoints';

export function useRepoReleases() {
  return useQuery({
    queryKey: ['github', 'releases'],
    queryFn: () => fetchGitHubJson(githubEndpoints.releases()),
    staleTime: 1000 * 60 * 10,
  });
}
