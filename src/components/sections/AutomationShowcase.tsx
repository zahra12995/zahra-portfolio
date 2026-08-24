import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { automations } from "@/data/automation";
import { SECTION_IDS } from "@/lib/constants";
import { FlowDiagram } from "./FlowDiagram";

export function AutomationShowcase() {
  return (
    <section id={SECTION_IDS.automation} className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Automation Showcase"
          title="Systems I've Built"
          description="Infrastructure I've built to take manual work off the team's plate entirely."
        />

        <div className="mt-14 space-y-16">
          {automations.map((automation) => (
            <div key={automation.title}>
              <h3 className="text-xl font-bold sm:text-2xl">{automation.title}</h3>
              <p className="mt-2 max-w-3xl text-sm text-foreground/70 sm:text-base">
                {automation.description}
              </p>

              <RevealOnScroll className="mt-8 overflow-x-auto rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-zinc-950 to-black p-6 sm:p-8">
                <FlowDiagram nodes={automation.nodes} />
              </RevealOnScroll>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {automation.techUsed.map((tech) => (
                  <Badge key={tech} accent="green">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
