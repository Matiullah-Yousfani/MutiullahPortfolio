export type ProjectMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string }

export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  media?: ProjectMedia[]
  technologies: string[]
  features: string[]
  challenges: string
  githubUrl?: string
  liveUrl?: string
  category: string
}

export const DEMO_VIDEO_MP4 =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"

const GITHUB = "https://github.com/Matiullah-Yousfani"

export function getProjectMedia(project: Project): ProjectMedia[] {
  if (project.media && project.media.length > 0) {
    return project.media
  }
  return [{ type: "image", src: project.image, alt: project.title }]
}

export interface WorkExperience {
  id: string
  type: "work"
  title: string
  organization: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
}

export interface Education {
  id: string
  type: "education"
  degree: string
  field: string
  institution: string
  location: string
  startDate: string
  endDate: string
  description: string
}

/** Featured first — Project Launchpad */
export const projects: Project[] = [
  {
    id: "project-launchpad",
    title: "Project Launchpad Platform",
    shortDescription:
      "Freelance management system with .NET Azure Functions, React, auth, payments, and LLM-based talent recommendations.",
    fullDescription:
      "Built during my internship at Mazik Global: a real-world platform for connecting freelancers and clients. I contributed to backend services on Azure Functions, secure authentication flows, and payment integration. Added AI-powered freelancer recommendations using LLMs so the platform surfaces relevant talent faster. Focused on scalable cloud architecture from planning through deployment.",
    image: "/project-ai-support.webp",
    category: "Featured · Full-Stack",
    technologies: [
      ".NET",
      "Azure Functions",
      "React",
      "REST APIs",
      "Authentication",
      "Payments",
      "LLM / AI Integration",
    ],
    features: [
      "Serverless APIs on Azure Functions",
      "React frontend integrated with secure backend",
      "Auth and payment workflows for production use",
      "LLM-based smart freelancer matching",
      "Cloud-first, deployment-ready structure",
    ],
    challenges:
      "Balancing AI recommendation quality with latency and cost meant thoughtful prompting, caching where relevant, and clear API contracts between the React app and Azure Functions.",
    githubUrl: GITHUB,
    media: [
      { type: "image", src: "/project-ai-support.webp", alt: "Launchpad platform" },
      { type: "image", src: "/project-analytics.webp", alt: "Dashboard view" },
      { type: "video", src: DEMO_VIDEO_MP4, poster: "/project-ai-support.webp" },
    ],
  },
  {
    id: "data-sync-platform",
    title: "Data Sync Platform",
    shortDescription:
      "Reliable data synchronization and ETL-style pipelines across systems with validation and error handling.",
    fullDescription:
      "A backend-focused sync platform that moves and reconciles data between sources with clear logging, retries, and validation. Built with emphasis on consistent state, idempotent operations, and maintainable .NET services so ops can trust daily sync runs.",
    image: "/project-pipeline.webp",
    category: "Backend · Data",
    technologies: [".NET", "ASP.NET Core", "SQL Server", "REST APIs", "C#"],
    features: [
      "Configurable sync jobs and schedules",
      "Validation and transformation steps",
      "Error handling with retries and audit trails",
      "SQL Server as primary store",
    ],
    challenges:
      "Handling partial failures without duplicate records required transaction boundaries and idempotent upserts.",
    githubUrl: GITHUB,
    media: [
      { type: "image", src: "/project-pipeline.webp", alt: "Data sync" },
      { type: "image", src: "/project-analytics.webp", alt: "Monitoring" },
    ],
  },
  {
    id: "3pl-logistics-website",
    title: "3PL Logistics Website",
    shortDescription:
      "Web experience for third-party logistics: shipments, tracking touchpoints, and service presentation.",
    fullDescription:
      "A modern logistics site outlining 3PL capabilities, service areas, and customer touchpoints. Combines a clean React-based UI with APIs for dynamic content where needed, prioritizing fast loads and clear user paths.",
    image: "/project-ecommerce.webp",
    category: "Web",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "REST APIs"],
    features: [
      "Responsive marketing and operations pages",
      "Clear service and contact flows",
      "API-driven sections where applicable",
    ],
    challenges:
      "Keeping content maintainable while staying performant on mobile led to component reuse and lightweight assets.",
    githubUrl: GITHUB,
  },
  {
    id: "ecommerce-apis",
    title: "E-Commerce APIs",
    shortDescription:
      "REST APIs for catalog, cart, and orders—structured for scalable e-commerce backends.",
    fullDescription:
      "Set of ASP.NET Core Web APIs supporting product catalog, cart behavior, and order lifecycle. Designed with clear DTOs, validation, and SQL Server persistence suitable for a production storefront or admin integration.",
    image: "/project-ecommerce.webp",
    category: "Backend · APIs",
    technologies: [
      "ASP.NET Core",
      ".NET",
      "Web APIs",
      "SQL Server",
      "REST",
      "C#",
    ],
    features: [
      "Modular controllers and consistent JSON contracts",
      "Entity relationships for catalog and orders",
      "Validation and error responses",
    ],
    challenges:
      "Keeping cart and inventory rules consistent under concurrency pushed clear transactional boundaries in the data layer.",
    githubUrl: GITHUB,
  },
  {
    id: "bookstore-mvc",
    title: "Book Store (ASP.NET Core MVC)",
    shortDescription:
      "Full MVC bookstore with browsing, cart, and admin-friendly structure.",
    fullDescription:
      "Classic ASP.NET Core MVC application for managing and selling books: views, controllers, models, and SQL Server backing store. Suitable as a portfolio showcase of server-rendered .NET patterns and CRUD workflows.",
    image: "/project-analytics.webp",
    category: "Full-Stack · MVC",
    technologies: [
      "ASP.NET Core MVC",
      "C#",
      "SQL Server",
      "Entity Framework",
      "HTML",
      "CSS",
    ],
    features: [
      "Book catalog and detail pages",
      "Shopping cart flow",
      "Server-side rendering with Razor",
    ],
    challenges:
      "Keeping view models clean as features grew required disciplined MVC layering and shared partials.",
    githubUrl: GITHUB,
  },
  {
    id: "react-todo-app",
    title: "React To-Do App",
    shortDescription:
      "Focused React app for tasks with modern component structure and state handling.",
    fullDescription:
      "A React.js to-do application demonstrating hooks, component composition, and persistent UI state. Built for clarity and iteration—easy to extend with filters, categories, or backend sync.",
    image: "/project-ai-support.webp",
    category: "Frontend",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    features: [
      "Add, complete, and remove tasks",
      "Responsive layout",
      "Client-side state management",
    ],
    challenges:
      "Keeping UX smooth on low-end devices meant minimizing re-renders and simple state updates.",
    githubUrl: GITHUB,
  },
  {
    id: "pos-system",
    title: "POS System",
    shortDescription:
      "Point-of-sale style workflow for items, totals, and receipts—built for reliability at the counter.",
    fullDescription:
      "A POS-oriented system emphasizing fast item entry, totals, and printable or viewable receipts. Demonstrates practical .NET/desktop or web-backed logic for retail-style workflows with SQL persistence.",
    image: "/project-pipeline.webp",
    category: "Business Systems",
    technologies: [".NET", "C#", "SQL Server", "REST APIs"],
    features: [
      "Product lookup and line items",
      "Totals, tax hooks, and checkout flow",
      "Data durability for daily operations",
    ],
    challenges:
      "Accuracy on totals and avoiding duplicate submissions required careful validation and transactional saves.",
    githubUrl: GITHUB,
  },
  {
    id: "flutter-apps",
    title: "Flutter Apps (QR Scanner, Weather, UI)",
    shortDescription:
      "Collection of Flutter apps: QR scanning, weather, and polished UI experiments.",
    fullDescription:
      "Multiple Flutter/Dart projects including a QR scanner, a weather-style client consuming APIs, and UI practice apps. Shows cross-platform mobile fundamentals, async data fetching, and composable widgets.",
    image: "/project-ecommerce.webp",
    category: "Mobile · Flutter",
    technologies: ["Flutter", "Dart", "REST APIs"],
    features: [
      "QR code scanning workflow",
      "Weather data consumption",
      "Reusable UI components and navigation",
    ],
    challenges:
      "Platform permissions and camera lifecycle for QR required careful Flutter plugin integration.",
    githubUrl: GITHUB,
  },
]

export const workExperiences: WorkExperience[] = [
  {
    id: "mazik-intern",
    type: "work",
    title: "Software Development Intern",
    organization: "Mazik Global",
    location: "Professional Experience",
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    description: [
      "Developed the Project Launchpad platform using .NET Azure Functions and React as part of a real-world freelance management system.",
      "Worked on backend architecture, authentication, and payment integration.",
      "Integrated AI (LLMs) for smart freelancer recommendations to strengthen platform intelligence.",
      "Gained hands-on experience shipping scalable cloud applications from planning to deployment.",
    ],
    technologies: [
      ".NET",
      "Azure Functions",
      "React",
      "REST APIs",
      "LLM Integration",
      "Azure",
    ],
  },
]

export const educationItems: Education[] = [
  {
    id: "paf-kiet-bscs",
    type: "education",
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution:
      "PAF-KIET (Pakistan Air Force - Karachi Institute of Economics and Technology)",
    location: "Karachi, Pakistan",
    startDate: "2021",
    endDate: "2026 (expected)",
    description:
      "8th semester · Expected graduation: 2026 · CGPA: 3.79. Coursework and projects emphasize software engineering, backend development, and practical system design.",
  },
]

export const skills = {
  languages: ["C#", "C++", "C", "SQL"],
  frontend: ["React.js", "JavaScript", "HTML", "CSS"],
  backend: ["ASP.NET Core", ".NET", "Web APIs"],
  databases: ["SQL Server", "MySQL"],
  tools: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman"],
  other: [
    "OOP",
    "REST APIs",
    "Problem Solving",
    "Azure Functions",
    "AI Integration (LLMs)",
  ],
}
