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
      {/* Section Header */}
      <div className="relative mb-14 sm:mb-16 lg:mb-20 text-center">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div
            className="h-[160px] sm:h-[200px] lg:h-[220px]
        w-[280px] sm:w-[380px] lg:w-[480px]
        rounded-full
        bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10
        blur-3xl"
          />
        </div>

        {/* Top Badge */}
        <div
          className="inline-flex items-center gap-2 sm:gap-2.5
      rounded-full border border-neutral-200/70
      bg-white/75 px-4 sm:px-5 py-1.5 sm:py-2
      shadow-sm backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
            <span className="relative inline-flex h-full w-full rounded-full bg-blue-600" />
          </span>

          <span
            className="text-[10px] sm:text-[11px] font-semibold uppercase
        tracking-[0.2em] text-blue-600"
          >
            Tech Stack
          </span>
        </div>

        {/* Heading */}
        <h2
          className="mt-5 sm:mt-7 text-2xl sm:text-3xl lg:text-5xl
      font-bold tracking-tight leading-[1.1] text-neutral-900"
        >
          Skills &
          <br />
          <span
            className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500
        bg-clip-text text-transparent"
          >
            Modern Technologies
          </span>
        </h2>

        {/* Divider */}
        <div className="mt-5 sm:mt-7 flex items-center justify-center gap-2 sm:gap-3">
          <div className="h-px w-6 sm:w-10 bg-neutral-300" />

          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />

          <div className="h-[2px] sm:h-[3px] w-14 sm:w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />

          <div className="h-px w-6 sm:w-10 bg-neutral-300" />
        </div>

        {/* Description */}
        <p
          className="mx-auto mt-5 sm:mt-6 max-w-xl sm:max-w-2xl
      text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-600"
        >
          I work with modern frameworks, libraries, and tools to build scalable,
          high-performance web applications with clean architecture and smooth
          user experiences.
        </p>
      </div>

      {/* Skills Grid */}
      {loading ? (
        <SectionLoader text="Loading Skills..." />
      ) : (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
      gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12"
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
              overflow-hidden

              rounded-2xl sm:rounded-3xl
              border border-neutral-200/70

              bg-white/80 backdrop-blur-2xl

              p-4 sm:p-6

              shadow-[0_8px_30px_rgb(0,0,0,0.04)]

              transition-all duration-500
              hover:-translate-y-2
              hover:border-blue-200
              hover:shadow-[0_18px_50px_rgb(59,130,246,0.12)]
            "
              >
                {/* Background Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-16 -right-16 h-28 sm:h-36 w-28 sm:w-36 rounded-full bg-blue-500/10 blur-3xl" />
                  <div className="absolute -bottom-16 -left-16 h-28 sm:h-36 w-28 sm:w-36 rounded-full bg-indigo-500/10 blur-3xl" />
                </div>

                {/* Top Border */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon */}
                <div
                  className={`
                relative z-10 flex items-center justify-center
                h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl
                ${skill.color}
                shadow-lg shadow-black/5
                transition-all duration-500
                group-hover:scale-110 group-hover:-translate-y-1
              `}
                >
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/10" />
                  <Icon
                    className="relative h-6 w-6 sm:h-7 sm:w-7"
                    aria-hidden
                  />
                </div>

                {/* Name */}
                <span className="relative z-10 mt-4 sm:mt-5 text-xs sm:text-sm font-semibold text-neutral-800 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </span>

                {/* Divider */}
                <div className="relative z-10 mt-3 flex items-center gap-2">
                  <span className="h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-6 sm:group-hover:w-8" />
                  <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                  <span className="h-[2px] w-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500 group-hover:w-6 sm:group-hover:w-8" />
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-1/2 h-16 sm:h-20 w-16 sm:w-20 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      )}

      {/* CTA Button */}
      <div className="text-center">
        <Button
          size="lg"
          className="
        group relative isolate overflow-hidden
        rounded-2xl px-6 sm:px-7 py-5 sm:py-6

        bg-neutral-900
        text-white font-semibold tracking-tight

        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        hover:shadow-[0_18px_60px_rgba(37,99,235,0.22)]

        transition-all duration-500
        hover:-translate-y-1
        border border-white/10
      "
        >
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute inset-0 -z-20 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute -left-full top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[140%] transition-all duration-1000" />

          <Link
            href="/skills"
            className="relative z-10 flex items-center gap-3"
          >
            <span className="text-sm sm:text-base">View All Skills</span>

            <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-0.5">
              <LucideIcons.ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
