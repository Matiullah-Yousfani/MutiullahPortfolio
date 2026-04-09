import { useState, useRef, useEffect } from "react"
import {
  ExternalLink,
  GitBranch,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import {
  projects,
  type Project,
  type ProjectMedia,
  getProjectMedia,
} from "@/data/portfolio"
import { cn } from "@/lib/utils"

const CLOSE_CLEAR_MS = 280

const modalBodyScrollClass =
  "min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border/60 hover:[&::-webkit-scrollbar-thumb]:bg-border"

function ProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left w-full rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden glow-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative overflow-hidden aspect-video bg-muted">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3">
          <Badge
            variant="secondary"
            className="text-xs bg-background/80 backdrop-blur-sm border-border"
          >
            {project.category}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-xs text-primary font-medium flex items-center gap-1">
            View Details <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-base mb-2 text-foreground group-hover:text-primary transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs px-2 py-0.5 bg-primary/5 text-primary border-primary/20"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge
              variant="secondary"
              className="text-xs px-2 py-0.5 text-muted-foreground"
            >
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </div>
    </button>
  )
}

function ProjectLeftPanel({
  project,
  items,
  activeIndex,
  onSelect,
}: {
  project: Project
  items: ProjectMedia[]
  activeIndex: number
  onSelect: (index: number) => void
}) {
  const active = items[activeIndex]
  const canNavigate = items.length > 1

  const goPrev = () => {
    if (!canNavigate) return
    onSelect(activeIndex === 0 ? items.length - 1 : activeIndex - 1)
  }

  const goNext = () => {
    if (!canNavigate) return
    onSelect(activeIndex === items.length - 1 ? 0 : activeIndex + 1)
  }

  return (
    <div className="flex size-full min-h-0 min-w-0 flex-col">
      <div className="relative aspect-[16/10] w-full shrink-0 bg-muted sm:aspect-[16/11] lg:min-h-0 lg:flex-1 lg:aspect-auto">
        {active.type === "image" ? (
          <img
            src={active.src}
            alt={active.alt ?? project.title}
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <video
            key={active.src}
            controls
            playsInline
            className="absolute inset-0 size-full bg-black object-contain"
            poster={active.poster ?? project.image}
            preload="metadata"
          >
            <source src={active.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {canNavigate ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image or video"
              className={cn(
                "absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full",
                "border border-border/60 bg-background/85 text-foreground shadow-md backdrop-blur-sm",
                "transition-colors hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "sm:left-3 sm:h-11 sm:w-11"
              )}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image or video"
              className={cn(
                "absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full",
                "border border-border/60 bg-background/85 text-foreground shadow-md backdrop-blur-sm",
                "transition-colors hover:bg-background hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "sm:right-3 sm:h-11 sm:w-11"
              )}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
            </button>
            <div
              className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-border/50 bg-background/80 px-2.5 py-0.5 text-xs font-medium text-muted-foreground tabular-nums backdrop-blur-sm"
              aria-hidden
            >
              {activeIndex + 1} / {items.length}
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

function ProjectDetailDialog({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [mediaIndex, setMediaIndex] = useState(0)

  useEffect(() => {
    if (project) {
      setMediaIndex(0)
    }
  }, [project?.id])

  if (!project) return null

  const mediaItems = getProjectMedia(project)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className={cn(
          "flex max-h-[min(90vh,680px)] w-[min(96vw,96rem)] max-w-[min(96vw,96rem)] translate-x-[-50%] translate-y-[-50%] flex-col gap-0 overflow-hidden rounded-2xl border-border/50 bg-card/95 p-0 shadow-2xl backdrop-blur-xl duration-300 sm:w-[min(96vw,96rem)] sm:max-w-[min(96vw,96rem)]",
          "lg:h-[min(78vh,680px)] lg:max-h-[min(90vh,720px)] lg:flex-row"
        )}
      >
        <DialogClose
          type="button"
          className={cn(
            "absolute right-3 top-3 z-30 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:right-4 sm:top-4",
            "border border-border/80 bg-background/90 text-foreground shadow-md backdrop-blur-md",
            "ring-offset-background transition-all hover:bg-accent hover:text-accent-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none"
          )}
        >
          <X className="h-4 w-4" strokeWidth={2} />
          <span className="sr-only">Close project details</span>
        </DialogClose>

        <div
          className={cn(
            "relative flex min-h-0 w-full shrink-0 flex-col border-b border-border/50 bg-muted/20",
            "lg:h-full lg:w-[40%] lg:min-w-0 lg:max-w-none lg:flex-[0_0_40%] lg:border-b-0 lg:border-r lg:border-border/50"
          )}
        >
          <ProjectLeftPanel
            project={project}
            items={mediaItems}
            activeIndex={mediaIndex}
            onSelect={setMediaIndex}
          />
        </div>

        <div
          className={cn(
            modalBodyScrollClass,
            "min-w-0 flex-[1_1_60%] px-5 py-6 sm:px-8 sm:py-8 lg:w-[60%]"
          )}
        >
          <div className="space-y-7">
            <div className="space-y-3 pr-10 text-left sm:pr-12">
              <Badge className="bg-primary/90 text-primary-foreground text-xs shadow-sm">
                {project.category}
              </Badge>
              <DialogHeader className="space-y-2 text-left">
                <DialogTitle className="text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                  {project.title}
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.slice(0, 5).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="border-primary/20 bg-primary/5 text-xs text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 5 ? (
                  <Badge
                    variant="secondary"
                    className="text-xs text-muted-foreground"
                  >
                    +{project.technologies.length - 5}
                  </Badge>
                ) : null}
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Overview
              </h4>
              <p className="text-base leading-relaxed text-muted-foreground">
                {project.fullDescription}
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-primary/30 bg-primary/5 text-xs text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Key Features
              </h4>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.challenges ? (
              <>
                <Separator />
                <div>
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Challenges &amp; Solutions
                  </h4>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {project.challenges}
                  </p>
                </div>
              </>
            ) : null}

            <Separator />

            <div className="flex flex-wrap gap-3 pb-1">
              {project.githubUrl ? (
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitBranch className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              ) : null}
              {project.liveUrl ? (
                <Button size="sm" className="gap-2 glow-teal" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  const openProject = (project: Project) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setSelectedProject(project)
    setDialogOpen(true)
  }

  const handleDialogOpenChange = (next: boolean) => {
    if (next) {
      setDialogOpen(true)
      return
    }
    setDialogOpen(false)
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    closeTimerRef.current = setTimeout(() => {
      setSelectedProject(null)
      closeTimerRef.current = null
    }, CLOSE_CLEAR_MS)
  }

  return (
    <section
      id="projects"
      className="relative isolate py-24 overflow-x-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="hero-orb animate-pulse-glow"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, oklch(0.68 0.138 195 / 7%) 0%, transparent 65%)",
            top: "10%",
            right: "-150px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Layers className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Portfolio
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground">
            Highlights from my work — full-stack .NET and React, APIs, mobile,
            and AI-enhanced systems. Project Launchpad is featured from my Mazik
            Global internship.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openProject(project)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="gap-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5"
            asChild
          >
            <a
              href="https://github.com/Matiullah-Yousfani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch className="h-4 w-4" />
              See More on GitHub
            </a>
          </Button>
        </div>
      </div>

      <ProjectDetailDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={handleDialogOpenChange}
      />
    </section>
  )
}
