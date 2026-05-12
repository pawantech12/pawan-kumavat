"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionLoader from "./section-loader";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/projects");

        setProjects(res.data);
      } catch (error) {
        console.log("Errror while fetching project data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove special characters
      .replace(/\s+/g, "-") // replace spaces with -
      .replace(/-+/g, "-"); // remove duplicate -
  };
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Section showcasing recent featured web development projects"
    >
      {/* Header */}
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
            Portfolio
          </span>
        </div>

        {/* Heading */}
        <h2
          className="mt-5 sm:mt-7 text-2xl sm:text-3xl lg:text-5xl
      font-bold tracking-tight leading-[1.1] text-neutral-900"
        >
          Featured Digital
          <br />
          <span
            className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500
        bg-clip-text text-transparent"
          >
            Projects & Case Studies
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
        <p className="mx-auto mt-5 sm:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-600">
          A showcase of modern, scalable, and performance-focused web
          applications crafted using React, Next.js, Node.js, and MongoDB with
          clean UI and smooth UX.
        </p>
      </div>

      {/* Grid */}
      {loading ? (
        <SectionLoader text="Loading Projects..." />
      ) : (
        <div
          className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-5 sm:gap-6 lg:gap-8
        mb-10 sm:mb-12
      "
        >
          {projects.slice(0, 3).map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden
          rounded-3xl
          border border-neutral-200/70
          bg-white/80 backdrop-blur-2xl
          shadow-[0_8px_30px_rgb(0,0,0,0.04)]
          transition-all duration-500
          hover:-translate-y-2
          hover:shadow-[0_20px_60px_rgb(59,130,246,0.12)]"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-24 -right-24 h-44 sm:h-52 w-44 sm:w-52 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-44 sm:h-52 w-44 sm:w-52 rounded-full bg-indigo-500/10 blur-3xl" />
              </div>

              {/* Image */}
              <div className="relative overflow-hidden scroll-on-hover rounded-t-3xl">
                <div className="scroll-on-hover-inner">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={0}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>

              {/* Content */}
              <div className="relative p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {project.description.length > 120
                    ? project.description.slice(0, 120) + "..."
                    : project.description}
                </p>

                {/* Tech */}
                {project.tech && (
                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="mt-5 sm:mt-6 flex gap-3">
                  {project.github && (
                    <Button
                      variant="outline"
                      asChild
                      className="group/button flex-1 rounded-2xl py-4 sm:py-5 border border-neutral-300 bg-white/80 backdrop-blur-xl text-neutral-800 hover:border-blue-500 hover:text-blue-600 hover:-translate-y-1 transition"
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </Link>
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      asChild
                      className="group/button flex-1 rounded-2xl py-4 sm:py-5 bg-neutral-900 text-white hover:-translate-y-1 transition"
                    >
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="flex items-center justify-center gap-2 text-sm sm:text-base"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 h-20 w-20 sm:h-24 sm:w-24 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
            </Card>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="text-center">
        <Button
          size="lg"
          className="group relative isolate overflow-hidden rounded-2xl px-6 sm:px-7 py-5 sm:py-6 bg-neutral-900 text-white font-semibold border border-white/10 shadow-lg hover:-translate-y-1 transition"
        >
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition" />

          <span className="absolute inset-0 -z-20 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />

          <span className="absolute -left-full top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[140%] transition-all duration-1000" />

          <Link
            href="/projects"
            className="relative z-10 flex items-center gap-3 text-sm sm:text-base"
          >
            View All Projects
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
