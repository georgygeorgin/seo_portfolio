import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Globe, Package, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Snackoland.lv Online Store",
    role: "Webmaster / Project Manager",
    url: "https://snackoland.lv",
    description:
      "Developed and launched the Snackoland e-commerce store from scratch. Architected the entire catalog structure, performed on-page SEO, and handled full technical deployment including CMS installation, module integration, and external service connections.",
    highlights: [
      "Architected Site Structure",
      "On-Page SEO & Content",
      "Full Technical Deployment",
      "Automation & Stability",
    ],
    tags: ["Prestashop", "HTML", "CSS", "MySQL", "Google Analytics"],
    icon: ShoppingCart,
  },
  {
    title: "Mobilo.lv International Expansion",
    role: "Webmaster / Project Manager",
    url: "https://mobilo.lv",
    description:
      "Built the mobilo.lv mobile accessories store from scratch and managed its international expansion by duplicating and adapting the site for Estonian (imob.ee) and Lithuanian (ibest.lt) markets.",
    highlights: [
      "Multi-Market Deployment",
      "Localization Coordination",
      "Initial Site Architecture",
      "Localized Payment & Shipping",
    ],
    tags: ["Prestashop", "HTML", "CSS", "MySQL", "Multi-Market"],
    icon: Globe,
  },
  {
    title: "Multipack.lv Platform Migration",
    role: "Migration Specialist / Webmaster",
    url: "https://multipack.lv",
    description:
      "Migrated the multipack.lv packaging materials store from Magento to a modern CMS. Completely overhauled site structure for better UX and built seamless integration with the client's warehouse management system.",
    highlights: ["Platform Migration", "Site Architecture Redesign", "Custom Stock System", "Content Adaptation"],
    tags: ["Prestashop", "Magento", "MySQL", "HTML", "CSS"],
    icon: Package,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            E-commerce projects showcasing full lifecycle management from concept to launch and international expansion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group/link"
                  >
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-colors opacity-0 group-hover/link:opacity-100" />
                  </a>
                  <p className="text-sm font-medium text-accent mb-2">{project.role}</p>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
