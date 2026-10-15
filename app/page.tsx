import Home from "@/components/home"
import UniportLifeStory from "@/components/uniport-life-story"

export default async function Page({ searchParams }: { searchParams: Promise<{ src?: string | string[] }> }) {
  const { src } = await searchParams

  return src === "uniport-life" ? <UniportLifeStory /> : <Home />
}
