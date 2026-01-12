const FeaturedSection = () => {
  return (
    <section id="work" className="relative w-full bg-background">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-[120px]">
        {/* Featured heading */}
        <h2 className="py-8 text-4xl font-light tracking-tight text-foreground md:py-12 md:text-5xl lg:text-6xl">
          Featured
        </h2>
        
        {/* Horizontal divider */}
        <div className="h-px w-full bg-white/15" />
        
        {/* Featured project card - full width grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:gap-5">
          {/* Project image - spans 3 columns */}
          <div className="col-span-1 md:col-span-3">
            <div className="aspect-[4/3] w-full bg-muted/30 md:aspect-auto md:h-full">
              {/* Placeholder for project image */}
              <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-muted/20">
                <span className="text-sm text-muted-foreground">Project Image</span>
              </div>
            </div>
          </div>
          
          {/* Project content - spans 3 columns */}
          <div className="col-span-1 flex flex-col py-6 md:col-span-3 md:py-8">
            {/* Title */}
            <h3 className="mb-auto text-xl font-normal text-foreground md:text-2xl">
              DiabetesPath
            </h3>
            
            {/* Description */}
            <p className="mb-8 mt-8 text-base leading-relaxed text-foreground md:mt-auto md:text-lg">
              Turning day 0 overwhelm into a 30 day actionable plan to make life with diabetes manageable and less overwhelming.
            </p>
            
            {/* Type and Tags row */}
            <div className="flex flex-col gap-4 border-t border-white/15 pt-4 md:flex-row md:items-center md:justify-between">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                TYPE:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  HEALTHCARE, PRODUCT DESIGN, INSURANCE
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom divider */}
        <div className="h-px w-full bg-white/15" />
      </div>
    </section>
  );
};

export default FeaturedSection;
