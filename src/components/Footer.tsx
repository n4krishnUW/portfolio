const Footer = () => {
  return (
    <footer className="relative w-full bg-background">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-[120px]">
        {/* Spacer area matching grid height */}
        <div className="min-h-[200px] md:min-h-[300px]" />
        
        {/* Footer content */}
        <div className="flex flex-col gap-4 pb-8 md:flex-row md:items-center md:justify-between md:pb-12">
          {/* Left side - Copyright */}
          <span className="text-sm text-muted-foreground md:text-base">@2026 Naveena</span>
          
          {/* Right side - Social and Location */}
          <div className="flex items-center gap-2 text-sm md:text-base">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/90 transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Toronto, Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
