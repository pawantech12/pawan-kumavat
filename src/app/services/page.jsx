import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  CheckCircle,
  ArrowRight,
  Server,
  Laptop,
  Shield,
  Settings,
  Zap,
  ShoppingCart,
  Upload,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Services | Pawan Kumavat - Full Stack Developer",
  description:
    "Comprehensive web development services including frontend, backend, mobile apps, and cloud solutions by John Doe.",
  url: "https://pawan-kumavat.vercel.app/services",
});

const services = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "Crafting responsive and interactive user interfaces using HTML, CSS, and JavaScript, with a focus on modern frameworks like Bootstrap and TailwindCSS. Expertise in ReactJS for building dynamic single-page applications.",
    icon: <Code className="h-8 w-8" />,
    features: [
      "Responsive Design",
      "Modern Frameworks (Bootstrap, TailwindCSS)",
      "ReactJS Development",
      "Interactive UI Components",
      "Cross-browser Compatibility",
      "Performance Optimization",
    ],
    color: "bg-blue-100 text-blue-800",
    popular: false,
    startingPrice: "$1,500",
    timeline: "2-4 weeks",
  },
  {
    id: 2,
    title: "Back-End Development",
    description:
      "Developing robust server-side applications using Node.js and Express.js, alongside traditional technologies like PHP and MySQL. Skilled in creating RESTful APIs and managing databases.",
    icon: <Server className="h-8 w-8" />,
    features: [
      "Node.js & Express.js",
      "PHP Development",
      "MySQL Database Management",
      "RESTful API Creation",
      "Server Architecture",
      "Database Optimization",
    ],
    color: "bg-green-100 text-green-800",
    popular: false,
    startingPrice: "$2,000",
    timeline: "3-5 weeks",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "Offering comprehensive web solutions by handling both front-end and back-end development, leveraging the MERN stack for seamless integration and efficient development.",
    icon: <Laptop className="h-8 w-8" />,
    features: [
      "MERN Stack Development",
      "End-to-End Solutions",
      "Seamless Integration",
      "Efficient Development Process",
      "Scalable Architecture",
      "Modern Tech Stack",
    ],
    color: "bg-purple-100 text-purple-800",
    popular: true,
    startingPrice: "$3,500",
    timeline: "4-8 weeks",
  },
  {
    id: 4,
    title: "Authentication & Authorization Systems",
    description:
      "Implementing secure systems for user authentication and authorization, including JWT-based session management and password encryption for enhanced security.",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "JWT Authentication",
      "Session Management",
      "Password Encryption",
      "Role-based Access Control",
      "Security Best Practices",
      "Multi-factor Authentication",
    ],
    color: "bg-red-100 text-red-800",
    popular: false,
    startingPrice: "$1,200",
    timeline: "1-3 weeks",
  },
  {
    id: 5,
    title: "API Development & Integration",
    description:
      "Designing and developing RESTful APIs, as well as integrating third-party services into web applications, ensuring seamless data exchange and functionality.",
    icon: <Settings className="h-8 w-8" />,
    features: [
      "RESTful API Design",
      "Third-party Integration",
      "Data Exchange Solutions",
      "API Documentation",
      "Error Handling",
      "Rate Limiting & Security",
    ],
    color: "bg-gray-100 text-gray-800",
    popular: false,
    startingPrice: "$1,800",
    timeline: "2-4 weeks",
  },
  {
    id: 6,
    title: "Website Optimization",
    description:
      "Enhancing website performance for faster loading times and better user engagement, alongside implementing SEO best practices to improve visibility.",
    icon: <Zap className="h-8 w-8" />,
    features: [
      "Performance Enhancement",
      "SEO Best Practices",
      "Loading Speed Optimization",
      "User Engagement Improvement",
      "Core Web Vitals",
      "Analytics Integration",
    ],
    color: "bg-yellow-100 text-yellow-800",
    popular: false,
    startingPrice: "$800",
    timeline: "1-2 weeks",
  },
  {
    id: 7,
    title: "E-commerce Development",
    description:
      "Developing and setting up online stores, integrating secure payment gateways, and ensuring a smooth shopping experience for customers.",
    icon: <ShoppingCart className="h-8 w-8" />,
    features: [
      "Online Store Setup",
      "Payment Gateway Integration",
      "Shopping Cart Functionality",
      "Inventory Management",
      "Order Processing",
      "Customer Management",
    ],
    color: "bg-orange-100 text-orange-800",
    popular: false,
    startingPrice: "$4,000",
    timeline: "6-10 weeks",
  },
  {
    id: 8,
    title: "Project Deployment & Hosting",
    description:
      "Deploying web applications on reliable platforms like Vercel, Render, hostinger(VPS Hosting) along with setting up hosting environments and managing domain configurations.",
    icon: <Upload className="h-8 w-8" />,
    features: [
      "Vercel & Render Deployment",
      "VPS Hosting Setup",
      "Domain Configuration",
      "SSL Certificate Setup",
      "Environment Management",
      "Monitoring & Maintenance",
    ],
    color: "bg-teal-100 text-teal-800",
    popular: false,
    startingPrice: "$500",
    timeline: "1-2 weeks",
  },
  {
    id: 9,
    title: "SaaS Website Development",
    description:
      "Building scalable Software-as-a-Service (SaaS) applications with subscription-based models, authentication systems, and cloud-based deployment for efficiency and reliability.",
    icon: <Briefcase className="h-8 w-8" />,
    features: [
      "Subscription Models",
      "Multi-tenant Architecture",
      "Cloud-based Deployment",
      "Scalable Infrastructure",
      "Payment Processing",
      "User Management Dashboard",
    ],
    color: "bg-indigo-100 text-indigo-800",
    popular: false,
    startingPrice: "$6,000",
    timeline: "8-12 weeks",
  },
  {
    id: 10,
    title: "Custom Web Application Development",
    description:
      "Developing tailor-made web applications based on specific business needs, including dashboards, admin panels, and interactive tools with a focus on scalability and usability.",
    icon: <Laptop className="h-8 w-8" />,
    features: [
      "Custom Business Solutions",
      "Admin Panels & Dashboards",
      "Interactive Tools",
      "Scalable Architecture",
      "User-focused Design",
      "Business Process Automation",
    ],
    color: "bg-cyan-100 text-cyan-800",
    popular: false,
    startingPrice: "$5,000",
    timeline: "6-10 weeks",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Discovery & Planning",
    description:
      "We align on your goals, requirements, and timeline to lay the foundation for development.",
  },
  {
    step: "2",
    title: "Client-Provided Design Integration",
    description:
      "We take your finalized designs and prepare the codebase for seamless integration.",
  },
  {
    step: "3",
    title: "Development & Testing",
    description:
      "Build the application using modern tech and conduct continuous testing for reliability.",
  },
  {
    step: "4",
    title: "Deployment & Launch",
    description:
      "Launch the product with complete setup and verify it works smoothly in production.",
  },
  {
    step: "5",
    title: "Post-Launch Support",
    description:
      "Provide maintenance, fixes, and support to keep your product stable and up-to-date.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Services I Offer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, I provide comprehensive development
            services to bring your ideas to life with modern technologies and
            best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
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

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to building your application — from idea to
              deployment — using your provided designs.
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="text-center border-none bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create a custom
              solution that meets your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/projects">View My Work</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
