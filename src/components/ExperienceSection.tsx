import { Briefcase, GraduationCap, MapPin, Calendar, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { workExperiences, educationItems, skills } from "@/data/portfolio"

function WorkCard({ exp }: { exp: (typeof workExperiences)[0] }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0 group">
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center group-hover:border-primary transition-colors z-10">
          <Briefcase className="w-3.5 h-3.5 text-primary" />
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-1" />
      </div>

      <Card className="border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-md">
        <CardContent className="p-5">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="font-semibold text-foreground text-base leading-snug">
                {exp.title}
              </h3>
              <p className="text-primary text-sm font-medium">{exp.organization}</p>
            </div>
            <Badge
              variant="secondary"
              className="text-xs bg-primary/5 text-primary border-primary/20 whitespace-nowrap shrink-0"
            >
              {exp.endDate === "Present" ? (
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
                  Current
                </span>
              ) : (
                exp.endDate
              )}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {exp.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {exp.startDate} – {exp.endDate}
            </span>
          </div>

          <ul className="space-y-2 mb-4">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs px-2 py-0.5 border-border text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function EducationCard({ edu }: { edu: (typeof educationItems)[0] }) {
  return (
    <div className="relative pl-8 group">
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center group-hover:border-primary transition-colors z-10">
          <GraduationCap className="w-3.5 h-3.5 text-primary" />
        </div>
      </div>

      <Card className="border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-md">
        <CardContent className="p-5">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="font-semibold text-foreground text-base leading-snug">
                {edu.degree} in {edu.field}
              </h3>
              <p className="text-primary text-sm font-medium">{edu.institution}</p>
            </div>
            <Badge
              variant="secondary"
              className="text-xs bg-primary/5 text-primary border-primary/20"
            >
              {edu.endDate}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {edu.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {edu.startDate} – {edu.endDate}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {edu.description}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

const skillCategories = [
  { label: "Languages", key: "languages" as const, color: "text-primary" },
  { label: "Frontend", key: "frontend" as const, color: "text-primary" },
  { label: "Backend", key: "backend" as const, color: "text-primary" },
  { label: "Databases", key: "databases" as const, color: "text-primary" },
  { label: "Tools", key: "tools" as const, color: "text-primary" },
  { label: "Other", key: "other" as const, color: "text-primary" },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hero-orb animate-pulse-glow"
          style={{
            width: "450px",
            height: "450px",
            background:
              "radial-gradient(circle, oklch(0.68 0.138 195 / 6%) 0%, transparent 65%)",
            bottom: "5%",
            left: "-100px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Experience &{" "}
            <span className="gradient-text">Education</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-base">
            CS undergrad at IET (PAF-KIET) with two software internship placements
            and a focus on .NET, Azure Functions, React, and AI-enhanced backends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-8 flex items-center gap-2 text-foreground">
              <Briefcase className="w-5 h-5 text-primary" />
              Work Experience
            </h3>
            <div>
              {workExperiences.map((exp) => (
                <WorkCard key={exp.id} exp={exp} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-8 flex items-center gap-2 text-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div>
                {educationItems.map((edu) => (
                  <EducationCard key={edu.id} edu={edu} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-foreground">
                <Award className="w-5 h-5 text-primary" />
                Technical Skills
              </h3>
              <div className="space-y-5">
                {skillCategories.map(({ label, key }) => (
                  <div key={key}>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      {label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills[key].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-primary/5 border border-primary/20 text-primary hover:bg-primary/10 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
