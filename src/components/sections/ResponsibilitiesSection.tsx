import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/lib/icons";
import {
  responsibilities,
  responsibilitiesSubtitle,
  responsibilitiesTitle,
} from "@/data/responsibilities";
import { SECTION_IDS } from "@/lib/constants";

export function ResponsibilitiesSection() {
  return (
    <section id={SECTION_IDS.responsibilities} className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="At 7x GTM"
          title={responsibilitiesTitle}
          description={responsibilitiesSubtitle}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {responsibilities.map((item, index) => (
            <RevealOnScroll
              key={item.heading}
              delay={index * 0.08}
              className="rounded-2xl border border-surface-border bg-background p-6 transition-colors hover:border-teal-500/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-emerald-400 to-purple-500 text-white">
                <DynamicIcon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold">{item.heading}</h3>
              <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
