import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { FaMedium } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Emmanuel Odii. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/emmanuelodii/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link
              href="https://medium.com/@emmanuelodii80"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaMedium className="h-5 w-5" />
              <span className="sr-only">Medium</span>
            </Link>

            <Link
              href="https://x.com/devodii_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">X</span>
            </Link>

            <Link
              href="https://github.com/devodii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">X</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
