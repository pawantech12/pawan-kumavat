import { generateMetadata } from "@/lib/seo";
import SkillsClientPage from "./SkillsClientPage";

export const metadata = generateMetadata({
  title: "Skills | Pawan Kumavat - Full Stack Developer",
  description:
    "Explore Pawan Kumavat's technical skills and expertise in web development, including frontend, backend, and DevOps technologies.",
  url: "https://pawan-kumavat.vercel.app/skills",
});

export default function SkillPage() {
  return <SkillsClientPage />;
}
