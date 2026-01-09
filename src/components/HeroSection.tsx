const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Animated radial gradient - constrained within grid margins */}
      <div className="pointer-events-none absolute inset-y-0 left-[120px] right-[120px] overflow-hidden">
        <div 
          className="absolute inset-0 animate-gradient-drift"
          style={{
            background: `radial-gradient(ellipse 42% 56% at 44% 47%, hsl(258 90% 50% / 0.5) 0%, transparent 100%)`,
          }}
        />
      </div>
      
      {/* Vertical column lines with varying opacity */}
      <div className="pointer-events-none absolute inset-0 flex justify-between px-[120px]">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="h-full w-px"
            style={{
              backgroundColor: i === 0 || i === 5 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(255, 255, 255, 0.15)'
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col px-[120px]">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-8">
          <span className="text-xl font-semibold text-foreground">Naveena</span>
          <div className="flex items-center gap-12">
            <a href="#work" className="text-foreground/90 transition-colors hover:text-foreground">Work</a>
            <a href="#play" className="text-foreground/90 transition-colors hover:text-foreground">Play</a>
            <a href="#about" className="text-foreground/90 transition-colors hover:text-foreground">About</a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex flex-1 flex-col justify-center pb-32">
          <span className="mb-4 text-lg text-muted-foreground">Product Designer</span>
          <h1 className="mb-8 text-[80px] font-light leading-[1.1] tracking-tight text-foreground">
            Hi, I'm Naveena
          </h1>
          <p className="max-w-[600px] text-xl leading-relaxed text-muted-foreground">
            I'm a UX designer bridging business goals and user needs to create experiences that resonate. I design with curiosity, empathy, and an eye for clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
