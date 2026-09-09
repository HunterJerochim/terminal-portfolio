import { projectData } from "./projectData";

const ProjectCounter = () => {
  return (
    <div className="flex flex-row border-l-2 border-l-red-bright w-full py-2.5 px-4 gap-2 relative mx-auto max-w-3xl mt-12 bg-white/[0.025]">
      <span className="text-xs font-mono text-red-bright">$</span>
      <span className="text-xs font-mono text-heading">ls ~/projects</span>
      <span className="text-xs font-mono text-terminal-muted/70">
        // {projectData.length} repos
      </span>
    </div>
  );
};

export default ProjectCounter;
