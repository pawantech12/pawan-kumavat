import Link from "next/link";
import { Code2, Github, Linkedin, Mail, Heart } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/pawantech12", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pawan-kumavat-11b105297/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:pawankumavat042@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-gray-200 bg-white mt-5"
      aria-label="Developer footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-16 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 mb-5"
            >
              <div
                className="relative flex h-11 w-11 items-center justify-center rounded-xl
                bg-gradient-to-br from-blue-600 to-indigo-600
                shadow-[0_6px_20px_rgba(59,130,246,0.35)]
                group-hover:scale-105 transition-transform"
              >
                <Code2 className="h-5 w-5 text-white" />
                <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              </div>

              <div className="flex items-center font-mono text-lg font-semibold">
                <span className="text-gray-500">&gt;</span>
                <span className="ml-1 text-gray-800">
                  pawan<span className="text-blue-600">.dev</span>
                </span>
                <span className="ml-1 h-4 w-[2px] bg-blue-600 animate-pulse" />
              </div>
            </Link>

            <p className="max-w-md text-gray-600 leading-relaxed">
              Full-stack developer crafting scalable, maintainable and
              production-ready web applications using modern technologies and
              clean architecture.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  aria-label={name}
                  className="group relative"
                >
                  <span
                    className="absolute inset-0 rounded-xl
                    bg-gradient-to-r from-blue-600 to-indigo-600
                    opacity-0 group-hover:opacity-10 transition"
                  />
                  <Icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition" />
                </Link>
              ))}
            </div>

            {/* Status */}
            <p className="mt-4 font-mono text-xs text-gray-400">
              // status: open for freelance & collaborations
            </p>
          </div>

          {/* Navigation */}
          <nav className="font-mono">
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              $ navigation
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-gray-600 hover:text-blue-600 transition"
                  >
                    <span className="text-blue-500">$</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="font-mono">
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              $ contact
            </h3>

            <div className="space-y-2 text-sm text-gray-600">
              <p>// Kalyan (W), Thane, MH</p>

              <Link
                href="mailto:pawankumavat042@gmail.com"
                className="hover:text-blue-600 transition block"
              >
                pawankumavat042@gmail.com
              </Link>

              <Link
                href="tel:+919619579304"
                className="hover:text-blue-600 transition block"
              >
                +91 96195 79304
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-gray-200 py-6 text-sm text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} pawan.dev — all rights reserved</p>

          <p className="flex items-center gap-1">
            built with <Heart className="h-4 w-4 text-red-500" /> & clean code
          </p>
        </div>
      </div>
    </footer>
  );
}
