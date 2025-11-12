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
import projects from "@/data/projectdata";

export default function FeaturedProjects() {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Section showcasing recent featured web development projects"
    >
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          My Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience in full-stack development.
        </p>
      </div>

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

      <div className="text-center">
        <Button
          size="lg"
          asChild
          className="relative overflow-hidden rounded-lg px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <Link
            href="/projects"
            aria-label="View all web development projects"
            className="relative z-10 flex items-center gap-2"
          >
            View All Projects <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
