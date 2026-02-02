"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
};

const projectLiveLinks: Record<string, string> = {
  "Disease-Detection": "https://disease-detection-ten.vercel.app/",
  "Hotel-Management-System": "", // add later
  "Credit-Fraud-Detection": ""   // add later
};

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Barath-s-05/repos");
        const data: Repo[] = await res.json();

        const allowedProjects = [
          "Disease-Detection",
          "Hotel-Management-System",
          "Credit-Fraud-Detection"
        ];

        const filtered = data.filter(
          (repo) =>
            !repo.fork &&
            repo.description &&
            allowedProjects.includes(repo.name)
        );

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
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                className="glass rounded-2xl overflow-hidden border border-cyan-500/20 glass-hover group relative flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -12, boxShadow: "0 0 25px rgba(0,238,255,0.25)" }}
              >
                {/* Preview Area */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-40 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">GitHub Repository</p>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 capitalize">
                    {repo.name.replace(/-/g, " ")}
                  </h3>
                  <p className="text-gray-400 mb-4">{repo.description}</p>

                  {/* Buttons */}
                  <div className="mt-auto flex gap-3">
                    {/* View Code */}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass px-4 py-2 rounded-lg border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition text-sm"
                    >
                      View Code
                    </a>

                    {/* View Site */}
                    {projectLiveLinks[repo.name] && (
                      <a
                        href={projectLiveLinks[repo.name]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,238,255,0.5)] transition text-sm"
                      >
                        View Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
