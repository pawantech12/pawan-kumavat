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
    <main className=" ">
      <div className=" ">
        {/* Hero Section */}
        <section
          aria-label="About Pawan Kumavat"
          className="relative overflow-hidden py-20 max-sm:py-16 px-6 sm:px-10 bg-gradient-to-b from-white via-slate-50 to-indigo-50"
        >
          {/* Background glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            {/* Section Heading */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-medium text-blue-600 tracking-wide uppercase">
                About Me
              </p>

              <h2 className="mt-3 text-4xl sm:text-5xl font-semibold text-gray-900 tracking-tight">
                Building reliable and scalable web experiences
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                I'm{" "}
                <span className="font-semibold text-gray-900">
                  Pawan Kumavat
                </span>
                , a full-stack web developer passionate about creating modern,
                scalable, and user-focused applications using the MERN stack and
                Next.js ecosystem.
              </p>
            </div>

            {/* Content Grid */}
            <div className="mt-16 grid lg:grid-cols-2 gap-14 items-center">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative group">
                  {/* glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition" />

                  <Image
                    src="/profile.png"
                    alt="Pawan Kumavat – Full Stack Developer"
                    width={320}
                    height={320}
                    className="relative rounded-full border-4 border-white shadow-xl object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  I specialize in building{" "}
                  <span className="font-medium text-gray-900">
                    modern full-stack web applications
                  </span>{" "}
                  with strong focus on performance, scalability, and clean
                  architecture.
                </p>

                <p>
                  Over the years, I’ve worked on projects including
                  <span className="font-medium text-gray-900">
                    {" "}
                    e-commerce platforms, SaaS dashboards, portfolio systems,
                    and custom web applications
                  </span>
                  .
                </p>

                <p>
                  My development approach focuses on writing maintainable code,
                  designing efficient APIs, and creating intuitive user
                  experiences that deliver real business value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Info */}
        <section
          aria-label="Personal Information"
          className="relative py-24 max-sm:py-16 overflow-hidden bg-white dark:bg-neutral-950"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-10rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            {/* Section Header */}
            <div className="max-w-2xl mb-14 max-sm:mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>

                <h2 className="text-3xl max-sm:text-2xl font-semibold text-neutral-900 dark:text-white">
                  Personal Information
                </h2>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400">
                Quick overview of my background, experience, and professional
                focus.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Location */}
              <div className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm text-neutral-500 mb-2">Location</p>
                <p className="font-semibold text-neutral-900 dark:text-white">
                  Kalyan (W), Thane
                </p>
                <p className="text-sm text-neutral-500">Maharashtra, India</p>
              </div>

              {/* Experience */}
              <div className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm text-neutral-500 mb-2">Experience</p>
                <p className="font-semibold text-neutral-900 dark:text-white">
                  2+ Years
                </p>
                <p className="text-sm text-neutral-500">
                  Professional Development
                </p>
              </div>

              {/* Specialization */}
              <div className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm text-neutral-500 mb-2">Specialization</p>
                <p className="font-semibold text-neutral-900 dark:text-white">
                  Full-Stack Development
                </p>
                <p className="text-sm text-neutral-500">MERN & Next.js</p>
              </div>

              {/* Availability */}
              <div className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm text-neutral-500 mb-3">Availability</p>

                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  Open to freelance & part-time roles
                </span>
              </div>
            </div>

            {/* About Bio */}
            <div className="mt-14 max-sm:mt-10 relative rounded-3xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-8 shadow-sm">
              {/* Accent Line */}
              <div className="absolute left-0 top-8 h-16 w-[3px] rounded-r-full bg-blue-600"></div>

              <div className="pl-6 text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-4">
                <p>
                  I'm a passionate{" "}
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    Full-Stack Developer
                  </span>{" "}
                  focused on building modern, scalable web applications using
                  technologies like React, Next.js, Node.js, and MongoDB.
                </p>

                <p>
                  My goal is to craft fast, SEO-friendly, and user-focused
                  digital products that help businesses grow while maintaining
                  clean, maintainable, and efficient code.
                </p>

                <p>
                  I continuously explore new technologies, improve my
                  development workflow, and contribute to projects that deliver
                  meaningful value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          aria-label="Work Experience"
          className="relative py-24 overflow-hidden bg-white dark:bg-neutral-950"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-10rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            {/* Section Header */}
            <div className="max-w-2xl mb-14">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>

                <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">
                  Work Experience
                </h2>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400">
                My professional journey and experience building real-world web
                applications and digital products.
              </p>
            </div>

            {loading ? (
              <SectionLoader text="Loading Experiences..." />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {experiences.map((exp, index) => (
                  <article key={index} className="group">
                    <div
                      className="relative h-full rounded-2xl border border-neutral-200/70 dark:border-neutral-800
              bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl
              p-6 transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg"
                    >
                      {/* Top accent */}
                      <div className="absolute left-0 top-6 h-10 w-[3px] rounded-r-full bg-blue-600" />

                      <div className="pl-5">
                        {/* Title + Period */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                            {exp.title}
                          </h3>

                          <Badge
                            variant="outline"
                            className="text-xs border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
                          >
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </Badge>
                        </div>

                        {/* Company */}
                        <p className="mt-1 text-sm font-medium text-blue-600">
                          {exp.company}
                        </p>

                        {/* Description */}
                        <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Education */}
        <section
          aria-label="Education Background"
          className="relative py-24 overflow-hidden bg-white dark:bg-neutral-950"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-10rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-7xl px-6">
            {/* Section Header */}
            <div className="max-w-2xl mb-14">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/40">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">
                  Education
                </h2>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                My academic journey and milestones that shaped my skills and
                knowledge in web development and technology.
              </p>
            </div>

            {loading ? (
              <SectionLoader text="Loading Education..." />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {educations.map((edu, index) => (
                  <article key={index} className="group">
                    <div
                      className="relative h-full rounded-2xl border border-neutral-200/70 dark:border-neutral-800
                bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl
                p-6 transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg"
                    >
                      {/* Top accent line */}
                      <div className="absolute left-0 top-6 h-10 w-[3px] rounded-r-full bg-blue-600" />

                      <div className="pl-5">
                        {/* Degree + Period */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                            {edu.degree}
                          </h3>

                          <Badge
                            variant="outline"
                            className="text-xs border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
                          >
                            <Calendar className="h-3 w-3 mr-1" />
                            {edu.period}
                          </Badge>
                        </div>

                        {/* School Name */}
                        <p className="mt-1 text-sm font-medium text-blue-600">
                          {edu.school}
                        </p>

                        {/* Description */}
                        <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutClientPage;
