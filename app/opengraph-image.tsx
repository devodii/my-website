import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Emmanuel Odii - Full stack developer"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function OGImage() {
  const [regular, bold, profileImage] = await Promise.all([
    readFile(join(process.cwd(), "fonts/quicksand/static/regular.ttf")),
    readFile(join(process.cwd(), "fonts/quicksand/static/bold.ttf")),
    readFile(join(process.cwd(), "public/profile.png")),
  ])

  const profileImageBase64 = `data:image/png;base64,${profileImage.toString("base64")}`

  return new ImageResponse(
    (
      <div tw="w-full h-full flex items-center justify-center" style={{ background: "hsl(0, 0%, 8%)" }}>
        <div tw="flex items-center justify-center w-full h-full px-16">
          {/* Profile Image */}
          <div tw="flex items-center justify-center mr-16">
            <img
              src={profileImageBase64}
              tw="w-80 h-80 rounded-full object-cover border-4"
              style={{ borderColor: "hsl(0, 0%, 98%)" }}
              alt="Emmanuel Odii"
            />
          </div>

          {/* Text Content */}
          <div tw="flex flex-col justify-center">
            <h1
              tw="text-7xl font-bold mb-4"
              style={{
                color: "hsl(0, 0%, 98%)",
                fontFamily: "Quicksand",
              }}
            >
              Emmanuel Odii
            </h1>
            <p
              tw="text-3xl"
              style={{
                color: "hsl(0, 0%, 65%)",
                fontFamily: "Quicksand",
              }}
            >
              Full Stack Developer
            </p>
            <p
              tw="text-2xl mt-2"
              style={{
                color: "hsl(0, 0%, 65%)",
                fontFamily: "Quicksand",
              }}
            >
              Next.js • React Native • TypeScript
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Quicksand", data: regular, style: "normal", weight: 400 },
        { name: "Quicksand", data: bold, style: "normal", weight: 700 },
      ],
    },
  )
}
