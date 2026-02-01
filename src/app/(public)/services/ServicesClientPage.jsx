"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionLoader from "@/components/section-loader";

const processSteps = [
  {
    step: "1",
    title: "Discovery & Planning",
    description:
      "We align on your goals, requirements, and timeline to lay the foundation for development.",
  },
  {
    step: "2",
    title: "Client-Provided Design Integration",
    description:
      "We take your finalized designs and prepare the codebase for seamless integration.",
  },
  {
    step: "3",
    title: "Development & Testing",
    description:
      "Build the application using modern tech and conduct continuous testing for reliability.",
  },
  {
    step: "4",
    title: "Deployment & Launch",
    description:
      "Launch the product with complete setup and verify it works smoothly in production.",
  },
  {
    step: "5",
    title: "Post-Launch Support",
    description:
      "Provide maintenance, fixes, and support to keep your product stable and up-to-date.",
  },
];

const ServicesClientPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/services");

        setServices(res.data);
      } catch (error) {
        console.log("Errror while fetching services data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <main
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-label="Services Page - Full Stack Development Offerings"
    >
      {/* Header */}
      <header
        className="text-center mb-16 space-y-6 relative"
        aria-label="Page Introduction"
      >
        {/* Background subtle gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl -z-10 rounded-xl"></div>

        {/* Main heading with terminal-style prefix and gradient accent */}
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 font-mono relative inline-block">
          {/* Terminal cursor */}
          <span className="before:content-['>_'] before:text-blue-500 animate-pulse"></span>
          Services
          <span className="text-blue-600 ml-2">I Offer</span>
          {/* Animated underline gradient */}
          <span className="absolute -bottom-1 max-sm:left-1/2 max-sm:-translate-x-1/2 right-0 w-2/5 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </h1>

        {/* Subtext / description in terminal/code style */}
        <p className="relative text-lg text-gray-100 max-w-3xl mx-auto font-mono bg-gray-900/80 dark:bg-gray-800/70 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg overflow-hidden">
          {/* Neon glow top bar */}
          <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl"></span>

          {/* Terminal-style content */}
          <span className="block before:content-['>_'] before:text-blue-400 before:mr-2">
            I provide end-to-end development services, from designing responsive
            UIs to building scalable backends and deploying production-ready web
            applications.
          </span>
        </p>
      </header>

      {/* Services Grid */}
      {loading ? (
        <SectionLoader text="Loading Services..." />
      ) : (
        <section
          aria-label="List of Web Development Services"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.HelpCircle;
            return (
              <Card
                key={index}
                className="relative hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge
                      className="relative inline-flex items-center px-4 py-1 rounded-full text-sm font-mono text-white
                 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600
                 
                 before:absolute before:inset-0 before:rounded-full before:blur-xl before:opacity-30 before:bg-gradient-to-r before:from-blue-400 before:via-indigo-500 before:to-purple-500
                 "
                    >
                      <span className="relative z-10">Most Popular</span>
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${service.color}`}
                  >
                    <Icon className="h-8 w-8" aria-hidden />
                  </div>
                  <CardTitle
                    className="
      text-xl font-mono relative 
      before:content-['{'] after:content-['}'] 
      before:text-blue-500 after:text-blue-500 
      before:mr-2 after:ml-2
      transition-all duration-300 
      group-hover:before:animate-pulse group-hover:after:animate-pulse
      hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-neutral-600
    "
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-200 text-center font-mono text-sm sm:text-base relative bg-gray-900/80 dark:bg-gray-800/80 p-4 rounded-lg shadow-md border-l-4 border-blue-500 overflow-hidden">
                    <span className="text-blue-400 before:content-['>_'] before:mr-2"></span>
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-1 group transition-all duration-300 hover:translate-x-2"
                      >
                        {/* Glowing dev icon */}
                        <span className="text-blue-500 font-mono animate-pulse">
                          •
                        </span>

                        {/* Feature text in terminal/code style */}
                        <span className="relative font-mono text-base text-gray-700 group-hover:text-blue-600 transition-colors">
                          <span className="before:content-['>_'] before:text-blue-500 animate-pulse-slow"></span>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>
      )}

      {/* Process Section */}
      <section className="mb-20" aria-label="Development Process Overview">
        <header className="text-center mb-12 space-y-6 relative">
          {/* Terminal-style background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl -z-10 rounded-lg"></div>

          {/* Main heading with terminal vibe */}
          <h2 className="text-4xl  font-bold text-gray-900 font-mono relative inline-block">
            {/* Terminal prefix */}
            <span className="before:content-['>_'] before:text-blue-500 animate-pulse"></span>
            Development Process
            {/* Gradient accent */}
            <span className="text-blue-600 ml-2">Workflow</span>
            {/* Animated underline */}
            <span className="absolute -bottom-1 right-0 w-2/5 h-[4px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full  animate-pulse"></span>
          </h2>

          {/* Subtext in terminal/code block style */}
          <p className="relative text-lg  text-gray-100 max-w-2xl mx-auto font-mono bg-gray-900/80 dark:bg-gray-800/70 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg overflow-hidden">
            {/* Neon glow top bar */}
            <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl"></span>

            {/* Terminal-style description */}
            <span className="block before:content-['>_'] before:text-blue-400 before:mr-2">
              I follow a structured approach to turn your ideas into fully
              functional, production-ready applications — from analyzing your
              designs to delivering scalable, maintainable code.
            </span>
          </p>
        </header>

        {/* Step Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={index}
              className="group relative text-center bg-white dark:bg-slate-950 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-transparent hover:border-blue-500"
              aria-label={`Step ${step.step}: ${step.title}`}
            >
              <Card className="h-full rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden relative">
                <CardContent className="p-6 flex flex-col items-center relative">
                  {/* Top neon gradient glow bar */}
                  <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_2s_ease-in-out_infinite] rounded-t-xl" />

                  {/* Step circle with animated CLI effect */}
                  <div className="relative w-20 h-20 mb-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white flex items-center justify-center text-2xl font-mono font-bold shadow-lg group-hover:scale-105 transition-transform duration-300">
                    {/* Pulsing terminal cursor inside circle */}
                    <span className="absolute top-1 left-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
                    {step.step}
                    {/* Small rotating orbit dots */}
                    <span className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full animate-spin-slow"></span>
                    <span className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 rounded-full animate-spin-slow animate-delay-150"></span>
                  </div>

                  {/* Step title with terminal prefix */}
                  <h3 className="text-lg sm:text-xl font-semibold font-mono text-gray-900 dark:text-white mb-3  transition-colors duration-300 group-hover:text-blue-500">
                    <span className="text-indigo-400 animate-pulse mr-1">
                      {">_"}
                    </span>
                    {step.title}
                  </h3>

                  {/* Description with terminal/code block vibe */}
                  <p className="relative text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center font-mono bg-gray-50 dark:bg-slate-900 rounded-lg p-5 shadow-inner w-full max-w-xs overflow-hidden">
                    {/* Neon left border */}
                    <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-l-md animate-[pulse_3s_ease-in-out_infinite]" />

                    {step.description}
                  </p>

                  {/* Gradient accent bottom line with hover scale effect */}
                  <span className="block w-20 h-1 mt-5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-90 transition-all duration-300 group-hover:scale-x-125 group-hover:opacity-100"></span>

                  {/* Optional glowing background circles */}
                  <span className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-20 rounded-full blur-2xl animate-pulse-slow pointer-events-none" />
                  <span className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 opacity-20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        aria-label="Call to Action - Start a Project or View Work"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Card className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-lg text-white">
          <CardContent className="relative p-8 sm:p-12 text-center">
            {/* Terminal hint */}
            <div className="mb-4 text-sm font-mono text-green-400">
              <span className="text-gray-500">
                // init project collaboration
              </span>
              <br />
              <span>{">_"} startProject()</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-mono relative inline-block">
              Ready to Build Something Amazing?
              <span className="text-blue-400 ml-2 animate-pulse">_dev</span>
              {/* Animated underline */}
              <span className="absolute -bottom-2 right-0 w-2/5 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full  animate-pulse"></span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-mono bg-gray-800/70 rounded-2xl p-6 border-l-4 border-blue-500 shadow-inner">
              Let&apos;s discuss your project requirements and create
              production-ready, scalable web applications. Whether it’s a
              startup idea or enterprise solution, I provide clean, maintainable
              code and fast delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA */}
              <Button
                size="lg"
                asChild
                className="
                relative overflow-hidden font-mono font-semibold
                px-6 py-5 rounded-xl
                bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
                shadow-[0_10px_30px_rgba(99,102,241,0.35)]
                hover:shadow-[0_15px_45px_rgba(99,102,241,0.55)]
                transition-all duration-300
                group
              "
              >
                <Link
                  href="/contact"
                  aria-label="Start Project"
                  className="relative z-10 flex items-center gap-3"
                >
                  <span className="text-green-300 animate-pulse">{">_"}</span>
                  <span>Start Project</span>
                  <LucideIcons.ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                asChild
                className="
                font-mono px-6 py-5 font-semibold rounded-xl
                border-gray-500 text-gray-800
                hover:border-blue-500 hover:text-blue-400
                transition-all duration-300
              "
              >
                <Link
                  href="/projects"
                  aria-label="View Projects"
                  className="flex items-center gap-2"
                >
                  View Work
                </Link>
              </Button>
            </div>

            {/* Footer hint */}
            <p className="mt-8 text-xs font-mono text-gray-500">
              status: available · response_time: fast
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ServicesClientPage;
