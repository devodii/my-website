import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const story = {
  greeting: {
    label: "from uniport life",
    title: "you can really do what you set your mind to.",
    body: [
      "if you came here from the game, thank you for playing it.",
      "i want to tell you a short story about how it was made. i think it might help you.",
    ],
  },
  who: {
    label: "who i am",
    body: [
      "i'm odii. i'm a 300 level computer science student here at uniport, just like many of you.",
      "i started coding on an android phone. i didn't have a laptop. i was just curious about how apps worked, so i kept trying things until they made sense.",
      "that curiosity is still the main thing i have.",
    ],
  },
  filming: {
    label: "making it real",
    body: [
      "i wanted the game to feel like the real uniport, not some made up campus. so i walked around school with my phone on a stick and filmed the roads, the halls and the park.",
      "then i used that footage to build the world you walk around in. if a place looks familiar, that's because it is.",
    ],
  },
  drivers: {
    label: "the hard part",
    body: [
      "it wasn't always easy. some drivers at the park picked on me. they thought i was videoing them and they weren't happy about it.",
      "i explained what i was doing, kept my head down and came back to finish. people won't always understand what you are building. that's fine. keep going.",
    ],
  },
  closing: {
    title: "so start building something.",
    body: "it doesn't have to be big. you don't need a laptop to start either. use what you have and keep showing up.",
    link: { label: "back to uniport life", href: "https://uniport.life" },
  },
}

const photos = {
  standing: {
    src: "/uniport-life/standing.webp",
    alt: "odii standing at the uniport motor park with a backpack and a phone on a stick",
    width: 1050,
    height: 1400,
  },
  filming: {
    src: "/uniport-life/filming.webp",
    alt: "odii holding a phone on a stick up high to film the shuttles at the motor park",
    width: 1050,
    height: 1400,
  },
  park: {
    src: "/uniport-life/motor-park.webp",
    alt: "odii from behind, filming the rows of uniport shuttles under a cloudy sky",
    width: 1200,
    height: 1600,
  },
  side: {
    src: "/uniport-life/filming-side.webp",
    alt: "odii filming the motor park with the phone held out in front of him",
    width: 1050,
    height: 1400,
  },
}

function Section({ label, body, children }: { label: string; body: string[]; children?: ReactNode }) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-sm font-semibold tracking-wide text-muted-foreground mb-4">{label}</h2>
        <div className="space-y-4 text-base leading-relaxed">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {children}
      </div>
    </section>
  )
}

function Photo({ photo, sizes, className }: { photo: (typeof photos)[keyof typeof photos]; sizes: string; className?: string }) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      loading="lazy"
      className={cn("h-auto w-full rounded-lg border border-border bg-muted", className)}
    />
  )
}

export default function UniportLifeStory() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="w-full">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-lg font-bold">
            emmanuel odii
          </Link>
          <a href={story.closing.link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            uniport.life
          </a>
        </div>
      </header>

      <section className="pt-12 pb-6 sm:pt-20">
        <div className="mx-auto max-w-2xl px-4">
          <p className="text-sm font-semibold tracking-wide text-muted-foreground">{story.greeting.label}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{story.greeting.title}</h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {story.greeting.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <Section label={story.who.label} body={story.who.body}>
        <Photo photo={photos.standing} sizes="(min-width: 672px) 640px, 100vw" className="mt-8" />
      </Section>

      <Section label={story.filming.label} body={story.filming.body}>
        <div className="mt-8 space-y-3">
          <Photo photo={photos.filming} sizes="(min-width: 672px) 640px, 100vw" />
          <div className="grid grid-cols-2 gap-3">
            <Photo photo={photos.park} sizes="(min-width: 672px) 320px, 50vw" />
            <Photo photo={photos.side} sizes="(min-width: 672px) 320px, 50vw" />
          </div>
        </div>
      </Section>

      <Section label={story.drivers.label} body={story.drivers.body} />

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{story.closing.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{story.closing.body}</p>
          <a
            href={story.closing.link.href}
            className="mt-6 inline-flex items-center gap-1 text-base text-primary underline underline-offset-2 hover:no-underline"
          >
            {story.closing.link.label}
            <ArrowUpRight className="size-4 shrink-0" />
          </a>
        </div>
      </section>

      <footer className="py-6">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} emmanuel odii</span>
          <Link href="/" className="hover:text-foreground transition-colors">
            more about me
          </Link>
        </div>
      </footer>
    </main>
  )
}
