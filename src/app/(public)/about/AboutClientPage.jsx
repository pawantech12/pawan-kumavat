"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import SectionLoader from "@/components/section-loader";
import axios from "axios";

const AboutClientPage = () => {
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEducationData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/education");

        setEducations(res.data);
      } catch (error) {
        console.log("Errror while fetching education data: ", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchExperienceData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/experiences");

        setExperiences(res.data);
      } catch (error) {
        console.log("Errror while fetching experiences data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperienceData();

    fetchEducationData();
  }, []);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className=" space-y-12">
        {/* Hero Section */}
        <section
          aria-label="About Pawan Kumavat"
          className="
      relative overflow-hidden
      py-28 max-sm:py-8 px-4 sm:px-6 lg:px-8
      bg-gradient-to-b from-white via-slate-50 to-indigo-50
      dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950
      rounded-2xl
    "
        >
          {/* Terminal grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

          {/* Accent glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-500/10 blur-3xl rounded-full" />

          <div className="relative max-w-5xl mx-auto text-center space-y-12">
            {/* Terminal command */}
            <p className="font-mono text-sm text-indigo-600 tracking-wide">
              {">_"} whoami --profile
            </p>

            {/* Profile image */}
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/profile.png"
                alt="Pawan Kumavat – Full Stack Developer"
                width={160}
                height={160}
                priority
                className="relative z-10 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-indigo-400/30 animate-pulse" />
            </div>

            {/* Identity */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-extrabold font-mono text-gray-900 dark:text-white">
                Pawan Kumavat
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                Full Stack Developer · MERN · Scalable Web Systems
              </p>
            </div>

            {/* About block */}
            <div
              className="
          relative max-w-3xl mx-auto
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-800
          rounded-xl
          shadow-lg
          font-mono text-left
        "
            >
              {/* Editor header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-gray-100 dark:bg-gray-800 rounded-t-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-gray-500">about.ts</span>
              </div>

              {/* Code content */}
              <div className="p-6 sm:p-8 space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <p>
                  <span className="text-indigo-600">{">"}</span> Full-stack
                  developer with{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    4+ years of experience
                  </span>{" "}
                  building real-world, production-ready web applications.
                </p>

                <p>
                  <span className="text-indigo-600">{">"}</span> I design
                  scalable architectures, write clean maintainable code, and
                  translate complex business logic into reliable systems.
                </p>

                <p>
                  <span className="text-indigo-600">{">"}</span> I work best
                  with teams that value performance, clarity, and long-term
                  maintainability over shortcuts.
                </p>
              </div>
            </div>

            {/* Dev philosophy */}
            <p className="font-mono text-sm text-gray-500 italic">
              // clean code · clear intent · real impact
            </p>
          </div>
        </section>

        {/* Personal Info */}
        <section aria-label="Personal Information">
          <Card className="relative overflow-hidden rounded-none border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="px-6 py-8 space-y-8">
              {/* Title with terminal badge */}
              <div className="flex items-center gap-3">
                <MapPin className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-neutral-700 dark:text-white font-mono relative">
                  Personal Information
                  <span className="absolute -bottom-1 left-0 h-[3px] w-1/3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full animate-pulse" />
                </h2>
              </div>

              {/* Info grid with terminal card style */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Location */}
                <div className="relative p-4 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm ">
                  <p className="text-xs font-mono text-gray-500 mb-1">
                    {">_"} location
                  </p>
                  <p className="text-gray-900 dark:text-slate-200 font-medium">
                    Kalyan (W), Thane, MH
                  </p>
                </div>

                {/* Experience */}
                <div className="relative p-4  border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm ">
                  <p className="text-xs font-mono text-gray-500 mb-1">
                    {">_"} experience
                  </p>
                  <p className="text-gray-900 dark:text-slate-200 font-medium">
                    2 years
                  </p>
                </div>

                {/* Specialization */}
                <div className="relative p-4  border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm ">
                  <p className="text-xs font-mono text-gray-500 mb-1">
                    {">_"} specialization
                  </p>
                  <p className="text-gray-900 dark:text-slate-200 font-medium">
                    Full-Stack Development
                  </p>
                </div>

                {/* Availability */}
                <div className="relative p-4  border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm ">
                  <p className="text-xs font-mono text-gray-500 mb-1">
                    {">_"} availability
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 text-sm font-mono ">
                    ● available for hire
                  </span>
                </div>
              </div>

              {/* About / Bio - terminal-style block */}
              <div className="relative  border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 font-mono  text-slate-700 dark:text-slate-300 shadow-inner">
                {/* Neon top glow */}
                <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500  animate-[pulse_2s_ease-in-out_infinite]" />

                <p className="leading-relaxed">
                  <span className="text-blue-600 dark:text-blue-400">
                    {">_"}
                  </span>{" "}
                  I enjoy exploring new technologies, contributing to
                  open-source, and building clean, scalable systems. I write
                  maintainable code, ship production-ready solutions, and
                  continuously level up my developer skills.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section aria-label="Work Experience">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3 font-mono relative">
            {/* Terminal-style icon */}
            <Briefcase className="h-8 w-8 text-blue-600" />

            {/* Terminal-style title with animated cursor */}
            <span className="flex items-center gap-2 relative">
              Work Experience
              <span className="absolute -bottom-1 left-0 w-1/3 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full animate-pulse"></span>
            </span>
          </h2>

          {loading ? (
            <SectionLoader text="Loading Experiences..." />
          ) : (
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <article key={index} className="group">
                  <Card className="relative h-full border border-slate-200 dark:border-slate-800 rounded-none shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    {/* Header with terminal style + gradient accent */}
                    <CardHeader className="px-6 py-4 relative">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white font-mono flex items-center gap-2">
                          <span className="text-blue-500 animate-pulse">
                            {">_"}
                          </span>
                          {exp.title}
                        </CardTitle>

                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 px-3 py-1 rounded-none text-sm border-slate-300 dark:border-slate-700 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300 font-mono"
                        >
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="mt-1 text-blue-600 font-medium text-sm sm:text-base">
                        {exp.company}
                      </p>
                    </CardHeader>

                    {/* Content with terminal/code block vibe */}
                    <CardContent className="px-6 pb-6 relative">
                      <div className="relative  bg-slate-50 dark:bg-slate-900 p-4 font-mono text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                        {/* Top gradient bar */}
                        <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500  animate-[pulse_3s_ease-in-out_infinite]" />

                        <p className="leading-relaxed">{exp.description}</p>
                      </div>
                    </CardContent>

                    {/* Bottom hover accent */}
                    <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </Card>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Education */}
        <section aria-label="Education Background">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3 font-mono relative">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            {/* Terminal-style title with animated cursor */}
            <span className="flex items-center gap-2 relative">
              Education
              <span className="absolute -bottom-1 left-0 w-1/3 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full animate-pulse"></span>
            </span>
          </h2>
          {loading ? (
            <SectionLoader text="Loading Education..." />
          ) : (
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <article key={index} className="group">
                  <Card className="relative h-full border border-slate-200 dark:border-slate-800 rounded-none shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    {/* Header with terminal-style + gradient accent */}
                    <CardHeader className="px-6 py-4 relative">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white font-mono flex items-center gap-2">
                          <span className="text-blue-500 animate-pulse">
                            {">_"}
                          </span>
                          {edu.degree}
                        </CardTitle>

                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 px-3 py-1 rounded-none text-sm border-slate-300 dark:border-slate-700 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300 font-mono"
                        >
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </Badge>
                      </div>

                      <p className="mt-1 text-blue-600 font-medium text-sm sm:text-base">
                        {edu.school}
                      </p>
                    </CardHeader>

                    {/* Content with terminal/code block style */}
                    <CardContent className="px-6 pb-6 relative">
                      <div className="relative bg-slate-50 dark:bg-slate-900 p-4 font-mono text-sm text-gray-700 dark:text-gray-300 shadow-sm ">
                        {/* Top gradient bar */}
                        <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] " />

                        <p className="leading-relaxed">{edu.description}</p>
                      </div>
                    </CardContent>

                    {/* Bottom hover accent */}
                    <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                  </Card>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default AboutClientPage;
