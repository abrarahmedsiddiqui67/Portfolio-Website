const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    live: "https://your-portfolio-link.vercel.app",
    github: "https://github.com/abrarahmedsiddiqui67/Portfolio-Website",
  },
  {
    title: "Job Tracker Dashboard",
    description: "Track job applications with status and notes.",
    tech: ["React", "LocalStorage"],
    live: "#",
    github: "https://github.com/abrarahmedsiddiqui67/job-tracker-dashboard",
  },
  {
    title: "No-Code Automation",
    description: "Automation workflows using Zapier and Make.",
    tech: ["Zapier", "Make"],
    github: "https://github.com/abrarahmedsiddiqui67/no-code-automation",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-14 text-center">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/80 rounded-2xl p-7 border border-slate-700 
              hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 
              transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-5 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg border border-slate-500 hover:bg-slate-700 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
