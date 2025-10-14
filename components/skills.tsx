import { Card, CardContent } from "@/components/ui/card"
import { Search, ShoppingBag, Code, Briefcase } from "lucide-react"

const skillCategories = [
  {
    title: "SEO & Analytics",
    icon: Search,
    skills: [
      "Basic SEO Strategy Development",
      "On-Page Optimization",
      "SEO-Friendly Site Architecture",
      "Technical SEO",
      "Off-Page SEO Fundamentals",
      "Competitor Analysis",
      "Google Analytics & Ahrefs",
    ],
  },
  {
    title: "E-commerce & CMS Platforms",
    icon: ShoppingBag,
    skills: [
      "Prestashop",
      "OpenCart",
      "Shopify",
      "WooCommerce",
      "Tilda",
      "Custom Module Scoping",
      "Data Exchange Setup",
      "Advanced Catalog Management",
    ],
  },
  {
    title: "Web Technologies",
    icon: Code,
    skills: ["HTML", "CSS", "MySQL", "XML", "CSV", "JSON"],
  },
  {
    title: "Project Management & Tools",
    icon: Briefcase,
    skills: ["Jira", "Asana", "Trello", "Notion", "Managing Multiple Projects"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit built through 6 years of hands-on e-commerce project management and technical SEO
            work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
