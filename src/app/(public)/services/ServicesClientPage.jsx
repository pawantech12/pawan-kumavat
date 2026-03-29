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
      <div className="text-center mb-16 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-[420px] h-[220px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
        </div>

        {/* Small Label */}
        <span className="inline-block mb-4 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
          Services
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl  font-semibold text-gray-900 tracking-tight">
          Services <span className="text-blue-600">I Offer</span>
        </h2>

        {/* Divider */}
        <div className="flex justify-center mt-4">
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I provide end-to-end development services, from designing responsive
          UIs to building scalable backends and deploying production-ready web
          applications.
        </p>
      </div>

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
                className="group relative overflow-hidden
  border border-neutral-200/60
  bg-white/70 backdrop-blur-xl
  shadow-sm hover:shadow-xl
  transition-all duration-500
  hover:-translate-y-2"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge
                      className="rounded-full px-3 py-1 text-xs font-medium
        bg-gradient-to-r from-blue-600 to-indigo-600 text-white
        shadow-md"
                    >
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  {/* Icon */}
                  <div
                    className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center mb-4
      shadow-sm group-hover:scale-110 transition-transform duration-300
      ${service.color}`}
                  >
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>

                  {/* Title */}
                  <CardTitle className="text-xl font-semibold text-neutral-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Description */}
                  <p className="text-neutral-600 text-center text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 pt-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm text-neutral-700
          transition-all duration-300 group-hover:translate-x-1"
                      >
                        {/* Check Icon */}
                        <span className="mt-[6px] h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></span>

                        {/* Feature Text */}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Bottom Gradient Hover Line */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0
    bg-gradient-to-r from-blue-600 to-indigo-600
    transition-all duration-500 group-hover:w-full"
                />
              </Card>
            );
          })}
        </section>
      )}

      {/* Process Section */}
      <section className="mb-20" aria-label="Development Process Overview">
        <div className="text-center mb-16 relative">
          {/* Background Glow */}
          <div className="absolute inset-0 flex justify-center -z-10">
            <div className="w-[420px] h-[220px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
          </div>

          {/* Small Label */}
          <span className="inline-block mb-4 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
            Development Process
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            How I <span className="text-blue-600">Build</span> Applications
          </h2>

          {/* Divider */}
          <div className="flex justify-center mt-4">
            <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I follow a structured workflow to turn ideas into production-ready
            applications — from analyzing designs to building scalable,
            maintainable code and delivering high-performance web solutions.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article
              key={index}
              className="group relative rounded-3xl border border-neutral-200 bg-white 
            shadow-sm hover:shadow-xl transition-all duration-500 
            hover:-translate-y-2 overflow-hidden"
              aria-label={`Step ${step.step}: ${step.title}`}
            >
              <Card className="h-full border-none bg-transparent shadow-none">
                <CardContent className="p-8 flex flex-col items-center text-center relative">
                  {/* subtle top accent line */}
                  <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-70" />

                  {/* Step Number Badge */}
                  <div
                    className="flex items-center justify-center w-16 h-16 mb-5
                  rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600
                  text-white text-xl font-semibold shadow-md
                  transition-transform duration-300 group-hover:scale-105"
                  >
                    {step.step}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg sm:text-xl font-semibold 
                  text-neutral-900 mb-3
                  transition-colors duration-300 
                  group-hover:text-blue-600"
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm sm:text-base text-neutral-600
                  leading-relaxed max-w-xs"
                  >
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <span
                    className="mt-6 h-[3px] w-12 rounded-full
                  bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
                  transition-all duration-300 group-hover:w-20"
                  />
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
        <Card className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl">
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 -top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[20rem] w-[20rem] rounded-full bg-indigo-500/10 blur-[100px]" />
          </div>

          <CardContent className="relative p-10 sm:p-14 text-center">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
              Ready to build something
              <span className="text-blue-600"> amazing?</span>
            </h2>

            {/* Description */}
            <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              I help startups and businesses transform ideas into modern,
              high-performance web applications. From scalable architectures to
              clean user experiences, let's build a solution that drives real
              results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA */}
              <Button
                size="lg"
                asChild
                className="group relative rounded-xl px-8 py-6
          bg-blue-600 text-white font-medium
          shadow-md hover:shadow-lg
          hover:bg-blue-700
          transition-all duration-300"
              >
                <Link
                  href="/contact"
                  aria-label="Start a Project"
                  className="flex items-center gap-3"
                >
                  Start a Project
                  <LucideIcons.ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl px-8 py-6 font-medium
          border-neutral-300
          hover:border-blue-600 hover:text-blue-600
          transition-all duration-300"
              >
                <Link
                  href="/projects"
                  aria-label="View Projects"
                  className="flex items-center gap-2"
                >
                  View My Work
                </Link>
              </Button>
            </div>

            {/* Bottom Trust Line */}
            <p className="mt-8 text-sm text-neutral-500">
              Available for freelance projects · Fast communication · Clean code
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ServicesClientPage;
