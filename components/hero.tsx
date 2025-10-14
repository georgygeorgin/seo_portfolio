import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Linkedin, Send } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2 tracking-wide uppercase">Junior SEO Specialist</p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance">Ivan Mikhailik</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Building e-commerce projects that are user-friendly and optimized for search engines. 6 years of hands-on
            experience managing the full lifecycle of e-commerce projects.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="min-w-[160px]">
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[160px] bg-transparent">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:vyacheslavovich.ivan@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-mikhailik/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/ghgeidzh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
