import { workData } from "./workData";

const WorkCounter = () => {
  return (
    <div className="flex flex-row border-l-2 border-l-red-bright w-full py-2.5 px-4 gap-2 relative mx-auto max-w-3xl mt-12 bg-white/[0.025]">
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
