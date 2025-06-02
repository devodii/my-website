import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
          <div className="mb-8 flex flex-col items-center">
            <div className="w-48 h-48 relative overflow-hidden rounded-full border-4 border-primary/20 mb-8">
              <Image
                src="/profile.png"
                alt="Emmanuel Odii"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg">
                I'm an 18-year-old full-stack developer from Nigeria, currently
                in my second year of college. I've built Tarot Master, which has
                grown to over 12k+ users, and recently launched its web app.
              </p>
              <p className="text-lg">
                I share my knowledge and experiences through writing on Medium
                and LinkedIn, where I've built a community of over 11k+
                followers combined.
              </p>
              <p className="text-lg">
                With 2 years of experience in full-stack development, I focus on
                delivering high-quality software and collaborating effectively
                with cross-functional teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
