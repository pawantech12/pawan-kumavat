import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Pawan Kumavat - Full Stack Developer",
    template: "%s | Pawan Kumavat - Full Stack Developer",
  },
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable applications and beautiful user experiences.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Pawan Kumavat" }],
  creator: "Pawan Kumavat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pawan-kumavat.vercel.app/",
    title: "Pawan Kumavat - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Pawan Kumavat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawan Kumavat - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@pawantech12",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
