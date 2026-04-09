import { useState, useEffect } from "react"
import {
  ArrowDown,
  GitBranch,
  Globe,
  Sparkles,
  Server,
  Cloud,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const roles = [
  ".NET Backend Developer",
  "AI-Integrated Systems Builder",
]

const floatingBadges = [
  { icon: Server, label: "ASP.NET Core", delay: "0s" },
  { icon: Cloud, label: "Azure Functions", delay: "1.5s" },
  { icon: Brain, label: "LLM Integration", delay: "3s" },
  { icon: Sparkles, label: "React", delay: "4.5s" },
]

const GITHUB_HREF = "https://github.com/Matiullah-Yousfani"
const LINKEDIN_HREF = "https://linkedin.com/in/matiullah-yousfani-41a7a1278"

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hero-orb animate-pulse-glow"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, oklch(0.68 0.138 195 / 12%) 0%, transparent 65%)",
            top: "-100px",
            left: "-200px",
          }}
        />
        <div
          className="hero-orb animate-pulse-glow delay-300"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, oklch(0.82 0.10 195 / 8%) 0%, transparent 65%)",
            bottom: "0px",
            right: "-150px",
          }}
        />
        <div
          className="hero-orb"
          style={{
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, oklch(0.68 0.138 195 / 6%) 0%, transparent 65%)",
            top: "40%",
            left: "60%",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {floatingBadges.map((badge, i) => (
          <div
            key={badge.label}
            className="absolute animate-float"
            style={{
              animationDelay: badge.delay,
              top: `${20 + i * 18}%`,
              right: `${6 + (i % 2) * 4}%`,
            }}
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-full glass-card text-xs font-medium text-muted-foreground border border-border/50">
              <badge.icon className="w-3.5 h-3.5 text-primary" />
              {badge.label}
            </div>
          </div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center pt-20 pb-12">
        <div className="animate-fade-in-up">
          <Badge
            variant="outline"
            className="mb-6 border-primary/30 bg-primary/5 text-primary gap-1.5 px-4 py-1.5"
          >
            <Sparkles className="w-3 h-3" />
            Available for freelance &amp; full-time opportunities
          </Badge>
        </div>

        <div className="animate-fade-in-up delay-100">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
            <span className="text-foreground">Matiullah</span>
            <span className="gradient-text"> Yousfani</span>
          </h1>
        </div>

        <div
          className="h-12 sm:h-14 flex items-center justify-center mb-6 animate-fade-in-up delay-200"
          aria-live="polite"
        >
          <p
            className={`text-xl sm:text-2xl md:text-3xl font-semibold gradient-text transition-all duration-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            style={{ transition: "opacity 0.4s ease, transform 0.4s ease" }}
          >
            {roles[roleIndex]}
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in-up delay-300">
          I build scalable backend systems, modern web applications, and
          AI-powered solutions using .NET and Azure. I specialize in clean APIs,
          LLM-based intelligence, and production-ready systems that are reliable
          and efficient.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-400">
          <Button
            size="lg"
            className="w-full sm:w-auto px-8 glow-teal glow-teal-hover"
            onClick={() => scrollTo("projects")}
          >
            View Projects
            <ArrowDown className="w-4 h-4 ml-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 border-primary/30 hover:border-primary/60 hover:bg-primary/5"
            onClick={() => scrollTo("contact")}
          >
            Contact Me
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 animate-fade-in-up delay-500">
          <a
            href={GITHUB_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <GitBranch className="w-4 h-4 group-hover:text-primary transition-colors" />
            <span>GitHub</span>
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href={LINKEDIN_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Globe className="w-4 h-4 group-hover:text-primary transition-colors" />
            <span>LinkedIn</span>
          </a>
          <span className="w-px h-4 bg-border" />
          <span className="text-sm text-muted-foreground">
            BSc CS · PAF-KIET
          </span>
        </div>

        <div className="mt-16 animate-fade-in-up delay-600">
          <div className="mx-auto grid max-w-lg grid-cols-3 gap-6 sm:max-w-xl sm:gap-8">
            {[
              { value: "20+", label: "Projects Completed" },
              { value: "99%", label: "System Reliability" },
              { value: "Real-World", label: "Industry Experience" },
            ].map((stat) => (
              <div key={stat.label} className="min-w-0 text-center">
                <div className="text-xl font-bold gradient-text sm:text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center pb-2 sm:mt-12">
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="flex animate-bounce flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to projects"
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
