const owner = import.meta.env.VITE_GITHUB_OWNER || 'vercel';
const repo = import.meta.env.VITE_GITHUB_REPO || 'next.js';

export const repoRef = { owner, repo };

export const githubEndpoints = {
  repo: () => `/repos/${owner}/${repo}`,
  issues: () => `/repos/${owner}/${repo}/issues?state=open&per_page=8&sort=updated&direction=desc`,
  pulls: () => `/repos/${owner}/${repo}/pulls?state=open&per_page=6&sort=updated&direction=desc`,
  contributors: () => `/repos/${owner}/${repo}/contributors?per_page=8`,
  commits: () => `/repos/${owner}/${repo}/commits?per_page=8`,
  releases: () => `/repos/${owner}/${repo}/releases?per_page=5`,
};
