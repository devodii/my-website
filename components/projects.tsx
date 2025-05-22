import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      title: "Tarot Master",
      description:
        "A tarot reading platform with web and mobile apps serving 12k+ users",
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
      links: {
        live: "https://tarotmaster.ai",
        github: null,
      },
    },
    {
      title: "ClassyNotes",
      description:
        "A study platform for students to connect with buddies around the world",
      technologies: [
        "Next.js",
        "Drizzle ORM",
        "OpenAI",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      links: {
        live: "https://www.classynotes.app",
        github: null,
      },
    },
    {
      title: "Spends Info",
      description: "A software that helps people manage their finances",
      technologies: [
        "Next.js",
        "OpenAI",
        "Fast API",
        "Shadcn UI",
        "TypeScript",
      ],
      links: {
        live: "https://spends.info",
        github: "https://github.com/devodii/spends-info",
      },
    },
    {
      title: "AsapForms",
      description:
        "An open-source alternative to Google Forms with AI features",
      technologies: [
        "Next.js",
        "NextAuth",
        "TypeScript",
        "Drizzle ORM",
        "Shadcn UI",
      ],
      links: {
        live: "https://asap-forms.vercel.app/",
        github: "https://github.com/devodii/asap-forms",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col h-full border border-border"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 border-t pt-4">
                <Button asChild variant="outline" size="sm">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  )}
                </Button>
                <Button asChild size="sm">
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
