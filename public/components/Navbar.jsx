const navLinks = ["Home", "Voyages", "Worlds", "Innovation", "Plan Launch"];

function Navbar() {
  return (
    <nav
      className="fixed left-0 right-0 top-4 z-50 grid grid-cols-[48px_1fr_48px] items-center px-8 lg:px-16"
      aria-label="Primary navigation"
    >
      <a
        href="#hero"
        className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full font-heading text-3xl italic leading-none text-white"
        aria-label="Aeon home"
      >
        a
      </a>

      <div className="liquid-glass hidden justify-self-center rounded-full px-1.5 py-1.5 lg:flex">
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              className="px-3 py-2 font-body text-sm font-medium text-white/90"
              href={link === "Home" ? "#hero" : "#capabilities"}
              key={link}
            >
              {link}
            </a>
          ))}
          <a
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2 font-body text-sm font-semibold text-black"
            href="#capabilities"
          >
            <span>Claim a Spot</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="h-12 w-12" aria-hidden="true" />
    </nav>
  );
}

window.Navbar = Navbar;
