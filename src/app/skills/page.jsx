import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import allSkills from "@/data/skillsdata";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Skills | Pawan Kumavat - Full Stack Developer",
  description:
    "Explore Pawan Kumavat's technical skills and expertise in web development, including frontend, backend, and DevOps technologies.",
  url: "https://pawan-kumavat.vercel.app/skills",
});

const certifications = [
  {
    name: "Foundations of Prompt Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "Apr 2024",
    pdfLink: "/certificates/prompt-engineering-foundation.pdf",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: "🧠",
  },
  {
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "Apr 2024",
    pdfLink: "/certificates/front-end-development-libraries.pdf",
    color: "bg-green-100 text-green-800 border-green-200",
    icon: "📚",
  },
  {
    name: "Legacy Front End",
    issuer: "freeCodeCamp",
    date: "Apr 2024",
    pdfLink: "/certificates/legacy-front-end.pdf",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    icon: "🕸️",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Apr 2024",
    pdfLink: "/certificates/responsive-web-design.pdf",
    color: "bg-cyan-100 text-cyan-800 border-cyan-200",
    icon: "📱",
  },
  {
    name: "Tailwind CSS Bootcamp",
    issuer: "LetsUpgrade",
    date: "Apr 2024",
    pdfLink: "/certificates/tailwindcss-bootcamp.webp",
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
    icon: "🌬️",
  },
  {
    name: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    date: "Mar 2024",
    pdfLink: "/certificates/backend-development-and-apis.webp",
    color: "bg-teal-100 text-teal-800 border-teal-200",
    icon: "🔙",
  },
  {
    name: "Basics of Java",
    issuer: "Coding Ninjas",
    date: "Mar 2024",
    pdfLink: "/certificates/basics-of-java.webp",
    color: "bg-orange-100 text-orange-800 border-orange-200",
    icon: "☕",
  },
  {
    name: "Developing Cloud Apps with Node.js and React",
    issuer: "Cognitive Class",
    date: "Mar 2024",
    pdfLink: "/certificates/cloud-app-using-reactjs.webp",
    color: "bg-purple-100 text-purple-800 border-purple-200",
    icon: "☁️",
  },
  {
    name: "MongoDB Node.js Developer Path",
    issuer: "MongoDB",
    date: "Mar 2024",
    pdfLink: "/certificates/mongodb-nodejs-developer-path.pdf",
    color: "bg-green-100 text-green-800 border-green-200",
    icon: "🍃",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Mar 2024",
    pdfLink: "/certificates/postman-certificate.pdf",
    color: "bg-red-100 text-red-800 border-red-200",
    icon: "📬",
  },
  {
    name: "Using MongoDB with Node.js",
    issuer: "MongoDB",
    date: "Mar 2024",
    pdfLink: "/certificates/mongodb-nodejs.pdf",
    color: "bg-lime-100 text-lime-800 border-lime-200",
    icon: "🗄️",
  },
];

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I work with a wide range of technologies and tools to build modern,
            scalable applications. Here are the technologies I'm proficient in.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-16">
          {allSkills.map((skill, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <CardContent className="flex flex-col items-center p-6">
                <div className={`p-4 rounded-lg mb-4 ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-900 text-center text-sm">
                  {skill.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Certifications & Achievements
              </h2>
              <p className="text-blue-100">
                Professional certifications that validate my expertise and
                commitment to continuous learning
              </p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`group relative p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${cert.color}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-2xl">{cert.icon}</div>
                      <div className="text-sm font-medium opacity-75">
                        {cert.date}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-sm opacity-80 mb-4">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
                        <span className="text-xs font-medium opacity-75">
                          Verified
                        </span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
                        asChild
                      >
                        <Link
                          href={cert.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={true}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </Link>
                      </Button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl pointer-events-none"></div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                  <Shield className="h-4 w-4" />
                  All certifications are verified and up-to-date
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
