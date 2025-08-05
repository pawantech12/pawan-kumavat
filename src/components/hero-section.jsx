"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"
      aria-label="Hero section introducing Pawan Kumavat, full stack web developer"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800 hover:bg-blue-200"
            >
              Available for new opportunities
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Pawan Kumavat
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 font-medium">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Backend Developer",
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "React Developer",
                  "Next.js Developer",
                  "Web Developer",
                  "Software Developer",
                  "UI/UX Developer",
                  "E-commerce Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              I&apos;m a passionate full stack web developer specializing in
              building fast, scalable, and responsive web applications using
              React, Next.js, Node.js, MongoDB, TailwindCSS, and modern
              JavaScript frameworks. I help businesses grow by creating
              SEO-friendly and performance-optimized websites.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download={true}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/pawantech12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pawan-kumavat-11b105297/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
            <Image
              src="/profile.png"
              alt="Pawan Kumavat - Full Stack Developer"
              width={400}
              height={400}
              className="relative rounded-full border-4 border-white shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
