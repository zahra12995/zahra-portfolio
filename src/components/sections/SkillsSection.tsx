import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DynamicIcon } from "@/lib/icons";
import { skillCategories } from "@/data/skills";
import { staggerChildren, fadeInUp } from "@/lib/motion";
import { SECTION_IDS } from "@/lib/constants";
import { SkillCard } from "./SkillCard";

export function SkillsSection() {
  return (
    <section id={SECTION_IDS.skills} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & Tools"
          description="The stack I use to turn a raw ICP into a pipeline that actually converts."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <RevealOnScroll
              key={category.category}
              variants={staggerChildren(0.08)}
              delay={index * 0.05}
              className="rounded-2xl border border-surface-border bg-background p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-emerald-400 to-purple-500 text-white">
                  <DynamicIcon name={category.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {category.tools.map((tool) => (
                  <RevealOnScroll key={tool.name} variants={fadeInUp} as="div">
                    <SkillCard tool={tool} />
                  </RevealOnScroll>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
