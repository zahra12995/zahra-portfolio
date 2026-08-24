import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/lib/icons";
import { whatIBring } from "@/data/portfolio";
import { SECTION_IDS } from "@/lib/constants";

export function WhatIBring() {
  return (
    <section id={SECTION_IDS.bring} className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Why Work With Me" title="What I Bring" />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {whatIBring.map((item, index) => (
            <RevealOnScroll
              key={item.heading}
              delay={index * 0.1}
              className="rounded-2xl border border-surface-border bg-surface p-6 text-center transition-colors hover:border-teal-500/40"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-emerald-400 to-purple-500 text-white">
                <DynamicIcon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.heading}</h3>
              <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
