import { SectionHeading } from "@/components/ui/SectionHeading";
import { storyTitle, timeline } from "@/data/story";
import { SECTION_IDS } from "@/lib/constants";
import { TimelineItem } from "./TimelineItem";

export function StorySection() {
  return (
    <section id={SECTION_IDS.story} className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="My Story" title={storyTitle} />

        <ol className="mt-14">
          {timeline.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              isLast={index === timeline.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
