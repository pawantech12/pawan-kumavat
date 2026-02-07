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
      <div className="text-center mb-12 space-y-6 relative">
        {/* Terminal-style background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 blur-3xl -z-10 rounded-lg"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-mono relative inline-block">
          <span className="before:content-['>_'] before:text-blue-500  animate-pulse">
            {""}
          </span>
          Services <span className="text-blue-600">I Offer</span>
          <span className="absolute -bottom-1 max-sm:left-1/2 max-sm:-translate-x-1/2 right-0 w-2/5 h-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full "></span>
        </h2>

        {/* Subtext / Description */}
        <p className="relative text-lg text-gray-100 max-w-2xl mx-auto font-mono bg-gray-900/80 dark:bg-gray-800/70 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg overflow-hidden">
          {/* Neon glow top bar */}
          <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-[pulse_3s_ease-in-out_infinite] rounded-t-xl"></span>

          {/* Terminal-style content */}
          <span className="block before:content-['>_'] before:text-blue-400 before:mr-2">
            From concept to deployment, I provide comprehensive development
            services to bring your ideas to life.
          </span>
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
                className="relative hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge
                      className="relative inline-flex items-center px-4 py-1 rounded-full text-sm font-mono text-white
               bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600
               
               before:absolute before:inset-0 before:rounded-full before:blur-xl before:opacity-30 before:bg-gradient-to-r before:from-blue-400 before:via-indigo-500 before:to-purple-500
               "
                    >
                      <span className="relative z-10">Most Popular</span>
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${service.color}`}
                  >
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <CardTitle
                    className="
    text-xl font-mono relative 
    before:content-['{'] after:content-['}'] 
    before:text-blue-500 after:text-blue-500 
    before:mr-2 after:ml-2
    transition-all duration-300 
    group-hover:before:animate-pulse group-hover:after:animate-pulse
    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-neutral-600
  "
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-200 text-center font-mono text-sm sm:text-base relative bg-gray-900/80 dark:bg-gray-800/80 p-4 rounded-lg shadow-md border-l-4 border-blue-500 overflow-hidden">
                    <span className="text-blue-400 before:content-['>_'] before:mr-2"></span>
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-1 group transition-all duration-300 hover:translate-x-2"
                      >
                        {/* Glowing dev icon */}
                        <span className="text-blue-500 font-mono animate-pulse">
                          •
                        </span>

                        {/* Feature text in terminal/code style */}
                        <span className="relative font-mono text-base text-gray-700 group-hover:text-blue-600 transition-colors">
                          <span className="before:content-['>_'] before:text-blue-500 animate-pulse-slow"></span>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <div className="text-center">
        <Button
          size="lg"
          asChild
          className="
              relative overflow-hidden px-5 py-5 rounded-xl
              font-mono font-semibold text-white
              bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
              shadow-[0_10px_30px_rgba(99,102,241,0.35)]
              hover:shadow-[0_15px_45px_rgba(99,102,241,0.55)]
              transition-all duration-300
              group
            "
        >
          <Link
            href="/services"
            aria-label="View all available web development services"
            className="relative z-10 flex items-center gap-3"
          >
            {/* Terminal prefix */}
            <span className="text-green-300 font-mono animate-pulse">
              {">_"}
            </span>

            <span className="tracking-wide">View All Services</span>

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
