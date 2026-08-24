import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GradientBlobBackground } from "@/components/effects/GradientBlobBackground";
import { GradientText } from "@/components/ui/GradientText";
import { contact } from "@/data/portfolio";
import { SECTION_IDS } from "@/lib/constants";

export function ContactSection() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="relative overflow-hidden px-6 py-28"
    >
      <GradientBlobBackground />

      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <GradientText>{contact.heading}</GradientText>
        </h2>
        <p className="mt-4 text-base text-foreground/70 sm:text-lg">
          {contact.subheading}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href={contact.linkedinUrl} variant="primary">
            <LinkedInIcon className="mr-2 h-4 w-4" />
            Connect on LinkedIn
          </Button>
          <Button href={`mailto:${contact.email}`} variant="secondary">
            <Mail className="mr-2 h-4 w-4" />
            Email Me
          </Button>
        </div>

        <p className="mt-8 text-sm text-foreground/50">
          {contact.availabilityNote}
        </p>
      </RevealOnScroll>
    </section>
  );
}
