import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Send, Download } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            Over the past 6 years, I've managed the full lifecycle of e-commerce projects, from the initial idea and
            competitor analysis to launch and technical troubleshooting. I know from hands-on experience that a
            successful website is built on a logical architecture and a keen attention to detail during development.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I am actively looking for a Junior SEO Specialist role where I can leverage my e-commerce background to
            drive growth. Let's talk about how my skills can bring value to your project.
          </p>
        </div>

        <Card className="border-border">
          <CardContent className="pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:vyacheslavovich.ivan@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm">vyacheslavovich.ivan@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ivan-mikhailik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm">linkedin.com/in/ivan-mikhailik</span>
                  </a>
                  <a
                    href="https://t.me/ghgeidzh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm">t.me/ghgeidzh</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Actions</h3>
                <div className="space-y-3">
                  <Button className="w-full justify-start bg-transparent" variant="outline" asChild>
                    <a href="/resume.pdf" download="Ivan_Mikhailik_Resume.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                  <Button className="w-full justify-start" asChild>
                    <a href="mailto:vyacheslavovich.ivan@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Ivan Mikhailik.</p>
        </footer>
      </div>
    </section>
  )
}
