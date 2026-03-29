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
  { name: "Email", href: "mailto:pawankumavat042@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-5">
          <Link href="/" className="flex items-center gap-3 select-none">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl
  bg-gradient-to-br from-blue-600 to-indigo-600
  shadow-md"
            >
              <Code2 className="h-5 w-5 text-white" />
            </div>

            <div className="flex items-center text-lg font-semibold tracking-tight">
              <span className="text-neutral-800">Pawan</span>
              <span className="text-blue-600">.dev</span>
            </div>
          </Link>

          <p className="text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
            Crafting modern, scalable, and production-ready web applications
            with a clean architecture and optimized user experiences.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                aria-label={name}
                className="group relative p-1 rounded-full transition-all hover:bg-blue-50 dark:hover:bg-blue-900/30"
              >
                <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 transition-all" />
              </Link>
            ))}
          </div>

          <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
            // Open for freelance & collaborations
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Navigation
          </h3>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Contact
          </h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
            <p>// Kalyan (W), Thane, MH</p>
            <Link
              href="mailto:pawankumavat042@gmail.com"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition block"
            >
              pawankumavat042@gmail.com
            </Link>
            <Link
              href="tel:+919619579304"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition block"
            >
              +91 96195 79304
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-6 text-sm text-gray-500 dark:text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3 px-6">
        <p>© {new Date().getFullYear()} pawan.dev — all rights reserved</p>
        <p className="flex items-center gap-1">
          built with <Heart className="h-4 w-4 text-red-500" /> & clean code
        </p>
      </div>
    </footer>
  );
}
