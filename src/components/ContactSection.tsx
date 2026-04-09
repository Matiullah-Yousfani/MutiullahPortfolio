import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Mail,
  GitBranch,
  Globe,
  Send,
  MessageSquare,
  CircleCheck as CheckCircle,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be under 1000 characters"),
})

type FormValues = z.infer<typeof formSchema>

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "usfanimutiullah@gmail.com",
    href: "mailto:usfanimutiullah@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 307 520 8606",
    href: "tel:+923075208606",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/matiullah-yousfani-41a7a1278",
    href: "https://linkedin.com/in/matiullah-yousfani-41a7a1278",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/Matiullah-Yousfani",
    href: "https://github.com/Matiullah-Yousfani",
  },
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1200))

    console.log("Form submitted:", data)
    setIsSubmitted(true)
    reset()

    toast.success("Message sent successfully!", {
      description: "I'll get back to you within 24 hours.",
    })

    setTimeout(() => setIsSubmitted(false), 6000)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="hero-orb animate-pulse-glow"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, oklch(0.68 0.138 195 / 8%) 0%, transparent 65%)",
            bottom: "-100px",
            right: "-100px",
          }}
        />
        <div
          className="hero-orb animate-pulse-glow delay-300"
          style={{
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle, oklch(0.68 0.138 195 / 5%) 0%, transparent 65%)",
            top: "10%",
            left: "-50px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-base">
            Have a project, internship follow-up, or full-time role in mind?
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Get In Touch
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Available for freelance projects and full-time opportunities.
                I typically reply within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3 group">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-foreground hover:text-primary transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-medium text-foreground mb-1">
                Available for
              </p>
              <ul className="space-y-1.5 mt-3">
                {[
                  "Freelance & contract projects",
                  "Full-time software roles",
                  ".NET / React / API work",
                  "AI integration & backend improvements",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        {...register("name")}
                        aria-invalid={!!errors.name}
                        className={
                          errors.name
                            ? "border-destructive focus-visible:ring-destructive/20"
                            : ""
                        }
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                        className={
                          errors.email
                            ? "border-destructive focus-visible:ring-destructive/20"
                            : ""
                        }
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Project inquiry / Job opportunity / Consultation"
                      {...register("subject")}
                      aria-invalid={!!errors.subject}
                      className={
                        errors.subject
                          ? "border-destructive focus-visible:ring-destructive/20"
                          : ""
                      }
                    />
                    {errors.subject && (
                      <p className="text-xs text-destructive">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, timeline, and what you're looking to achieve..."
                      rows={5}
                      {...register("message")}
                      aria-invalid={!!errors.message}
                      className={`resize-none ${
                        errors.message
                          ? "border-destructive focus-visible:ring-destructive/20"
                          : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 glow-teal glow-teal-hover"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
