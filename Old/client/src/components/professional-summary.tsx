import { CheckCircle, Trophy } from "lucide-react";
import { achievements, coreCompetencies, keyAchievements } from "@/data/portfolio-data";

export default function ProfessionalSummary() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-testid="summary-title">
            Professional Summary
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="summary-subtitle">
            Driving quality excellence through innovative testing strategies and automation frameworks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-8 bg-slate-50 rounded-xl" data-testid={`stat-${index}`}>
              <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.value}</div>
              <div className="text-gray-700 font-medium">{achievement.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" data-testid="competencies-title">
                Core Competencies
              </h3>
              <ul className="space-y-3 text-gray-700">
                {coreCompetencies.map((competency, index) => (
                  <li 
                    key={index} 
                    className="flex items-center"
                    data-testid={`competency-${index}`}
                  >
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    {competency}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" data-testid="achievements-title">
                Key Achievements
              </h3>
              <ul className="space-y-3 text-gray-700">
                {keyAchievements.map((achievement, index) => (
                  <li 
                    key={index} 
                    className="flex items-start"
                    data-testid={`achievement-${index}`}
                  >
                    <Trophy className="text-yellow-500 mr-3 mt-1" size={20} />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
