import { NextResponse } from "next/server";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
};

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/Barath-s-05/repos");

    if (!res.ok) {
      return NextResponse.json({ error: "GitHub fetch failed" }, { status: 500 });
    }

    const data: Repo[] = await res.json(); // ✅ TYPED HERE

    const filtered = data
      .filter((repo) => !repo.fork) // ✅ TS now knows repo.fork exists
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
