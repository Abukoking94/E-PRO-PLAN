const BASE_URL = 'https://api.github.com';

const HEADERS = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

export async function fetchGitHubJson(path) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: HEADERS,
  });

  if (!response.ok) {
    let message = `GitHub request failed with status ${response.status}`;

    try {
      const payload = await response.json();
      if (payload?.message) {
        message = payload.message;
      }
    } catch {
      // Keep the fallback message when the payload is not JSON.
    }

    throw new Error(message);
  }

  return response.json();
}
