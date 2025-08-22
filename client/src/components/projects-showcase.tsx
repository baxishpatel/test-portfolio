import { Rocket, Plug, ServerCog, TrendingUp, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/resume-data";

const iconMap = {
  rocket: Rocket,
  plug: Plug,
  cogs: ServerCog
};

export default function ProjectsShowcase() {
  const getIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || ServerCog;
  };

  const getColorClasses = (index: number) => {
    const colors = ["primary", "accent", "secondary"];
    const color = colors[index % colors.length];
    
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "accent":
        return "bg-accent/10 text-accent";
      case "secondary":
        return "bg-secondary/10 text-secondary";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  const getTechColorClasses = (index: number) => {
    const colors = ["primary", "accent", "secondary"];
    const color = colors[index % colors.length];
    
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "accent":
        return "bg-accent/10 text-accent";
      case "secondary":
        return "bg-secondary/10 text-secondary";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key projects demonstrating expertise in automation, testing frameworks, and CI/CD implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getIcon(project.icon);
            
            return (
              <div key={project.id} className="bg-gray-50 rounded-xl overflow-hidden card-hover">
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(index)}`}>
                    <IconComponent size={24} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-secondary mb-2" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`project-period-${project.id}`}>
                    {project.period}
                  </p>
                  
                  <p className="text-gray-700 mb-4" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded text-xs ${getTechColorClasses(index)}`}
                        data-testid={`project-tech-${project.id}-${tech.toLowerCase().replace(/[^\w]/g, '-')}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-accent font-medium" data-testid={`project-impact-${project.id}`}>
                    <TrendingUp className="inline mr-2" size={16} />
                    {project.impact}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
            onClick={() => window.open("https://github.com/baxishpatel", "_blank")}
            data-testid="button-view-github"
          >
            <Github className="mr-2" size={16} />
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
