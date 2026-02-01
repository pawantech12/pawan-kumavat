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
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      role="main"
      aria-label="Project showcase page"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header
          aria-label="Projects introduction"
          className="relative text-center mb-12 space-y-6"
        >
          {/* Terminal-style gradient background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl -z-10 rounded-lg"></div>

          {/* Main heading with terminal prefix */}
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 font-mono relative inline-block">
            <span className="before:content-['>_'] before:text-blue-500 animate-pulse"></span>
            My Projects
            <span className="text-blue-600 ml-2">Showcase</span>
            {/* Animated underline */}
            <span className="absolute -bottom-1 max-sm:left-1/2 max-sm:-translate-x-1/2 right-0 w-2/5 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h1>

          {/* Subtext with terminal/code block vibe */}
          <p className="relative text-lg text-gray-100 max-w-3xl mx-auto font-mono bg-gray-900/80 dark:bg-gray-800/70 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl"></span>

            <span className="block before:content-['>_'] before:text-blue-400 before:mr-2">
              Here's a curated collection of my projects, highlighting
              full-stack development, modern UI/UX, and scalable web
              applications.
            </span>
          </p>
        </header>

        {/* Search Bar */}
        <section aria-label="Search projects" className="relative mb-8">
          <div className="relative w-full  mx-auto">
            {/* Search Icon */}
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 dark:text-blue-400 h-5 w-5 pointer-events-none"
              aria-hidden="true"
            />

            {/* Input Field */}
            <Input
              type="text"
              placeholder=">_ Search projects by name, description, or tech..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search input"
              className="
        pl-12 pr-4 py-3 h-12 w-full rounded-xl
        bg-gray-50 dark:bg-slate-900
        border border-gray-300 dark:border-gray-700
        shadow-inner focus:shadow-[0_0_10px_rgba(99,102,241,0.3)]
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30
        placeholder-gray-400 dark:placeholder-gray-500
        font-mono text-gray-900 dark:text-gray-100
        transition-all duration-300
      "
            />

            {/* Optional subtle animated underline */}
            <span className="absolute bottom-0 left-0 h-1 w-0 group-focus:w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500"></span>
          </div>
        </section>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="text-center mb-8 relative" aria-live="polite">
            {/* Background gradient glow */}
            <div className="absolute inset-0 mx-auto w-2/3 h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-10 rounded-xl blur-xl -z-10"></div>

            <p className="font-mono text-gray-700 dark:text-gray-300 text-sm sm:text-base inline-flex items-center justify-center gap-2">
              {/* Terminal prefix */}
              <span className="text-indigo-400 animate-pulse">{">_"}</span>
              Found{" "}
              <span className="font-semibold text-blue-500">
                {filteredProjects.length}
              </span>{" "}
              project{filteredProjects.length !== 1 ? "s" : ""} matching{" "}
              <span className="font-semibold text-indigo-500">
                &quot;{searchTerm}&quot;
              </span>
            </p>
          </div>
        )}

        {/* No Results */}
        {searchTerm && filteredProjects.length === 0 && (
          <div
            className="relative text-center py-16 px-8 sm:px-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800"
            role="alert"
          >
            {/* Top gradient accent bar */}
            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-3xl" />

            {/* Decorative Icon */}
            <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900 dark:via-indigo-950 dark:to-purple-900 rounded-full shadow-inner">
              <Info className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>

            {/* Alert Text */}
            <p className="text-gray-800 bg-white p-4 dark:text-gray-200 text-lg sm:text-xl font-mono mb-8 border-l-4 border-blue-500 pl-4">
              <span className="text-blue-600">&gt;_</span> No projects found
              matching your search.
            </p>

            {/* Clear Search Button */}
            <Button
              variant="outline"
              onClick={() => setSearchTerm("")}
              className="relative group mx-auto font-mono text-sm sm:text-base px-10 py-5 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              aria-label="Clear search and show all projects"
            >
              <span className="text-blue-600 group-hover:text-white">
                &gt;_
              </span>
              Clear Search
              <ArrowRight className="h-5 w-5" />
            </Button>

            {/* Footer hint */}
            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 font-mono">
              Tip: Try different keywords to discover more projects
            </p>
          </div>
        )}

        {/* Featured Projects */}
        {loading ? (
          <SectionLoader text="Loading Projects..." />
        ) : (
          <section aria-label="List of filtered projects" className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
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
                      <span className="mr-2 text-blue-500 opacity-80">
                        {">_"}
                      </span>
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
          </section>
        )}
      </div>
    </main>
  );
}
