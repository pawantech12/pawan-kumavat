"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Code2,
  Github,
  Linkedin,
  Mail,
  LayoutDashboard,
} from "lucide-react";
import axios from "axios";

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
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await axios.get("/api/admin/session");
        if (res.data.authenticated) setIsAdmin(true);
      } catch {
        setIsAdmin(false);
      }
    };

    checkSession();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex py-2 items-center justify-between">
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

          {/* Desktop Navigation */}
          <nav
            className="max-[956px]:hidden flex items-center gap-1
            rounded-full border border-neutral-200/70
            bg-white/60 backdrop-blur-xl
            px-3 py-1.5
            text-sm font-medium shadow-sm"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative rounded-lg px-3 py-2 transition-all duration-200
                    ${
                      active
                        ? "text-blue-600 bg-blue-50"
                        : "text-neutral-600 hover:text-blue-600 hover:bg-neutral-100"
                    }`}
                >
                  {/* Command Text */}
                  <span className="relative font-semibold tracking-tight">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="max-[956px]:hidden flex items-center gap-3">
            {/* GitHub */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-lg border border-transparent
hover:border-neutral-200 hover:bg-neutral-100
transition-all duration-200"
            >
              <Link
                href="https://github.com/pawantech12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
              >
                <Github className="h-4 w-4 text-neutral-600 group-hover:text-neutral-900" />
              </Link>
            </Button>

            {/* LinkedIn */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="group rounded-xl border border-transparent
               hover:border-blue-200 hover:bg-blue-50
               transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link
                href="https://www.linkedin.com/in/pawan-kumavat-11b105297/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-gray-700 group-hover:text-blue-600" />
              </Link>
            </Button>

            {/* Email */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="group rounded-xl border border-transparent
               hover:border-purple-200 hover:bg-purple-50
               transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link
                href="mailto:pawankumavat042@gmail.com"
                aria-label="Send an email to Pawan Kumavat"
              >
                <Mail className="h-4 w-4 text-gray-700 group-hover:text-purple-600" />
              </Link>
            </Button>

            {/* Admin Dashboard */}
            {isAdmin && (
              <Button
                size="sm"
                className="ml-2 gap-1 rounded-lg
bg-blue-600 text-white
hover:bg-blue-700
shadow-sm"
                asChild
              >
                <Link href="/admin">
                  <LayoutDashboard className="h-4 w-4" />
                  Admin
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="min-[956px]:hidden">
              <Button variant="ghost" size="sm" aria-label="Open mobile menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] sm:w-[400px]
      bg-white backdrop-blur-xl
      border-l border-neutral-200"
            >
              {/* Header / Brand */}
              <Link
                href="/"
                className="flex items-center gap-3 select-none mb-5"
              >
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

              {/* Navigation */}
              <nav
                className="flex flex-col gap-3 font-mono"
                aria-label="Mobile navigation"
              >
                {navigation.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-lg px-4 py-3 transition-all
                        ${
                          active
                            ? "bg-blue-50 text-blue-600"
                            : "text-neutral-700 hover:bg-neutral-100"
                        }`}
                    >
                      {/* Command */}
                      <span className="font-semibold tracking-tight">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Footer Actions */}
              <div className="mt-10 pt-6 border-t flex items-center gap-3">
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://github.com/pawantech12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/pawan-kumavat-11b105297/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:pawankumavat042@gmail.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>

                {isAdmin && (
                  <Button
                    size="sm"
                    className="ml-auto gap-1 rounded-xl
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white shadow-md"
                    asChild
                  >
                    <Link href="/admin">
                      <LayoutDashboard className="h-4 w-4" />
                      Admin
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
