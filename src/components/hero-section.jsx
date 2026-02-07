"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [stage, setStage] = useState("terminal");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (stage === "terminal") {
      const timer = setTimeout(() => setStage("loading"), 2000);
      return () => clearTimeout(timer);
    }

    if (stage === "loading") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStage("profile"), 500);
            return 100;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [stage]);
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"
      aria-label="Hero section introducing Pawan Kumavat, full stack web developer"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            {/* Developer-style Neon Terminal Badge */}
            <Badge
              variant="secondary"
              className="relative inline-flex items-center px-5 py-2 rounded-xl font-mono text-sm text-white 
             bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
             shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            >
              {/* Glowing animated background effect */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 
                   opacity-30 animate-[pulse_2s_ease-in-out_infinite] rounded-xl pointer-events-none"
              ></span>
              <span className="relative z-10">
                $ Available for new opportunities
              </span>
            </Badge>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-mono">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Pawan Kumavat
              </span>
              <span className="inline-block animate-pulse ml-1 text-blue-600">
                |
              </span>
            </h1>

            {/* Typewriter Job Titles */}
            <h2 className="text-xl sm:text-2xl text-gray-600 font-medium font-mono">
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
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>

            {/* Description in code block style */}
            <div className="relative text-gray-100 bg-gray-900/90 dark:bg-gray-800/90 rounded-xl p-6 font-mono max-w-2xl shadow-lg border-l-4 border-blue-500 overflow-hidden">
              {/* Optional terminal header for dev-style vibe */}
              <div className="flex items-center mb-4 space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="ml-2 text-sm text-gray-400 font-mono">
                  ~/projects/portfolio
                </span>
              </div>

              {/* Terminal-style content */}
              <code className="block leading-relaxed text-sm">
                <span className="block before:content-['>_'] before:text-blue-400 before:mr-2">
                  I'm a passionate full stack developer building fast, scalable,
                  and responsive web apps.
                </span>

                <span className="block mt-2 before:content-['>_'] before:text-blue-400 before:mr-2">
                  Tech stack:
                  <span className="text-green-400 font-bold ml-1">
                    React, Next.js, Node.js, MongoDB, TailwindCSS
                  </span>
                </span>

                <span className="block mt-2 before:content-['>_'] before:text-blue-400 before:mr-2">
                  I craft SEO-friendly, performance-optimized websites to help
                  businesses grow.
                </span>

                {/* Optional blinking cursor for dynamic effect */}
                <span className="inline-block w-1 h-5 bg-blue-400 animate-blink ml-1 align-bottom"></span>
              </code>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              asChild
              className="relative overflow-hidden rounded-lg px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-mono font-semibold shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <Link
                href="/projects"
                className="relative z-10 flex items-center gap-2"
              >
                View My Work <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="relative rounded-lg px-10 py-5 border-2 border-blue-600 text-blue-600 font-mono font-semibold hover:border-blue-700 hover:text-blue-700 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
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

          {/* Social Links */}
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

        {/* Image Column */}
        <div className="relative flex justify-center">
          {stage === "terminal" && (
            <div className="bg-black/90 border border-gray-700 rounded-md p-6 font-mono text-green-400 shadow-lg w-full max-w-md">
              <p className="mb-2">➜ Starting Portfolio...</p>
              <p className="text-white">pnpm run dev</p>
            </div>
          )}

          {stage === "loading" && (
            <div className="w-full max-w-md">
              <p className="font-mono text-indigo-400 mb-2">
                Loading portfolio...
              </p>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="font-mono text-gray-400 text-right mt-1">
                {progress}%
              </p>
            </div>
          )}

          {stage === "profile" && (
            <div className="relative w-full max-w-md mx-auto mt-8">
              {/* Floating gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-25 animate-pulse-slow"></div>
              <Image
                src="/profile.png"
                alt="Pawan Kumavat - Full Stack Developer"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-white shadow-2xl"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
