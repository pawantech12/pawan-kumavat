import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-label="Contact section - Let's Work Together"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Main Glow */}
        <div
          className="
      absolute left-1/2 top-[-10rem] sm:top-[-12rem]
      h-[22rem] sm:h-[30rem] lg:h-[34rem]
      w-[22rem] sm:w-[30rem] lg:w-[34rem]
      -translate-x-1/2
      rounded-full
      bg-blue-500/12
      blur-[100px] sm:blur-[120px] lg:blur-[140px]
    "
        />

        {/* Secondary Glow */}
        <div
          className="
      absolute bottom-[-6rem] sm:bottom-[-8rem] right-[-3rem] sm:right-[-4rem]
      h-[16rem] sm:h-[20rem] lg:h-[24rem]
      w-[16rem] sm:w-[20rem] lg:w-[24rem]
      rounded-full
      bg-indigo-500/12
      blur-[80px] sm:blur-[100px] lg:blur-[120px]
    "
        />

        {/* Grid */}
        <div
          className="
      absolute inset-0
      bg-[linear-gradient(to_right,#e5e7eb12_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb12_1px,transparent_1px)]
      bg-[size:32px_32px] sm:bg-[size:40px_40px] lg:bg-[size:48px_48px]
      [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]
    "
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Card
          className="
      group relative overflow-hidden

      rounded-2xl sm:rounded-[2rem]

      border border-neutral-200/70

      bg-white/75 backdrop-blur-2xl

      shadow-[0_20px_60px_rgba(15,23,42,0.08)]
      sm:shadow-[0_25px_80px_rgba(15,23,42,0.08)]

      transition-all duration-500
      hover:shadow-[0_35px_100px_rgba(37,99,235,0.14)]
    "
        >
          {/* Top Border */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

          {/* Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -top-20 sm:-top-24 -left-20 sm:-left-24 h-40 sm:h-60 w-40 sm:w-60 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-20 sm:-bottom-24 -right-20 sm:-right-24 h-40 sm:h-60 w-40 sm:w-60 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <CardContent
            className="
        relative text-center

        px-5 sm:px-10 lg:px-14
        py-12 sm:py-14 lg:py-16
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
                Available For New Opportunities
              </span>
            </div>

            {/* Heading */}
            <h2
              id="contact-heading"
              className="
          mx-auto mt-6 sm:mt-8 max-w-4xl

          text-2xl sm:text-4xl lg:text-6xl

          font-bold tracking-tight leading-[1.1]

          text-neutral-900
        "
            >
              Let’s Create
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
              I help startups and businesses turn ideas into scalable digital
              products with modern UI, clean architecture, and high performance.
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
          "
              >
                <Link
                  href="/contact"
                  className="relative z-10 flex items-center gap-3 justify-center sm:justify-start"
                >
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />

                  <span className="text-sm sm:text-base">Start a Project</span>
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

            hover:text-blue-600 hover:border-blue-500

            transition-all duration-300
          "
              >
                <Link
                  href="mailto:pawankumavat042@gmail.com"
                  className="flex items-center gap-3 justify-center sm:justify-start"
                >
                  <span className="text-sm sm:text-base">Send Email</span>
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
              Typically responds within 24 hours
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
