import {
  Code,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  GitBranch,
  Settings,
  Zap,
  Server,
  Monitor,
  Layers,
  FileCode,
  PenToolIcon as Tool,
  Workflow,
  Shield,
  Figma,
} from "lucide-react";

const allSkills = [
  // Frontend
  {
    name: "React",
    icon: <Code className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Next.js",
    icon: <Globe className="h-8 w-8" />,
    color: "bg-gray-100 text-gray-800",
  },
  {
    name: "JavaScript",
    icon: <FileCode className="h-8 w-8" />,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    name: "HTML/CSS",
    icon: <Monitor className="h-8 w-8" />,
    color: "bg-orange-100 text-orange-800",
  },
  {
    name: "Tailwind CSS",
    icon: <Palette className="h-8 w-8" />,
    color: "bg-cyan-100 text-cyan-800",
  },
  {
    name: "Node.js",
    icon: <Server className="h-8 w-8" />,
    color: "bg-green-100 text-green-800",
  },
  {
    name: "Express.js",
    icon: <Server className="h-8 w-8" />,
    color: "bg-gray-100 text-gray-800",
  },

  {
    name: "MongoDB",
    icon: <Database className="h-8 w-8" />,
    color: "bg-green-100 text-green-800",
  },
  {
    name: "MySQL",
    icon: <Database className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-800",
  },

  // Cloud & DevOps
  {
    name: "Cloudinary",
    icon: <Cloud className="h-8 w-8" />,
    color: "bg-orange-100 text-orange-800",
  },
  {
    name: "Firebase",
    icon: <Cloud className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Docker",
    icon: <Layers className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Vercel",
    icon: <Globe className="h-8 w-8" />,
    color: "bg-gray-100 text-gray-800",
  },
  {
    name: "Netlify",
    icon: <Globe className="h-8 w-8" />,
    color: "bg-teal-100 text-teal-800",
  },

  // Tools & Others
  {
    name: "Git",
    icon: <GitBranch className="h-8 w-8" />,
    color: "bg-red-100 text-red-800",
  },
  {
    name: "GitHub",
    icon: <GitBranch className="h-8 w-8" />,
    color: "bg-gray-100 text-gray-800",
  },
  {
    name: "VS Code",
    icon: <Code className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Figma",
    icon: <Figma className="h-8 w-8" />,
    color: "bg-purple-100 text-purple-800",
  },
  {
    name: "Postman",
    icon: <Tool className="h-8 w-8" />,
    color: "bg-orange-100 text-orange-800",
  },
  {
    name: "Webpack",
    icon: <Settings className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Vite",
    icon: <Zap className="h-8 w-8" />,
    color: "bg-purple-100 text-purple-800",
  },
  {
    name: "GraphQL",
    icon: <Zap className="h-8 w-8" />,
    color: "bg-pink-100 text-pink-800",
  },
  {
    name: "REST APIs",
    icon: <Server className="h-8 w-8" />,
    color: "bg-green-100 text-green-800",
  },
  {
    name: "Clerk",
    icon: <Shield className="h-8 w-8" />,
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    name: "ShadCN UI",
    icon: <Workflow className="h-8 w-8" />,
    color: "bg-rose-100 text-rose-800",
  },
  {
    name: "Bootstrap",
    icon: <Smartphone className="h-8 w-8" />,
    color: "bg-purple-100 text-purple-800",
  },
  {
    name: "PHP",
    icon: <FileCode className="h-8 w-8" />,
    color: "bg-indigo-100 text-indigo-800",
  },
];

export default allSkills;
