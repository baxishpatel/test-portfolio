import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { experiences } from "@/data/portfolio-data";

export default function ExperienceTimeline() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="experience-title">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600" data-testid="experience-subtitle">
            A journey of continuous growth and technical excellence
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600"></div>

          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative flex items-center mb-12">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <Briefcase className="text-white" size={16} />
              </div>
              
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                experience.isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
              }`}>
                <div 
                  className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${
                    !experience.isCondensed ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => !experience.isCondensed && toggleExpanded(experience.id)}
                  data-testid={`experience-card-${experience.id}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      experience.isCurrent ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-gray-50'
                    }`}>
                      {experience.period}
                    </span>
                    {!experience.isCondensed && (
                      <button data-testid={`expand-button-${experience.id}`}>
                        {expandedItems.includes(experience.id) ? 
                          <ChevronUp className="text-gray-400" size={20} /> : 
                          <ChevronDown className="text-gray-400" size={20} />
                        }
                      </button>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`title-${experience.id}`}>
                    {experience.title}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 mb-4" data-testid={`company-${experience.id}`}>
                    {experience.company}, {experience.location}
                  </h4>
                  
                  <div className="text-gray-600 mb-4" data-testid={`description-${experience.id}`}>
                    <p>{experience.description}</p>
                  </div>
                  
                  {!experience.isCondensed && expandedItems.includes(experience.id) && experience.achievements.length > 0 && (
                    <div data-testid={`achievements-${experience.id}`}>
                      <ul className="space-y-2 text-gray-600">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start" data-testid={`achievement-${experience.id}-${achIndex}`}>
                            <ArrowRight className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
