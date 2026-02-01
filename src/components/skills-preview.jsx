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
      <div className="text-center mb-12 space-y-6 relative">
        {/* Terminal-style background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl -z-10 rounded-lg"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-mono relative inline-block">
          {/* Terminal cursor */}
          <span className="before:content-['>_'] before:text-blue-500 animate-pulse mr-2"></span>
          {/* Main title */}
          Skills &{/* Gradient accent text */}
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Technologies
          </span>
          {/* Animated underline */}
          <span className="absolute -bottom-1 max-sm:left-1/2 max-sm:-translate-x-1/2 right-0 w-2/5 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </h2>

        {/* Subtext / Description */}
        <p className="relative text-lg text-gray-100 max-w-2xl mx-auto font-mono bg-gray-900/80 dark:bg-gray-800/70 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg overflow-hidden">
          {/* Neon glow top bar */}
          <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl"></span>

          {/* Terminal-style content */}
          <span className="block before:content-['>_'] before:text-blue-400 before:mr-2">
            I work with modern tools, frameworks, and technologies to build
            scalable, high-performance web applications.
          </span>
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
    p-5 pt-10 pb-6 rounded-lg
    bg-white
    border border-gray-200
    transition-all duration-200
    hover:border-blue-500 hover:shadow-sm
  "
              >
                {/* Code editor top bar */}
                <div className="absolute top-0 left-0 w-full h-7 bg-gray-100 border-b border-gray-200 rounded-t-lg flex items-center px-3 gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>

                  {/* Dynamic filename */}
                  <span className="ml-3 text-[11px] font-mono text-gray-500 truncate">
                    {skill.name.toLowerCase().replace(/\s+/g, "-")}.config
                  </span>
                </div>

                {/* Icon */}
                <div className={`p-3 rounded-md ${skill.color}`}>
                  <Icon className="h-7 w-7" aria-hidden />
                </div>

                {/* Skill name */}
                <span className="mt-3 text-sm font-mono font-semibold text-gray-900 text-center">
                  {skill.name}
                </span>

                {/* Status (inactive → active on hover) */}
                <span className="mt-1 text-xs font-mono text-gray-500">
                  <span className="text-gray-400 group-hover:hidden">●</span>
                  <span className="text-green-600 hidden group-hover:inline">
                    ●
                  </span>{" "}
                  status:
                  <span className="group-hover:hidden ml-1">inactive</span>
                  <span className="hidden group-hover:inline ml-1 text-green-600">
                    active
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      )}

      <div className="text-center">
        <Button
          size="lg"
          asChild
          className="
      relative overflow-hidden px-6 py-5 rounded-xl
      font-mono font-semibold text-white
      bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
      shadow-[0_10px_30px_rgba(99,102,241,0.35)]
      hover:shadow-[0_15px_45px_rgba(99,102,241,0.55)]
      transition-all duration-300
      group
    "
        >
          <Link
            href="/skills"
            aria-label="View all developer skills"
            className="relative z-10 flex items-center gap-3"
          >
            {/* Terminal prefix */}
            <span className="text-green-300 animate-pulse">{">_"}</span>

            <span className="tracking-wide">View All Skills</span>

            <LucideIcons.ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
