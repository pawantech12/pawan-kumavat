import { Button } from "@/components/ui/button";
import allSkills from "@/data/skillsdata";

import Link from "next/link";

export default function SkillsPreview() {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Skills and Technologies Section"
    >
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Skills & Technologies
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I work with modern technologies and frameworks to build robust,
          scalable applications.
        </p>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12"
        aria-label="Skill cards grid"
      >
        {allSkills.slice(0, 12).map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white rounded-lg border hover:shadow-lg transition-all duration-300 hover:scale-105"
            aria-label={`Skill card for ${skill.name}`}
          >
            <div className={`p-3 rounded-lg mb-3 ${skill.color}`}>
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-gray-900 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="outline" asChild>
          <Link href="/skills" aria-label="View all developer skills">
            View All Skills
          </Link>
        </Button>
      </div>
    </section>
  );
}
