import { useQuery } from '@tanstack/react-query';

import { fetchGitHubJson } from '../api/githubClient';
import { githubEndpoints } from '../api/githubEndpoints';

export function useRepoPullRequests() {
  return useQuery({
    queryKey: ['github', 'pulls'],
    queryFn: () => fetchGitHubJson(githubEndpoints.pulls()),
    staleTime: 1000 * 60 * 2,
  });
}
