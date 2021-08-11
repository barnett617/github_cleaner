const { config: { pat, owner } } = require('./.config');

const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: pat });

async function fetchAllRepos() {
  let repos = [];
  let hasMore = true;
  let pageIndex = 0;
  let pageSize = 100;
  while (hasMore) {
    ++pageIndex;
    const { data } = await listRepos(pageIndex, pageSize);
    if (!data || data.length < pageSize) {
      hasMore = false;
    }
    data && Array.prototype.push.apply(repos, data);
  }
  return repos;
}

async function solveEachRepo(repos) {
  for await (repo of repos) {

    // judge by repo size
    if (!repo.size) {
      await deleteRepo(repo.name);
      continue;
    }

    // judge by repo commits
    const { data: commits } = await listCommits(repo.name);
    if (!commits || !commits.length) {
      await deleteRepo(repo.name);
    }
    
    // judge by repo issues
    const { data: issues } = await listIssues(repo.name);
    if (!issues || !issues.length) {
      await deleteRepo(repo.name);
    }
  }
}

const listRepos = async (pageIndex, pageSize = 100) => await octokit.request('GET /user/repos', {
  per_page: pageSize,
  page: pageIndex
})

const deleteRepo = async (repo) => await octokit.request('DELETE /repos/{owner}/{repo}', {
  owner,
  repo
})

const listCommits = async (repo) => await octokit.request('GET /repos/{owner}/{repo}/commits', {
  owner,
  repo
})

const listIssues = async (repo) => await octokit.request('GET /repos/{owner}/{repo}/issues', {
  owner,
  repo
})

async function main() {
  const repos = await fetchAllRepos();
  const repoInfos = repos.map(repo => {
    return {
      name: repo.name,
      fullName: repo.full_name,
      size: repo.size,
      createDate: repo.created_at,
      updateDate: repo.updated_at
    }
  })
  console.table(repoInfos);

  // solveEachRepo(repos);
}

main()
