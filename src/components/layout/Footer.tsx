import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { contact } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-surface-border/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Zahra. Built with Next.js &amp; a lot of Clay.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/60 transition-colors hover:text-teal-500"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="text-foreground/60 transition-colors hover:text-teal-500"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
