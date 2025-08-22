import { Bug, Code, Cloud } from "lucide-react";
import { skills } from "@/data/resume-data";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "QA & Testing",
      icon: Bug,
      color: "primary",
      categories: [
        { name: "Testing Frameworks", skills: skills.testing, color: "primary" },
        { name: "API Testing", skills: ["Postman", "SoapUI", "REST APIs"], color: "accent" }
      ]
    },
    {
      title: "Development",
      icon: Code,
      color: "accent",
      categories: [
        { name: "Programming Languages", skills: skills.programming, color: "accent" },
        { name: "Web Technologies", skills: skills.webTech, color: "primary" }
      ]
    }
  ];

  const devopsCategory = {
    title: "DevOps & Cloud Technologies",
    icon: Cloud,
    color: "secondary",
    categories: [
      { name: "Containerization", skills: ["Docker", "Kubernetes"], color: "secondary" },
      { name: "CI/CD", skills: ["Jenkins", "Ansible", "Maven"], color: "secondary" },
      { name: "Cloud Platforms", skills: ["AWS", "Azure"], color: "secondary" }
    ]
  };

  const getColorClasses = (color: string) => {
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

  const getIconColorClasses = (color: string) => {
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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning quality assurance methodologies and modern development technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div key={index} className="bg-white rounded-xl p-8 card-hover">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getIconColorClasses(category.color)}`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary" data-testid={`skills-title-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.categories.map((subCategory, subIndex) => (
                    <div key={subIndex}>
                      <h4 className="font-medium text-gray-700 mb-2" data-testid={`skills-subtitle-${subCategory.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        {subCategory.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {subCategory.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`skill-badge px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(subCategory.color)}`}
                            data-testid={`skill-${skill.toLowerCase().replace(/[^\w]/g, '-')}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* DevOps & Cloud Section */}
        <div className="bg-white rounded-xl p-8 card-hover">
          <div className="flex items-center mb-6">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getIconColorClasses(devopsCategory.color)}`}>
              <devopsCategory.icon size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-secondary" data-testid="skills-title-devops-cloud">
              {devopsCategory.title}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {devopsCategory.categories.map((subCategory, subIndex) => (
              <div key={subIndex}>
                <h4 className="font-medium text-gray-700 mb-2" data-testid={`skills-subtitle-${subCategory.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {subCategory.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {subCategory.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`skill-badge px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(subCategory.color)}`}
                      data-testid={`skill-${skill.toLowerCase().replace(/[^\w]/g, '-')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
