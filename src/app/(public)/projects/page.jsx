import { generateMetadata } from "@/lib/seo";
import ProjectsClientPage from "./ProjectsClientPage";

export const metadata = generateMetadata({
  title: "Projects | Pawan Kumavat - Full Stack Developer",
  description:
    "Explore Pawan Kumavat's portfolio of web development projects, showcasing expertise in React, Next.js, and full-stack development.",
  url: "https://pawan-kumavat.vercel.app/projects",
});

export default function ProjectsPage() {
  return <ProjectsClientPage />;
}
