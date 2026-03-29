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
      className="relative isolate overflow-hidden py-20 sm:py-24 max-sm:py-16"
      aria-label="Hero section introducing Pawan Kumavat"
    >
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-8rem] h-[32rem] w-[32rem] sm:h-[42rem] sm:w-[42rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px] sm:blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[20rem] w-[20rem] sm:h-[28rem] sm:w-[28rem] rounded-full bg-indigo-600/15 blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="max-lg:text-center lg:text-left">
            {/* Availability Badge */}
            <Badge className="inline-flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-xl px-5 py-2 text-sm font-medium text-neutral-700 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              <span>
                <span className="font-semibold text-blue-600">Available</span>{" "}
                for Freelance, Remote & Part Time Role
              </span>
            </Badge>

            {/* Heading */}
            <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
              Hi, I'm <span className="text-blue-600">Pawan Kumavat</span>
            </h1>

            {/* Typewriter Role */}
            <h2 className="mt-3 sm:mt-4 text-lg sm:text-xl lg:text-2xl text-neutral-600 font-medium">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "Next.js Developer",
                  "React Developer",
                  "Web Application Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </h2>

            {/* Description */}
            <p className="mt-6 sm:mt-7 max-w-xl text-base leading-relaxed text-neutral-600 border-l-2 border-blue-500/40 pl-4 max-lg:mx-auto lg:mx-0">
              I design and develop scalable, high-performance web applications
              using modern technologies like React, Next.js, Node.js, and
              MongoDB. My focus is building clean, SEO-friendly, and
              user-focused digital products that help businesses grow.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row max-lg:justify-center lg:justify-start gap-4 sm:gap-5">
              {/* Primary CTA */}
              <Link href="/projects">
                <Button
                  className="group relative isolate overflow-hidden
              w-full sm:w-auto
              rounded-xl px-7 py-5
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white font-medium
              shadow-md
              hover:shadow-lg
              transition-all duration-300
              hover:-translate-y-[2px]"
                >
                  <span
                    className="absolute -left-full top-0 h-full w-full
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                group-hover:left-full
                transition-all duration-700"
                  />

                  <span className="relative flex items-center justify-center gap-2">
                    View My Work
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>

              {/* Secondary CTA */}
              <Link href="/resume.pdf" target="_blank">
                <Button
                  variant="outline"
                  className="group relative isolate overflow-hidden
              w-full sm:w-auto
              rounded-xl px-7 py-5
              border border-neutral-300
              bg-white/70 backdrop-blur-xl
              text-neutral-800
              shadow-sm
              hover:border-blue-500
              hover:text-blue-600
              hover:-translate-y-[2px]
              transition-all duration-300"
                >
                  <span
                    className="absolute inset-0 rounded-xl
                bg-gradient-to-r from-blue-500/5 to-indigo-500/5
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300"
                  />

                  <span className="relative flex items-center justify-center gap-2">
                    <Download className="w-4 h-4 transition-transform group-hover:-translate-y-[1px]" />
                    Download Resume
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow */}
            <div className="absolute h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px] rounded-full bg-gradient-to-br from-blue-500/30 via-indigo-400/20 to-transparent blur-[100px] sm:blur-[120px]" />

            {/* Glass Card */}
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] rounded-[28px] sm:rounded-[32px] border border-neutral-200/40 bg-white/60 backdrop-blur-2xl shadow-[0_40px_100px_rgba(37,99,235,0.25)] hover:-translate-y-2 transition-all duration-500">
              <div className="h-[3px] w-full rounded-t-[32px] bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Pawan Kumavat - Full Stack Developer"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.03]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
