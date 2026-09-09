import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block border border-transparent px-4 py-3 font-mono text-xs tracking-[0.2em] transition-[color,background-color,border-color,text-shadow] duration-150 ${
      isActive
        ? "border-red-muted/35 bg-red-terminal/[0.06] text-red-bright [text-shadow:0_0_0.6rem_rgba(255,26,26,0.45)]"
        : "text-red-muted hover:border-red-muted/25 hover:bg-red-terminal/[0.04] hover:text-red-heading"
    }`;

  return (
    <header
      className="absolute inset-x-4 top-4 z-20 flex items-center justify-between text-[10px] font-bold tracking-[0.14em] text-red-muted uppercase sm:inset-x-10 sm:top-10 sm:text-xs sm:tracking-[0.24em]"
      aria-label="Hunter Jerochim portfolio"
    >
      <Link to="/" className="relative z-20 flex items-center gap-1">
        <span className="text-red-terminal">[</span>
        <span>HJ</span>
        <span className="text-red-terminal">]</span>
      </Link>

      <nav className="hidden items-center gap-8 sm:flex" aria-label="Primary navigation">
        <Link
          to="/work"
          className="whitespace-nowrap hover:[text-shadow:0_0_0.7rem_rgba(255,26,26,0.7)] hover:text-red-bright"
        >
          <span className="text-red-terminal">[</span> WORK{" "}
          <span className="text-red-terminal">]</span>
        </Link>
        <Link
          to="/projects"
          className="whitespace-nowrap hover:[text-shadow:0_0_0.7rem_rgba(255,26,26,0.7)] hover:text-red-bright"
        >
          <span className="text-red-terminal">[</span> PROJECTS{" "}
          <span className="text-red-terminal">]</span>
        </Link>
      </nav>

      <button
        type="button"
        className="relative z-20 flex size-10 items-center justify-center border border-transparent text-red-heading transition-[color,border-color,background-color] hover:border-red-muted/50 hover:bg-red-terminal/[0.05] hover:text-red-bright focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-red-terminal sm:hidden"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span
            className={`absolute left-0 top-0 block h-px w-5 bg-current transition-transform duration-200 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] block h-px w-5 bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 block h-px w-5 bg-current transition-transform duration-200 ${
              isOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <nav
        id="mobile-navigation"
        className={`fixed inset-x-0 top-0 z-10 border-b border-red-muted/30 bg-void/95 px-4 pb-3 pt-16 shadow-[0_12px_30px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-[opacity,transform,visibility] duration-200 sm:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <NavLink
          to="/work"
          className={mobileLinkClass}
          onClick={() => setIsOpen(false)}
        >
          <span className="text-red-terminal">[</span> WORK{" "}
          <span className="text-red-terminal">]</span>
        </NavLink>
        <NavLink
          to="/projects"
          className={mobileLinkClass}
          onClick={() => setIsOpen(false)}
        >
          <span className="text-red-terminal">[</span> PROJECTS{" "}
          <span className="text-red-terminal">]</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
