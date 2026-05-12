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
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-sm:py-16 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="h-[220px] w-[480px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-3xl" />
          </div>

          {/* Section Header */}
          <div className="relative mb-20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/70 bg-white/75 px-5 py-2 shadow-sm backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-neutral-900">
              Building Reliable
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Scalable Web Experiences
              </span>
            </h2>

            {/* Divider */}
            <div className="mt-7 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-neutral-300" />
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
              <div className="h-px w-10 bg-neutral-300" />
            </div>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600">
              I'm{" "}
              <span className="font-semibold text-neutral-900">
                Pawan Kumavat
              </span>
              , a full-stack developer focused on building modern, scalable, and
              user-centric web applications using the MERN stack and Next.js
              ecosystem.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative group">
                {/* Glow Background */}
                <div className="absolute inset-0 -z-10 flex justify-center">
                  <div className="h-[260px] w-[260px] rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 blur-3xl opacity-40 group-hover:opacity-60 transition" />
                </div>

                {/* Image Frame Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-2xl opacity-30" />

                <Image
                  src="/profile.jpeg"
                  alt="Pawan Kumavat – Full Stack Developer"
                  width={320}
                  height={320}
                  className="relative rounded-full border-4 border-white shadow-xl object-cover
        transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />

                {/* Subtle Ring */}
                <div className="absolute inset-0 rounded-full border border-blue-200/40 group-hover:border-blue-300/60 transition" />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p className="text-base sm:text-lg">
                I specialize in building{" "}
                <span className="font-semibold text-neutral-900">
                  modern full-stack web applications
                </span>{" "}
                with a focus on performance, scalability, and clean
                architecture.
              </p>

              <p className="text-base sm:text-lg">
                I’ve worked on{" "}
                <span className="font-semibold text-neutral-900">
                  e-commerce platforms, SaaS dashboards, portfolio systems, and
                  custom web apps
                </span>{" "}
                delivering real-world business value.
              </p>

              <p className="text-base sm:text-lg">
                My approach emphasizes writing maintainable code, designing
                efficient APIs, and creating intuitive user experiences that
                feel{" "}
                <span className="text-blue-600 font-medium">
                  smooth, modern, and scalable
                </span>
                .
              </p>

              {/* Mini highlight line (matches your section style) */}
              <div className="flex items-center gap-3 pt-2">
                <div className="h-[2px] w-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <div className="h-[2px] w-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
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
            {/* Header (UPDATED STYLE) */}
            <div className="relative mb-20 text-center">
              {/* Background Glow */}
              <div className="absolute inset-0 -z-10 flex justify-center">
                <div className="h-[220px] w-[480px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-3xl" />
              </div>

              {/* Top Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/70 bg-white/75 px-5 py-2 shadow-sm backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                </span>

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Profile
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-7 text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-neutral-900">
                Personal
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                  Overview
                </span>
              </h2>

              {/* Divider */}
              <div className="mt-7 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-neutral-300" />
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                <div className="h-px w-10 bg-neutral-300" />
              </div>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600">
                A quick snapshot of my background, experience, and expertise in
                modern full-stack web development.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Location",
                  main: "Kalyan (W), Thane",
                  sub: "Maharashtra, India",
                },
                {
                  title: "Experience",
                  main: "2+ Years",
                  sub: "Professional Development",
                },
                {
                  title: "Specialization",
                  main: "Full-Stack Development",
                  sub: "MERN & Next.js",
                },
                {
                  title: "Availability",
                  badge: true,
                  sub: "Open to freelance & part-time roles",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-neutral-200/70 bg-white/70 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200"
                >
                  <p className="text-sm text-neutral-500 mb-2">{item.title}</p>

                  {item.badge ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm font-medium">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      {item.sub}
                    </span>
                  ) : (
                    <>
                      <p className="font-semibold text-neutral-900">
                        {item.main}
                      </p>
                      <p className="text-sm text-neutral-500">{item.sub}</p>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Bio Section */}
            <div className="mt-14 relative rounded-3xl border border-neutral-200/70 bg-white/70 backdrop-blur-xl p-8 shadow-sm">
              {/* Accent Line */}
              <div className="absolute left-0 top-8 h-16 w-[3px] rounded-r-full bg-gradient-to-b from-blue-600 to-indigo-500"></div>

              <div className="pl-6 text-neutral-600 leading-relaxed space-y-4">
                <p>
                  I'm a passionate{" "}
                  <span className="font-semibold text-neutral-900">
                    Full-Stack Developer
                  </span>{" "}
                  focused on building modern, scalable web applications using
                  React, Next.js, Node.js, and MongoDB.
                </p>

                <p>
                  I design fast, SEO-friendly, and user-centric digital products
                  with clean architecture and optimized performance.
                </p>

                <p>
                  I continuously explore new technologies and improve my
                  development workflow to deliver high-quality solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          aria-label="Work Experience"
          className="relative py-24 overflow-hidden bg-white"
        >
          {/* Background Glow (aligned with theme) */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-10rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="relative mb-20 text-center max-w-2xl mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 -z-10 flex justify-center">
                <div className="h-[220px] w-[480px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-3xl" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/70 bg-white/75 px-5 py-2 shadow-sm backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                </span>

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Experience
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-7 text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-neutral-900">
                Professional
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                  Work Journey
                </span>
              </h2>

              {/* Divider */}
              <div className="mt-7 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-neutral-300" />
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                <div className="h-px w-10 bg-neutral-300" />
              </div>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600">
                My professional journey building scalable web applications,
                modern UI systems, and real-world digital products with clean
                architecture and performance focus.
              </p>
            </div>

            {/* Content */}
            {loading ? (
              <SectionLoader text="Loading Experiences..." />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {experiences.map((exp, index) => (
                  <article key={index} className="group relative">
                    <div
                      className="
              relative h-full rounded-3xl
              border border-neutral-200/70
              bg-white/80 backdrop-blur-2xl
              p-7
              shadow-[0_8px_30px_rgb(0,0,0,0.04)]
              transition-all duration-500
              hover:-translate-y-2
              hover:border-blue-200
              hover:shadow-[0_18px_50px_rgb(59,130,246,0.12)]
            "
                    >
                      {/* Top Accent Line */}
                      <div className="absolute left-0 top-6 h-10 w-[3px] rounded-r-full bg-gradient-to-b from-blue-600 via-indigo-500 to-cyan-500" />

                      {/* Content */}
                      <div className="pl-6">
                        {/* Title + Badge */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </h3>

                          <div className="inline-flex items-center gap-1 rounded-full border border-neutral-200/70 bg-white/70 px-3 py-1 text-xs text-neutral-600 backdrop-blur-md">
                            <Calendar className="h-3 w-3 text-blue-600" />
                            {exp.period}
                          </div>
                        </div>

                        {/* Company */}
                        <p className="mt-1 text-sm font-medium text-blue-600">
                          {exp.company}
                        </p>

                        {/* Description */}
                        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
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
          className="relative py-24 overflow-hidden bg-white"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[-10rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="relative mb-20 text-center max-w-2xl mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 -z-10 flex justify-center">
                <div className="h-[220px] w-[480px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-3xl" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/70 bg-white/75 px-5 py-2 shadow-sm backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                </span>

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Education
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-7 text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-neutral-900">
                Academic
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                  Background
                </span>
              </h2>

              {/* Divider */}
              <div className="mt-7 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-neutral-300" />
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                <div className="h-px w-10 bg-neutral-300" />
              </div>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600">
                My academic journey and foundational learning that shaped my
                skills in web development, programming, and modern software
                engineering practices.
              </p>
            </div>

            {/* Content */}
            {loading ? (
              <SectionLoader text="Loading Education..." />
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {educations.map((edu, index) => (
                  <article key={index} className="group relative">
                    <div
                      className="
              relative h-full rounded-3xl
              border border-neutral-200/70
              bg-white/80 backdrop-blur-2xl
              p-7
              shadow-[0_8px_30px_rgb(0,0,0,0.04)]
              transition-all duration-500
              hover:-translate-y-2
              hover:border-blue-200
              hover:shadow-[0_18px_50px_rgb(59,130,246,0.12)]
            "
                    >
                      {/* Accent Line */}
                      <div className="absolute left-0 top-6 h-10 w-[3px] rounded-r-full bg-gradient-to-b from-blue-600 via-indigo-500 to-cyan-500" />

                      <div className="pl-6">
                        {/* Degree + Badge */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                            {edu.degree}
                          </h3>

                          <div className="inline-flex items-center gap-1 rounded-full border border-neutral-200/70 bg-white/70 px-3 py-1 text-xs text-neutral-600 backdrop-blur-md">
                            <Calendar className="h-3 w-3 text-blue-600" />
                            {edu.period}
                          </div>
                        </div>

                        {/* School */}
                        <p className="mt-1 text-sm font-medium text-blue-600">
                          {edu.school}
                        </p>

                        {/* Description */}
                        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
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
