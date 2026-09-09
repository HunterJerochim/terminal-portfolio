import { workData } from "./workData";

const WorkCounter = () => {
  return (
    <div className="relative z-4 mx-auto mt-10 flex w-full max-w-3xl flex-wrap gap-x-2 gap-y-1 border-l-2 border-l-red-bright bg-white/[0.025] px-3 py-2.5 sm:mt-12 sm:px-4">
      <span className="text-xs font-mono text-red-bright">$</span>
      <span className="text-xs font-mono text-heading">
        cat experience.json
      </span>
      <span className="text-xs font-mono text-terminal-muted/70">
        // {workData.length} entries
      </span>
    </div>
  );
};

export default WorkCounter;
