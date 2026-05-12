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
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      aria-label="Client testimonials and feedback about Pawan Kumavat"
    >
      {/* Section Header */}
      <div className="relative mb-14 sm:mb-16 lg:mb-20 text-center">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div
            className="h-[160px] sm:h-[200px] lg:h-[240px]
        w-[280px] sm:w-[380px] lg:w-[520px]
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
          className="mt-5 sm:mt-7 text-3xl sm:text-4xl lg:text-6xl
      font-bold tracking-tight leading-[1.05] text-neutral-900"
        >
          What Clients
          <br />
          <span
            className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500
        bg-clip-text text-transparent"
          >
            Say About My Work
          </span>
        </h2>

        {/* Divider */}
        <div className="mt-5 sm:mt-7 flex items-center justify-center gap-2 sm:gap-3">
          <div className="h-px w-6 sm:w-10 bg-neutral-300" />

          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />

          <div className="h-[2px] sm:h-[3px] w-14 sm:w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />

          <div className="h-px w-6 sm:w-10 bg-neutral-300" />
        </div>

        {/* Description */}
        <p
          className="mx-auto mt-5 sm:mt-6 max-w-xl sm:max-w-2xl
      text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-600"
        >
          Feedback from clients and collaborators who trusted me to deliver
          scalable, modern, and high-performance digital experiences with clean
          code and intuitive user interfaces.
        </p>
      </div>

      {/* Testimonials Grid */}
      {loading ? (
        <SectionLoader text="Loading Testimonials..." />
      ) : (
        <section
          aria-label="Testimonial Cards Section"
          className="
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        gap-5 sm:gap-6 lg:gap-8
        mb-16 sm:mb-20
      "
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="
            group relative overflow-hidden

            rounded-[24px] sm:rounded-[30px]

            border border-neutral-200/70

            bg-white/80 backdrop-blur-2xl

            shadow-[0_10px_40px_rgba(15,23,42,0.05)]

            transition-all duration-500
            hover:-translate-y-2
            hover:border-blue-200
            hover:shadow-[0_25px_70px_rgba(37,99,235,0.14)]
          "
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
              </div>

              {/* Top Gradient Border */}
              <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

              <CardContent className="relative flex h-full flex-col p-5 sm:p-7">
                {/* Quote Header */}
                <div className="flex items-start justify-between">
                  <div
                    className="
                  flex h-12 sm:h-14 w-12 sm:w-14
                  items-center justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  from-blue-500/10
                  via-indigo-500/10
                  to-cyan-500/10

                  text-blue-600
                "
                  >
                    <Quote className="h-5 sm:h-6 w-5 sm:w-6" />
                  </div>

                  {/* Decorative Dots */}
                  <div className="flex gap-1 sm:gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/70" />
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                  </div>
                </div>

                {/* Review Content */}
                <blockquote
                  className="
                pt-5 sm:pt-6

                text-sm sm:text-[15px]

                leading-relaxed

                text-neutral-600

                flex-grow
              "
                  itemProp="reviewBody"
                >
                  {testimonial.content}
                </blockquote>

                {/* Divider */}
                <div className="mt-6 sm:mt-7 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

                {/* Author */}
                <div
                  className="mt-4 sm:mt-5 flex items-center gap-3 sm:gap-4"
                  itemScope
                  itemProp="author"
                  itemType="https://schema.org/Person"
                >
                  {/* Avatar */}
                  <div
                    className="
                  flex h-11 sm:h-12 w-11 sm:w-12
                  items-center justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  from-blue-600
                  via-indigo-500
                  to-cyan-500

                  text-white
                  font-semibold
                  text-sm
                  shadow-md
                "
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  {/* Author Info */}
                  <div>
                    <h4
                      className="
                    text-sm sm:text-[15px]
                    font-semibold
                    text-neutral-900

                    transition-colors duration-300
                    group-hover:text-blue-600
                  "
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
              </CardContent>
            </Card>
          ))}
        </section>
      )}

      {/* CTA Section */}
      <section
        aria-label="Call to action to contact Pawan Kumavat"
        className="relative isolate overflow-hidden"
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Main Glow */}
          <div
            className="
          absolute left-1/2 top-[-10rem]
          h-[28rem] sm:h-[34rem]
          w-[28rem] sm:w-[34rem]
          -translate-x-1/2
          rounded-full
          bg-blue-500/12
          blur-[120px]
        "
          />

          {/* Secondary Glow */}
          <div
            className="
          absolute bottom-[-8rem] right-[-4rem]
          h-[18rem] sm:h-[24rem]
          w-[18rem] sm:w-[24rem]
          rounded-full
          bg-indigo-500/12
          blur-[100px]
        "
          />

          {/* Grid Pattern */}
          <div
            className="
          absolute inset-0
          bg-[linear-gradient(to_right,#e5e7eb12_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb12_1px,transparent_1px)]
          bg-[size:38px_38px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]
        "
          />
        </div>

        <Card
          className="
        group relative overflow-hidden

        rounded-[28px] sm:rounded-[36px]

        border border-neutral-200/70

        bg-white/80 backdrop-blur-2xl

        shadow-[0_25px_80px_rgba(15,23,42,0.08)]

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
          relative text-center

          px-5 sm:px-10 lg:px-14
          py-12 sm:py-16 lg:py-20
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
                Available For New Projects
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
            mx-auto mt-6 sm:mt-8 max-w-4xl

            text-3xl sm:text-5xl lg:text-6xl

            font-bold tracking-tight leading-[1.05]

            text-neutral-900
          "
            >
              Let’s Build
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                Something Exceptional
              </span>
            </h2>

            {/* Divider */}
            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3">
              <div className="h-px w-6 sm:w-10 bg-neutral-300" />
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500" />
              <div className="h-[2px] sm:h-[3px] w-14 sm:w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-indigo-500" />
              <div className="h-px w-6 sm:w-10 bg-neutral-300" />
            </div>

            {/* Description */}
            <p
              className="
            mx-auto mt-6 sm:mt-7 max-w-xl sm:max-w-2xl

            text-sm sm:text-base lg:text-lg

            leading-relaxed

            text-neutral-600
          "
            >
              I collaborate with startups, founders, and businesses to create
              modern web experiences with scalable architecture, clean design,
              and high-performance development.
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

              rounded-2xl px-6 sm:px-8 py-5 sm:py-6

              bg-neutral-900
              text-white font-semibold tracking-tight

              transition-all duration-500
              hover:-translate-y-1

              shadow-[0_10px_40px_rgba(0,0,0,0.12)]
              hover:shadow-[0_18px_60px_rgba(37,99,235,0.22)]
            "
              >
                <Link
                  href="/contact"
                  className="relative z-10 flex items-center gap-3 justify-center"
                >
                  {/* Animated Background */}
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />

                  {/* Shine */}
                  <span className="absolute -left-full top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/button:left-[140%] transition-all duration-1000" />

                  <span className="text-sm sm:text-base">
                    Start Your Project
                  </span>

                  <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md group-hover/button:bg-white/20 transition-all">
                    <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300" />
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

              rounded-2xl px-6 sm:px-8 py-5 sm:py-6

              border border-neutral-300/80

              bg-white/80 backdrop-blur-xl

              text-neutral-800 font-semibold

              hover:text-blue-600
              hover:border-blue-500

              transition-all duration-300
            "
              >
                <Link
                  href="/projects"
                  className="flex items-center gap-3 justify-center"
                >
                  <span className="text-sm sm:text-base">View My Work</span>
                </Link>
              </Button>
            </div>

            {/* Bottom Note */}
            <div
              className="
            mt-8 sm:mt-10

            inline-flex items-center gap-2

            rounded-full

            border border-neutral-200/70

            bg-white/70

            px-3 sm:px-4 py-1.5 sm:py-2

            text-xs sm:text-sm text-neutral-500
          "
            >
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Trusted by clients for clean code & modern UI
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default TestimonialsClientPage;
