import { useEffect, useRef, useState } from "react";
import { skillCategories } from "@/data/portfolio-data";

export default function SkillsMatrix() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="skills-title">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600" data-testid="skills-subtitle">
            Comprehensive expertise across testing, automation, and development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-slate-50 rounded-2xl p-8"
              data-testid={`skill-category-${categoryIndex}`}
            >
              <div className="flex items-center mb-6">
                <i className={`${category.icon} text-2xl text-blue-600 mr-3`}></i>
                <h3 className="text-xl font-bold text-gray-900" data-testid={`category-title-${categoryIndex}`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} data-testid={`skill-${categoryIndex}-${skillIndex}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium" data-testid={`skill-name-${categoryIndex}-${skillIndex}`}>
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-medium" data-testid={`skill-percentage-${categoryIndex}-${skillIndex}`}>
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          width: isVisible ? `${skill.proficiency}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                        data-testid={`skill-progress-${categoryIndex}-${skillIndex}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
