import localFont from "next/font/local"

export const quicksand = localFont({
  src: [
    { path: "./quicksand/static/regular.ttf", weight: "400", style: "normal" },
    { path: "./quicksand/static/bold.ttf", weight: "700", style: "normal" },
    { path: "./quicksand/static/semibold.ttf", weight: "600", style: "normal" },
    { path: "./quicksand/static/medium.ttf", weight: "500", style: "normal" },
    { path: "./quicksand/static/light.ttf", weight: "300", style: "normal" },
  ],
  variable: "--font-quicksand",
})
