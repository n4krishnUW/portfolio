import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  type: string;
  className?: string;
}

const ProjectCard = ({ title, description, tags, type, className }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "group relative flex flex-col rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-border hover:bg-card/80",
        className
      )}
    >
      {/* Placeholder for project image */}
      <div className="mb-6 aspect-[16/10] w-full rounded-md bg-muted/50" />
      
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
      
      <div className="mt-auto space-y-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span 
              key={i}
              className="text-xs uppercase tracking-wider text-muted-foreground"
            >
              {tag}{i < tags.length - 1 ? ',' : ''}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Type:</span>
        </div>
        
        <h3 className="text-xl font-medium text-foreground md:text-2xl">{title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
