import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Founding Engineer",
      company: "Tarot Master",
      period: "September 2023 - Present",
      description: [
        "Designed and built distributed monolithic server architecture for multiple domains using Nest.js and PostgreSQL",
        "Integrated Contentful CMS for prompt handling with dynamic variables",
        "Developed a robust payment integration with Stripe",
        "Integrated OpenAI, Claude, and Gemini with streaming support",
        "Built a 50+ page web application using Next.js and Tailwind CSS, serving 10,000+ users",
        "Developed a React Native/Expo mobile app styled with Tailwind CSS",
      ],
      technologies: [
        "Next.js",
        "Nest.js",
        "TypeORM",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Tailwind CSS",
        "React Native",
        "Expo",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Minimo (part-time)",
      period: "May 2024 - December 2024",
      description: [
        "Developed single and compound UI components using React Aria",
        "Developed webhook feature to allow customers receive events and data",
        "Created a form builder tool with embedding and tracking features",
      ],
      technologies: ["Next.js", "SQL", "TypeScript", "React Aria"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium mt-1">{exp.company}</CardDescription>
                  </div>
                  <CardDescription className="text-sm">{exp.period}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
