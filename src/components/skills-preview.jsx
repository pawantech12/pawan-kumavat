"use client";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";

import axios from "axios";

import Link from "next/link";
import { useEffect, useState } from "react";
import SectionLoader from "./section-loader";

export default function SkillsPreview() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/skills");

        setSkills(res.data);
      } catch (error) {
        console.log("Errror while fetching skill data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Skills and Technologies Section"
    >
      <div className="text-center mb-16 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-[420px] h-[220px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
        </div>

        {/* Small Label */}
        <span className="inline-block mb-4 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
          Tech Stack
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
          Skills & <span className="text-blue-600">Technologies</span>
        </h2>

        {/* Divider */}
        <div className="flex justify-center mt-4">
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I work with modern frameworks, tools, and technologies to build
          scalable, high-performance web applications with clean architecture
          and great user experience.
        </p>
      </div>

      {loading ? (
        <SectionLoader text="Loading Skills..." />
      ) : (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12"
          aria-label="Skill cards grid"
        >
          {skills.slice(0, 12).map((skill, index) => {
            const Icon = LucideIcons[skill.icon] || LucideIcons.HelpCircle;
            return (
              <div
                key={index}
                aria-label={`Skill card for ${skill.name}`}
                className="
              group relative flex flex-col items-center
              p-6 rounded-2xl
              border border-neutral-200
              bg-white/70 backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:border-blue-400
              hover:shadow-lg
            "
              >
                {/* subtle gradient glow */}
                <div
                  className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
                />

                {/* Icon container */}
                <div
                  className={`
                  relative z-10
                  flex items-center justify-center
                  w-14 h-14 rounded-xl
                  ${skill.color}
                  shadow-sm
                  transition-transform duration-300
                  group-hover:scale-110
                `}
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </div>

                {/* Skill name */}
                <span
                  className="
                relative z-10
                mt-4 text-sm font-semibold
                text-neutral-800
                tracking-tight
              "
                >
                  {skill.name}
                </span>

                {/* subtle underline */}
                <span
                  className="
                mt-2 h-[2px] w-0
                bg-gradient-to-r from-blue-500 to-indigo-500
                transition-all duration-300
                group-hover:w-10
              "
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="text-center">
        <Button
          size="lg"
          className="
          group relative overflow-hidden
          rounded-xl px-6 py-6
          font-semibold text-white
          bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
          shadow-[0_12px_35px_rgba(79,70,229,0.35)]
          hover:shadow-[0_18px_55px_rgba(79,70,229,0.45)]
          transition-all duration-300
          hover:-translate-y-[2px]
          "
        >
          <Link
            href="/skills"
            aria-label="View all web development skills"
            className="relative z-10 flex items-center gap-3"
          >
            <span className="tracking-tight">View All skills</span>

            <span
              className="
              flex items-center justify-center
              w-7 h-7 rounded-lg
              bg-white/20
              transition-all duration-300
              group-hover:bg-white/30
              "
            >
              <LucideIcons.ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* subtle gradient sweep animation */}
          <span
            className="
            pointer-events-none absolute inset-0
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            "
          />
        </Button>
      </div>
    </section>
  );
}
