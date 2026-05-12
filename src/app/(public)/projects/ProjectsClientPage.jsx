"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ExternalLink, Github, Info, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import SectionLoader from "@/components/section-loader";

export default function ProjectsClientPage() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/projects");

        setProjects(res.data);
      } catch (error) {
        console.log("Errror while fetching projects data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProjects = useMemo(() => {
    if (!searchTerm) return projects;

    return projects.filter((project) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower)
      );
    });
  }, [searchTerm, projects]);

  return (
    <main
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16"
      role="main"
      aria-label="Project showcase page"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="relative mb-14 sm:mb-16 lg:mb-20 text-center">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div
              className="
            h-[160px] sm:h-[200px] lg:h-[240px]
            w-[280px] sm:w-[420px] lg:w-[520px]
            rounded-full
            bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10
            blur-3xl
          "
            />
          </div>

          {/* Top Badge */}
          <div
            className="
          inline-flex items-center gap-2 sm:gap-2.5
          rounded-full border border-neutral-200/70
          bg-white/75 backdrop-blur-xl
          px-4 sm:px-5 py-1.5 sm:py-2
          shadow-sm
        "
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
              <span className="relative inline-flex h-full w-full rounded-full bg-blue-600" />
            </span>

            <span
              className="
            text-[10px] sm:text-[11px]
            font-semibold uppercase
            tracking-[0.2em]
            text-blue-600
          "
            >
              Portfolio
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
          mt-5 sm:mt-7
          text-3xl sm:text-4xl lg:text-6xl
          font-bold tracking-tight leading-[1.05]
          text-neutral-900
        "
          >
            Creative Digital
            <br />
            <span
              className="
            bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500
            bg-clip-text text-transparent
          "
            >
              Projects & Experiences
            </span>
          </h1>

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
            className="
          mx-auto mt-5 sm:mt-6
          max-w-xl sm:max-w-2xl
          text-sm sm:text-base lg:text-lg
          leading-relaxed
          text-neutral-600
        "
          >
            A showcase of modern, scalable, and high-performance web
            applications crafted using React, Next.js, Node.js, and MongoDB with
            clean UI and seamless user experiences.
          </p>
        </div>

        {/* Search Bar */}
        <section
          aria-label="Search projects"
          className="relative mb-10 sm:mb-12"
        >
          {/* Glow */}
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="h-24 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <div
            className="
          group relative overflow-hidden
          rounded-2xl
          border border-neutral-200/70
          bg-white/75 backdrop-blur-2xl
          shadow-sm
          transition-all duration-300
          hover:shadow-lg
          focus-within:border-blue-500
        "
          >
            {/* Top Gradient */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-80" />

            <div className="relative flex items-center">
              <Search
                className="absolute left-4 h-5 w-5 text-neutral-400"
                aria-hidden="true"
              />

              <Input
                type="text"
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search projects"
                className="
              h-14 sm:h-16
              w-full
              border-none
              bg-transparent
              pl-12 sm:pl-14
              pr-4
              text-sm sm:text-base
              text-neutral-800
              placeholder:text-neutral-400
              focus-visible:ring-0
              focus-visible:outline-none
            "
              />
            </div>
          </div>
        </section>

        {/* Search Results */}
        {searchTerm && (
          <div
            className="relative flex justify-center mb-10"
            aria-live="polite"
          >
            <div
              className="
            inline-flex items-center gap-3

            rounded-2xl
            border border-neutral-200/70

            bg-white/75 backdrop-blur-xl

            px-5 sm:px-6 py-3

            shadow-sm
          "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
              </span>

              <p className="text-sm sm:text-base text-neutral-700">
                Showing{" "}
                <span className="font-semibold text-blue-600">
                  {filteredProjects.length}
                </span>{" "}
                project{filteredProjects.length !== 1 ? "s" : ""}
                {" for "}
                <span className="font-medium text-indigo-600">
                  "{searchTerm}"
                </span>
              </p>
            </div>
          </div>
        )}

        {/* No Results */}
        {searchTerm && filteredProjects.length === 0 && (
          <div
            className="
          relative overflow-hidden
          rounded-3xl
          border border-neutral-200/70
          bg-white/80 backdrop-blur-2xl

          px-6 sm:px-10 py-14 sm:py-16
          text-center

          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        "
            role="alert"
          >
            {/* Glow */}
            <div className="absolute inset-0 -z-10 flex justify-center">
              <div className="h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            {/* Icon */}
            <div
              className="
            mx-auto mb-6
            flex h-16 w-16 items-center justify-center
            rounded-2xl
            border border-neutral-200/70
            bg-white
            shadow-sm
          "
            >
              <Info className="h-7 w-7 text-blue-600" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
              No Projects Found
            </h3>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-md text-sm sm:text-base leading-relaxed text-neutral-600">
              No matching projects were found. Try searching with different
              keywords or clear the search to explore all projects.
            </p>

            {/* Button */}
            <div className="mt-8">
              <Button
                onClick={() => setSearchTerm("")}
                className="
              group relative isolate overflow-hidden

              rounded-2xl px-6 py-6

              bg-neutral-900
              text-white font-semibold

              transition-all duration-500
              hover:-translate-y-1
            "
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="relative flex items-center gap-2">
                  Show All Projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {loading ? (
          <SectionLoader text="Loading Projects..." />
        ) : (
          <section aria-label="List of filtered projects" className="mb-16">
            <div
              className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3

            gap-5 sm:gap-6 lg:gap-8
          "
            >
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="
                group relative overflow-hidden

                rounded-3xl

                border border-neutral-200/70

                bg-white/80 backdrop-blur-2xl

                shadow-[0_8px_30px_rgb(0,0,0,0.04)]

                transition-all duration-500

                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgb(59,130,246,0.12)]
              "
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -top-24 -right-24 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-indigo-500/10 blur-3xl" />
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden scroll-on-hover rounded-t-3xl">
                    <div className="scroll-on-hover-inner">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={0}
                        className="
                      w-full object-cover
                      transition-transform duration-700
                      group-hover:scale-[1.03]
                    "
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent pointer-events-none" />

                    {/* Top Accent */}
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  </div>

                  {/* Content */}
                  <div className="relative p-5 sm:p-6">
                    {/* Title */}
                    <h3
                      className="
                    text-lg sm:text-xl
                    font-bold tracking-tight
                    text-neutral-900

                    transition-colors duration-300
                    group-hover:text-blue-600
                  "
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {project.description.length > 120
                        ? project.description.slice(0, 120) + "..."
                        : project.description}
                    </p>

                    {/* Tech Stack */}
                    {project.tech && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="
                          rounded-full
                          border border-neutral-200

                          bg-neutral-50

                          px-2.5 py-1

                          text-[11px] sm:text-xs
                          text-neutral-700

                          transition-all duration-300

                          hover:border-blue-200
                          hover:bg-blue-50
                          hover:text-blue-600
                        "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="mt-6 flex gap-3">
                      {/* GitHub */}
                      {project.github && (
                        <Button
                          variant="outline"
                          asChild
                          className="
                        group/button flex-1

                        rounded-2xl

                        border border-neutral-300/80

                        bg-white/80 backdrop-blur-xl

                        py-5

                        text-neutral-800

                        transition-all duration-300

                        hover:-translate-y-1
                        hover:border-blue-500
                        hover:text-blue-600
                      "
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-sm sm:text-base"
                          >
                            <Github className="h-4 w-4" />
                            Source
                          </Link>
                        </Button>
                      )}

                      {/* Live Demo */}
                      {project.demo && (
                        <Button
                          asChild
                          className="
                        group/button relative isolate overflow-hidden

                        flex-1

                        rounded-2xl

                        border border-white/10

                        bg-neutral-900

                        py-5

                        text-white

                        transition-all duration-500

                        hover:-translate-y-1
                      "
                        >
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base"
                          >
                            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Bottom Glow */}
                  <div className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
