import { generateMetadata } from "@/lib/seo";
import AboutClientPage from "./AboutClientPage";

export const metadata = generateMetadata({
  title: "About | Pawan Kumavat - Full Stack Developer",
  description:
    "Learn more about Pawan Kumavat, a passionate Full Stack Developer with expertise in modern web technologies.",
  url: "https://pawan-kumavat.vercel.app/about",
});

export default function AboutPage() {
  return <AboutClientPage />;
}
