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
      <div className="text-center mb-12 space-y-6 relative">
        {/* Terminal-style background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl -z-10 rounded-lg"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-mono relative inline-block">
          {/* Terminal cursor */}
          <span className="before:content-['>_'] before:text-blue-500 animate-pulse mr-2"></span>
          {/* Main title */}
          My Projects
          {/* Gradient accent text */}
          <span className="text-blue-600 ml-2">Showcase</span>
          {/* Animated underline */}
          <span className="absolute -bottom-1 max-sm:left-1/2 max-sm:-translate-x-1/2 right-0 w-2/5 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </h2>

        {/* Subtext / Description */}
        <p className="relative text-lg text-gray-100 max-w-2xl mx-auto font-mono bg-gray-900/80 dark:bg-gray-800/70 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg overflow-hidden">
          {/* Neon glow top bar */}
          <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl"></span>

          {/* Terminal-style content */}
          <span className="block before:content-['>_'] before:text-blue-400 before:mr-2">
            Here are some of my recent projects that showcase my skills and
            experience in full-stack development.
          </span>
        </p>
      </div>

      {loading ? (
        <SectionLoader text="Loading Projects..." />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, 3).map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-500"
            >
              {/* Image Section with hover zoom effect */}
              <div className="relative overflow-hidden scroll-on-hover rounded-t-lg">
                <div className="scroll-on-hover-inner">
                  {" "}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={0} // optional, Next.js will infer it
                    className="w-full object-cover"
                  />{" "}
                </div>
                {/* Top gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-t-3xl pointer-events-none" />
              </div>

              {/* Header */}
              <CardHeader className="px-6 pt-6">
                <CardTitle
                  className="
    relative text-2xl font-mono font-semibold
    text-gray-900 dark:text-white
    tracking-tight
    transition-all duration-300
    group-hover:text-transparent
    group-hover:bg-clip-text
    group-hover:bg-gradient-to-r
    group-hover:from-blue-500
    group-hover:to-purple-600
  "
                >
                  <span className="mr-2 text-blue-500 opacity-80">{">_"}</span>
                  {project.title}
                </CardTitle>

                <CardDescription
                  className="
    relative mt-4
    font-mono text-sm leading-relaxed
    text-gray-800 dark:text-gray-200
    bg-gradient-to-br from-gray-50/90 to-gray-100/60
    dark:from-gray-900/80 dark:to-gray-950/60
    rounded-xl p-5
    border border-gray-200/60 dark:border-gray-700/60
    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    overflow-hidden
  "
                >
                  {/* Fake code editor header */}
                  <div className="relative flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="tracking-wide">
                        // project.description.ts
                      </span>
                    </div>

                    {/* File status */}
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      compiled
                    </span>
                  </div>

                  {/* Description content */}
                  <p className="relative z-10 text-sm leading-relaxed">
                    <span className="block">
                      <span className="text-blue-500 mr-2">{">"}</span>
                      <span className="text-green-600 dark:text-green-400">
                        const
                      </span>{" "}
                      <span className="text-purple-600 dark:text-purple-400">
                        summary
                      </span>{" "}
                      <span className="text-gray-400">=</span>{" "}
                      <span className="text-gray-800 dark:text-gray-200">
                        {project.description.length > 120
                          ? project.description.slice(0, 120) + "..."
                          : project.description}
                      </span>
                    </span>
                  </p>

                  {/* Subtle glow line */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60"></span>
                </CardDescription>
              </CardHeader>

              {/* Content */}
              <CardContent className="px-6 pb-6 space-y-4">
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      variant="outline"
                      asChild
                      className="
          group flex-1 relative overflow-hidden
          border border-blue-500/60
          bg-white/60 backdrop-blur
          text-blue-600 font-mono
          hover:text-blue-700
          transition-all duration-300
          hover:-translate-y-0.5
          hover:shadow-[0_0_10px_rgba(59,130,246,0.35)]
        "
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code of ${project.title} on GitHub`}
                        className="relative z-10 flex items-center justify-center gap-2"
                      >
                        <span className="text-blue-500">{">_"}</span>
                        <Github className="h-4 w-4" />
                        <span className="tracking-wide">git&nbsp;code</span>
                      </Link>
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      asChild
                      className="
          group flex-1 relative overflow-hidden
          bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
          text-white font-mono
          shadow-md
          transition-all duration-300
          hover:-translate-y-0.5
          hover:shadow-[0_0_10px_rgba(99,102,241,0.55)]
        "
                    >
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                        className="relative z-10 flex items-center justify-center gap-2"
                      >
                        <span className="opacity-90">{">_"}</span>
                        <ExternalLink className="h-4 w-4" />
                        <span className="tracking-wide">run&nbsp;demo</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>

              {/* Bottom Gradient Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500" />
            </Card>
          ))}
        </div>
      )}

      <div className="text-center">
        <Button
          size="lg"
          asChild
          className="
      relative overflow-hidden px-5 py-5 rounded-xl
      font-mono font-semibold text-white
      bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
      shadow-[0_10px_30px_rgba(99,102,241,0.35)]
      hover:shadow-[0_15px_45px_rgba(99,102,241,0.55)]
      transition-all duration-300
      group
    "
        >
          <Link
            href="/projects"
            aria-label="View all web development projects"
            className="relative z-10 flex items-center gap-3"
          >
            {/* Terminal prefix */}
            <span className="text-green-300 font-mono animate-pulse">
              {">_"}
            </span>

            <span className="tracking-wide">View All Projects</span>

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
