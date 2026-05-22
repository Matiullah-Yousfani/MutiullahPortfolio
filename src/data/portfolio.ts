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

/** Featured first — aligns with résumé “Featured Projects” */
export const projects: Project[] = [
  {
    id: "managix",
    title: "Managix",
    shortDescription:
      "AI-powered enterprise project and workforce management: Kanban tasks, QA pipeline, RBAC, and OpenAI-assisted workflows (.NET 8, Azure Functions, React + TypeScript).",
    fullDescription:
      "Final Year Project: an enterprise-grade platform for managing projects, teams, tasks, QA workflows, and employee monitoring with role-based collaboration (Admin, Project Manager, QA Manager, Developer). Core modules span project and task management with Kanban, subtasks, milestones and deliverables, QA review and approval, timesheets, and project closure reporting. Integrated OpenAI for task analysis and workflow assistance alongside JWT auth with RBAC, file uploads, notifications, payments, and soft delete platform-wide—all on Clean Architecture with repositories, services, DTOs, and Unit of Work, backed by Azure Functions REST APIs with SQL Server and Entity Framework Core.",
    image: "/project-analytics.webp",
    category: "Featured · Final Year · Full-Stack",
    technologies: [
      "ASP.NET Core",
      ".NET 8",
      "Azure Functions",
      "React.js",
      "TypeScript",
      "SQL Server",
      "EF Core",
      "JWT",
      "OpenAI API",
      "RBAC",
    ],
    features: [
      "Kanban project and task lifecycle with subtasks and milestones",
      "QA review and approval pipeline plus timesheet monitoring",
      "AI-assisted task analysis and workflow support via OpenAI",
      "JWT authentication, RBAC, notifications, uploads, payments, soft delete",
      "Clean Architecture: repos, services, DTOs, Unit of Work",
    ],
    challenges:
      "Coordinating multiple roles and QA states without brittle coupling meant clear domain boundaries and consistent RBAC checks across APIs and UI.",
    githubUrl: GITHUB,
    media: [
      { type: "image", src: "/project-analytics.webp", alt: "Managix enterprise dashboards" },
      { type: "image", src: "/project-ai-support.webp", alt: "AI-assisted workflows" },
    ],
  },
  {
    id: "project-launchpad",
    title: "Project Launchpad",
    shortDescription:
      "AI-assisted freelancer marketplace: Azure Functions, React, JWT, Stripe milestone payments, and LLM skill extraction for client–talent matching.",
    fullDescription:
      "Built during my Mazik Global internship: a freelancer marketplace where clients post projects and manage gig-based work end-to-end. LLM-powered skill extraction parses freelancer profiles and matches them to project requirements using structured OpenAI prompts. Includes milestone-based Stripe payments, JWT authentication, freelancer dashboards, and scalable REST APIs on Azure Functions with SQL Server persistence—reflecting architecture, API design, testing, staging, and Azure deployment in production.",
    image: "/project-ai-support.webp",
    category: "Featured · Full-Stack · Internship",
    technologies: [
      "ASP.NET Core",
      "Azure Functions",
      "React.js",
      "SQL Server",
      "OpenAI API",
      "JWT",
      "Stripe",
      "REST APIs",
    ],
    features: [
      "Client posting, discovery, and end-to-end engagement flows",
      "LLM-driven profile parsing and project–talent matching",
      "Milestone Stripe payments and secure JWT-backed APIs",
      "Azure-deployed serverless backends with relational persistence",
    ],
    challenges:
      "Keeping recommendation prompts deterministic enough for predictable matching while capturing nuanced skills required iteration on schema and evaluation against real postings.",
    githubUrl: GITHUB,
    media: [
      { type: "image", src: "/project-ai-support.webp", alt: "Launchpad platform" },
      { type: "image", src: "/project-analytics.webp", alt: "Marketplace dashboards" },
      { type: "video", src: DEMO_VIDEO_MP4, poster: "/project-ai-support.webp" },
    ],
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro",
    shortDescription:
      "Enterprise task management from 10Pearls internship: ASP.NET Core, React, JWT roles, EF Core schema, Serilog, xUnit, and SonarQube.",
    fullDescription:
      "Production-style task manager with admin/user role-based authorization and full CRUD across task lifecycles. Implemented Serilog for structured logging, global exception handling for consistent API errors, SQL Server schema via Entity Framework Core (users, tasks, priorities, categories, due dates), xUnit coverage across controllers, services, and data layers, and SonarQube for static quality on C# and JavaScript—within clean Git branching through the Shine Internship Program at 10Pearls.",
    image: "/project-pipeline.webp",
    category: "Full-Stack · Internship",
    technologies: [
      "ASP.NET Core",
      "React.js",
      "SQL Server",
      "Entity Framework Core",
      "JWT",
      "Serilog",
      "xUnit",
      "SonarQube",
    ],
    features: [
      "JWT authentication with admin/user RBAC",
      "Full CRUD: assignment, priorities, categories, due dates",
      "Serilog logging and global exception handling",
      "xUnit tests and SonarQube-enforced quality",
    ],
    challenges:
      "Maintaining readable logs and actionable API errors across layers without duplicating logic drove a single pipeline for exceptions plus structured Serilog enrichment.",
    githubUrl: GITHUB,
    media: [
      { type: "image", src: "/project-pipeline.webp", alt: "Task management" },
      { type: "image", src: "/project-analytics.webp", alt: "Task overview" },
    ],
  },
  {
    id: "datasync-middleware",
    title: "DataSync Middleware",
    shortDescription:
      "Real-time integration service syncing two external platforms with REST polling, event handlers, retries, and consistency-focused error handling.",
    fullDescription:
      "Middleware synchronizing data between external systems using REST polling and event-driven handlers, with retry logic, structured errors, and strong consistency guarantees—a focused backend piece showing reliable cross-platform pipelines on ASP.NET Core with SQL Server and Entity Framework Core.",
    image: "/project-pipeline.webp",
    category: "Backend · Integration",
    technologies: [
      "ASP.NET Core",
      "REST APIs",
      "SQL Server",
      "Entity Framework Core",
    ],
    features: [
      "REST polling and event-driven synchronization paths",
      "Retries and structured error handling for partial failures",
      "EF Core persistence with consistency in mind",
    ],
    challenges:
      "Preventing drift when either side stalled or returned transient errors meant idempotent handlers and careful ordering of reconciliation steps.",
    githubUrl: GITHUB,
    media: [
      { type: "image", src: "/project-pipeline.webp", alt: "Integration pipelines" },
    ],
  },
  {
    id: "3pl-logistics-management",
    title: "3PL Logistics Management System",
    shortDescription:
      "Logistics platform on ASP.NET Core MVC with order tracking, shipment status, Bootstrap UI, and role-separated admin and client dashboards.",
    fullDescription:
      "Third-party logistics system featuring order tracking, shipment status updates, and a dynamic admin experience with Bootstrap, separating access for administrators and clients on SQL Server with Entity Framework Core.",
    image: "/project-ecommerce.webp",
    category: "Full-Stack · MVC",
    technologies: [
      "ASP.NET Core MVC",
      "SQL Server",
      "Entity Framework Core",
      "Bootstrap",
    ],
    features: [
      "Order and shipment lifecycle visibility",
      "Role-separated admin vs. client dashboards",
      "Responsive Bootstrap UI over MVC stack",
    ],
    challenges:
      "Keeping shipment state transitions authoritative for both roles required clear MVC authorization and constrained update endpoints.",
    githubUrl: GITHUB,
  },
  {
    id: "retailpos",
    title: "RetailPOS",
    shortDescription:
      "Dual POS (C# WinForms + ASP.NET MVC) with inventory, sales reporting, and invoicing backed by SQL Server tuned for transaction volume.",
    fullDescription:
      "Retail point-of-sale spanning desktop WinForms and web MVC: inventory management, sales reporting, and invoice generation, with schema design optimized for high-frequency transactional workloads on SQL Server.",
    image: "/project-ecommerce.webp",
    category: "Desktop · Web · Retail",
    technologies: ["C# WinForms", "ASP.NET MVC", "SQL Server"],
    features: [
      "Counter-ready desktop and complementary web MVC flows",
      "Inventory, invoicing, and sales reporting",
      "SQL tuned for frequent retail transactions",
    ],
    challenges:
      "Sharing reliable stock levels between desktop and web views pushed disciplined transactional boundaries and clear data-access patterns.",
    githubUrl: GITHUB,
  },
]

export const workExperiences: WorkExperience[] = [
  {
    id: "10pearls-intern",
    type: "work",
    title: "Software Development Intern",
    organization: "10Pearls — Shine Internship Program (Remote)",
    location: "Remote",
    startDate: "Apr 2026",
    endDate: "Jun 2026",
    description: [
      "Built TaskFlow Pro end-to-end with ASP.NET Core and React: JWT authentication, role-based authorization (admin/user), and CRUD across the task lifecycle.",
      "Implemented Serilog for structured logs and global exception handling for consistent JSON errors on all endpoints.",
      "Designed SQL Server schema with Entity Framework Core (users, tasks, priorities, categories, due dates) and xUnit tests across controllers, services, and data access.",
      "Integrated SonarQube for C# and JavaScript quality and maintained clean Git branching through delivery.",
    ],
    technologies: [
      "ASP.NET Core",
      "React.js",
      "SQL Server",
      "EF Core",
      "JWT",
      "Serilog",
      "xUnit",
      "SonarQube",
    ],
  },
  {
    id: "mazik-intern",
    type: "work",
    title: "Software Development Intern",
    organization: "Mazik Global",
    location: "Professional Experience",
    startDate: "Jun 2025",
    endDate: "Jul 2025",
    description: [
      "Contributed to Project Launchpad — a freelance management system — on Azure Functions and React.js in a cloud-native production setting.",
      "Implemented JWT authentication and Stripe payments; practiced identity management and end-to-end API design.",
      "Integrated LLM-driven freelancer recommendations using OpenAI APIs to improve matching quality.",
      "Worked through architecture, APIs, testing, staging, and Azure deployment across the software lifecycle.",
    ],
    technologies: [
      "Azure Functions",
      "React.js",
      "ASP.NET Core",
      "JWT",
      "Stripe",
      "OpenAI API",
      "SQL Server",
      "REST APIs",
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
      "Institute of Economics and Technology (PAF-KIET)",
    location: "Karachi, Pakistan",
    startDate: "2021",
    endDate: "2026 (expected)",
    description:
      "8th semester · Expected graduation 2026 · CGPA 3.79. Focus on software engineering, scalable backends, cloud-native patterns, and production delivery.",
  },
]

export const skills = {
  languages: ["C#", "C++", "C", "SQL", "JavaScript", "TypeScript"],
  frontend: ["React.js", "TypeScript", "HTML5", "CSS3", "JavaScript (ES6+)"],
  backend: [
    "ASP.NET Core",
    ".NET Web API",
    ".NET 8",
    "Azure Functions",
    "Entity Framework Core",
    "JWT",
    "REST APIs",
    "Serilog",
    "xUnit",
  ],
  databases: ["SQL Server", "MySQL"],
  tools: [
    "Microsoft Azure",
    "Git",
    "GitHub",
    "Visual Studio",
    "VS Code",
    "Postman",
    "SonarQube",
  ],
  other: [
    "Clean Architecture",
    "OOP",
    "SOLID",
    "RBAC",
    "LLM / OpenAI integration",
    "Stripe payments",
    "Unit testing",
    "Agile",
    "Kanban",
  ],
}
