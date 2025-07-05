import HeroSection from "@/components/hero-section";
import FeaturedProjects from "@/components/featured-projects";
import SkillsPreview from "@/components/skills-preview";
import ContactCTA from "@/components/contact-cta";

export const metadata = {
  title: "Home",
  description:
    "Welcome to John Doe's portfolio. Full Stack Developer specializing in modern web technologies.",
};

export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <FeaturedProjects />
      <SkillsPreview />
      <ContactCTA />
    </div>
  );
}
