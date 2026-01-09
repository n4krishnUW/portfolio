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
      
      {/* 6 grid columns with borders */}
      <div className="pointer-events-none absolute inset-y-0 left-[120px] right-[120px] grid grid-cols-6">
        {[...Array(6)].map((_, i) => {
          const isOuter = i === 0 || i === 5;
          const borderColor = isOuter 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.15)';
          return (
            <div 
              key={i} 
              className="h-full"
              style={{
                background: 'rgba(217, 217, 217, 0.04)', // #D9D9D9 at 4%
                border: `1px solid ${borderColor}`,
              }}
            />
          );
        })}
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col px-[120px]">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-8">
          <span className="text-[40px] font-medium text-white">Naveena</span>
          <div className="flex items-center gap-12">
            <a href="#work" className="text-[24px] font-normal text-white transition-opacity hover:opacity-80">Work</a>
            <a href="#play" className="text-[24px] font-normal text-white transition-opacity hover:opacity-80">Play</a>
            <a href="#about" className="text-[24px] font-normal text-white transition-opacity hover:opacity-80">About</a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex flex-1 flex-col justify-center pb-32">
          <span className="mb-4 text-[32px] font-normal text-white">Product Designer</span>
          <h1 className="mb-8 text-[96px] font-normal leading-[1.1] tracking-tight text-white">
            Hi, I'm Naveena
          </h1>
          <p className="max-w-[600px] text-[32px] font-light leading-relaxed text-white">
            I'm a UX designer bridging business goals and user needs to create experiences that resonate. I design with curiosity, empathy, and an eye for clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
