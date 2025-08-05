import { Card, CardContent } from "@/components/ui/card";
import { Quote, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Testimonials | Pawan Kumavat - Full Stack Developer",
  description:
    "Read what clients and colleagues say about working with John Doe, a skilled full-stack developer.",
  url: "https://pawan-kumavat.vercel.app/testimonials",
});

const allTestimonials = [
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
  {
    name: "Vikram Patil",
    role: "Local Electronics Store Owner",
    content:
      "Pawan transformed my outdated website into a modern e-commerce platform. Now, my customers can browse and buy products online seamlessly. He even guided me on hosting and maintenance!",
  },
  {
    name: "Gaurav Singh",
    role: "Project Teammate",
    content:
      "Working with Pawan on our web development project was an amazing experience. His skills in frontend and backend development helped us build a fully functional app on time. Always supportive and ready to solve challenges!",
  },
  {
    name: "Sandeep Yadav",
    role: "Small Tech Startup",
    content:
      "We needed a fast and scalable web app for our small tech startup. Pawan's expertise in MERN stack and hosting platforms like Vercel made the deployment effortless. He’s a problem solver!",
  },
  {
    name: "Abhishek Kumar",
    role: "Small Ecommerce Store Owner",
    content:
      "Pawan did an excellent job developing my e-commerce website with Razorpay payment integration. The site is fast, secure, and user-friendly. Highly recommended!",
  },
  {
    name: "Manoj Sharma",
    role: "Backend Developer",
    content:
      "Pawan did an excellent job migrating our React frontend to Next.js, ensuring seamless integration with the backend. His expertise in Next.js and Tailwind CSS greatly improved performance and user experience. Highly recommended!",
  },
];

export default function TestimonialsPage() {
  return (
    <main
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-label="Client testimonials and feedback about Pawan Kumavat"
    >
      {/* Header */}
      <header className="text-center space-y-4 mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Client Testimonials
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t just take my word for it. Here&apos;s what clients and
          colleagues have to say about working with me.
        </p>
      </header>

      {/* Testimonials Grid */}
      <section
        aria-label="Testimonial Cards Section"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {allTestimonials.map((testimonial, index) => (
          <article
            key={index}
            className="relative hover:shadow-lg transition-shadow duration-300 h-full"
            aria-label={`Testimonial from ${testimonial.name}`}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="absolute top-4 right-4 text-blue-200">
                  <Quote className="h-6 w-6" aria-hidden="true" />
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
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </section>

      {/* CTA Section */}
      <section aria-label="Call to action to contact Pawan Kumavat">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join these satisfied clients and let&apos;s create something
              amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link
                  href="/contact"
                  aria-label="Start your project with Pawan Kumavat"
                >
                  Start Your Project
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link
                  href="mailto:john@example.com"
                  aria-label="Send an email to Pawan Kumavat"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
