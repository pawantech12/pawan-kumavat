"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import SectionLoader from "@/components/section-loader";
const TestimonialsClientPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/testimonials");

        setTestimonials(res.data);
      } catch (error) {
        console.log("Errror while fetching testimonials data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <main
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-label="Client testimonials and feedback about Pawan Kumavat"
    >
      {/* Header */}
      <header className="text-center mb-16 relative space-y-6">
        {/* Terminal-style background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl -z-10 rounded-xl"></div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 font-mono relative inline-block">
          {/* Terminal cursor */}
          <span className="before:content-['>_'] before:text-blue-500 animate-pulse"></span>
          Client
          {/* Gradient accent */}
          <span className="text-blue-600 ml-2">Testimonials</span>
          {/* Animated underline */}
          <span className="absolute -bottom-1 max-sm:left-1/2 max-sm:-translate-x-1/2 right-0 w-2/5 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></span>
        </h1>

        {/* Subtext / description in code block style */}
        <p className="relative text-lg  text-gray-100 max-w-3xl mx-auto font-mono bg-gray-900/80 dark:bg-gray-800/70 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg overflow-hidden">
          {/* Neon glow top bar */}
          <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl"></span>

          {/* Terminal-style content */}
          <span className="block before:content-['>_'] before:text-blue-400 before:mr-2">
            Don&apos;t just take my word for it — here&apos;s what clients and
            colleagues have to say about collaborating with me on real-world
            projects.
          </span>
        </p>
      </header>

      {/* Testimonials Grid */}
      {loading ? (
        <SectionLoader text="Loading Testimonials..." />
      ) : (
        <section
          aria-label="Testimonial Cards Section"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="
         relative h-full
         rounded-2xl
         bg-white
         border border-gray-200
         transition-all duration-400
         hover:border-blue-500 hover:shadow-xl
         overflow-hidden
         group
       "
              itemScope
              itemType="https://schema.org/Review"
            >
              <CardContent className="relative p-6 flex flex-col h-full font-mono">
                {/* Terminal Header */}
                <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-500 tracking-wide">
                    review.log
                  </span>
                </div>

                {/* Quote Icon */}
                <div className="absolute top-10 right-4 text-blue-500/20">
                  <Quote className="h-7 w-7" aria-hidden="true" />
                </div>

                {/* Review Content */}
                <blockquote
                  className="
             mt-10
             text-sm sm:text-base
             text-gray-800
             leading-relaxed
             flex-grow
           "
                  itemProp="reviewBody"
                >
                  <span className="text-blue-500">{`> `}</span>
                  {testimonial.content}
                </blockquote>

                {/* Author Section */}
                <div
                  className="mt-6 pt-4 border-t border-dashed border-gray-300"
                  itemScope
                  itemProp="author"
                  itemType="https://schema.org/Person"
                >
                  <h4
                    className="text-sm sm:text-base font-semibold text-gray-900"
                    itemProp="name"
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-xs sm:text-sm text-gray-500"
                    itemProp="jobTitle"
                  >
                    {testimonial.role}
                  </p>
                </div>

                {/* Bottom Status Bar */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-200">
                  <div className="h-full w-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      )}

      {/* CTA Section */}
      <section
        aria-label="Call to action to contact Pawan Kumavat"
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Card className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-lg text-white">
          <CardContent className="relative p-8 sm:p-12 text-center">
            {/* Terminal-style hint */}
            <div className="mb-4 text-sm font-mono text-green-400">
              <span className="text-gray-500">// ready for collaboration</span>
              <br />
              <span>{">_"} connectWithMe()</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-mono relative inline-block">
              Ready to Build Something Amazing?
              <span className="text-blue-400 ml-2 animate-pulse">_dev</span>
              {/* Animated underline */}
              <span className="absolute -bottom-2 right-0 w-2/5 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full animate-pulse"></span>
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
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                asChild
                className="
            font-mono px-6 py-5 font-semibold rounded-xl
            border-gray-500 text-gray-700
            hover:border-blue-500 hover:text-blue-400
            transition-all duration-300
          "
              >
                <Link
                  href="/projects"
                  aria-label="View Projects"
                  className="flex items-center gap-2"
                >
                  <span className="text-green-600 animate-pulse">{">_"}</span>
                  View Work
                </Link>
              </Button>
            </div>

            {/* Footer status hint */}
            <p className="mt-8 text-xs font-mono text-gray-500">
              status: available · response_time: fast
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default TestimonialsClientPage;
