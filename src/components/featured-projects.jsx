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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            className="group hover:shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden rounded-t-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-gray-600 text-base">
                {project.description.length > 100
                  ? project.description.slice(0, 100) + "..."
                  : project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                {project.github && (
                  <Button
                    variant="outline"
                    asChild
                    className="flex-1 bg-transparent"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild className="flex-1">
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="outline" asChild>
          <Link href="/projects">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
