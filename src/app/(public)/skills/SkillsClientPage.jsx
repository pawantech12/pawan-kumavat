"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionLoader from "@/components/section-loader";

const SkillsClientPage = () => {
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
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
    const fetchCertData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/certifications");

        setCertifications(res.data);
      } catch (error) {
        console.log("Errror while fetching certification data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    fetchCertData();
  }, []);
  return (
    <main
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-label="Skills and Certifications Page of Pawan Kumavat"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header
          className="text-center mb-16 relative space-y-6"
          aria-label="Skills Page Header"
        >
          {/* Background gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl -z-10 rounded-lg"></div>

          {/* Main Title with terminal style */}
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 font-mono relative inline-block">
            {/* Terminal cursor */}
            <span className="before:content-['>_'] before:text-blue-500 animate-pulse"></span>
            Skills
            {/* Gradient accent text */}
            <span className="text-blue-600 ml-2">Showcase</span>
            {/* Animated underline */}
            <span className="absolute -bottom-1 max-sm:left-1/2 max-sm:-translate-x-1/2 right-0 w-2/5 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h1>

          {/* Subtext / Description in terminal-style block */}
          <p className="relative text-lg text-gray-100 max-w-3xl mx-auto font-mono bg-gray-900/80 dark:bg-gray-800/70 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg overflow-hidden">
            {/* Neon glow top bar */}
            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl"></span>

            {/* Terminal-style content */}
            <span className="block before:content-['>_'] before:text-blue-400 before:mr-2">
              I work with a wide range of technologies and tools to build
              modern, scalable applications. Here are the technologies I'm
              proficient in.
            </span>
          </p>
        </header>

        {/* Skills Grid */}
        {loading ? (
          <SectionLoader text="Loading Skills..." />
        ) : (
          <section
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-16"
            aria-label="List of Technical Skills"
          >
            {skills.map((skill, index) => {
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
                    {Icon && <Icon className="h-7 w-7 " />}
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
          </section>
        )}

        {/* Certifications */}
        <section aria-label="Certifications and Achievements">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-10 text-center overflow-hidden  shadow-lg">
                {/* Subtle animated gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 opacity-20 blur-3xl animate-[pulse_6s_ease-in-out_infinite] -z-10"></div>

                {/* Terminal-style header */}
                <h2 className="text-3xl sm:text-4xl font-bold font-mono inline-block relative mb-4">
                  <span className="before:content-['>_'] before:text-green-300 animate-pulse"></span>
                  Certifications
                  <span className="text-blue-200 ml-2">& Achievements</span>
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 right-0 w-2/5 h-1 bg-gradient-to-r from-green-300 to-blue-200 rounded-full  animate-pulse"></span>
                </h2>

                {/* Description in terminal/code block style */}
                <p className="relative max-w-2xl mx-auto text-sm sm:text-base font-mono bg-white/10 dark:bg-black/20 rounded-xl py-4 px-6 border-l-4 border-green-400 shadow-md">
                  <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-300 via-blue-200 to-purple-300 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl" />
                  <span className="block text-gray-100">
                    Professional certifications that validate my skills,
                    expertise, and dedication to continuous learning in modern
                    web development.
                  </span>
                </p>
              </div>

              <div className="p-8">
                {loading ? (
                  <SectionLoader text="Loading Certifications..." />
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => {
                      const Icon =
                        LucideIcons[cert.icon] || LucideIcons.HelpCircle;
                      return (
                        <div
                          key={index}
                          className={`
                      group relative p-6 rounded-2xl border-2 transition-all duration-300 
                      hover:shadow-2xl hover:scale-105 
                      ${cert.color} cursor-pointer overflow-hidden
                    `}
                          aria-label={`Certificate: ${cert.name} by ${cert.issuer}`}
                        >
                          {/* Top: Icon and Date with terminal vibes */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="text-3xl flex items-center gap-1">
                              <span className="text-blue-500 animate-pulse">
                                {">_"}
                              </span>
                              {Icon && <Icon className="h-7 w-7 " />}
                            </div>
                            <div className="text-sm font-mono text-gray-700 dark:text-gray-300 opacity-75">
                              {cert.date}
                            </div>
                          </div>

                          {/* Certificate Title */}
                          <h3 className="font-mono font-bold text-lg sm:text-xl mb-1 leading-snug text-gray-900 dark:text-white">
                            {cert.name}
                          </h3>

                          {/* Issuer */}
                          <p className="text-sm sm:text-base font-mono text-gray-600 dark:text-gray-400 mb-4">
                            {cert.issuer}
                          </p>

                          {/* Verified + Download Button */}
                          <div className="flex items-center justify-between">
                            {/* Animated Developer-style Status */}
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                              <span className="text-xs sm:text-sm font-mono font-semibold text-gray-700 dark:text-gray-300 opacity-80">
                                Verified
                              </span>
                            </div>

                            <Button
                              size="sm"
                              variant="outline"
                              className="
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          flex items-center gap-1 border-gray-300 dark:border-gray-600
                          text-gray-700 dark:text-gray-300 font-mono font-semibold
                          hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600
                          hover:text-white
                          px-3 py-1.5 rounded-lg
                        "
                              asChild
                            >
                              <Link
                                href={cert.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                aria-label={`Download ${cert.name} certificate PDF`}
                              >
                                <Download className="h-4 w-4" />
                                {cert.pdfLink.endsWith(".pdf")
                                  ? "PDF"
                                  : cert.pdfLink.endsWith(".webp")
                                  ? "Image"
                                  : cert.pdfLink
                                      .split(".")
                                      .pop()
                                      ?.toUpperCase() || "File"}
                              </Link>
                            </Button>
                          </div>

                          {/* Terminal-style Bottom Accent + Neon Glow */}
                          <div className="absolute bottom-2 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-3/4 -translate-x-1/2"></div>
                          <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_50px_rgba(99,102,241,0.35)] transition-shadow duration-300"></div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="mt-8 text-center">
                  <div
                    className="
    inline-flex items-center gap-3 px-5 py-3
    bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
    text-white font-mono text-sm
    rounded-xl shadow-[0_5px_20px_rgba(99,102,241,0.25)]
    hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)]
    transition-all duration-300
    ring-1 ring-blue-400/30
    group
  "
                    aria-label="Certification verification note"
                  >
                    {/* Icon with animated pulse */}
                    <LucideIcons.Shield
                      className="h-5 w-5 flex-shrink-0 animate-pulse text-white"
                      aria-hidden="true"
                    />

                    {/* Text with terminal-style prefix */}
                    <span className="relative before:content-['>_'] before:text-green-300 before:mr-1">
                      All certifications are verified and up-to-date
                    </span>

                    {/* Optional animated glow effect */}
                    <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-300 animate-ping opacity-70"></span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default SkillsClientPage;
