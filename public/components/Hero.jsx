const { motion: heroMotion } = window.Motion;

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

const entrance = (delay) => ({
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 z-0 -translate-x-1/2 object-cover object-top"
        style={{ width: "120%", height: "120%" }}
        ariaLabel="Cinematic spacecraft crossing a luminous planetary horizon"
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <div className="flex flex-1 items-center justify-center px-4 pt-24">
          <div className="flex w-full flex-col items-center text-center">
            <heroMotion.div
              className="liquid-glass inline-flex items-center gap-2 rounded-full p-1"
              {...entrance(0.4)}
            >
              <span className="rounded-full bg-white px-3 py-1 font-body text-xs font-semibold text-black">
                New
              </span>
              <span className="pr-3 font-body text-sm text-white/90">
                Maiden Crewed Voyage to Mars Arrives 2026
              </span>
            </heroMotion.div>

            <BlurText
              text="Venture Past Our Sky Across the Universe"
              className="mt-5 max-w-2xl justify-center font-heading text-6xl italic leading-[0.8] tracking-[-4px] text-white md:text-7xl lg:text-[5.5rem]"
            />

            <heroMotion.p
              className="mt-4 max-w-2xl font-body text-sm font-light leading-tight text-white md:text-base"
              {...entrance(0.8)}
            >
              Discover the universe in ways once unimaginable. Our pioneering vessels
              and breakthrough engineering bring deep-space exploration within
              reach—secure and extraordinary.
            </heroMotion.p>

            <heroMotion.div className="mt-6 flex items-center gap-6" {...entrance(1.1)}>
              <a
                className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-medium text-white"
                href="#capabilities"
              >
                <span>Start Your Voyage</span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-white"
                href="#capabilities"
              >
                <span>View Liftoff</span>
                <PlayIcon className="h-4 w-4" />
              </a>
            </heroMotion.div>

            <heroMotion.div
              className="mt-8 flex flex-wrap items-stretch justify-center gap-4"
              {...entrance(1.3)}
            >
              <StatCard
                icon={<ClockIcon className="h-7 w-7 text-white" />}
                value="34.5 Min"
                label="Average Videos Watch Time"
              />
              <StatCard
                icon={<GlobeIcon className="h-7 w-7 text-white" />}
                value="2.8B+"
                label="Users Across the Globe"
              />
            </heroMotion.div>
          </div>
        </div>

        <heroMotion.div
          className="flex flex-col items-center gap-4 px-4 pb-8"
          {...entrance(1.4)}
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 font-body text-xs font-medium text-white">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2 font-heading text-2xl italic tracking-tight text-white md:gap-x-16 md:text-3xl">
            {["Aeon", "Vela", "Apex", "Orbit", "Zeno"].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </heroMotion.div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <article className="liquid-glass flex w-[220px] flex-col items-start rounded-[1.25rem] p-5 text-left">
      <div>{icon}</div>
      <div className="mt-8 font-heading text-4xl italic leading-none tracking-[-1px] text-white">
        {value}
      </div>
      <div className="mt-2 font-body text-xs font-light text-white">{label}</div>
    </article>
  );
}

window.Hero = Hero;
