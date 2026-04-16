import { useQuery } from '@tanstack/react-query';

import { fetchGitHubJson } from '../api/githubClient';
import { githubEndpoints } from '../api/githubEndpoints';

export function useRepoCommits() {
  return useQuery({
    queryKey: ['github', 'commits'],
    queryFn: () => fetchGitHubJson(githubEndpoints.commits()),
    staleTime: 1000 * 60 * 2,
  });
}
