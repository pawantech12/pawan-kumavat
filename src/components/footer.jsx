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
    <footer
      className="
  relative overflow-hidden
  border-t border-neutral-200/70
  bg-white/80 backdrop-blur-2xl
"
    >
      {/* Top Gradient Border */}
      <div
        className="
    absolute inset-x-0 top-0 h-[2px]
    bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500
  "
      />

      <div
        className="
    mx-auto max-w-7xl
    px-4 sm:px-6 lg:px-6
    py-12 sm:py-16 lg:py-20

    grid grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4

    gap-10 sm:gap-12 lg:gap-16
  "
      >
        {/* Brand Section */}
        <div className="lg:col-span-2">
          {/* Logo */}
          <Link
            href="/"
            className="
        inline-flex items-center gap-3
        select-none
      "
          >
            <div
              className="
          relative flex
          h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12
          items-center justify-center

          rounded-2xl

          bg-gradient-to-br from-blue-600 via-indigo-500 to-cyan-500

          shadow-lg shadow-blue-500/20
        "
            >
              <div className="absolute inset-0 rounded-2xl bg-white/10" />
              <Code2 className="relative h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>

            <div className="flex items-center text-lg sm:text-xl font-bold tracking-tight">
              <span className="text-neutral-900">Pawan</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                .dev
              </span>
            </div>
          </Link>

          {/* Description */}
          <p
            className="
        mt-5 sm:mt-6
        max-w-md

        text-sm sm:text-[15px]
        leading-relaxed
        text-neutral-600
      "
          >
            Crafting clean, scalable, and high-performance web applications with
            modern technologies, optimized UX, and production-ready
            architecture.
          </p>

          {/* Availability */}
          <div
            className="
        mt-5 sm:mt-6

        inline-flex items-center gap-2.5

        rounded-full
        border border-neutral-200/70
        bg-white/80 backdrop-blur-xl

        px-3 sm:px-4 py-1.5 sm:py-2

        shadow-sm
      "
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-70 animate-ping" />
              <span className="relative inline-flex h-full w-full rounded-full bg-green-500" />
            </span>

            <span className="text-[11px] sm:text-xs text-neutral-700">
              Available for freelance & collaborations
            </span>
          </div>

          {/* Social Links */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                aria-label={name}
                className="
            group relative

            flex h-10 w-10 sm:h-11 sm:w-11
            items-center justify-center

            rounded-2xl

            border border-neutral-200/70
            bg-white/80 backdrop-blur-xl

            text-neutral-600

            shadow-sm

            transition-all duration-300
            hover:-translate-y-1
            hover:border-blue-200
            hover:text-blue-600
          "
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon className="relative h-4 w-4 sm:h-4.5 sm:w-4.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3
            className="
        text-xs sm:text-sm font-semibold uppercase
        tracking-[0.18em]
        text-neutral-900
      "
          >
            Navigation
          </h3>

          <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="
              group inline-flex items-center gap-2

              text-sm text-neutral-600

              transition-colors duration-300
              hover:text-blue-600
            "
                >
                  <span
                    className="
                h-[2px] w-0 rounded-full
                bg-gradient-to-r from-blue-500 to-indigo-500
                transition-all duration-300
                group-hover:w-4
              "
                  />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="
        text-xs sm:text-sm font-semibold uppercase
        tracking-[0.18em]
        text-neutral-900
      "
          >
            Contact
          </h3>

          <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
            {[
              { label: "Location", value: "Kalyan (W), Thane, Maharashtra" },
              { label: "Email", value: "mailto:pawankumavat042@gmail.com" },
              { label: "Phone", value: "tel:+919619579304" },
            ].map((item, i) => (
              <div
                key={i}
                className="
            rounded-2xl
            border border-neutral-200/70

            bg-white/70 backdrop-blur-xl

            p-3 sm:p-4

            shadow-sm
          "
              >
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400">
                  {item.label}
                </p>

                {item.label === "Location" ? (
                  <p className="mt-1 text-sm text-neutral-700">{item.value}</p>
                ) : (
                  <Link
                    href={item.value}
                    className="
                mt-1 inline-block text-sm text-neutral-700
                hover:text-blue-600 transition-colors
              "
                  >
                    {item.value.replace("mailto:", "").replace("tel:", "")}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200/70 bg-white/60 backdrop-blur-xl">
        <div
          className="
      mx-auto max-w-7xl

      px-4 sm:px-6

      py-5 sm:py-6

      flex flex-col md:flex-row
      items-center justify-between

      gap-3

      text-xs sm:text-sm text-neutral-500
    "
        >
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} pawan.dev — all rights reserved
          </p>

          <p className="flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-500" /> clean UI &
            modern design
          </p>
        </div>
      </div>
    </footer>
  );
}
