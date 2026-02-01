import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
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
          <header className="text-center mb-16 relative space-y-6">
            {/* Subtle terminal-style background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl -z-10 rounded-xl"></div>

            {/* Heading with terminal cursor */}
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 font-mono relative inline-block">
              <span className="before:content-['>_'] before:text-blue-500 animate-pulse"></span>
              Get In <span className="text-blue-600 ml-2">Touch</span>
              <span className="absolute -bottom-1 max-sm:left-1/2 max-sm:-translate-x-1/2 right-0 w-1/3 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full  animate-pulse-slow"></span>
            </h1>

            {/* Description in terminal-style code block */}
            <p className="relative text-gray-100 text-lg max-w-3xl mx-auto font-mono bg-gray-900/80 dark:bg-gray-800/70 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg overflow-hidden">
              {/* Neon glow top bar */}
              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl"></span>

              <span className="block before:content-['>_'] before:text-blue-400 before:mr-2 leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can work together to bring your
                ideas to life.
              </span>
            </p>
          </header>

          <section aria-labelledby="contact-information" className="">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="relative overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Header with terminal vibe */}
                <CardHeader className="px-6 py-4 relative">
                  <CardTitle className="text-2xl font-mono flex items-center gap-2">
                    <span className="text-blue-500 animate-pulse">{">_"}</span>
                    Contact Information
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 px-6 pb-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="
                      relative
                      flex flex-col sm:flex-row
                      items-start sm:items-center
                      gap-3 sm:gap-4
                      p-4
                      rounded-lg
                      border border-gray-100 dark:border-gray-700
                      hover:border-blue-500 hover:shadow-md
                      transition-all duration-300
                      group
                    "
                    >
                      {/* Icon container */}
                      <div
                        className="
                        flex items-center justify-center
                        w-11 h-11 sm:w-12 sm:h-12
                        rounded-lg
                        bg-gradient-to-br from-blue-500 to-indigo-500
                        text-white
                        shrink-0
                        group-hover:scale-110
                        transition-transform duration-300
                      "
                      >
                        {info.icon}
                      </div>

                      {/* Text content */}
                      <div className="flex flex-col gap-1 break-all sm:break-normal">
                        <p className="font-mono font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {info.label}
                        </p>

                        {info.href === "#" ? (
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {info.value}
                          </p>
                        ) : (
                          <Link
                            href={info.href}
                            className="
                            font-mono
                            text-blue-500 hover:text-blue-400
                            dark:hover:text-blue-300
                            transition-colors
                            text-sm
                            break-all sm:break-normal
                          "
                            aria-label={`Contact via ${info.label}`}
                          >
                            {info.value}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden border border-slate-200 dark:border-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Header with terminal vibe */}
                <CardHeader className="px-6 py-4 relative">
                  <CardTitle className="text-2xl font-mono flex items-center gap-2">
                    <span className="text-blue-500 animate-pulse">{">_"}</span>
                    Follow Me
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <div className="flex gap-4 flex-wrap ">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        asChild
                        className="relative group overflow-hidden font-mono px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:text-white hover:bg-indigo-500 font-semibold hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg"
                      >
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 relative z-10"
                          aria-label={`Follow on ${social.label}`}
                        >
                          <span className="text-blue-400 group-hover:text-white transition">
                            {social.icon}
                          </span>
                          <span>{social.label}</span>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card
                className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
                aria-label="CTA to collaborate or contact"
              >
                {/* Floating gradient glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20 blur-3xl animate-pulse-slow -z-10 rounded-2xl" />

                <CardContent className="relative p-6">
                  {/* Terminal header line */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs font-mono opacity-80">
                      ~/contact/cta
                    </span>
                  </div>

                  {/* Heading with terminal vibe */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-mono flex items-center gap-2 mb-3">
                    <span className="text-green-300 animate-pulse">{">_"}</span>
                    Let's Build Something Amazing
                  </h3>

                  {/* Description block */}
                  <p className="relative text-sm sm:text-base font-mono opacity-90 mb-6 bg-black/20 dark:bg-black/30 rounded-md p-4 border-l-4 border-green-400 shadow-sm">
                    <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-t-md animate-[pulse_3s_ease-in-out_infinite]" />
                    I'm passionate about creating digital solutions that make a
                    difference. Whether you have a project in mind or just want
                    to chat about technology, I'd love to hear from you.
                  </p>

                  {/* CTA Button */}
                  <Button
                    variant="secondary"
                    asChild
                    className="relative font-mono font-semibold text-indigo-500 px-6 py-4 rounded-xl bg-white hover:bg-indigo-50 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <Link
                      href="mailto:pawankumavat042@gmail.com"
                      aria-label="Send a quick email to Pawan Kumavat"
                      className="flex items-center gap-3"
                    >
                      <span className="text-indigo-600 animate-pulse">
                        {">_"}
                      </span>
                      Quick Email
                      <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
