import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Contact | Pawan Kumavat - Full Stack Developer",
  description:
    "Get in touch with Pawan Kumavat for freelance projects and collaborations.",
  url: "https://pawan-kumavat.vercel.app/contact",
});

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "pawankumavat042@gmail.com",
    href: "mailto:pawankumavat042@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 9619579304",
    href: "tel:+919619579304",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Kalyan(W),Thane,Maharashtra",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/pawantech12",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pawan-kumavat-11b105297/",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
    href: "https://twitter.com/pawantech12",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together to bring your ideas to
              life.
            </p>
          </div>

          <div className="">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {info.label}
                        </p>
                        {info.href === "#" ? (
                          <p className="text-gray-600">{info.value}</p>
                        ) : (
                          <Link
                            href={info.href}
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            {info.value}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 flex-wrap">
                    {socialLinks.map((social, index) => (
                      <Button key={index} variant="outline" size="lg" asChild>
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {social.icon}
                          {social.label}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Let's Build Something Amazing
                  </h3>
                  <p className="opacity-90 mb-4">
                    I'm passionate about creating digital solutions that make a
                    difference. Whether you have a project in mind or just want
                    to chat about technology, I'd love to hear from you.
                  </p>
                  <Button variant="secondary" asChild>
                    <Link href="mailto:pawankumavat042@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Quick Email
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
