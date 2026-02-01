type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  fork: boolean;
  language: string | null;
};

export async function getGithubRepos(): Promise<Repo[]> {
  const res = await fetch("https://api.github.com/users/Barath-s-05/repos", {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 }, // cache for 1 hour
  });

  if (!res.ok) {
    console.error("Failed to fetch repos");
    return [];
  }

  const repos: Repo[] = await res.json();

  return repos
    .filter((repo) => !repo.fork && repo.description) // remove forks & empty projects
    .sort((a, b) => b.stargazers_count - a.stargazers_count) // sort by popularity
    .slice(0, 6); // show top 6
}
