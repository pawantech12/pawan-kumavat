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
    <main
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-label="Skills and Certifications Page of Pawan Kumavat"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header
          className="text-center space-y-4 mb-16"
          aria-label="Skills Page Header"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I work with a wide range of technologies and tools to build modern,
            scalable applications. Here are the technologies I'm proficient in.
          </p>
        </header>

        {/* Skills Grid */}
        <section
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-16"
          aria-label="List of Technical Skills"
        >
          {allSkills.map((skill, index) => (
            <Card
              key={index}
              className="group relative hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              aria-label={`${skill.name} skill card`}
            >
              <CardContent className="flex flex-col items-center p-6">
                <div
                  className={`p-4 rounded-lg mb-4 ${skill.color}`}
                  aria-hidden="true"
                >
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-900 text-center text-sm">
                  {skill.name}
                </span>
              </CardContent>
              {/* Optional subtle gradient bottom line */}
              <div className="absolute bottom-3 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full transition-all duration-500 group-hover:w-3/4 -translate-x-1/2"></div>
            </Card>
          ))}
        </section>

        {/* Certifications */}
        <section aria-label="Certifications and Achievements">
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
                      className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${cert.color} cursor-pointer`}
                      aria-label={`Certificate: ${cert.name} by ${cert.issuer}`}
                    >
                      {/* Top: Icon and Date */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{cert.icon}</div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 opacity-75">
                          {cert.date}
                        </div>
                      </div>

                      {/* Certificate Title */}
                      <h3 className="font-bold text-lg sm:text-xl mb-1 leading-snug text-gray-900 dark:text-white">
                        {cert.name}
                      </h3>

                      {/* Issuer */}
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                        {cert.issuer}
                      </p>

                      {/* Verified + Download Button */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
                          <span className="text-xs sm:text-sm font-medium opacity-75">
                            Verified
                          </span>
                        </div>

                        <Button
                          size="sm"
                          variant="outline"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 hover:text-white"
                          asChild
                        >
                          <Link
                            href={cert.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            aria-label={`Download ${cert.name} certificate PDF`}
                          >
                            <Download className="h-4 w-4" />
                            {cert.pdfLink.endsWith(".pdf")
                              ? "PDF"
                              : cert.pdfLink.endsWith(".webp")
                              ? "Image"
                              : cert.pdfLink.split(".").pop()?.toUpperCase() ||
                                "File"}
                          </Link>
                        </Button>
                      </div>

                      {/* Subtle Hover Glow */}
                      <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-shadow duration-300"></div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <div
                    className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 
               text-sm text-gray-700 dark:text-gray-200 font-medium rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
                    aria-label="Certification verification note"
                  >
                    <Shield
                      className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>All certifications are verified and up-to-date</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
