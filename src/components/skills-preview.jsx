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
            className="group relative flex flex-col items-center p-4 pb-5 bg-white rounded-lg border hover:shadow-lg transition-all duration-300 hover:scale-105"
            aria-label={`Skill card for ${skill.name}`}
          >
            <div className={`p-3 rounded-lg mb-3 ${skill.color}`}>
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-gray-900 text-center">
              {skill.name}
            </span>
            {/* Optional subtle gradient bottom line */}
            <div className="absolute bottom-2 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full transition-all duration-500 group-hover:w-3/4 -translate-x-1/2"></div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          asChild
          className="relative overflow-hidden rounded-lg px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <Link
            href="/skills"
            aria-label="View all developer skills"
            className="relative z-10 flex items-center gap-2"
          >
            View All Skills
          </Link>
        </Button>
      </div>
    </section>
  );
}
