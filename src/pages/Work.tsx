import { useState } from 'react';

const Work = () => {
  const [activeTab, setActiveTab] = useState('ux');

  const projects = [
    {
      id: 1,
      title: 'DiabetesPath',
      description: 'Turning day 0 overwhelm into a 30 day actionable plan to make life with diabetes manageable and reduce overwhelm.',
      type: 'HEALTHCARE, PRODUCT DESIGN, INSURANCE',
      image: '/placeholder-diabetes.jpg',
      category: 'ux'
    },
    {
      id: 2,
      title: 'Beyond the Seat',
      description: 'A digital perks program that enhances brand awareness and engagement by offering exclusive, scalable rewards to Rogers customers.',
      type: 'ENTERTAINMENT, PRODUCT DESIGN, AR/VR',
      image: '/placeholder-rogers.jpg',
      category: 'ux'
    },
    {
      id: 3,
      title: 'Fashion for Change',
      description: 'Designed and published a sleek and stylish fashion website to attract charities and new members.',
      type: 'UX/UI Design, Javascript',
      image: '/placeholder-fashion.jpg',
      category: 'ux'
    }
  ];

  const filteredProjects = projects.filter(p => p.category === activeTab);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Grid Overlay */}
      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
        <div className="absolute inset-y-0 left-4 right-4 grid grid-cols-2 gap-5 md:left-[120px] md:right-[120px] md:grid-cols-6">
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
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-[120px]">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6 md:py-8">
          <a href="/" className="text-lg font-semibold text-foreground md:text-xl">Naveena</a>
          <div className="flex items-center gap-6 md:gap-12">
            <a href="/work" className="text-sm text-foreground/90 transition-colors hover:text-foreground md:text-base">Work</a>
            <a href="/play" className="text-sm text-foreground/90 transition-colors hover:text-foreground md:text-base">Play</a>
            <a href="/about" className="text-sm text-foreground/90 transition-colors hover:text-foreground md:text-base">About</a>
          </div>
        </nav>

        {/* Page Content */}
        <div className="py-12 md:py-16">
          {/* Heading */}
          <h1 className="mb-8 text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            My Work
          </h1>

          {/* Tabs */}
          <div className="mb-8 flex gap-8 border-b border-white/15">
            <button
              onClick={() => setActiveTab('ux')}
              className={`pb-4 text-base transition-colors md:text-lg ${
                activeTab === 'ux'
                  ? 'border-b-2 border-foreground text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              UX Design
            </button>
            <button
              onClick={() => setActiveTab('brand')}
              className={`pb-4 text-base transition-colors md:text-lg ${
                activeTab === 'brand'
                  ? 'border-b-2 border-foreground text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Brand Design
            </button>
          </div>

          {/* Projects Grid */}
          <div className="space-y-0">
            {filteredProjects.map((project) => (
              <div key={project.id}>
                <div className="h-px w-full bg-white/15" />
                <div className="group grid cursor-pointer grid-cols-1 transition-all duration-300 md:grid-cols-6 md:gap-5">
                  {/* Project Image */}
                  <div className="col-span-1 md:col-span-3">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted/30 md:aspect-auto md:h-full md:min-h-[400px]">
                      <div className="flex h-full w-full items-center justify-center bg-muted/20 transition-all duration-500 group-hover:scale-105 group-hover:bg-muted/30">
                        <span className="text-sm text-muted-foreground transition-opacity duration-300 group-hover:opacity-70">
                          Project Image
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="col-span-1 flex flex-col py-6 md:col-span-3 md:py-8">
                    {/* Title */}
                    <h3 className="mb-auto text-xl font-normal text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="mb-8 mt-8 text-base leading-relaxed text-foreground transition-opacity duration-300 group-hover:opacity-80 md:mt-auto md:text-lg">
                      {project.description}
                    </p>
                    
                    {/* Type and Tags */}
                    <div className="flex flex-col gap-4 border-t border-white/15 pt-4 transition-all duration-300 group-hover:border-white/25 md:flex-row md:items-center md:justify-between">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        TYPE:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-px w-full bg-white/15" />
          </div>
        </div>

        {/* Footer */}
        <footer className="relative w-full">
          <div className="min-h-[200px] md:min-h-[300px]" />
          <div className="flex flex-col gap-4 pb-8 md:flex-row md:items-center md:justify-between md:pb-12">
            <span className="text-sm text-muted-foreground md:text-base">@2026 Naveena</span>
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
        </footer>
      </div>
    </main>
  );
};

export default Work;
