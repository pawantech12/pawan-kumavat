import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="relative isolate overflow-hidden py-20"
      aria-label="Contact section - Let's Work Together"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[22rem] w-[22rem] rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <Card className="relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-white/70 backdrop-blur-xl shadow-[0_30px_80px_rgba(37,99,235,0.12)]">
          <CardContent className="relative p-10 sm:p-14 text-center">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Available for new opportunities
            </div>

            {/* Heading */}
            <h2
              id="contact-heading"
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900"
            >
              Let’s Build Something Great Together
            </h2>

            {/* Description */}
            <p className="mt-6 text-neutral-600 text-lg max-w-2xl mx-auto leading-relaxed">
              I help startups, founders, and businesses transform ideas into
              scalable, high-performance web applications. If you're planning
              your next digital product, I'd love to collaborate.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA */}
              <Button
                size="lg"
                asChild
                className="group rounded-xl px-7 py-5 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
              >
                <Link
                  href="/contact"
                  aria-label="Go to contact page to discuss a project"
                  className="flex items-center gap-2"
                >
                  Start a Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl px-7 py-5 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all"
              >
                <Link
                  href="mailto:pawankumavat042@gmail.com"
                  aria-label="Send email to Pawan Kumavat"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Send Email
                </Link>
              </Button>
            </div>

            {/* Bottom Note */}
            <p className="mt-8 text-sm text-neutral-500">
              Typically responds within 24 hours
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
