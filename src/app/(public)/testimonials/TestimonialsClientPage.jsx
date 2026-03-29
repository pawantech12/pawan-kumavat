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
      <div className="text-center mb-16 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-[420px] h-[220px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
        </div>

        {/* Small Label */}
        <span className="inline-block mb-4 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
          Testimonials
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
          What Clients <span className="text-blue-600">Say</span>
        </h2>

        {/* Divider */}
        <div className="flex justify-center mt-4">
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Feedback from clients and collaborators who trusted me to deliver
          reliable, high-performance web solutions and modern digital
          experiences.
        </p>
      </div>

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
         border border-neutral-200
         shadow-sm
         hover:shadow-xl
         hover:-translate-y-1
         transition-all duration-300
         group
       "
              itemScope
              itemType="https://schema.org/Review"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-4 text-blue-500/30">
                  <Quote className="h-7 w-7" aria-hidden="true" />
                </div>

                {/* Review Content */}
                <blockquote
                  className="
             text-sm sm:text-base
             text-neutral-700
             leading-relaxed
             flex-grow
           "
                  itemProp="reviewBody"
                >
                  {testimonial.content}
                </blockquote>

                {/* Author */}
                <div
                  className="mt-6 pt-5 border-t border-neutral-200 flex items-center gap-4"
                  itemScope
                  itemProp="author"
                  itemType="https://schema.org/Person"
                >
                  {/* Avatar */}
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>

                  {/* Author Info */}
                  <div>
                    <h4
                      className="text-sm sm:text-base font-semibold text-neutral-900"
                      itemProp="name"
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-xs sm:text-sm text-neutral-500"
                      itemProp="jobTitle"
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </section>
      )}

      {/* CTA Section */}
      <section
        aria-label="Call to action to contact Pawan Kumavat"
        className="relative py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Card className="relative overflow-hidden rounded-[28px] border border-neutral-200/60 bg-white/70 backdrop-blur-xl shadow-[0_30px_80px_rgba(37,99,235,0.15)]">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-[-6rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
              <div className="absolute right-0 bottom-0 h-[18rem] w-[18rem] rounded-full bg-indigo-500/20 blur-[100px]" />
            </div>

            <CardContent className="relative p-10 sm:p-14 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Available for Freelance & Collaboration
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                Let’s Build Something
                <span className="text-blue-600"> Great Together</span>
              </h2>

              {/* Description */}
              <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                I'm always excited to collaborate on meaningful projects.
                Whether you’re building a startup, launching a product, or
                scaling an existing platform, I can help design and develop
                modern, scalable web applications.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA */}
                <Button
                  size="lg"
                  asChild
                  className="rounded-xl px-7 py-6
            bg-blue-600 text-white font-medium
            shadow-md hover:bg-blue-700
            transition-all duration-300
            group"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                {/* Secondary CTA */}
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-xl px-7 py-6
            border-blue-600 text-blue-600
            hover:bg-blue-50
            transition-all duration-300"
                >
                  <Link href="/projects" className="flex items-center gap-2">
                    View My Work
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

export default TestimonialsClientPage;
