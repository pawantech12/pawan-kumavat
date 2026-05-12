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
      <div className="relative mb-14 sm:mb-16 lg:mb-20 text-center">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div
            className="h-[160px] sm:h-[200px] lg:h-[220px]
        w-[280px] sm:w-[380px] lg:w-[480px]
        rounded-full
        bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10
        blur-3xl"
          />
        </div>

        {/* Top Badge */}
        <div
          className="inline-flex items-center gap-2 sm:gap-2.5
      rounded-full border border-neutral-200/70
      bg-white/75 px-4 sm:px-5 py-1.5 sm:py-2
      shadow-sm backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-70 animate-ping" />
            <span className="relative inline-flex h-full w-full rounded-full bg-blue-600" />
          </span>

          <span
            className="text-[10px] sm:text-[11px] font-semibold uppercase
        tracking-[0.2em] text-blue-600"
          >
            Services
          </span>
        </div>

        {/* Heading */}
        <h2
          className="mt-5 sm:mt-7 text-2xl sm:text-3xl lg:text-5xl
      font-bold tracking-tight leading-[1.1] text-neutral-900"
        >
          Modern Solutions
          <br />
          <span
            className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500
        bg-clip-text text-transparent"
          >
            For Modern Businesses
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
          className="mx-auto mt-5 sm:mt-6 max-w-xl sm:max-w-2xl
      text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-600"
        >
          Clean, scalable, and high-performance web experiences designed to help
          brands grow digitally.
        </p>
      </div>

      {/* Grid */}
      {loading ? (
        <SectionLoader text="Loading Services..." />
      ) : (
        <div
          className="
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      gap-5 sm:gap-6 lg:gap-8
      mb-10 sm:mb-12
    "
        >
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
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <Badge
                      className="rounded-full px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-medium
                  bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                    >
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div
                    className={`mx-auto w-14 sm:w-16 h-14 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4
                shadow-sm group-hover:scale-110 transition-transform duration-300
                ${service.color}`}
                  >
                    <Icon className="h-6 sm:h-7 w-6 sm:w-7" aria-hidden />
                  </div>

                  <CardTitle className="text-lg sm:text-xl font-semibold text-neutral-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 sm:space-y-5">
                  <p className="text-neutral-600 text-center text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2 sm:gap-3 text-sm text-neutral-700
                    transition-all duration-300 group-hover:translate-x-1"
                      >
                        <span className="mt-[6px] h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

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

      {/* CTA */}
      <div className="text-center">
        <Button
          size="lg"
          className="
        group relative isolate overflow-hidden
        rounded-2xl px-6 sm:px-7 py-5 sm:py-6

        bg-neutral-900
        text-white font-semibold tracking-tight

        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        hover:shadow-[0_18px_60px_rgba(37,99,235,0.22)]

        transition-all duration-500
        hover:-translate-y-1
        border border-white/10
      "
        >
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="absolute inset-0 -z-20 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="absolute -left-full top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[140%] transition-all duration-1000" />

          <Link
            href="/services"
            className="relative z-10 flex items-center gap-3"
          >
            <span className="text-sm sm:text-base">Explore My Services</span>

            <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
