import * as Badge from "@/components/ui/badge"
import * as Button from "@/components/ui/button"
import * as Card from "@/components/ui/card"
import { Eye } from "lucide-react"
import * as React from "react"

type ProjectDetails = {
  title: string
  description: string
  technologies: string[]
  links: { live: string; github: string | null }
}

const projects = [
  {
    title: "Tarot Master",
    description: "A tarot reading platform with web and mobile apps serving 12k+ users",
    technologies: ["Next.js", "Nest.js", "TypeORM", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "React Native", "Expo"],
    links: {
      live: "https://tarotmaster.ai",
      github: null,
    },
  },
  {
    title: "ClassyNotes",
    description: "A study platform for students to connect with buddies around the world",
    technologies: ["Next.js", "Drizzle ORM", "OpenAI", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    links: {
      live: "https://www.classynotes.app",
      github: null,
    },
  },
  {
    title: "Spends Info",
    description: "A software that helps people manage their finances",
    technologies: ["Next.js", "OpenAI", "Fast API", "Shadcn UI", "TypeScript"],
    links: {
      live: "https://spends.info",
      github: "https://github.com/devodii/spends-info",
    },
  },
  {
    title: "AsapForms",
    description: "An open-source alternative to Google Forms with AI features",
    technologies: ["Next.js", "NextAuth", "TypeScript", "Drizzle ORM", "Shadcn UI"],
    links: {
      live: "https://asap-forms.vercel.app/",
      github: "https://github.com/devodii/asap-forms",
    },
  },
] as Array<ProjectDetails>

export function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<ProjectDetails | null>(null)
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const handleOpenDialog = (project: ProjectDetails) => {
    setSelectedProject(project)
    setDialogOpen(true)
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card.Root key={index} className="flex flex-col h-full border border-border">
              <Card.Header>
                <Card.Title className="text-xl">{project.title}</Card.Title>
                <Card.Description className="line-clamp-2">{project.description}</Card.Description>
              </Card.Header>
              <Card.Content className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge.Root key={i} variant="secondary">
                      {tech}
                    </Badge.Root>
                  ))}
                  {project.technologies.length > 4 && <Badge.Root variant="outline">+{project.technologies.length - 4} more</Badge.Root>}
                </div>
              </Card.Content>

              <Card.Footer className="flex gap-2 border-t pt-4">
                <Button.Root
                  onClick={() => handleOpenDialog(project)}
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  See More
                </Button.Root>
              </Card.Footer>
            </Card.Root>
          ))}
        </div>
      </div>
    </section>
  )
}
