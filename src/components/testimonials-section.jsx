import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Small Business Owner",
    content:
      "Pawan helped me take my local shop online with a well-designed and easy-to-use website. His attention to detail and ability to deliver a fast, mobile-friendly site exceeded my expectations. Highly recommend his work!",
  },
  {
    name: "Neha Verma",
    role: "Startup Founder",
    content:
      "I needed a functional and responsive website for my startup, and Pawan delivered exactly what I was looking for. His expertise in full-stack development and API integrations made the process smooth and efficient. A great developer to work with!",
  },
  {
    name: "Rahul Singh",
    role: "Freelance Photographer",
    content:
      "I wanted a portfolio website to showcase my photography work, and Pawan built a stunning and fast-loading site using Next.js and TailwindCSS. The layout and user experience are top-notch!",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Client Testimonials"
    >
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What Clients Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don&apos;t just take my word for it. Here&apos;s what some of my
          clients have to say about working with me.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="relative h-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden group"
            itemScope
            itemType="https://schema.org/Review"
          >
            <CardContent className="p-6 flex flex-col h-full">
              {/* Quote Icon Accent */}
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="h-6 w-6" aria-hidden="true" />
              </div>

              {/* Testimonial Text */}
              <blockquote
                className="text-gray-700 dark:text-gray-300 my-4 leading-relaxed flex-grow text-[15px] sm:text-base"
                itemProp="reviewBody"
              >
                &quot;{testimonial.content}&quot;
              </blockquote>

              {/* Author Info */}
              <div className="mt-auto space-y-3 flex flex-col items-start">
                <div
                  className="flex items-center gap-3"
                  itemScope
                  itemProp="author"
                  itemType="https://schema.org/Person"
                >
                  {/* Optional: Add author avatar */}
                  {/* <Image src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" width={40} height={40} /> */}

                  <div className="flex flex-col">
                    <h4
                      className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base"
                      itemProp="name"
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm"
                      itemProp="jobTitle"
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:w-full transition-all duration-500"></div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          asChild
          className="relative overflow-hidden rounded-lg px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <Link
            href="/testimonials"
            aria-label="Read all client testimonials"
            className="relative z-10 flex items-center gap-2"
          >
            View All Testimonials
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
