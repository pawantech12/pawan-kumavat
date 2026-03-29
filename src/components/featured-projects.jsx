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
      )}

      <div className="text-center">
        <Button
          size="lg"
          className="
  group relative overflow-hidden
  rounded-xl px-6 py-6
  font-semibold text-white
  bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
  shadow-[0_12px_35px_rgba(79,70,229,0.35)]
  hover:shadow-[0_18px_55px_rgba(79,70,229,0.45)]
  transition-all duration-300
  hover:-translate-y-[2px]
  "
        >
          <Link
            href="/projects"
            aria-label="View all web development projects"
            className="relative z-10 flex items-center gap-3"
          >
            <span className="tracking-tight">View All Projects</span>

            <span
              className="
      flex items-center justify-center
      w-7 h-7 rounded-lg
      bg-white/20
      transition-all duration-300
      group-hover:bg-white/30
      "
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* subtle gradient sweep animation */}
          <span
            className="
    pointer-events-none absolute inset-0
    bg-gradient-to-r from-transparent via-white/20 to-transparent
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
    "
          />
        </Button>
      </div>
    </section>
  );
}
