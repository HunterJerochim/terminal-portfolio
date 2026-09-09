import Navbar from "../../components/Navbar";
import ProjectList from "./ProjectList";
import { useTypewriter } from "../../hooks/useTypewriter";
import ProjectCounter from "./ProjectCounter";

const HEADER = "Projects";

const Projects = () => {
  const typedProject = useTypewriter(HEADER);

  return (
    <main className="terminal-bg projects-bg relative isolate flex min-h-svh w-full flex-col overflow-x-hidden bg-void p-4 sm:p-10">
      <Navbar />
      <section
        className="identity relative z-4 mx-auto flex w-full max-w-3xl flex-col items-start gap-3 pt-20 text-left sm:gap-4 sm:pt-24"
        aria-labelledby="projects-heading"
      >
        <span className="font-mono text-xs text-red-heading tracking-[0.18em]">
          // PROJECTS
        </span>
        <h1
          id="projects-heading"
          className="font-sans text-[clamp(2.5rem,13vw,3.75rem)] font-semibold tracking-[0.1em] text-heading sm:tracking-[0.18em]"
          aria-label={HEADER}
        >
          <span>{typedProject}</span>
          <span
            className="typing-cursor ml-[0.12em] inline-block h-[0.82em] text-heading w-[0.08em] align-[0.02em] [box-shadow:0_0_0.8rem_rgba(255,30,30,0.9)]"
            aria-hidden="true"
          />
        </h1>
        <span className="font-mono text-subheading">Things i've built.</span>
      </section>
      <ProjectCounter />
      <ProjectList />
      <span className="relative z-4 mx-auto w-full max-w-3xl pb-2 font-mono text-[11px] tracking-[0.18em] text-red-muted">
        EOF
      </span>
    </main>
  );
};

export default Projects;
