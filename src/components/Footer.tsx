const Footer = () => {
  return (
    <footer className="relative w-full bg-background py-12 md:py-16">
      {/* Grid overlay - same as hero */}
      <div className="pointer-events-none absolute inset-y-0 left-4 right-4 grid grid-cols-2 gap-5 md:left-[120px] md:right-[120px] md:grid-cols-6">
        {[...Array(6)].map((_, i) => {
          const isOuter = i === 0 || i === 5;
          const borderColor = isOuter 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(255, 255, 255, 0.15)';
          return (
            <div 
              key={i} 
              className={`h-full ${i >= 2 ? 'hidden md:block' : ''}`}
              style={{
                background: 'rgba(217, 217, 217, 0.04)',
                border: `1px solid ${borderColor}`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-[120px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left side - Navigation */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a href="#work" className="text-foreground/90 transition-colors hover:text-foreground">Work</a>
            <a href="#play" className="text-foreground/90 transition-colors hover:text-foreground">Play</a>
            <a href="#about" className="text-foreground/90 transition-colors hover:text-foreground">About</a>
            <span className="text-muted-foreground">@2026 Naveena</span>
          </div>
          
          {/* Right side - Social and Location */}
          <div className="flex flex-col items-start gap-2 text-right md:items-end">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/90 transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground">Toronto, Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
