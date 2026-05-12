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
      <div className="relative mb-14 sm:mb-16 lg:mb-20 text-center">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="h-[160px] sm:h-[200px] lg:h-[220px] w-[280px] sm:w-[380px] lg:w-[480px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-3xl" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-neutral-200/70 bg-white/75 px-4 sm:px-5 py-1.5 sm:py-2 shadow-sm backdrop-blur-xl">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
            <span className="relative inline-flex h-full w-full rounded-full bg-blue-600" />
          </span>

          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
            Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-5 sm:mt-7 text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-neutral-900">
          Services I
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
            Offer
          </span>
        </h2>

        {/* Divider */}
        <div className="mt-5 sm:mt-7 flex items-center justify-center gap-2 sm:gap-3">
          <div className="h-px w-6 sm:w-10 bg-neutral-300" />
          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
          <div className="h-[2px] sm:h-[3px] w-14 sm:w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
          <div className="h-px w-6 sm:w-10 bg-neutral-300" />
        </div>

        {/* Description */}
        <p className="mx-auto mt-5 sm:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-600">
          I provide end-to-end development services, from designing responsive
          UIs to building scalable backends and deploying production-ready web
          applications.
        </p>
      </div>

      {/* Services Grid */}
      {loading ? (
        <SectionLoader text="Loading Services..." />
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-14">
          {services.map((service, index) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.HelpCircle;

            return (
              <Card
                key={index}
                className="group relative overflow-hidden
            border border-neutral-200/60
            bg-white/70 backdrop-blur-xl
            shadow-sm hover:shadow-xl
            transition-all duration-500
            hover:-translate-y-2"
              >
                {service.popular && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <Badge className="rounded-full px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div
                    className={`mx-auto w-14 sm:w-16 h-14 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300 ${service.color}`}
                  >
                    <Icon className="h-6 sm:h-7 w-6 sm:w-7" aria-hidden />
                  </div>

                  <CardTitle className="text-lg sm:text-xl font-semibold text-neutral-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-5">
                  <p className="text-neutral-600 text-center text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2 sm:gap-3 text-sm text-neutral-700 transition-all duration-300 group-hover:translate-x-1"
                      >
                        <span className="mt-[6px] h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
              </Card>
            );
          })}
        </section>
      )}

      {/* Process Section */}
      <section className="mb-20">
        <div className="relative mb-14 sm:mb-16 lg:mb-20 text-center">
          <div className="absolute inset-0 -z-10 flex justify-center">
            <div className="h-[160px] sm:h-[200px] lg:h-[220px] w-[280px] sm:w-[380px] lg:w-[480px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 blur-3xl" />
          </div>

          <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-neutral-200/70 bg-white/75 px-4 sm:px-5 py-1.5 sm:py-2 shadow-sm backdrop-blur-xl">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
              <span className="relative inline-flex h-full w-full rounded-full bg-blue-600" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              Process
            </span>
          </div>

          <h2 className="mt-5 sm:mt-7 text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-neutral-900">
            How I Build
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Applications
            </span>
          </h2>

          <p className="mx-auto mt-5 sm:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-600">
            Structured workflow from idea to deployment ensuring clean,
            scalable, and production-ready web applications.
          </p>
        </div>

        {/* unchanged process grid (kept logic intact) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={index}
              className="
    group relative overflow-hidden

    rounded-[28px]

    border border-neutral-200/70
    bg-white/75 backdrop-blur-2xl

    shadow-[0_10px_35px_rgba(0,0,0,0.04)]

    transition-all duration-500
    hover:-translate-y-2
    hover:border-blue-200
    hover:shadow-[0_22px_60px_rgba(37,99,235,0.12)]
  "
            >
              {/* Background Glow */}
              <div
                className="
      absolute inset-0 opacity-0
      transition-opacity duration-500
      group-hover:opacity-100
    "
              >
                <div
                  className="
        absolute -top-20 -right-20
        h-44 w-44 rounded-full
        bg-blue-500/10 blur-3xl
      "
                />

                <div
                  className="
        absolute -bottom-20 -left-20
        h-44 w-44 rounded-full
        bg-indigo-500/10 blur-3xl
      "
                />
              </div>

              {/* Top Gradient Border */}
              <div
                className="
      absolute inset-x-0 top-0 h-[3px]

      bg-gradient-to-r
      from-blue-600 via-indigo-500 to-cyan-500

      scale-x-0 origin-left
      transition-transform duration-500

      group-hover:scale-x-100
    "
              />

              <Card className="h-full border-none bg-transparent shadow-none">
                <CardContent
                  className="
        relative z-10

        flex flex-col items-center text-center

        px-5 sm:px-7 lg:px-8
        py-8 sm:py-10
      "
                >
                  {/* Step Number */}
                  <div
                    className="
          relative

          flex items-center justify-center

          h-14 w-14 sm:h-16 sm:w-16
          rounded-2xl

          bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-500

          text-lg sm:text-xl
          font-bold text-white

          shadow-lg shadow-blue-500/20

          transition-all duration-500
          group-hover:scale-110
          group-hover:-translate-y-1
        "
                  >
                    {/* subtle overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10" />

                    <span className="relative">{step.step}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
          mt-6

          text-lg sm:text-xl
          font-semibold
          tracking-tight

          text-neutral-900

          transition-colors duration-300
          group-hover:text-blue-600
        "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
          mt-3

          max-w-sm

          text-sm sm:text-base
          leading-relaxed

          text-neutral-600
        "
                  >
                    {step.description}
                  </p>

                  {/* Elegant Bottom Divider */}
                  <div
                    className="
          mt-7 flex items-center gap-2
        "
                  >
                    <span
                      className="
            h-[2px] w-0 rounded-full
            bg-gradient-to-r from-blue-500 to-indigo-500

            transition-all duration-500
            group-hover:w-8
          "
                    />

                    <span
                      className="
            h-1.5 w-1.5 rounded-full

            bg-gradient-to-r from-blue-500 to-cyan-500

            opacity-0 scale-0

            transition-all duration-500

            group-hover:opacity-100
            group-hover:scale-100
          "
                    />

                    <span
                      className="
            h-[2px] w-0 rounded-full
            bg-gradient-to-r from-indigo-500 to-cyan-500

            transition-all duration-500 delay-75
            group-hover:w-8
          "
                    />
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </section>

      {/* CTA unchanged (already modern) */}
      <section
        aria-label="Call to Action - Start a Project or View Work"
        className="relative isolate overflow-hidden py-16 sm:py-20"
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Main Glow */}
          <div
            className="
        absolute left-1/2 top-[-10rem]
        h-[24rem] sm:h-[30rem] lg:h-[36rem]
        w-[24rem] sm:w-[30rem] lg:w-[36rem]
        -translate-x-1/2
        rounded-full
        bg-blue-500/10
        blur-[100px] sm:blur-[130px]
      "
          />

          {/* Secondary Glow */}
          <div
            className="
        absolute bottom-[-6rem] right-[-4rem]
        h-[18rem] sm:h-[22rem]
        w-[18rem] sm:w-[22rem]
        rounded-full
        bg-indigo-500/10
        blur-[90px] sm:blur-[120px]
      "
          />

          {/* Grid Pattern */}
          <div
            className="
        absolute inset-0
        bg-[linear-gradient(to_right,#e5e7eb10_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb10_1px,transparent_1px)]
        bg-[size:36px_36px]
        [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]
      "
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card
            className="
        group relative overflow-hidden

        rounded-[2rem] sm:rounded-[2.5rem]

        border border-neutral-200/70

        bg-white/75 backdrop-blur-2xl

        shadow-[0_20px_70px_rgba(15,23,42,0.08)]

        transition-all duration-500
        hover:shadow-[0_35px_100px_rgba(37,99,235,0.14)]
      "
          >
            {/* Top Gradient Border */}
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <CardContent
              className="
          relative z-10
          px-6 sm:px-10 lg:px-16
          py-12 sm:py-16 lg:py-20
          text-center
        "
            >
              {/* Badge */}
              <div
                className="
            inline-flex items-center gap-2 sm:gap-3

            rounded-full
            border border-neutral-200/70

            bg-white/80 backdrop-blur-xl

            px-4 sm:px-5 py-1.5 sm:py-2

            shadow-sm
          "
              >
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-green-500" />
                </span>

                <span
                  className="
              text-[10px] sm:text-[11px]
              font-semibold uppercase
              tracking-[0.2em]
              text-blue-600
            "
                >
                  Available For Work
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
            mx-auto mt-7 sm:mt-8
            max-w-4xl

            text-3xl sm:text-5xl lg:text-6xl

            font-bold
            tracking-tight
            leading-[1.05]

            text-neutral-900
          "
              >
                Ready to Build
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                  Something Exceptional?
                </span>
              </h2>

              {/* Elegant Divider */}
              <div className="mt-7 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
                <div className="h-px w-6 sm:w-10 bg-neutral-300" />

                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500" />

                <div className="h-[2px] sm:h-[3px] w-14 sm:w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-indigo-500" />

                <div className="h-px w-6 sm:w-10 bg-neutral-300" />
              </div>

              {/* Description */}
              <p
                className="
            mx-auto mt-6 sm:mt-7
            max-w-xl sm:max-w-2xl

            text-sm sm:text-base lg:text-lg

            leading-relaxed

            text-neutral-600
          "
              >
                I help startups, businesses, and brands transform ideas into
                modern, scalable, and high-performance digital products with
                clean UI, optimized architecture, and seamless user experiences.
              </p>

              {/* CTA Buttons */}
              <div
                className="
            mt-10 sm:mt-12

            flex flex-col sm:flex-row
            items-center justify-center

            gap-4 sm:gap-5
          "
              >
                {/* Primary CTA */}
                <Button
                  size="lg"
                  asChild
                  className="
              group/button relative isolate overflow-hidden

              w-full sm:w-auto

              rounded-2xl
              px-6 sm:px-8
              py-5 sm:py-6

              bg-neutral-900
              text-white
              font-semibold
              tracking-tight

              border border-white/10

              shadow-[0_10px_40px_rgba(0,0,0,0.12)]

              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0_20px_60px_rgba(37,99,235,0.22)]
            "
                >
                  <Link
                    href="/contact"
                    aria-label="Start a Project"
                    className="relative z-10 flex items-center justify-center gap-3"
                  >
                    {/* Animated Gradient */}
                    <span
                      className="
                  absolute inset-0 -z-10
                  bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500
                  opacity-0
                  transition-opacity duration-500
                  group-hover/button:opacity-100
                "
                    />

                    {/* Shine Sweep */}
                    <span
                      className="
                  absolute -left-full top-0 h-full w-1/2
                  skew-x-12
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  group-hover/button:left-[140%]
                  transition-all duration-1000
                "
                    />

                    <span className="text-sm sm:text-base">
                      Start a Project
                    </span>

                    <span
                      className="
                  flex h-8 w-8 sm:h-9 sm:w-9
                  items-center justify-center

                  rounded-xl

                  border border-white/15
                  bg-white/10 backdrop-blur-md

                  transition-all duration-300

                  group-hover/button:bg-white/20
                  group-hover/button:translate-x-0.5
                "
                    >
                      <LucideIcons.ArrowRight
                        className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover/button:translate-x-1
                  "
                      />
                    </span>
                  </Link>
                </Button>

                {/* Secondary CTA */}
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="
              w-full sm:w-auto

              rounded-2xl

              px-6 sm:px-8
              py-5 sm:py-6

              border border-neutral-300/80

              bg-white/80 backdrop-blur-xl

              text-neutral-800
              font-semibold

              shadow-sm

              hover:border-blue-500
              hover:text-blue-600
              hover:-translate-y-1

              transition-all duration-300
            "
                >
                  <Link
                    href="/projects"
                    aria-label="View Projects"
                    className="flex items-center justify-center gap-3"
                  >
                    <span className="text-sm sm:text-base">View My Work</span>

                    <LucideIcons.ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default ServicesClientPage;
