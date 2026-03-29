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
          </section>
        )}

        {/* Certifications */}
        <section aria-label="Certifications and Achievements">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="text-center  p-10 relative">
                {/* Background Glow */}
                <div className="absolute inset-0 flex justify-center -z-10">
                  <div className="w-[420px] h-[220px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
                </div>

                {/* Small Label */}
                <span className="inline-block mb-4 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
                  Certifications
                </span>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                  Certifications &{" "}
                  <span className="text-blue-600">Achievements</span>
                </h2>

                {/* Divider */}
                <div className="flex justify-center mt-4">
                  <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>
                </div>

                {/* Description */}
                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Professional certifications that validate my technical
                  expertise and commitment to continuous learning in modern web
                  development and software engineering.
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
    group relative p-6 rounded-2xl border border-neutral-200
     backdrop-blur-xl
    transition-all duration-300
    hover:-translate-y-2 hover:shadow-xl
    ${cert.color} cursor-pointer
  `}
                          aria-label={`Certificate: ${cert.name} by ${cert.issuer}`}
                        >
                          {/* Top Section */}
                          <div className="flex items-start justify-between mb-5">
                            {/* Icon */}
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl ">
                              {Icon && <Icon className="h-5 w-5" />}
                            </div>

                            {/* Date */}
                            <span className="text-sm text-neutral-500 font-medium">
                              {cert.date}
                            </span>
                          </div>

                          {/* Certificate Title */}
                          <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 leading-snug mb-1">
                            {cert.name}
                          </h3>

                          {/* Issuer */}
                          <p className="text-sm sm:text-base text-neutral-600 mb-5">
                            {cert.issuer}
                          </p>

                          {/* Footer */}
                          <div className="flex items-center justify-between">
                            {/* Verified Status */}
                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              <span className="font-medium">Verified</span>
                            </div>

                            {/* Download Button */}
                            <Button
                              size="sm"
                              variant="outline"
                              className="
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        flex items-center gap-2
        border-neutral-300
        text-neutral-700
        hover:bg-blue-600 hover:text-white hover:border-blue-600
        px-3 py-1.5 rounded-lg
      "
                              asChild
                            >
                              <Link
                                href={cert.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                aria-label={`Download ${cert.name} certificate`}
                              >
                                <Download className="h-4 w-4" />
                                View
                              </Link>
                            </Button>
                          </div>

                          {/* Bottom Accent Line */}
                          <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="mt-10 flex justify-center">
                  <div
                    className="
      relative flex items-center gap-3
      px-6 py-4
      rounded-2xl
      border border-blue-100
      bg-white/70 backdrop-blur-xl
      shadow-[0_10px_35px_rgba(37,99,235,0.12)]
      hover:shadow-[0_15px_45px_rgba(37,99,235,0.18)]
      transition-all duration-300
      group
    "
                    aria-label="Certification verification note"
                  >
                    {/* Icon */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                      <LucideIcons.Shield
                        className="h-5 w-5 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <p className="text-sm font-medium text-gray-700">
                      All certifications are{" "}
                      <span className="text-blue-600 font-semibold">
                        verified and up-to-date
                      </span>
                    </p>

                    {/* subtle accent line */}
                    <span className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60 rounded-full"></span>
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
