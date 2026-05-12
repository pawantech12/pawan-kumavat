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
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      aria-label="Skills and Certifications Page of Pawan Kumavat"
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="relative mb-16 sm:mb-20 lg:mb-24 text-center">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div
              className="h-[160px] sm:h-[200px] lg:h-[240px]
          w-[280px] sm:w-[420px] lg:w-[520px]
          rounded-full
          bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10
          blur-3xl"
            />
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 sm:gap-2.5
        rounded-full border border-neutral-200/70
        bg-white/75 backdrop-blur-xl
        px-4 sm:px-5 py-1.5 sm:py-2
        shadow-sm"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
              <span className="relative inline-flex h-full w-full rounded-full bg-blue-600" />
            </span>

            <span
              className="text-[10px] sm:text-[11px]
          font-semibold uppercase tracking-[0.2em]
          text-blue-600"
            >
              Tech Stack
            </span>
          </div>

          {/* Heading */}
          <h1
            className="mt-5 sm:mt-7
        text-3xl sm:text-4xl lg:text-6xl
        font-bold tracking-tight leading-[1.05]
        text-neutral-900"
          >
            Skills &
            <br />
            <span
              className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500
          bg-clip-text text-transparent"
            >
              Modern Technologies
            </span>
          </h1>

          {/* Divider */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
            <div className="h-px w-6 sm:w-10 bg-neutral-300" />

            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500" />

            <div className="h-[2px] sm:h-[3px] w-16 sm:w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-indigo-500" />

            <div className="h-px w-6 sm:w-10 bg-neutral-300" />
          </div>

          {/* Description */}
          <p
            className="mx-auto mt-6 sm:mt-7
        max-w-xl sm:max-w-2xl
        text-sm sm:text-base lg:text-lg
        leading-relaxed text-neutral-600"
          >
            I work with modern frameworks, libraries, and development tools to
            build scalable, high-performance applications with clean
            architecture and exceptional user experiences.
          </p>
        </div>

        {/* ================= SKILLS GRID ================= */}
        {loading ? (
          <SectionLoader text="Loading Skills..." />
        ) : (
          <section
            aria-label="List of Technical Skills"
            className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
          gap-4 sm:gap-5 lg:gap-6
          mb-20 sm:mb-24
        "
          >
            {skills.map((skill, index) => {
              const Icon = LucideIcons[skill.icon] || LucideIcons.HelpCircle;

              return (
                <article
                  key={index}
                  aria-label={`Skill card for ${skill.name}`}
                  className="
                group relative overflow-hidden

                rounded-2xl sm:rounded-3xl

                border border-neutral-200/70

                bg-white/80 backdrop-blur-2xl

                p-5 sm:p-6

                shadow-[0_8px_30px_rgb(0,0,0,0.04)]

                transition-all duration-500
                hover:-translate-y-2
                hover:border-blue-200
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
              "
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
                  </div>

                  {/* Top Gradient Line */}
                  <div className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className={`
                    relative flex items-center justify-center
                    h-14 w-14 sm:h-16 sm:w-16
                    rounded-2xl
                    ${skill.color}

                    shadow-lg shadow-black/5

                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:-translate-y-1
                  `}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-white/10" />

                      <Icon
                        className="relative h-6 w-6 sm:h-7 sm:w-7"
                        aria-hidden
                      />
                    </div>

                    {/* Name */}
                    <h3
                      className="
                    mt-4 sm:mt-5
                    text-sm sm:text-[15px]
                    font-semibold
                    text-neutral-800
                    transition-colors duration-300
                    group-hover:text-blue-600
                  "
                    >
                      {skill.name}
                    </h3>

                    {/* Decorative Divider */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-6 sm:group-hover:w-8" />

                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 opacity-0 scale-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />

                      <span className="h-[2px] w-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500 group-hover:w-6 sm:group-hover:w-8" />
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <div className="absolute bottom-0 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              );
            })}
          </section>
        )}

        {/* ================= CERTIFICATIONS ================= */}
        <section aria-label="Certifications and Achievements">
          <Card
            className="
          relative overflow-hidden

          rounded-3xl sm:rounded-[2rem]

          border border-neutral-200/70

          bg-white/80 backdrop-blur-2xl

          shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        "
          >
            {/* Glow Effects */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

              <div className="absolute right-0 bottom-0 h-[20rem] w-[20rem] rounded-full bg-indigo-500/10 blur-[100px]" />
            </div>

            {/* Top Border */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

            <CardContent className="relative p-6 sm:p-10 lg:p-14">
              {/* Header */}
              <div className="text-center mb-14 sm:mb-16">
                {/* Badge */}
                <div
                  className="
                inline-flex items-center gap-2 sm:gap-2.5
                rounded-full border border-neutral-200/70
                bg-white/80 backdrop-blur-xl
                px-4 sm:px-5 py-1.5 sm:py-2
                shadow-sm
              "
                >
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
                    <span className="relative inline-flex h-full w-full rounded-full bg-blue-600" />
                  </span>

                  <span
                    className="text-[10px] sm:text-[11px]
                font-semibold uppercase tracking-[0.2em]
                text-blue-600"
                  >
                    Certifications
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="
                mt-5 sm:mt-7
                text-2xl sm:text-4xl lg:text-5xl
                font-bold tracking-tight leading-[1.1]
                text-neutral-900
              "
                >
                  Certifications &
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                    Achievements
                  </span>
                </h2>

                {/* Divider */}
                <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
                  <div className="h-px w-6 sm:w-10 bg-neutral-300" />

                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500" />

                  <div className="h-[2px] sm:h-[3px] w-16 sm:w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-indigo-500" />

                  <div className="h-px w-6 sm:w-10 bg-neutral-300" />
                </div>

                {/* Description */}
                <p
                  className="
                mx-auto mt-6 sm:mt-7
                max-w-xl sm:max-w-2xl
                text-sm sm:text-base lg:text-lg
                leading-relaxed text-neutral-600
              "
                >
                  Certifications that validate my technical expertise and
                  continuous learning journey in modern web development and
                  software engineering.
                </p>
              </div>

              {/* Certification Grid */}
              {loading ? (
                <SectionLoader text="Loading Certifications..." />
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                  {certifications.map((cert, index) => {
                    const Icon =
                      LucideIcons[cert.icon] || LucideIcons.HelpCircle;

                    return (
                      <article
                        key={index}
                        aria-label={`Certificate: ${cert.name}`}
                        className={`
                      group relative overflow-hidden

                      rounded-2xl sm:rounded-3xl

                      border border-neutral-200/70

                      

                      p-6

                      shadow-sm

                      transition-all duration-500
                      hover:-translate-y-2
                      hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]

                      ${cert.color}
                    `}
                      >
                        {/* Top Border */}
                        <div className="absolute inset-x-0 top-0 h-[3px] scale-x-0 origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

                        {/* Glow */}
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                        </div>

                        {/* Top */}
                        <div className="relative z-10 flex items-start justify-between mb-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
                            <Icon className="h-5 w-5" />
                          </div>

                          <span className="text-xs sm:text-sm font-medium text-neutral-500">
                            {cert.date}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-lg sm:text-xl font-semibold leading-snug text-neutral-900">
                            {cert.name}
                          </h3>

                          <p className="mt-2 text-sm sm:text-base text-neutral-600">
                            {cert.issuer}
                          </p>
                        </div>

                        {/* Footer */}
                        <div className="relative z-10 mt-8 flex items-center justify-between gap-4">
                          {/* Verified */}
                          <div className="flex items-center gap-2 text-sm text-neutral-600">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="font-medium">Verified</span>
                          </div>

                          {/* Button */}
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="
                          rounded-xl

                          border-neutral-300/80

                          bg-white/80 backdrop-blur-xl

                          px-4 py-2

                          text-neutral-700

                          transition-all duration-300

                          hover:border-blue-600
                          hover:bg-blue-600
                          hover:text-white
                        "
                          >
                            <Link
                              href={cert.pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                              aria-label={`View ${cert.name} certificate`}
                              className="flex items-center gap-2"
                            >
                              <Download className="h-4 w-4" />
                              View
                            </Link>
                          </Button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {/* Bottom Verification Note */}
              <div className="mt-10 sm:mt-12 flex justify-center">
                <div
                  className="
                relative inline-flex items-center gap-3

                rounded-2xl

                border border-neutral-200/70

                bg-white/80 backdrop-blur-xl

                px-5 sm:px-6 py-3 sm:py-4

                shadow-[0_10px_35px_rgba(37,99,235,0.10)]

                text-sm sm:text-base text-neutral-700
              "
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <LucideIcons.Shield
                      className="h-5 w-5 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="font-medium">
                    All certifications are{" "}
                    <span className="font-semibold text-blue-600">
                      verified and up-to-date
                    </span>
                  </p>

                  {/* Bottom Accent */}
                  <span className="absolute inset-x-6 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 opacity-70" />
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
