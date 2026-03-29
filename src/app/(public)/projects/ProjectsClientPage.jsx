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
        <div className="text-center mb-16 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 flex justify-center -z-10">
            <div className="w-[420px] h-[220px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
          </div>

          {/* Small Label */}
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
            Portfolio
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            My <span className="text-blue-600">Projects</span>
          </h2>

          {/* Divider */}
          <div className="flex justify-center mt-4">
            <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A collection of projects that demonstrate my expertise in building
            modern, scalable, and performance-focused web applications using
            technologies like React, Next.js, Node.js, and MongoDB.
          </p>
        </div>

        {/* Search Bar */}
        <section aria-label="Search projects" className="relative mb-12">
          <div className="relative  group">
            {/* Glass background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Search Input Container */}
            <div className="relative flex items-center rounded-2xl border border-neutral-200/70 bg-white/70 backdrop-blur-xl shadow-sm transition-all duration-300 group-hover:shadow-md focus-within:border-blue-500">
              {/* Search Icon */}
              <Search
                className="absolute left-4 text-neutral-500 h-5 w-5 pointer-events-none"
                aria-hidden="true"
              />

              {/* Input Field */}
              <Input
                type="text"
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search projects"
                className="
          pl-12 pr-4 py-3 h-12 w-full
          rounded-2xl border-none
          bg-transparent
          text-neutral-800
          placeholder:text-neutral-400
          focus-visible:ring-0 focus-visible:outline-none
        "
              />
            </div>
          </div>
        </section>

        {/* Search Results Info */}
        {searchTerm && (
          <div
            className="relative flex justify-center mb-10"
            aria-live="polite"
          >
            {/* Result Card */}
            <div
              className="relative inline-flex items-center gap-3
            rounded-xl border border-neutral-200/60
            bg-white/70 backdrop-blur-xl
            px-6 py-3
            text-sm sm:text-base
            text-neutral-700
            "
            >
              {/* Status Dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600"></span>
              </span>

              {/* Text */}
              <p className="leading-none">
                Showing{" "}
                <span className="font-semibold text-blue-600">
                  {filteredProjects.length}
                </span>{" "}
                project{filteredProjects.length !== 1 ? "s" : ""}
                {searchTerm && (
                  <>
                    {" "}
                    for{" "}
                    <span className="font-medium text-indigo-600">
                      "{searchTerm}"
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        )}

        {/* No Results */}
        {searchTerm && filteredProjects.length === 0 && (
          <div
            className="relative text-center py-16 px-8 sm:px-12
          bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
          dark:from-neutral-900 dark:via-neutral-950 dark:to-indigo-950
          rounded-3xl border border-neutral-200 dark:border-neutral-800
          shadow-sm"
            role="alert"
          >
            {/* soft background glow */}
            <div className="pointer-events-none absolute inset-0 flex justify-center">
              <div className="h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
            </div>

            {/* Icon */}
            <div
              className="relative mx-auto mb-6 w-16 h-16 flex items-center justify-center
          rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm"
            >
              <Info className="w-7 h-7 text-blue-600" />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white">
              No projects found
            </h3>

            {/* Description */}
            <p className="mt-3 max-w-md mx-auto text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
              We couldn't find any projects matching your search. Try using
              different keywords or clear the search to explore all projects.
            </p>

            {/* Button */}
            <div className="mt-8">
              <Button
                onClick={() => setSearchTerm("")}
                className="group rounded-xl px-6 py-3
              bg-blue-600 text-white
              hover:bg-blue-700
              transition-all duration-300"
                aria-label="Clear search and show all projects"
              >
                <span className="flex items-center gap-2">
                  Show All Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        )}

        {/* Featured Projects */}
        {loading ? (
          <SectionLoader text="Loading Projects..." />
        ) : (
          <section aria-label="List of filtered projects" className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {project.description.length > 120
                        ? project.description.slice(0, 120) + "..."
                        : project.description}
                    </p>

                    {/* Tech Stack (optional if you have project.tech) */}
                    {project.tech && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                      {/* GitHub Button */}
                      {project.github && (
                        <Button
                          variant="outline"
                          asChild
                          className="group/button relative flex-1 overflow-hidden
                      border-neutral-300 bg-white
                      hover:border-blue-600 hover:text-blue-600
                      transition-all duration-300"
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 font-medium"
                          >
                            {/* subtle hover background */}
                            <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />

                            <Github className="relative h-4 w-4 transition-transform group-hover/button:-translate-y-0.5" />
                            <span className="relative">Source Code</span>
                          </Link>
                        </Button>
                      )}

                      {/* Live Demo Button */}
                      {project.demo && (
                        <Button
                          asChild
                          className="group/button relative flex-1 overflow-hidden
                      bg-gradient-to-r from-blue-600 to-indigo-600
                      hover:from-blue-700 hover:to-indigo-700
                      text-white transition-all duration-300"
                        >
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 font-medium"
                          >
                            {/* gradient shine effect */}
                            <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/button:left-full transition-all duration-700" />

                            <ExternalLink className="relative h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover:-translate-y-0.5" />
                            <span className="relative">Live Demo</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
