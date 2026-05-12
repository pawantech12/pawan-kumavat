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
import { MessageCircle } from "lucide-react";
import { Instagram } from "lucide-react";

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
  {
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
    href: "https://www.instagram.com/pawantech12/",
  },
];

export default function ContactPage() {
  return (
    <>
      <main
        className="relative isolate overflow-hidden py-12 sm:py-16 lg:py-20"
        aria-label="Contact page for Pawan Kumavat"
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Main Glow */}
          <div
            className="
        absolute left-1/2 top-[-10rem]
        h-[24rem] sm:h-[30rem] lg:h-[36rem]
        w-[24rem] sm:w-[30rem] lg:w-[36rem]
        -translate-x-1/2 rounded-full
        bg-blue-500/10 blur-[110px]
      "
          />

          {/* Secondary Glow */}
          <div
            className="
        absolute bottom-[-8rem] right-[-4rem]
        h-[18rem] sm:h-[22rem] lg:h-[26rem]
        w-[18rem] sm:w-[22rem] lg:w-[26rem]
        rounded-full
        bg-indigo-500/10 blur-[100px]
      "
          />

          {/* Grid */}
          <div
            className="
        absolute inset-0
        bg-[linear-gradient(to_right,#e5e7eb10_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb10_1px,transparent_1px)]
        bg-[size:36px_36px]
        [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]
      "
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="relative mb-14 sm:mb-16 lg:mb-20 text-center">
              {/* Glow */}
              <div className="absolute inset-0 -z-10 flex justify-center">
                <div
                  className="
              h-[170px] sm:h-[210px] lg:h-[240px]
              w-[300px] sm:w-[420px] lg:w-[520px]
              rounded-full
              bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10
              blur-3xl
            "
                />
              </div>

              {/* Badge */}
              <div
                className="
            inline-flex items-center gap-2 sm:gap-2.5
            rounded-full border border-neutral-200/70
            bg-white/80 backdrop-blur-xl
            px-4 sm:px-5 py-1.5 sm:py-2
            shadow-sm
          "
              >
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-blue-600" />
                </span>

                <span
                  className="
              text-[10px] sm:text-[11px]
              font-semibold uppercase tracking-[0.2em]
              text-blue-600
            "
                >
                  Contact
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
            mt-5 sm:mt-7
            text-3xl sm:text-4xl lg:text-5xl
            font-bold tracking-tight leading-[1.1]
            text-neutral-900
          "
              >
                Let’s Build
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                  Something Meaningful
                </span>
              </h2>

              {/* Divider */}
              <div className="mt-5 sm:mt-7 flex items-center justify-center gap-2 sm:gap-3">
                <div className="h-px w-6 sm:w-10 bg-neutral-300" />

                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />

                <div className="h-[2px] sm:h-[3px] w-14 sm:w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />

                <div className="h-px w-6 sm:w-10 bg-neutral-300" />
              </div>

              {/* Description */}
              <p
                className="
            mx-auto mt-5 sm:mt-6
            max-w-xl sm:max-w-2xl
            text-sm sm:text-base lg:text-lg
            leading-relaxed text-neutral-600
          "
              >
                I’m always interested in collaborating on modern web
                applications, scalable platforms, and creative digital products.
                Let’s discuss your next project.
              </p>
            </div>

            {/* Main Content */}
            <section
              aria-labelledby="contact-information"
              className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8"
            >
              {/* Left Side */}
              <div className="space-y-6">
                {/* Contact Information */}
                <Card
                  className="
              group relative overflow-hidden

              rounded-[26px]
              border border-neutral-200/70

              bg-white/80 backdrop-blur-2xl

              shadow-[0_10px_40px_rgba(0,0,0,0.05)]

              transition-all duration-500
              hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
            "
                >
                  {/* Top Border */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
                  </div>

                  <CardHeader className="relative px-6 sm:px-8 pt-7 pb-3">
                    <CardTitle
                      className="
                  text-xl sm:text-2xl
                  font-semibold tracking-tight
                  text-neutral-900
                "
                    >
                      Contact Information
                    </CardTitle>

                    <p className="text-sm text-neutral-500 mt-1">
                      Reach out through any of the platforms below
                    </p>
                  </CardHeader>

                  <CardContent className="relative px-6 sm:px-8 pb-8 space-y-4">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="
                    group/item
                    relative flex items-start sm:items-center
                    gap-4

                    rounded-2xl
                    border border-neutral-200/70

                    bg-white/80 backdrop-blur-xl

                    p-4 sm:p-5

                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-md
                  "
                      >
                        {/* Icon */}
                        <div
                          className="
                      flex h-11 w-11 sm:h-12 sm:w-12
                      items-center justify-center

                      rounded-2xl

                      bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-500

                      text-white shadow-sm

                      transition-transform duration-300
                      group-hover/item:scale-105
                    "
                        >
                          {info.icon}
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-neutral-900">
                            {info.label}
                          </p>

                          {info.href === "#" ? (
                            <p className="mt-1 text-sm text-neutral-600 break-all">
                              {info.value}
                            </p>
                          ) : (
                            <Link
                              href={info.href}
                              aria-label={`Contact via ${info.label}`}
                              className="
                          mt-1 inline-flex items-center gap-2
                          text-sm font-medium text-blue-600
                          hover:text-blue-500
                          transition-colors break-all
                        "
                            >
                              {info.value}
                            </Link>
                          )}
                        </div>

                        {/* Arrow */}
                        <span className="hidden sm:flex opacity-0 group-hover/item:opacity-100 transition-all duration-300 text-blue-500">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card
                  className="
              group relative overflow-hidden

              rounded-[26px]
              border border-neutral-200/70

              bg-neutral-900

              shadow-[0_20px_60px_rgba(15,23,42,0.18)]

              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0_30px_80px_rgba(37,99,235,0.22)]
            "
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-cyan-500/20 opacity-80" />

                  {/* Glow */}
                  <div className="absolute -top-24 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

                  <CardContent className="relative p-7 sm:p-10 text-center">
                    {/* Badge */}
                    <div
                      className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/10
                  bg-white/10 backdrop-blur-xl
                  px-4 py-2
                "
                    >
                      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">
                        Available For Freelance Work
                      </span>
                    </div>

                    {/* Heading */}
                    <h3
                      className="
                  mt-6
                  text-2xl sm:text-3xl
                  font-bold tracking-tight leading-tight
                  text-white
                "
                    >
                      Have a Project
                      <br />
                      <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                        In Mind?
                      </span>
                    </h3>

                    {/* Description */}
                    <p
                      className="
                  mx-auto mt-5 max-w-xl
                  text-sm sm:text-base
                  leading-relaxed
                  text-neutral-300
                "
                    >
                      I help startups and businesses create scalable,
                      high-performance digital products with modern UI and clean
                      architecture.
                    </p>

                    {/* Button */}
                    <div className="mt-8 flex justify-center">
                      <Button
                        asChild
                        size="lg"
                        className="
                    group/button relative isolate overflow-hidden

                    rounded-2xl px-7 py-6

                    bg-white
                    text-neutral-900 font-semibold

                    transition-all duration-500
                    hover:-translate-y-1
                  "
                      >
                        <Link
                          href="mailto:pawankumavat042@gmail.com"
                          aria-label="Send a quick email to Pawan Kumavat"
                          className="relative z-10 flex items-center gap-3"
                        >
                          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500" />

                          <Mail className="h-4 w-4 transition-transform duration-300 group-hover/button:rotate-6" />

                          <span className="group-hover/button:text-white transition-colors duration-300">
                            Send Me an Email
                          </span>
                        </Link>
                      </Button>
                    </div>

                    {/* Bottom Note */}
                    <div
                      className="
                  mt-8 inline-flex items-center gap-2

                  rounded-full
                  border border-white/10

                  bg-white/10 backdrop-blur-xl

                  px-4 py-2

                  text-xs sm:text-sm text-neutral-300
                "
                    >
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      Typically responds within 24 hours
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side */}
              <div className="space-y-6">
                {/* Social Links */}
                <Card
                  className="
              group relative overflow-hidden

              rounded-[26px]
              border border-neutral-200/70

              bg-white/80 backdrop-blur-2xl

              shadow-[0_10px_40px_rgba(0,0,0,0.05)]

              transition-all duration-500
              hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
            "
                >
                  {/* Top Border */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                  </div>

                  <CardHeader className="relative px-6 sm:px-8 pt-7 pb-3">
                    <CardTitle
                      className="
                  text-xl sm:text-2xl
                  font-semibold tracking-tight
                  text-neutral-900
                "
                    >
                      Follow Me
                    </CardTitle>

                    <p className="text-sm text-neutral-500 mt-1">
                      Connect with me on social platforms
                    </p>
                  </CardHeader>

                  <CardContent className="relative px-6 sm:px-8 pb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {socialLinks.map((social, index) => (
                        <Link
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Follow on ${social.label}`}
                          className="
                      group/social
                      flex items-center gap-4

                      rounded-2xl
                      border border-neutral-200/70

                      bg-white/80 backdrop-blur-xl

                      px-4 py-4

                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-blue-200
                      hover:shadow-md
                    "
                        >
                          {/* Icon */}
                          <div
                            className="
                        flex h-11 w-11 items-center justify-center
                        rounded-xl

                        bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-500

                        text-white shadow-sm

                        transition-transform duration-300
                        group-hover/social:scale-105
                      "
                          >
                            {social.icon}
                          </div>

                          {/* Text */}
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-neutral-900 group-hover/social:text-blue-600 transition-colors">
                              {social.label}
                            </p>

                            <p className="text-xs text-neutral-500">
                              Connect & Follow
                            </p>
                          </div>

                          <ArrowRight className="h-4 w-4 text-blue-500 opacity-0 group-hover/social:opacity-100 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Mini Info Card */}
                <Card
                  className="
    group relative overflow-hidden

    rounded-2xl sm:rounded-[26px]

    border border-neutral-200/70

    bg-white/80 backdrop-blur-2xl

    shadow-[0_10px_40px_rgba(0,0,0,0.04)]

    transition-all duration-500
    hover:-translate-y-1
    hover:border-blue-200
    hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
  "
                >
                  {/* Top Gradient Border */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                    <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />
                  </div>

                  <CardContent className="relative p-5 sm:p-7 lg:p-8">
                    <div
                      className="
        flex flex-col sm:flex-row
        items-start
        gap-4 sm:gap-5
      "
                    >
                      {/* Icon */}
                      <div
                        className="
          flex h-12 w-12 sm:h-14 sm:w-14
          items-center justify-center

          rounded-2xl

          bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-500

          text-white

          shadow-lg shadow-blue-500/20

          transition-transform duration-300
          group-hover:scale-105
        "
                      >
                        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Small Badge */}
                        <div
                          className="
            inline-flex items-center gap-2

            rounded-full

            border border-blue-100

            bg-blue-50/80

            px-3 py-1

            text-[10px] sm:text-[11px]
            font-semibold uppercase tracking-[0.18em]

            text-blue-600
          "
                        >
                          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                          Available Now
                        </div>

                        {/* Heading */}
                        <h3
                          className="
            mt-4

            text-lg sm:text-xl

            font-semibold tracking-tight

            text-neutral-900
          "
                        >
                          Open To Opportunities
                        </h3>

                        {/* Description */}
                        <p
                          className="
            mt-3

            text-sm sm:text-[15px]

            leading-relaxed

            text-neutral-600
          "
                        >
                          Available for freelance projects, frontend
                          development, full-stack web applications, UI
                          implementation, and long-term collaborations with
                          startups and businesses.
                        </p>

                        {/* Bottom Tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {[
                            "Freelance",
                            "Frontend",
                            "Full Stack",
                            "UI Development",
                          ].map((tag, index) => (
                            <span
                              key={index}
                              className="
                rounded-full
                border border-neutral-200

                bg-white/80

                px-3 py-1.5

                text-xs font-medium

                text-neutral-600

                transition-colors duration-300
                hover:border-blue-200
                hover:text-blue-600
              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
