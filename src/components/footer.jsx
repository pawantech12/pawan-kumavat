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
  {
    name: "GitHub",
    href: "https://github.com/pawantech12",
    icon: Github,
    aria: "Visit my GitHub profile",
    rel: "me",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pawan-kumavat-11b105297/",
    icon: Linkedin,
    aria: "Visit my LinkedIn profile",
    rel: "me",
  },
  {
    name: "Email",
    href: "mailto:pawankumavat042@gmail.com",
    icon: Mail,
    aria: "Send me an email",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t" aria-label="Site footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="flex items-center space-x-2 mb-4"
            >
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Pawan.K</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Full Stack Developer passionate about creating exceptional digital
              experiences with modern technologies and clean, efficient code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel={social.rel || "noopener noreferrer"}
                    aria-label={social.aria}
                    title={social.name}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    title={`Go to ${item.name} page`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-600">
              <p>Kalyan(W),Thane,Maharashtra</p>
              <Link
                href="mailto:pawankumavat042@gmail.com"
                className="hover:text-blue-600 transition-colors block"
                aria-label="Send email to pawankumavat042@gmail.com"
              >
                pawankumavat042@gmail.com
              </Link>
              <Link
                href="tel:+919619579304"
                aria-label="Call +91 9619579304"
                className="hover:text-blue-600 transition-colors block"
              >
                +91 9619579304
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Pawan.K. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
