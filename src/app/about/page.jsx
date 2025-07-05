import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About",
  description:
    "Learn more about John Doe, a passionate Full Stack Developer with expertise in modern web technologies.",
};

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Aspireit",
    period: "Dec, 2024 - Mar, 2025",
    description:
      "Working as a Full-Stack Developer Intern, contributing to web applications using React, Node.js, and MongoDB. Gaining hands-on experience in building scalable and responsive web solutions.",
  },
  {
    title: "Freelance Web Developer",
    company: "Upwork",
    period: "June, 2024 - Present",
    description:
      "Providing freelance web development services on Upwork, specializing in front-end and full-stack solutions using React, Next.js, Tailwind CSS, and Node.js.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2021 - Present",
    description:
      "Working as a freelance web developer, building responsive and high-performance websites for clients using modern web technologies like React, PHP, MySQL, and JavaScript frameworks.",
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "K.M. Agrawal College of Arts, Commerce and Science",
    period: "2021 - 2024",
    description:
      "Completed Bachelor of Science in Computer Science from K.M. Agrawal College, focusing on programming, data structures, algorithms, and software development, essential for a successful career in technology.",
  },
  {
    degree: "HSC in Science",
    school: "Hill Spring International Jr. College of Science and Commerce",
    period: "2019 - 2021",
    description:
      "Graduated with a Higher Secondary Certificate (HSC) in Science from Hill Spring International Jr. College of Science and Commerce, laying a strong foundation for my future studies in computer science.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="relative w-32 h-32 mx-auto">
            <Image
              src="/profile.png"
              alt="Pawan Kumavat"
              width={128}
              height={128}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Full Stack Developer with over 4 years of
              experience creating digital solutions that make a difference. I
              love turning complex problems into simple, beautiful, and
              intuitive designs.
            </p>
          </div>
        </div>

        {/* Personal Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Kalyan(W),Thane, Maharashtra</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                <p className="text-gray-600">4+ Years</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Specialization
                </h3>
                <p className="text-gray-600">Full Stack Development</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Availability
                </h3>
                <Badge className="bg-green-100 text-green-800">
                  Available for hire
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">About</h3>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying the great
                outdoors. I believe in continuous learning and staying
                up-to-date with the latest industry trends and best practices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      <Calendar className="mr-1 h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      <Calendar className="mr-1 h-3 w-3" />
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
