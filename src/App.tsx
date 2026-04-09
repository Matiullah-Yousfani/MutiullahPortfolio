import { Toaster } from "sonner"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { WhyHireMeSection } from "@/components/WhyHireMeSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <WhyHireMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
