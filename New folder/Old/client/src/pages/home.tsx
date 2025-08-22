import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProfessionalSummary from "@/components/professional-summary";
import ExperienceTimeline from "@/components/experience-timeline";
import SkillsMatrix from "@/components/skills-matrix";
import ProjectsShowcase from "@/components/projects-showcase";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" data-testid="home-page">
      <Navigation />
      <HeroSection />
      <ProfessionalSummary />
      <ExperienceTimeline />
      <SkillsMatrix />
      <ProjectsShowcase />
      <ContactSection />
    </div>
  );
}
