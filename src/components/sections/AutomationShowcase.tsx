import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { automation } from "@/data/automation";
import { SECTION_IDS } from "@/lib/constants";
import { FlowDiagram } from "./FlowDiagram";

export function AutomationShowcase() {
  return (
    <section id={SECTION_IDS.automation} className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Automation Showcase"
          title={automation.title}
          description={automation.description}
        />

        <RevealOnScroll className="mt-14 overflow-x-auto rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-zinc-950 to-black p-6 sm:p-8">
          <FlowDiagram nodes={automation.nodes} />
        </RevealOnScroll>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {automation.techUsed.map((tech) => (
            <Badge key={tech} accent="green">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
