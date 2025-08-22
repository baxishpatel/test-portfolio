import { Mail, Download, User } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    // Download the actual resume PDF
    window.open('/Baxish_Patel_Resume_QA.pdf', '_blank');
  };

  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" data-testid="hero-title">
              Hi, I'm <span className="text-blue-600">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium" data-testid="hero-subtitle">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl" data-testid="hero-description">
              {personalInfo.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleContactClick}
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                data-testid="button-contact"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={handleDownloadResume}
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                data-testid="button-download-resume"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 animate-slide-up">
            {/* Professional headshot placeholder */}
            <div 
              className="w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl"
              data-testid="hero-avatar"
            >
              <User size={120} className="text-white opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
