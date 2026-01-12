import ProjectCard from "./ProjectCard";

const FeaturedSection = () => {
  const projects = [
    {
      title: "DiabetesPath",
      description: "Turning day 0 overwhelm into a 30 day actionable plan to make life with diabetes manageable and less overwhelming.",
      tags: ["HEALTHCARE", "PRODUCT DESIGN", "INSURANCE"],
      type: "Case Study",
    },
    {
      title: "Naveena",
      description: "Turning day 0 overwhelm into a 30 day actionable plan to make life with diabetes manageable and less overwhelming.",
      tags: ["HEALTHCARE", "UX DESIGN", "INSURANCE"],
      type: "Case Study",
    },
  ];

  return (
    <section id="work" className="relative w-full bg-background py-16 md:py-24">
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
              className={`h-full ${i >= 2 && i <= 3 ? 'hidden md:block' : ''} ${i >= 4 ? 'hidden md:block' : ''}`}
              style={{
                background: 'rgba(217, 217, 217, 0.04)',
                border: `1px solid ${borderColor}`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-[120px]">
        <h2 className="mb-12 text-lg text-muted-foreground md:mb-16">Featured</h2>
        
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              tags={project.tags}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
