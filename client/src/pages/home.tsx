import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceTimeline from "@/components/experience-timeline";
import SkillsSection from "@/components/skills-section";
import ProjectsShowcase from "@/components/projects-showcase";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectsShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
}
