"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Info, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projectdata";

export default function ProjectsClientPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    if (!searchTerm) return projects;

    return projects.filter((project) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower)
      );
    });
  }, [searchTerm]);

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
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a collection of projects I've worked on, showcasing my skills
            in full-stack development, UI/UX design, and modern web
            technologies.
          </p>
        </header>

        {/* Search Bar */}
        <section aria-label="Search projects" className="relative mb-8 ">
          <div className="relative">
            {/* Search Icon */}
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5 pointer-events-none"
              aria-hidden="true"
            />

            {/* Input Field */}
            <Input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search input"
              className="pl-12 pr-4 py-3 h-11 w-full rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
            />
          </div>
        </section>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="text-center mb-8" aria-live="polite">
            <p className="text-gray-600">
              Found{" "}
              <span className="font-semibold text-blue-500">
                {filteredProjects.length}
              </span>{" "}
              project
              {filteredProjects.length !== 1 ? "s" : ""} matching
              <span className="font-semibold text-indigo-500">
                "{searchTerm}"
              </span>
            </p>
          </div>
        )}

        {/* No Results */}
        {searchTerm && filteredProjects.length === 0 && (
          <div
            className="relative text-center py-16 px-6 sm:px-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-900 rounded-3xl shadow-md border border-slate-200 dark:border-slate-800"
            role="alert"
          >
            {/* Decorative Icon */}
            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
              <Info className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>

            {/* Alert Text */}
            <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl font-medium mb-6">
              No projects found matching your search.
            </p>

            {/* Clear Search Button */}
            <Button
              variant="outline"
              onClick={() => setSearchTerm("")}
              className="rounded-full px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Clear search and show all projects"
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Featured Projects */}
        {filteredProjects.length > 0 && (
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
                    <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-base">
                      {project.description.length > 120
                        ? project.description.slice(0, 120) + "..."
                        : project.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="px-6 pb-6 space-y-4">
                    <div className="flex gap-3">
                      {project.github && (
                        <Button
                          variant="outline"
                          asChild
                          className="flex-1 border border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300"
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code of ${project.title} on GitHub`}
                            className="flex items-center justify-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          asChild
                          className="flex-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
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
