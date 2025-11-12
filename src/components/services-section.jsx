import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Code, Server, Laptop } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "Crafting responsive and interactive user interfaces using HTML, CSS, and JavaScript, with a focus on modern frameworks like Bootstrap and TailwindCSS. Expertise in ReactJS for building dynamic single-page applications.",
    icon: <Code className="h-6 w-6" />,
    features: [
      "Responsive Design",
      "Modern Frameworks",
      "ReactJS",
      "Interactive UI",
    ],
    color: "bg-blue-100 text-blue-800",
    popular: false,
  },
  {
    id: 2,
    title: "Back-End Development",
    description:
      "Developing robust server-side applications using Node.js and Express.js, alongside traditional technologies like PHP and MySQL. Skilled in creating RESTful APIs and managing databases.",
    icon: <Server className="h-6 w-6" />,
    features: [
      "Node.js & Express",
      "PHP & MySQL",
      "RESTful APIs",
      "Database Management",
    ],
    color: "bg-green-100 text-green-800",
    popular: false,
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "Offering comprehensive web solutions by handling both front-end and back-end development, leveraging the MERN stack for seamless integration and efficient development.",
    icon: <Laptop className="h-6 w-6" />,
    features: [
      "MERN Stack",
      "End-to-End Solutions",
      "Seamless Integration",
      "Efficient Development",
    ],
    color: "bg-purple-100 text-purple-800",
    popular: true,
  },
];

export default function ServicesSection() {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Professional Web Development Services Section"
    >
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Services I Offer
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From concept to deployment, I provide comprehensive development
          services to bring your ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {service.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Most Popular
                </Badge>
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <div
                className={`mx-auto w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${service.color}`}
              >
                {service.icon}
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-center">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          asChild
          className="relative overflow-hidden rounded-lg px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <Link
            href="/services"
            aria-label="View all available web development services"
            className="relative z-10 flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
