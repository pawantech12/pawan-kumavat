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
      className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-label="Hero section introducing Pawan Kumavat"
    >
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-6rem] sm:top-[-8rem] h-[22rem] w-[22rem] sm:h-[42rem] sm:w-[42rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px] sm:blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[14rem] w-[14rem] sm:h-[28rem] sm:w-[28rem] rounded-full bg-indigo-600/15 blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-neutral-200/70 bg-white/70 backdrop-blur-2xl px-3 xs:px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-full">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[11px] sm:text-sm font-medium text-neutral-700 leading-tight">
                <span className="font-semibold text-blue-600">
                  Available for Work
                </span>{" "}
                <span className="hidden xs:inline">
                  — Freelance • Remote • Part-Time
                </span>
                <span className="xs:hidden text-neutral-500">
                  — Freelance • Remote
                </span>
              </span>
            </div>

            {/* Heading */}
            <div className="mt-6 sm:mt-9">
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-500">
                Full Stack Web Developer
              </p>

              <h1
                className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-7xl
            font-bold tracking-tight leading-[1.1] sm:leading-[1.05]
            text-neutral-900"
              >
                Crafting Modern
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </h1>
            </div>

            {/* Intro */}
            <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed text-neutral-600 mx-auto lg:mx-0">
              Hi, I’m{" "}
              <span className="font-semibold text-neutral-900">
                Pawan Kumavat
              </span>
              a MERN & Next.js developer focused on building fast, scalable, and
              visually polished web applications with clean UI, smooth user
              experience, and SEO-friendly architecture.
            </p>

            {/* Typewriter */}
            <div className="mt-5 sm:mt-6 flex items-center gap-3 justify-center lg:justify-start">
              <div className="h-px w-8 sm:w-10 bg-gradient-to-r from-blue-500 to-transparent" />

              <h2 className="text-sm sm:text-lg font-medium text-neutral-700">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "Next.js Developer",
                    "React Developer",
                    "Web Application Developer",
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1200}
                />
              </h2>
            </div>

            {/* Buttons */}
            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/projects">
                <Button className="group relative overflow-hidden rounded-2xl px-6 sm:px-7 py-5 sm:py-6 bg-neutral-900 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2">
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>

              <Link href="/resume.pdf" target="_blank">
                <Button
                  variant="outline"
                  className="group rounded-2xl px-6 sm:px-7 py-5 sm:py-6 border border-neutral-300 bg-white/80 backdrop-blur-xl text-neutral-800 w-full sm:w-auto hover:border-blue-500 hover:text-blue-600 hover:-translate-y-1 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    Download Resume
                  </span>
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">10+</h3>
                <p className="text-xs sm:text-sm text-neutral-500">Projects</p>
              </div>

              <div className="hidden sm:block w-px bg-neutral-200" />

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">3+</h3>
                <p className="text-xs sm:text-sm text-neutral-500">Years</p>
              </div>

              <div className="hidden sm:block w-px bg-neutral-200" />

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">100%</h3>
                <p className="text-xs sm:text-sm text-neutral-500">
                  Responsive
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            {/* Card */}
            <div className="group relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px]">
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/20 bg-white/60 backdrop-blur-2xl shadow-[0_30px_80px_rgba(37,99,235,0.18)]">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
                    <Image
                      src="/profile.jpeg"
                      alt="Pawan Kumavat"
                      width={600}
                      height={600}
                      className="w-full h-[300px] sm:h-[420px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
