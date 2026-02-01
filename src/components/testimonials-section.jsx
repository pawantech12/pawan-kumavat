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
      <div className="text-center mb-12 space-y-6 relative">
        {/* Subtle terminal glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl -z-10 rounded-lg"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-mono relative inline-block">
          {/* Terminal cursor */}
          <span className="before:content-['>_'] before:text-blue-500 animate-pulse mr-2"></span>
          {/* Main title */}
          What Clients
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Say
          </span>
          {/* Animated underline */}
          <span className="absolute -bottom-1 max-sm:left-1/2 max-sm:-translate-x-1/2 right-0 w-2/5 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </h2>

        {/* Subtext / Description */}
        <p className="relative text-lg font-mono text-gray-100 max-w-2xl mx-auto bg-gray-900/80 rounded-2xl p-5 border-l-4 border-blue-500 shadow-lg overflow-hidden">
          {/* Top neon bar */}
          <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl"></span>

          {/* Terminal-style content */}
          <span className="block before:content-['>_'] before:text-blue-400 before:mr-2">
            Real feedback from clients who trusted me to build reliable,
            high-performance web solutions.
          </span>
        </p>
      </div>

      {loading ? (
        <SectionLoader text="Loading Testimonials..." />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
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
        </div>
      )}

      <div className="text-center">
        <Button
          size="lg"
          asChild
          className="
      relative overflow-hidden px-5 py-5 rounded-xl
      font-mono font-semibold text-white
      bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
      shadow-[0_10px_30px_rgba(99,102,241,0.35)]
      hover:shadow-[0_15px_45px_rgba(99,102,241,0.55)]
      transition-all duration-300
      group
    "
        >
          <Link
            href="/testimonials"
            aria-label="Read all client testimonials"
            className="relative z-10 flex items-center gap-3"
          >
            {/* Terminal prefix */}
            <span className="text-green-300 font-mono animate-pulse">
              {">_"}
            </span>

            <span className="tracking-wide">View All Testimonials</span>

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
