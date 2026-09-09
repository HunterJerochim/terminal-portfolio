import Navbar from "../components/Navbar";
import { useTypewriter } from "../hooks/useTypewriter";

const name = "Hunter Jerochim";
const LINKEDIN = "https://www.linkedin.com/in/hunter-jerochim-58b359420/";
const RESUME = "/hunterResume.pdf";
const GITHUB = "https://github.com/HunterJerochim";

const Home = () => {
  const typedName = useTypewriter(name);

  return (
    <main className="terminal-bg relative isolate grid min-h-svh place-items-center overflow-hidden bg-void p-5 sm:p-10">
      <div
        className="noise pointer-events-none absolute -inset-[40%] z-1 opacity-[0.035]"
        aria-hidden="true"
      />
      <div
        className="scanline pointer-events-none absolute inset-x-0 -top-[20%] z-2 h-32 opacity-20"
        aria-hidden="true"
      />
      <Navbar />
      <section
        className="identity relative z-4 w-full max-w-3xl text-center"
        aria-labelledby="identity-name"
      >
        <p className="mb-5 text-xs font-bold tracking-[0.36em] text-red-terminal [text-shadow:0_0_1rem_rgba(255,25,25,0.55)] sm:text-sm">
          [ IDENTITY ]
        </p>

        <h1
          id="identity-name"
          aria-label={name}
          className="m-0 min-h-[1.15em] font-mono text-[clamp(2.35rem,6vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.065em] text-red-bright [text-shadow:0_0_0.35rem_rgba(255,30,30,0.8),0_0_2.5rem_rgba(135,0,0,0.35)]"
        >
          <span aria-hidden="true">{typedName}</span>
          <span
            className="typing-cursor ml-[0.12em] inline-block h-[0.82em] w-[0.08em] align-[0.02em] bg-red-bright [box-shadow:0_0_0.8rem_rgba(255,30,30,0.9)]"
            aria-hidden="true"
          />
        </h1>

        <p className="mt-6 flex justify-center gap-3 text-[clamp(0.82rem,1.4vw,1rem)] tracking-[0.09em] text-terminal-muted">
          <span className="font-bold text-red-bright [text-shadow:0_0_0.75rem_rgba(255,30,30,0.75)]">
            $
          </span>
          <span className="opacity-80">// i build things</span>
        </p>

        <div
          className="mx-auto mt-6 mb-5 grid w-[min(13rem,60%)] grid-cols-[1fr_auto_1fr] items-center gap-3"
          aria-hidden="true"
        >
          <span className="h-px bg-linear-to-r from-transparent to-red-terminal/55" />
          <i className="size-1.5 rounded-full bg-red-bright [box-shadow:0_0_0.8rem_var(--color-red-bright)]" />
          <span className="h-px bg-linear-to-r from-red-terminal/55 to-transparent" />
        </div>

        <nav
          className="flex flex-wrap justify-center gap-5 sm:gap-7"
          aria-label="Social links"
        >
          <a
            className="social-link relative py-1 text-sm tracking-[0.08em] text-terminal transition-[color,text-shadow] duration-150 hover:text-red-bright hover:[text-shadow:0_0_0.7rem_rgba(255,26,26,0.7)] focus-visible:text-red-bright focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-red-terminal"
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-1 text-red-terminal" aria-hidden="true">
              ~/
            </span>
            GitHub
          </a>
          <a
            className="social-link relative py-1 text-sm tracking-[0.08em] text-terminal transition-[color,text-shadow] duration-150 hover:text-red-bright hover:[text-shadow:0_0_0.7rem_rgba(255,26,26,0.7)] focus-visible:text-red-bright focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-red-terminal"
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-1 text-red-terminal" aria-hidden="true">
              ~/
            </span>
            LinkedIn
          </a>
          <a
            className="social-link relative py-1 text-sm tracking-[0.08em] text-terminal transition-[color,text-shadow] duration-150 hover:text-red-bright hover:[text-shadow:0_0_0.7rem_rgba(255,26,26,0.7)] focus-visible:text-red-bright focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-6 focus-visible:outline-red-terminal"
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-1 text-red-terminal" aria-hidden="true">
              ~/
            </span>
            Resume
          </a>
        </nav>

        <a
          href="mailto:hunter.jerochim@gmail.com"
          className="mt-6 inline-block font-mono text-xs tracking-[0.16em] text-red-terminal transition-[color,text-shadow] duration-200 hover:text-red-bright hover:[text-shadow:0_0_0.65rem_rgba(255,43,43,0.65)] focus-visible:text-red-bright focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-red-terminal"
        >
          <span className="text-red-heading">email:</span>{" "}
          hunter.jerochim@gmail.com
        </a>
      </section>

      <p
        className="absolute right-5 bottom-5 z-4 hidden text-xs font-bold tracking-[0.24em] text-red-muted uppercase opacity-45 sm:block sm:right-10 sm:bottom-10"
        aria-hidden="true"
      >
        SESSION::ACTIVE
      </p>
    </main>
  );
};

export default Home;
