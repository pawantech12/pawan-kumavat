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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            className="relative hover:shadow-lg transition-shadow duration-300 h-full"
          >
            <CardContent className="p-6 flex flex-col h-full">
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="h-6 w-6" />
              </div>

              <p className="text-gray-600 my-4 leading-relaxed flex-grow">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="space-y-3 mt-auto">
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="outline" asChild>
          <Link href="/testimonials">
            View All Testimonials
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
