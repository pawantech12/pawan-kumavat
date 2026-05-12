"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionLoader from "./section-loader";

export default function TestimonialsSection() {
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
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Client Testimonials"
    >
      {/* Section Header */}
      <div className="relative mb-14 sm:mb-16 lg:mb-20 text-center">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div
            className="h-[160px] sm:h-[200px] lg:h-[220px]
        w-[280px] sm:w-[380px] lg:w-[480px]
        rounded-full
        bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10
        blur-3xl"
          />
        </div>

        {/* Top Badge */}
        <div
          className="inline-flex items-center gap-2 sm:gap-2.5
      rounded-full border border-neutral-200/70
      bg-white/75 px-4 sm:px-5 py-1.5 sm:py-2
      shadow-sm backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
            <span className="relative inline-flex h-full w-full rounded-full bg-blue-600" />
          </span>

          <span
            className="text-[10px] sm:text-[11px] font-semibold uppercase
        tracking-[0.2em] text-blue-600"
          >
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2
          className="mt-5 sm:mt-7 text-2xl sm:text-3xl lg:text-5xl
      font-bold tracking-tight leading-[1.1] text-neutral-900"
        >
          Trusted By
          <br />
          <span
            className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500
        bg-clip-text text-transparent"
          >
            Clients & Collaborators
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
        <p
          className="mx-auto mt-5 sm:mt-6 max-w-xl sm:max-w-2xl
      text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-600"
        >
          Feedback from clients and collaborators who trusted me to deliver
          scalable, high-performance web applications with modern UI, clean
          architecture, and smooth user experiences.
        </p>
      </div>

      {/* Testimonials Grid */}
      {loading ? (
        <SectionLoader text="Loading Testimonials..." />
      ) : (
        <div
          className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-5 sm:gap-6 lg:gap-8
        mb-10 sm:mb-12
      "
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={index}
              className="
            group relative overflow-hidden

            rounded-[24px] sm:rounded-[28px]
            border border-neutral-200/70

            bg-white/85 backdrop-blur-2xl

            shadow-[0_10px_40px_rgba(0,0,0,0.04)]

            transition-all duration-500
            hover:-translate-y-2
            hover:border-blue-200
            hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
          "
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 -right-20 sm:-top-24 sm:-right-24 h-32 sm:h-44 w-32 sm:w-44 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 sm:-bottom-24 sm:-left-24 h-32 sm:h-44 w-32 sm:w-44 rounded-full bg-indigo-500/10 blur-3xl" />
              </div>

              {/* Top Border */}
              <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

              <CardContent className="relative flex h-full flex-col p-5 sm:p-7">
                {/* Quote */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-cyan-500/10 text-blue-600">
                    <Quote className="h-5 sm:h-6 w-5 sm:w-6" />
                  </div>

                  <div className="flex gap-1 sm:gap-1.5">
                    <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-blue-400/70" />
                    <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-indigo-400/70" />
                    <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-cyan-400/70" />
                  </div>
                </div>

                {/* Content */}
                <blockquote className="pt-5 sm:pt-6 text-sm sm:text-[15px] leading-relaxed text-neutral-600 flex-grow">
                  {testimonial.content}
                </blockquote>

                {/* Divider */}
                <div className="mt-6 sm:mt-7 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

                {/* Footer */}
                <div className="mt-4 sm:mt-5 flex items-center gap-3 sm:gap-4">
                  <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-500 text-white font-semibold text-xs sm:text-sm">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-sm sm:text-[15px] font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="text-center">
        <Button
          size="lg"
          className="
        group relative isolate overflow-hidden
        rounded-2xl px-6 sm:px-7 py-5 sm:py-6

        bg-neutral-900
        text-white font-semibold tracking-tight

        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        hover:shadow-[0_18px_60px_rgba(37,99,235,0.22)]

        transition-all duration-500
        hover:-translate-y-1
      "
        >
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute inset-0 -z-20 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="absolute -left-full top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[140%] transition-all duration-1000" />

          <Link
            href="/testimonials"
            className="relative z-10 flex items-center gap-3"
          >
            <span className="text-sm sm:text-base">View All Testimonials</span>

            <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-all">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
