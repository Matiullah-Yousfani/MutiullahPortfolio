import { GitBranch, Globe, Mail, Code as Code2, ExternalLink } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Why Me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
]

const MAIL = "mailto:usfanimutiullah@gmail.com"
const LINKEDIN = "https://linkedin.com/in/matiullah-yousfani-41a7a1278"
const GITHUB = "https://github.com/Matiullah-Yousfani"

const socialLinks = [
  { icon: GitBranch, href: GITHUB, label: "GitHub" },
  { icon: Globe, href: LINKEDIN, label: "LinkedIn" },
  { icon: Mail, href: MAIL, label: "Email" },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <footer className="relative border-t border-border bg-card/50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hero-orb animate-pulse-glow"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, oklch(0.68 0.138 195 / 6%) 0%, transparent 70%)",
            bottom: "-200px",
            right: "-100px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 border border-primary/30">
                <Code2 className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold text-lg">
                <span className="gradient-text">Matiullah</span>
                <span className="text-foreground"> Dev</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              .NET Backend Developer specializing in scalable APIs, Azure cloud
              solutions, and AI-integrated systems.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="w-9 h-9 hover:border-primary/50 hover:text-primary transition-colors"
                  asChild
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-primary">
                      →
                    </span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={MAIL}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group break-all"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                usfanimutiullah@gmail.com
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Globe className="w-4 h-4 text-primary shrink-0" />
                linkedin.com/in/matiullah-yousfani-41a7a1278
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <GitBranch className="w-4 h-4 text-primary shrink-0" />
                github.com/Matiullah-Yousfani
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Matiullah Yousfani. Built with care for
            clean code and reliable systems.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            React · .NET · Azure
            <span className="gradient-text font-medium ml-1">✦</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
