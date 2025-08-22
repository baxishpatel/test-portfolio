import { Briefcase, Code, Cog, Users, CheckCircle } from "lucide-react";
import { experiences } from "@/data/resume-data";

const iconMap = {
  briefcase: Briefcase,
  cog: Cog,
  users: Users,
  code: Code
};

export default function ExperienceTimeline() {
  const getIcon = (id: string, type: string) => {
    if (id === "kta") return Briefcase;
    if (id === "euronet") return Users;
    if (type === "development") return Code;
    return Cog;
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A decade of experience spanning quality assurance leadership and full-stack development, 
            consistently delivering high-quality software solutions across diverse industries.
          </p>
        </div>

        <div className="timeline-line relative max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const IconComponent = getIcon(exp.id, exp.type);
            
            return (
              <div key={exp.id} className="flex flex-col md:flex-row items-start mb-12 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 mb-4 md:mb-0 md:mr-8 ${
                  exp.current ? "bg-primary" : exp.type === "development" ? "bg-accent" : "bg-primary"
                }`}>
                  <IconComponent className="text-white" size={16} />
                </div>
                
                <div className={`rounded-xl p-6 card-hover flex-1 ${
                  exp.type === "development" 
                    ? "bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20" 
                    : "bg-gray-50"
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-secondary" data-testid={`title-${exp.id}`}>
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <p className="text-primary font-medium mb-2" data-testid={`company-${exp.id}`}>
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`period-${exp.id}`}>
                    {exp.period}
                  </p>
                  
                  <ul className="space-y-2 text-gray-700">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start" data-testid={`achievement-${exp.id}-${achIndex}`}>
                        <CheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" size={16} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
