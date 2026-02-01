import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="container mx-auto  px-4 sm:px-6 lg:px-8"
      aria-label="Contact section - Let's Work Together"
    >
      <Card className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <CardContent className="relative p-8 sm:p-12 text-center">
          {/* Terminal / code hint */}
          <div className="mb-4 text-sm font-mono text-indigo-600">
            <span className="text-gray-400">// init collaboration</span>
            <br />
            <span>{">_"} connectClient()</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Let’s Build Something That Ships
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            I help founders and teams turn ideas into fast, scalable,
            production-ready web applications. If you’re serious about building
            something solid, let’s connect.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <Button
              size="lg"
              asChild
              className="
                relative overflow-hidden
                font-mono font-semibold
                px-6 py-5 rounded-xl
                text-white
                bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
                shadow-[0_10px_30px_rgba(99,102,241,0.35)]
                hover:shadow-[0_15px_45px_rgba(99,102,241,0.55)]
                transition-all duration-300
                group
              "
            >
              <Link
                href="/contact"
                aria-label="Go to contact page to discuss a project"
                className="relative z-10 flex items-center gap-3"
              >
                <span className="text-green-300 animate-pulse">{">_"}</span>
                <span>Start Project</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              size="lg"
              variant="outline"
              asChild
              className="
                font-mono
                px-6 py-5 rounded-xl
                border-gray-300
                text-gray-700
                hover:border-indigo-500 hover:text-indigo-600
                transition-all
              "
            >
              <Link
                href="mailto:pawankumavat042@gmail.com"
                aria-label="Send an email to pawankumavat042@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </Link>
            </Button>
          </div>

          {/* Subtle footer hint */}
          <p className="mt-8 text-xs font-mono text-gray-400">
            status: available · response_time: fast
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
