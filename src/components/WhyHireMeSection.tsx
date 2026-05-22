import {
  Lightbulb,
  CircleCheck as CheckCircle,
  ArrowRight,
  Star,
  Layers,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const clientOutcomes = [
  "Build full-stack web applications using .NET and React",
  "Develop secure and scalable REST APIs",
  "Integrate AI features (LLMs) into real-world systems",
  "Design efficient backend architectures and databases",
  "Fix bugs, optimize performance, and improve existing systems",
]

const services = [
  "Full-Stack Web Development",
  "REST API Development & Integration",
  "Backend Systems & Cloud Solutions",
  "AI Integration (LLMs)",
  "Bug Fixing & Performance Optimization",
]

export function WhyHireMeSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="why-me" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hero-orb animate-pulse-glow"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, oklch(0.68 0.138 195 / 8%) 0%, transparent 65%)",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Why work with me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Build With{" "}
            <span className="gradient-text">Confidence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed">
            Clean architecture, scalable solutions, and clear communication—so
            you get software you can rely on.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6 mb-12">
          <Card className="border-border bg-card text-left">
            <CardContent className="p-6 sm:p-8 space-y-4">
              <p className="text-base text-foreground leading-relaxed">
                Hi! I&apos;m <span className="font-semibold">Matiullah</span> — a
                junior full-stack .NET developer with hands-on production
                experience across internships: ASP.NET Core, Azure Functions,
                React.js, JWT, EF Core, and OpenAI integrations.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I care about clean architecture, reliable APIs, and delivering
                software end-to-end—from design and tests through staging and Azure
                deployment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card text-left">
            <CardContent className="p-6 sm:p-8">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                Clients work with me to
              </h3>
              <ul className="space-y-3">
                {clientOutcomes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border bg-card text-left">
              <CardContent className="p-6 sm:p-8">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary shrink-0" />
                  Tech stack I work with
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                  <li>
                    <span className="font-medium text-foreground">Frontend:</span>{" "}
                    React.js, TypeScript, HTML5, CSS3, JavaScript (ES6+)
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Backend:</span>{" "}
                    ASP.NET Core, .NET 8, Web API, Azure Functions, EF Core, JWT,
                    Serilog, xUnit
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Databases:</span>{" "}
                    SQL Server, MySQL
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Cloud & tools:</span>{" "}
                    Microsoft Azure, Git, GitHub, Visual Studio, VS Code, Postman,
                    SonarQube
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card text-left">
              <CardContent className="p-6 sm:p-8">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary shrink-0" />
                  Services I offer
                </h3>
                <ul className="space-y-3">
                  {services.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            I focus on clean architecture, scalable solutions, and clear
            communication to deliver high-quality software.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="rounded-xl border border-primary/20 bg-primary/5 px-6 py-4 flex items-center gap-3">
            <Layers className="w-8 h-8 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">
                Ready to start a project?
              </p>
              <p className="text-xs text-muted-foreground">
                Freelance or full-time — I&apos;d love to hear what you&apos;re building.
              </p>
            </div>
          </div>
          <Button className="gap-2 glow-teal px-8" onClick={scrollToContact}>
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
