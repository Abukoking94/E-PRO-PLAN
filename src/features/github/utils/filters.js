export function removePullRequestIssues(items = []) {
  return items.filter((item) => !item.pull_request);
}
