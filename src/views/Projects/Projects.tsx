import Navbar from "../../components/Navbar";
import ProjectList from "./ProjectList";
import { useTypewriter } from "../../hooks/useTypewriter";
import ProjectCounter from "./ProjectCounter";

const HEADER = "Projects";

const Projects = () => {
  const typedProject = useTypewriter(HEADER);

  return (
    <main className="terminal-bg projects-bg relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-void p-5 sm:p-10">
      <Navbar />
      <section
        className="identity relative z-4 mx-auto flex w-full max-w-3xl flex-col items-start gap-4 pt-24 text-left"
        aria-labelledby="projects-heading"
      >
        <span className="font-mono text-xs text-red-heading tracking-[0.18em]">
          // PROJECTS
        </span>
        <h1
          id="projects-heading"
          className="font-sans text-6xl font-semibold tracking-[0.18em] text-heading"
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
      <span className="mx-auto w-full max-w-3xl font-mono text-[11px] text-red-muted tracking-[0.18em]">
        EOF
      </span>
    </main>
  );
};

export default Projects;
