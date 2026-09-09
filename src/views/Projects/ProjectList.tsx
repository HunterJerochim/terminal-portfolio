import { projectData } from "./projectData";

const GREATER_THAN = ">";

const ProjectList = () => {
  return (
    <div className="relative z-4 mx-auto flex w-full max-w-3xl flex-col items-start pt-10 pb-10">
      {projectData.map((project) => (
        <article
          key={project.title}
          className="project-card group w-full border-l border-b border-l-transparent border-b-red-muted/20 px-4 py-6 text-left transition-colors duration-200 hover:border-l-red-bright"
        >
          <div className="grid grid-cols-[32px_1fr] gap-3">
            <span className="pt-1 font-mono text-xs tracking-widest text-red-muted">
              {project.number}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 place-content-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-lg font-semibold text-red-bright transition-transform duration-200 group-hover:translate-x-1">
                    {GREATER_THAN}
                  </span>
                  <a
                    href={project.link}
                    className="cursor-pointer font-mono font-semibold text-heading transition-[color,text-shadow] duration-200 hover:text-red-bright hover:[text-shadow:0_0_0.7rem_rgba(255,26,26,0.55)] focus-visible:text-red-bright focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-red-terminal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </div>
                <div>
                  <span className="text-terminal-muted/70 text-mono text-[11px] tracking-[0.1em]">
                    {project.path}
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-2xl font-mono text-sm leading-6 text-red-terminal">
                {project.description}
              </p>
              <ul className="mt-2 max-w-2xl list-disc space-y-1.5 pl-5 font-mono text-sm leading-6 text-terminal-muted marker:text-red-muted">
                {project.subDescriptions.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-row flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <div
                    key={tool}
                    className="inline-flex min-h-7 items-center justify-center border border-border px-2 py-1 transition-[border-color,box-shadow] duration-150 hover:border-red-terminal hover:[box-shadow:0_0_6px_rgba(217,20,20,0.28)]"
                  >
                    <span className="font-mono text-xs leading-none text-red-terminal">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectList;
