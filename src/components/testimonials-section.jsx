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
        </div>
      )}

      <div className="text-center">
        <Button
          size="lg"
          className="
  group relative overflow-hidden
  rounded-xl px-6 py-6
  font-semibold text-white
  bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
  shadow-[0_12px_35px_rgba(79,70,229,0.35)]
  hover:shadow-[0_18px_55px_rgba(79,70,229,0.45)]
  transition-all duration-300
  hover:-translate-y-[2px]
  "
        >
          <Link
            href="/testimonials"
            aria-label="Read all client testimonials"
            className="relative z-10 flex items-center gap-3"
          >
            <span className="tracking-tight">View All Testimonials</span>

            <span
              className="
      flex items-center justify-center
      w-7 h-7 rounded-lg
      bg-white/20
      transition-all duration-300
      group-hover:bg-white/30
      "
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* subtle gradient sweep animation */}
          <span
            className="
    pointer-events-none absolute inset-0
    bg-gradient-to-r from-transparent via-white/20 to-transparent
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
    "
          />
        </Button>
      </div>
    </section>
  );
}
