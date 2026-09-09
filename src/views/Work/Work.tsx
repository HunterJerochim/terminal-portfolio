import { useTypewriter } from "../../hooks/useTypewriter";
import Navbar from "../../components/Navbar";
import WorkList from "./WorkList";
import WorkCounter from "./WorkCounter";

const HEADER = "Work";

const Work = () => {
  const typedWork = useTypewriter(HEADER);

  return (
    <main className="terminal-bg projects-bg relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-void p-5 sm:p-10">
      <Navbar />
      <section
        className="identity relative z-4 mx-auto flex w-full max-w-3xl flex-col items-start gap-4 pt-24 text-left"
        aria-labelledby="work-heading"
      >
        <span className="font-mono text-xs text-red-heading tracking-[0.18em]">
          // WORK
        </span>
        <h1
          id="work-heading"
          className="font-sans text-6xl font-semibold tracking-[0.18em] text-heading"
          aria-label={HEADER}
        >
          <span>{typedWork}</span>
          <span
            className="typing-cursor ml-[0.12em] inline-block h-[0.82em] text-heading w-[0.08em] align-[0.02em] [box-shadow:0_0_0.8rem_rgba(255,30,30,0.9)]"
            aria-hidden="true"
          />
        </h1>
      </section>
      <WorkCounter />
      <WorkList />
      <span className="mx-auto w-full max-w-3xl font-mono text-[11px] text-red-muted tracking-[0.18em]">
        EOF
      </span>
    </main>
  );
};

export default Work;
