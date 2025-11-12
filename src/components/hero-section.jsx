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
              className="relative inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 text-blue-700 font-semibold shadow-sm hover:shadow-md hover:from-blue-100 hover:via-indigo-100 hover:to-purple-100 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-5 rounded-full pointer-events-none"></span>
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
            <Button
              size="lg"
              asChild
              className="relative overflow-hidden rounded-lg px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <Link
                href="/projects"
                className="relative z-10 flex items-center gap-2"
              >
                View My Work <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            {/* Outline Button: Download Resume */}
            <Button
              size="lg"
              variant="outline"
              asChild
              className="relative rounded-lg px-10 py-5 border-2 border-blue-600 text-blue-600 font-semibold hover:border-blue-700 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download={true}
                className="flex items-center gap-2"
              >
                <Download className="h-5 w-5" /> Download Resume
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
