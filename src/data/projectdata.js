const projects = [
  {
    id: 31,
    title: "Luxe Interior Designer Website",
    image: "/portfolio31.webp",
    description:
      "A fully responsive and modern Interior Designer Website built using Next.js, Tailwind CSS, and Shadcn UI. Designed with a sleek and elegant layout, this website showcases services, projects, and client testimonials to deliver a premium brand experience for an interior design business.",
    github: "https://github.com/pawantech12/luxe-interior-website",
    demo: "https://luxe-interior-website.vercel.app/",
  },
  {
    id: 30,
    title: "BrightSmile Dental Website",
    image: "/portfolio30.webp",
    description:
      "BrightSmile A fully responsive and modern dental clinic website built with Next.js, TailwindCSS, and shadcn/ui, featuring Home, About, Services, and Contact pages with a clean, accessible, and user-friendly design.",
    github: "https://github.com/pawantech12/brightsmile-dental-website",
    demo: "https://brightsmile-dental-website-six.vercel.app/",
  },
  {
    id: 29,
    title: "Bella Vista – Restaurant Landing Page",
    image: "/portfolio29.webp",
    description:
      "Bella Vista is a modern, responsive, and fully accessible restaurant landing page built with Next.js, TailwindCSS, and shadcn/ui. It’s designed to offer a seamless user experience with elegant UI elements and intuitive navigation for potential customers looking to explore the restaurant, view the menu, and make reservations.",
    github: "https://github.com/pawantech12/bellavista-restaurant-landing-page",
    demo: "https://bellavista-restaurant-landing-page.vercel.app/",
  },
  {
    id: 28,
    title: "Graphic Designer Portfolio",
    image: "/portfolio28.webp",
    description:
      "A modern, attractive, and fully responsive single-page portfolio website designed specifically for graphic designers. Built using Next.js, TailwindCSS, and shadcn UI components, this portfolio showcases creative work, skills, services, and contact information with smooth navigation and an elegant design.",
    github: "https://github.com/pawantech12/graphic-designer-portfolio",
    demo: "https://graphic-designer-portfolio-one.vercel.app/",
  },
  {
    id: 27,
    title: "TalentBridge - Recruiter Agency Website",
    image: "/portfolio27.webp",
    description:
      "TalentBridge is a modern, responsive web platform for recruitment agencies and job seekers. Designed to showcase company information, manage job listings with powerful filters, and publish industry insights via a blog, TalentBridge combines clean UI with performant technologies.",
    github:
      "https://github.com/pawantech12/talentbridge-recruiter-agency-website",
    demo: "https://talentbridge-recruiter-agency-websi.vercel.app/",
  },
  {
    id: 26,
    title: "CloudFlow – SaaS Landing Website",
    image: "/portfolio26.webp",
    description:
      "CloudFlow is a fully responsive and modern SaaS landing page built using Next.js, TailwindCSS, and shadcn/ui. It provides a sleek and accessible interface tailored for SaaS startups and tech platforms, with essential pages and UX enhancements.",
    github: "https://github.com/pawantech12/cloudflow-saas-landing",
    demo: "https://cloudflow-saas-landing.vercel.app/",
  },
  {
    id: 25,
    title: "BrandForge – Responsive Brand Agency Website",
    image: "/portfolio25.webp",
    description:
      "A modern and fully responsive Brand Agency website built using Next.js, TailwindCSS, shadcn/ui, and Framer Motion. The website showcases the agency's services, portfolio, testimonials, and team with smooth animations and clean UI.",
    github: "https://github.com/pawantech12/brandforge-agency-website",
    demo: "https://brandforge-agency-website.vercel.app/",
  },
  {
    id: 24,
    title: "DigitalAgency – Modern Digital Agency Website",
    image: "/portfolio24.webp",
    description:
      "DigitalAgency is a fully responsive and modern frontend website built using Next.js, TailwindCSS, and ShadCN UI. Designed for a digital agency, this project showcases a clean design system, structured pages, and a complete dashboard interface tailored for agency operations.",
    github: "https://github.com/pawantech12/digitalagency-site",
    demo: "https://digitalagency-site.vercel.app/",
  },
  {
    id: 23,
    title: "Podcastify – Modern Podcast Website",
    image: "/portfolio23.webp",
    description:
      "Podcastify is a modern and responsive podcast platform built with Next.js, Tailwind CSS, and ShadCN UI. It features pages for home, about, contact, hosts, guests, episode listings and details, blog articles, FAQs, and subscription—all designed to deliver a seamless user experience for podcast lovers and creators.",
    github: "https://github.com/pawantech12/podcastify-website",
    demo: "https://podcastify-website.vercel.app/",
  },
  {
    id: 22,
    title: "MathTools Pro – Math Utility Web App",
    image: "/portfolio22.webp",
    description:
      "MathTools Pro is a modern and responsive math utility web app built with Next.js, TailwindCSS, and shadcn/ui. It offers tools for calculating area, perimeter, volume, percentages, speed-distance-time, and more — designed for students, teachers, and everyday users.",
    github: "https://github.com/pawantech12/mathtoolspro",
    demo: "https://mathtoolspro.vercel.app/",
  },
  {
    id: 21,
    title: "ResumeForge – Resume Builder Website",
    image: "/portfolio21.webp",
    description:
      "ResumeForge is a modern full-stack resume builder built with Next.js, MongoDB, TailwindCSS, Clerk, and shadcn/ui. It allows users to create, preview, share (with password and expiry), and download resumes with a clean dashboard experience.",
    github: "https://github.com/pawantech12/resumeforge-resume-builder",
    demo: "https://resumeforge-resume-builder.vercel.app/",
  },
  {
    id: 20,
    title: "Estate – Real Estate Website",
    image: "/portfolio20.webp",
    description:
      "A modern, responsive real estate platform built with Next.js, Tailwind CSS, and shadcn/ui. Includes property listings, agent profiles, authentication (login/signup/OTP), and user favorites. Ideal for agencies and rental platforms, featuring SEO-ready pages and a clean UI.",
    github: "https://github.com/pawantech12/estate-website",
    demo: "https://estate-website-theta.vercel.app/",
  },
  {
    id: 19,
    title: "Wonderlust – Responsive Travel Agency Website",
    image: "/portfolio19.webp",
    description:
      "Wonderlust is a modern, responsive travel agency website built with Next.js, TailwindCSS, and shadcn/ui. It features beautifully designed pages for Home, About, Destinations, Packages, and Contact—perfect for showcasing travel services with a clean and engaging user experience.",
    github: "https://github.com/pawantech12/wonderlust-travel-agency-website",
    demo: "https://wonderlust-travel-agency-website.vercel.app/",
  },
  {
    id: 18,
    title: "Eduvista – Multi-page School Landing Website",
    image: "/portfolio18.webp",
    description:
      "Eduvista is a modern, responsive multipage school landing website built with Next.js, Tailwind CSS, and ShadCN UI, featuring clean design and pages like Home, About, Academics, Admissions, and Contact.",
    github: "https://github.com/pawantech12/eduvista-school-website",
    demo: "https://eduvista-school-website.vercel.app/",
  },
  {
    id: 17,
    title: "AppNest - App Landing Page",
    image: "/portfolio17.webp",
    description:
      "AppNest is a modern, fully responsive app landing page built with Next.js, TailwindCSS, and shadcn/ui, featuring sleek sections like hero, features, pricing, testimonials, FAQ, and more — perfect for showcasing any mobile or web application.",
    github: "https://github.com/pawantech12/appnest-app-landing-website",
    demo: "https://appnest-app-landing-website.vercel.app/",
  },
  {
    id: 16,
    title: "DashNest - Modern Responsive Dashboard",
    image: "/portfolio16.webp",
    description:
      "DashNest is a modern, responsive dashboard built with Next.js, TailwindCSS, and Shadcn UI, featuring analytics, chat, meetings, invoices, projects, payments, and more — designed for seamless management and user experience.",
    github: "https://github.com/pawantech12/dashnest-dashboard",
    demo: "https://dashnest-dashboard.vercel.app/",
  },
  {
    id: 14,
    title: "Saasify - Modern SaaS Landing Page",
    image: "/portfolio14.webp",
    description:
      "Saasify - A modern, fully responsive SaaS landing page built with Next.js, TailwindCSS, ShadCN, and Framer Motion, featuring dark/light mode, dynamic pages, and smooth animations. 🚀",
    github: "https://github.com/pawantech12/saasify-landing-website",
    demo: "https://saasify-landing-website.vercel.app/",
  },
  {
    id: 15,
    title: "FreelanceTrack – Full Stack App for Freelancers",
    image: "/portfolio15.webp",
    description:
      "FreelanceTrack is a full-stack web app for freelancers to manage their projects, clients, referrals, testimonials, and finances — all from a single intuitive dashboard. Built with Next.js, Tailwind CSS, Clerk, and MongoDB.",
    github: "https://github.com/pawantech12/freelancetrack-website",
    demo: "https://freelancetrack-website.vercel.app/",
  },
  {
    id: 13,
    title: "PlaceToVisitIndia – Travel Guide Website (Next.js Frontend)",
    image: "/portfolio13.webp",
    description:
      "PlaceToVisitIndia is a feature-rich travel guide website designed to help users explore India’s top destinations. Originally built with React, I successfully migrated its frontend to Next.js while ensuring seamless integration with the existing backend. The website includes a dynamic homepage with a hero slider, travel categories, latest blogs, trending destinations, and a virtual travel section with embedded YouTube videos. Users can explore detailed destination pages with photo galleries, FAQs, and related travel suggestions. The platform also features a blog system, contact page, about page, and policy pages, providing a comprehensive travel resource. This project highlights my expertise in Next.js, performance optimization, and frontend development. 🚀",
    demo: "https://www.placestovisitindia.com/",
  },
  {
    id: 12,
    title: "Shopco - Modern E-Commerce Website",
    image: "/portfolio12.webp",
    description:
      "🚀 Shopco is a sleek and fully responsive e-commerce frontend built with React, Vite, and Tailwind CSS. It delivers a seamless shopping experience with a clean UI and essential e-commerce features. The project includes a Home Page, Product List with Filters, Product Details Page, and a Cart Page for easy item management. Optimized for speed and performance, Shopco ensures a smooth user experience across all devices. 🚀✨",
    demo: "https://shopco-website.vercel.app/",
    github: "https://github.com/pawantech12/shopco-website",
  },
  {
    id: 10,
    title: "Saisio - Responsive SaaS Website",
    image: "/portfolio10.webp",
    description:
      "Saisio is a fully responsive SaaS website built with ReactJS (Vite) and TailwindCSS, featuring a sleek UI/UX with smooth animations. It includes dynamic pages like Home, Pricing, Blog, Integrations, Register/Login, and more, offering a seamless user experience. This project is free to use and perfect for SaaS or web app inspiration.",
    github: "https://github.com/pawantech12/saisio-saas-website",
    demo: "https://saisio-saas-website.vercel.app/",
  },
  {
    id: 11,
    title: "Markdown Editor - Feature-Rich Markdown Writing Tool",
    image: "/portfolio11.webp",
    description:
      "A free, lightweight Markdown Editor built with ReactJS and TailwindCSS for seamless writing, editing, and managing Markdown files. It features real-time preview, import/export options, word/line/character counters, a customizable section-based editor, and a clean, responsive UI. Perfect for developers, writers, and content creators. 🚀",
    github: "https://github.com/pawantech12/markdown-editor-reactjs",
    demo: "https://markdown-editor-reactjs-roan.vercel.app/",
  },
  {
    id: 1,
    title: "Flip4Sale - E-commerce Website with Payment Integration",
    image: "/portfolio1.webp",
    description:
      "I developed the frontend of an e-commerce website, focusing on mobile devices using ReactJS and TailwindCSS. The project involved integrating the Razorpay payment gateway to ensure seamless transaction processing. I designed and implemented a user-friendly interface, prioritizing a smooth and efficient user experience on mobile devices. After successfully completing the project, I deployed it on the Razorhost platform with the domain https://flip4sale.xyz. This experience showcases my ability to meet client requirements, work with payment integrations, and deliver high-quality frontend solutions.",
    demo: "https://flip4sale.xyz",
  },
  {
    id: 2,
    title: "GitHub Profile Finder Using ReactJS and GitHub API",
    image: "/portfolio2.webp",
    description:
      "A responsive React application that lets users explore GitHub profiles, repositories, and contributions effortlessly. Utilizing the GitHub API, it offers an intuitive interface for viewing user activity, repository details, and file contents, complete with syntax highlighting and download options.",
    github:
      "https://github.com/pawantech12/github-profile-finder-using-reactjs",
    demo: "https://github-profile-finder-using-reactjs.vercel.app/",
  },
  {
    id: 4,
    title: " Shoping - A fully responsive mushroom landing website",
    image: "/portfolio4.webp",
    description:
      "Shoping is fully responsive mushroom landing website made using HTML, CSS and JavaScript",
    github: "https://github.com/pawantech12/mushroom-landing-website",
    demo: "https://pawantech12.github.io/mushroom-landing-website/",
  },
  {
    id: 5,
    title: "NotePlus - A web application built with MERN stack",
    image: "/portfolio5.webp",
    description:
      "NotePlus is a web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) with Vite for frontend build tooling. It allows users to create, manage, and share notes.",
    github: "https://github.com/pawantech12/note-taking-website",
    demo: "https://note-taking-website-six.vercel.app/",
  },
  {
    id: 3,
    title:
      "Library Management System Using HTML, CSS, JavaScript, PHP and MySQL",
    image: "/portfolio3.webp",
    description:
      "Library management System Using HTML, CSS, JavaScript, PHP and MySQL",
    github: "https://github.com/pawantech12/library-management-system",
  },
  {
    id: 9,
    title: "Bunzo - Blog Website Using MERN Stack",
    image: "/portfolio9.webp",
    description:
      "Bunzo Blog Application is a fully-featured MERN stack blogging platform that offers a responsive and user-friendly experience. Users can create, edit, and manage blogs, interact with content via comments, likes, and follows, and customize their profiles.",
    github: "https://github.com/pawantech12/blog-website-using-mern",
    demo: "https://blog-website-using-mern-vw2v.onrender.com/",
  },
  {
    id: 6,
    title: "Skilline - Educational Website Using HTML , CSS and JavaScript",
    image: "/portfolio6.webp",
    description:
      "Skilline is an educational website made using HTML, CSS and JavaScript",
    github: "https://github.com/pawantech12/skilline-website",
    demo: "https://pawantech12.github.io/skilline-website/",
  },
  {
    id: 7,
    title:
      "Developer Portfolio built using Reactjs with functional contact form",
    image: "/portfolio7.webp",
    description:
      "Developer Portfolio built using Reactjs with functional contact form",
    github: "https://github.com/pawantech12/dev-portfolio",
  },
  {
    id: 8,
    title: "Personal Blog Website built with ReactJS, Vite, and Tailwind CSS",
    image: "/portfolio8.webp",
    description:
      "This is a modern and responsive blog website built with ReactJS, Vite, and Tailwind CSS. It boasts a user-friendly interface and features dynamic content loading from local JSON files.",
    github: "https://github.com/pawantech12/personal-blog-website",
    demo: "https://personal-blog-website-gamma.vercel.app/",
  },
];

export default projects;
