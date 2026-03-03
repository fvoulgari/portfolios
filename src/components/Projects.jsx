import { Folder, Github, ExternalLink } from "lucide-react";
import content from "@/content";

export default function Projects() {
  const projects = content.projects;
  return (
    <section
      id="projects"
      className="min-h-[50vh] md:min-h-screen pt-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Some Things I’ve Built
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch [grid-auto-rows:1fr]">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative group rounded-lg overflow-hidden h-full flex flex-col"
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600
                         opacity-0 group-hover:opacity-100 blur transition duration-500"
            ></div>

            {/* Card content */}
            <div
              className="relative p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md transition
                         transform group-hover:-translate-y-2 duration-300 flex flex-col justify-between h-full w-full"
            >
              {/* Top icons */}
              <div className="flex justify-between items-center mb-4">
                <Folder className="text-blue-400" size={28} />
                              <div className="flex space-x-4">
                                {project.links && project.links.length > 0 &&
                                  project.links.map((link, idx) => {
                                    const url = link.url;
                                    const label = (link.label || "").toLowerCase();
                                    const isGithub = label.includes("github") || url.includes("github.com");
                                    return (
                                      <a
                                        key={idx}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-black dark:hover:text-white transition"
                                      >
                                        {isGithub ? <Github size={20} /> : <ExternalLink size={20} />}
                                      </a>
                                    );
                                  })}
                              </div>
              </div>

              {/* Title & description */}
              <div>
                <h3
                  className="text-xl font-semibold text-black dark:text-white mb-2
                             transition group-hover:text-transparent group-hover:bg-clip-text
                             group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600"
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="text-xs text-gray-500 mt-2 flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
