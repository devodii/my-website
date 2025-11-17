"use client"

import * as Badge from "@/components/ui/badge"
import * as Button from "@/components/ui/button"
import * as Card from "@/components/ui/card"
import * as Dialog from "@/components/ui/dialog"
import { Github, Eye } from "lucide-react"
import { FaAndroid } from "react-icons/fa"
import { CiGlobe } from "react-icons/ci"
import * as React from "react"

type ProjectDetails = {
  title: string
  description: string
  technologies: string[]
  links: {
    live: string
    github: string | null
    playStore?: string | null
  }
}

const projects = [
  {
    title: "PayKit",
    description:
      "A payment-agnostic SDK for accepting payments with Stripe, Polar, and other providers with many adapters that make it plugin-ready for platforms like MedusaJS",
    technologies: ["TypeScript", "Next.js", "NPM", "TSUP", "Zod"],
    links: {
      live: "https://usepaykit.dev",
      github: "https://github.com/usepaykit/paykit-sdk",
      playStore: null,
    },
  },
  {
    title: "Tarot Master",
    description: "An AI-powered tarot reading platform with web and mobile apps serving thousands of users",
    technologies: [
      "OpenAI",
      "Next.js",
      "Nest.js",
      "TypeORM",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "React Native",
      "Expo",
      "Gemini",
    ],
    links: {
      live: "https://tarotmaster.ai",
      github: null,
      playStore: "https://play.google.com/store/apps/details?id=com.rodrigo.tarotmaster",
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

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card.Root key={index} className="flex flex-col h-full border border-border hover:shadow-lg transition-shadow">
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

              <Card.Footer className="flex flex-col gap-3 border-t pt-4">
                <div className="flex gap-2 w-full">
                  <Button.Root asChild variant="outline" className="flex-1">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <CiGlobe className="h-4 w-4 mr-2" />
                      Web
                    </a>
                  </Button.Root>
                  {project.links.github && (
                    <Button.Root asChild variant="outline" className="flex-1">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button.Root>
                  )}
                  {project.links.playStore && (
                    <Button.Root asChild variant="outline" className="flex-1">
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <FaAndroid className="h-4 w-4 mr-2" />
                        Play Store
                      </a>
                    </Button.Root>
                  )}
                </div>
                <Button.Root onClick={() => handleOpenDialog(project)} variant="default" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  See More
                </Button.Root>
              </Card.Footer>
            </Card.Root>
          ))}
        </div>
      </div>

      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Content className="max-w-2xl">
          {selectedProject && (
            <>
              <Dialog.Header>
                <Dialog.Title>{selectedProject.title}</Dialog.Title>
                <Dialog.Description>{selectedProject.description}</Dialog.Description>
              </Dialog.Header>
              <div className="space-y-4 py-4">
                <div>
                  <h3 className="font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <Badge.Root key={i} variant="secondary">
                        {tech}
                      </Badge.Root>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Links</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button.Root asChild variant="outline">
                      <a href={selectedProject.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <CiGlobe className="h-4 w-4 mr-2" />
                        Visit Website
                      </a>
                    </Button.Root>
                    {selectedProject.links.github && (
                      <Button.Root asChild variant="outline">
                        <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Github className="h-4 w-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button.Root>
                    )}
                    {selectedProject.links.playStore && (
                      <Button.Root asChild variant="outline">
                        <a href={selectedProject.links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <FaAndroid className="h-4 w-4 mr-2" />
                          Get on Play Store
                        </a>
                      </Button.Root>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Root>
    </section>
  )
}
