import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { campaigns } from "@/data/campaigns";
import { SECTION_IDS } from "@/lib/constants";
import { CampaignCard } from "./CampaignCard";

export function CampaignsSection() {
  return (
    <section id={SECTION_IDS.campaigns} className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Campaigns"
          title="Work I've shipped"
          description="Click a card to see what I actually did — and the results, as they land."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {campaigns.map((campaign, index) => (
            <RevealOnScroll key={campaign.id} delay={index * 0.05}>
              <CampaignCard campaign={campaign} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
