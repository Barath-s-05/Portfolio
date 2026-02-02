"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projectTech, projectLiveLinks } from "@/app/lib/projectTech";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
};

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Barath-s-05/repos");
        const data: Repo[] = await res.json();

        const filtered = data
          .filter((repo) => !repo.fork && repo.description)
          .slice(0, 6);

        setRepos(filtered);
      } catch (err) {
        console.error("Failed to load repos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span className="neon-text">Projects</span>
        </motion.h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => {
              const techStack = projectTech[repo.name] || ["Various Technologies"];
              const liveLink = projectLiveLinks[repo.name];

              return (
                <motion.div
                  key={repo.id}
                  className="glass rounded-2xl overflow-hidden border border-cyan-500/20 glass-hover group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {/* Preview Area */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-40 flex items-center justify-center text-gray-500">
                    GitHub Repository
                  </div>

                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold mb-2 capitalize">
                      {repo.name.replace(/-/g, " ")}
                    </h3>
                    <p className="text-gray-400 mb-4">{repo.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* 🔥 Action Buttons */}
                    <div className="flex gap-3">
                      {/* View Code */}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass px-4 py-2 rounded-lg border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition"
                      >
                        View Code
                      </a>

                      {/* View Live Site */}
                      {liveLink && (
                        <a
                          href={liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,238,255,0.5)] transition"
                        >
                          View Site
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
