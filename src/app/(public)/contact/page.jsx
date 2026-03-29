import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Contact | Pawan Kumavat - Full Stack Developer",
  description:
    "Get in touch with Pawan Kumavat for freelance projects and collaborations.",
  url: "https://pawan-kumavat.vercel.app/contact",
});

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "pawankumavat042@gmail.com",
    href: "mailto:pawankumavat042@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 9619579304",
    href: "tel:+919619579304",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Kalyan(W),Thane,Maharashtra",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/pawantech12",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pawan-kumavat-11b105297/",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
    href: "https://twitter.com/pawantech12",
  },
];

export default function ContactPage() {
  return (
    <>
      <main
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
        aria-label="Contact page for Pawan Kumavat"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 flex justify-center -z-10">
              <div className="w-[420px] h-[220px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
            </div>

            {/* Small Label */}
            <span className="inline-block mb-4 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
              Contact
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
              Get In <span className="text-blue-600">Touch</span>
            </h2>

            {/* Divider */}
            <div className="flex justify-center mt-4">
              <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together to bring your ideas to
              life.
            </p>
          </div>

          <section aria-labelledby="contact-information" className="">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300">
                {/* subtle top accent */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

                <CardHeader className="px-6 pt-6 pb-4">
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white flex items-center gap-3">
                    Contact Information
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 px-6 pb-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="
      group
      relative
      flex items-start sm:items-center
      gap-4
      p-4
      rounded-xl
      border border-neutral-200 dark:border-neutral-700
      bg-white dark:bg-neutral-900
      hover:border-blue-500/40
      hover:shadow-md
      transition-all duration-300
    "
                    >
                      {/* Icon */}
                      <div
                        className="
        flex items-center justify-center
        w-11 h-11
        rounded-lg
        bg-gradient-to-br from-blue-600 to-indigo-600
        text-white
        shadow-sm
        group-hover:scale-105
        transition-transform
      "
                      >
                        {info.icon}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                          {info.label}
                        </p>

                        {info.href === "#" ? (
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 break-all">
                            {info.value}
                          </p>
                        ) : (
                          <Link
                            href={info.href}
                            className="
            text-sm
            text-blue-600
            hover:text-blue-500
            font-medium
            transition-colors
            break-all
          "
                            aria-label={`Contact via ${info.label}`}
                          >
                            {info.value}
                          </Link>
                        )}
                      </div>

                      {/* hover arrow indicator */}
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition text-blue-500">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-500">
                {/* top gradient accent */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

                <CardHeader className="px-6 pt-6 pb-2">
                  <CardTitle className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
                    Follow Me
                  </CardTitle>

                  <p className="text-sm text-neutral-500 mt-1">
                    Connect with me on social platforms
                  </p>
                </CardHeader>

                <CardContent className="px-6 py-6">
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow on ${social.label}`}
                        className="group flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <span className="text-blue-600 group-hover:text-white transition">
                          {social.icon}
                        </span>

                        {social.label}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card
                className="relative overflow-hidden rounded-3xl
  border border-neutral-200 dark:border-neutral-800
  bg-white dark:bg-neutral-900
  shadow-[0_25px_70px_rgba(59,130,246,0.15)]
  hover:shadow-[0_35px_90px_rgba(59,130,246,0.25)]
  transition-all duration-500"
                aria-label="CTA to collaborate or contact"
              >
                {/* Background Glow */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl" />
                </div>

                <CardContent className="relative p-8 sm:p-10 text-center">
                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    Let’s Build Something Great Together
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto leading-relaxed">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to build impactful digital experiences. If
                    you have something in mind, feel free to reach out.
                  </p>

                  {/* CTA Button */}
                  <div className="mt-8 flex justify-center">
                    <Button
                      asChild
                      className="group relative rounded-xl px-7 py-5
        bg-blue-600 hover:bg-blue-700
        text-white font-medium
        shadow-lg hover:shadow-xl
        transition-all duration-300"
                    >
                      <Link
                        href="mailto:pawankumavat042@gmail.com"
                        className="flex items-center gap-2"
                        aria-label="Send a quick email to Pawan Kumavat"
                      >
                        <Mail className="h-4 w-4" />
                        Send Me an Email
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
