import * as Button from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">Emmanuel Odii</h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">Full Stack Developer</h2>
        <p className="max-w-2xl text-lg md:text-xl mb-10 text-muted-foreground">
          Building quality software and collaborating with cross-functional teams. Specializing in Next.js, React Native, and TypeScript.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button.Root asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button.Root>
          <Button.Root asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button.Root>
        </div>
        <div className="mt-20 animate-bounce">
          <Link href="#about">
            <Button.Root variant="ghost" size="icon" className="rounded-full h-12 w-12">
              <ArrowDown className="h-6 w-6" />
            </Button.Root>
          </Link>
        </div>
      </div>
    </section>
  )
}
