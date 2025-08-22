import { Eye } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

export default function ProjectsShowcase() {
  const handleViewProject = (projectId: number) => {
    // In a real implementation, this would open a modal or navigate to project details
    console.log('View project details:', projectId);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600" data-testid="projects-subtitle">
            Showcasing innovative solutions and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              data-testid={`project-card-${project.id}`}
            >
              {/* Project visualization placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <i className={`${project.icon} text-6xl text-white opacity-50`}></i>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500" data-testid={`project-period-${project.id}`}>
                    {project.period}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} data-testid={`project-achievement-${project.id}-${achIndex}`}>
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6" data-testid={`project-technologies-${project.id}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      data-testid={`project-tech-${project.id}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  onClick={() => handleViewProject(project.id)}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  data-testid={`button-view-project-${project.id}`}
                >
                  <Eye className="mr-2" size={16} />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
