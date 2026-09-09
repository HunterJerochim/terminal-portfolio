import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="absolute inset-x-5 top-5 z-4 flex items-center justify-between text-xs font-bold tracking-[0.24em] text-red-muted uppercase sm:inset-x-10 sm:top-10"
      aria-label="Hunter Jerochim portfolio"
    >
      <Link to="/" className="flex items-center gap-1">
        <span className="text-red-terminal">[</span>
        <span>HJ</span>
        <span className="text-red-terminal">]</span>
      </Link>
      <nav className="flex items-center gap-4 sm:gap-8">
        <Link
          to="/work"
          className="hover:[text-shadow:0_0_0.7rem_rgba(255,26,26,0.7)] hover:text-red-bright"
        >
          <span className="text-red-terminal">[</span> WORK{" "}
          <span className="text-red-terminal">]</span>
        </Link>
        <Link
          to="/projects"
          className="hover:[text-shadow:0_0_0.7rem_rgba(255,26,26,0.7)] hover:text-red-bright"
        >
          <span className="text-red-terminal">[</span> PROJECTS{" "}
          <span className="text-red-terminal">]</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
