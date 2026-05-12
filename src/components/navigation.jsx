"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Menu,
  Code2,
  Github,
  Linkedin,
  Mail,
  LayoutDashboard,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await axios.get("/api/admin/session");

        if (res.data.authenticated) {
          setIsAdmin(true);
        }
      } catch {
        setIsAdmin(false);
      }
    };

    checkSession();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "border-b border-neutral-200/70 bg-white/75 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 select-none"
          >
            <div
              className="relative flex h-11 w-11 items-center justify-center
              rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500
              shadow-lg shadow-blue-500/20 transition-all duration-300
              group-hover:scale-105"
            >
              <Code2 className="h-5 w-5 text-white" />

              <div
                className="absolute inset-0 rounded-2xl ring-1 ring-white/20"
              />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-neutral-900">
                Pawan
                <span className="text-blue-600">.dev</span>
              </span>

              <span className="text-xs text-neutral-500 font-medium">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="max-[1020px]:hidden flex items-center gap-1
            rounded-full border border-neutral-200/70
            bg-white/70 backdrop-blur-xl
            px-2 py-2 shadow-sm"
          >
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium
                  transition-all duration-300
                  ${
                    active
                      ? "text-blue-600"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                >
                  {active && (
                    <span
                      className="absolute inset-0 rounded-full
                      bg-blue-50 border border-blue-100"
                    />
                  )}

                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="max-[1020px]:hidden flex items-center gap-2">
            {/* Social Icons */}
            <div
              className="flex items-center gap-1 rounded-full
              border border-neutral-200/70 bg-white/70
              backdrop-blur-xl p-1 shadow-sm"
            >
              {/* GitHub */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full text-neutral-600
                hover:bg-neutral-100 hover:text-neutral-900
                transition-all duration-300"
              >
                <Link
                  href="https://github.com/pawantech12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>

              {/* LinkedIn */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full text-neutral-600
                hover:bg-blue-50 hover:text-blue-600
                transition-all duration-300"
              >
                <Link
                  href="https://www.linkedin.com/in/pawan-kumavat-11b105297/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>

              {/* Mail */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full text-neutral-600
                hover:bg-purple-50 hover:text-purple-600
                transition-all duration-300"
              >
                <Link href="mailto:pawankumavat042@gmail.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* CTA */}
            <Button
              asChild
              className="ml-2 rounded-full px-5 py-5
              bg-neutral-900 text-white
              hover:bg-blue-600
              shadow-md transition-all duration-300
              hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Let’s Talk
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>

            {/* Admin */}
            {isAdmin && (
              <Button
                size="sm"
                asChild
                className="rounded-full bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/admin">
                  <LayoutDashboard className="h-4 w-4 mr-1" />
                  Admin
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="min-[1020px]:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl border border-neutral-200 bg-white/80
                backdrop-blur-xl shadow-sm"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] border-l border-neutral-200
              bg-white/95 backdrop-blur-2xl"
            >
              {/* Mobile Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="flex h-10 w-10 items-center justify-center
                  rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600"
                >
                  <Code2 className="h-5 w-5 text-white" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-neutral-900">
                    Pawan
                    <span className="text-blue-600">.dev</span>
                  </h2>

                  <p className="text-xs text-neutral-500">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Mobile Nav */}
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium
                      transition-all duration-300
                      ${
                        active
                          ? "bg-blue-50 text-blue-600 border border-blue-100"
                          : "text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Footer */}
              <div className="mt-10 border-t border-neutral-200 pt-6">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <Link
                      href="https://github.com/pawantech12"
                      target="_blank"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <Link
                      href="https://www.linkedin.com/in/pawan-kumavat-11b105297/"
                      target="_blank"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full"
                  >
                    <Link href="mailto:pawankumavat042@gmail.com">
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <Button
                  asChild
                  className="mt-6 w-full rounded-2xl
                  bg-neutral-900 hover:bg-blue-600"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Let’s Work Together
                  </Link>
                </Button>

                {isAdmin && (
                  <Button
                    asChild
                    className="mt-3 w-full rounded-2xl bg-blue-600"
                  >
                    <Link href="/admin">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Admin Dashboard
                    </Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}