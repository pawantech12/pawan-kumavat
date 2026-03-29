"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import SectionLoader from "./section-loader";

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/services");

        setServices(res.data);
      } catch (error) {
        console.log("Errror while fetching services data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Professional Web Development Services Section"
    >
      <div className="text-center mb-16 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-[420px] h-[220px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
        </div>

        {/* Small Label */}
        <span className="inline-block mb-4 text-sm font-medium tracking-wide text-blue-600 bg-blue-50 px-4 py-1 rounded-full">
          Services
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl  font-semibold text-gray-900 tracking-tight">
          Services <span className="text-blue-600">I Offer</span>
        </h2>

        {/* Divider */}
        <div className="flex justify-center mt-4">
          <div className="h-[3px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I help businesses and individuals build modern, scalable, and
          high-performance web applications — from idea to deployment — using
          the latest web technologies.
        </p>
      </div>

      {loading ? (
        <SectionLoader text="Loading Services..." />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.HelpCircle;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden
  border border-neutral-200/60
  bg-white/70 backdrop-blur-xl
  shadow-sm hover:shadow-xl
  transition-all duration-500
  hover:-translate-y-2"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge
                      className="rounded-full px-3 py-1 text-xs font-medium
        bg-gradient-to-r from-blue-600 to-indigo-600 text-white
        shadow-md"
                    >
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  {/* Icon */}
                  <div
                    className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center mb-4
      shadow-sm group-hover:scale-110 transition-transform duration-300
      ${service.color}`}
                  >
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>

                  {/* Title */}
                  <CardTitle className="text-xl font-semibold text-neutral-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Description */}
                  <p className="text-neutral-600 text-center text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 pt-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm text-neutral-700
          transition-all duration-300 group-hover:translate-x-1"
                      >
                        {/* Check Icon */}
                        <span className="mt-[6px] h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></span>

                        {/* Feature Text */}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Bottom Gradient Hover Line */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0
    bg-gradient-to-r from-blue-600 to-indigo-600
    transition-all duration-500 group-hover:w-full"
                />
              </Card>
            );
          })}
        </div>
      )}

      <div className="text-center">
        <Button
          size="lg"
          className="
  group relative overflow-hidden
  rounded-xl px-6 py-6
  font-semibold text-white
  bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
  shadow-[0_12px_35px_rgba(79,70,229,0.35)]
  hover:shadow-[0_18px_55px_rgba(79,70,229,0.45)]
  transition-all duration-300
  hover:-translate-y-[2px]
  "
        >
          <Link
            href="/services"
            aria-label="View all available web development services"
            className="relative z-10 flex items-center gap-3"
          >
            <span className="tracking-tight">Explore My Services</span>

            <span
              className="
      flex items-center justify-center
      w-7 h-7 rounded-lg
      bg-white/20
      transition-all duration-300
      group-hover:bg-white/30
      "
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {/* subtle gradient sweep animation */}
          <span
            className="
    pointer-events-none absolute inset-0
    bg-gradient-to-r from-transparent via-white/20 to-transparent
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
    "
          />
        </Button>
      </div>
    </section>
  );
}
