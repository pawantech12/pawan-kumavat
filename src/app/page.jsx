import HeroSection from "@/components/hero-section";
import FeaturedProjects from "@/components/featured-projects";
import SkillsPreview from "@/components/skills-preview";
import ContactCTA from "@/components/contact-cta";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <SkillsPreview />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
}
