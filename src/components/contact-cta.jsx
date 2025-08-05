import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Contact section - Let's Work Together"
    >
      <Card
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        aria-labelledby="contact-heading"
      >
        <CardContent className="p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link
                href="/contact"
                aria-label="Go to contact page to discuss opportunities"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Get In Touch
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link
                href="mailto:pawankumavat042@gmail.com"
                aria-label="Send an email to pawankumavat042@gmail.com"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
