const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-background">
      {/* Animated radial gradient - constrained within grid margins */}
      <div className="pointer-events-none absolute inset-y-0 left-4 right-4 overflow-hidden md:left-[120px] md:right-[120px]">
        <div 
          className="absolute inset-0 animate-gradient-drift"
          style={{
            background: `radial-gradient(ellipse 42% 56% at 44% 47%, hsl(258 90% 50% / 0.5) 0%, transparent 100%)`,
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col px-4 md:px-[120px]">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6 md:py-8">
          <span className="text-lg font-semibold text-foreground md:text-xl">Naveena</span>
          <div className="flex items-center gap-6 md:gap-12">
            <a href="#work" className="text-sm text-foreground/90 transition-colors hover:text-foreground md:text-base">Work</a>
            <a href="#play" className="text-sm text-foreground/90 transition-colors hover:text-foreground md:text-base">Play</a>
            <a href="#about" className="text-sm text-foreground/90 transition-colors hover:text-foreground md:text-base">About</a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex flex-1 flex-col justify-center pb-16 md:pb-32">
          <span className="mb-3 text-base text-muted-foreground md:mb-4 md:text-lg">Product Designer</span>
          <h1 className="mb-6 text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl md:mb-8 md:text-6xl lg:text-[80px]">
            Hi, I'm Naveena
          </h1>
          <p className="max-w-[600px] text-base leading-relaxed text-muted-foreground md:text-xl">
            I'm a UX designer bridging business goals and user needs to create experiences that resonate. I design with curiosity, empathy, and an eye for clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
