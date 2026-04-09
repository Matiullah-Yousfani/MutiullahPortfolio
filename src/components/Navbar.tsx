import { useState, useEffect } from "react"
import { Menu, X, Code as Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Why Me", href: "#why-me" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
            <Code2 className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            <span className="gradient-text">Matiullah</span>
            <span className="text-foreground"> Dev</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            className="hidden md:flex glow-teal-hover"
            size="sm"
            onClick={() => handleNavClick("#contact")}
          >
            Hire Me
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="flex flex-col h-full p-6 pt-12">
                <div className="flex items-center gap-2 mb-8">
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 border border-primary/30">
                    <Code2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-bold text-lg">
                    <span className="gradient-text">Matiullah</span>
                    <span className="text-foreground"> Dev</span>
                  </span>
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive =
                      activeSection === link.href.replace("#", "")
                    return (
                      <button
                        key={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={cn(
                          "flex items-center px-4 py-3 text-sm font-medium rounded-lg text-left transition-all duration-200",
                          isActive
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}
                      >
                        {link.label}
                      </button>
                    )
                  })}
                </nav>
                <div className="mt-auto pt-6 border-t border-border">
                  <Button
                    className="w-full"
                    onClick={() => handleNavClick("#contact")}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
