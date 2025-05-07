import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { quicksand } from "@/fonts/quick-sand";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Emmanuel Odii | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React Native, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-quicksand antialiased", quicksand.className)}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
