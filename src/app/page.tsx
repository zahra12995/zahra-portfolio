import { Hero } from "@/components/sections/Hero";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CampaignsSection } from "@/components/sections/CampaignsSection";
import { AutomationShowcase } from "@/components/sections/AutomationShowcase";
import { StorySection } from "@/components/sections/StorySection";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { ResponsibilitiesSection } from "@/components/sections/ResponsibilitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <CampaignsSection />
      <AutomationShowcase />
      <StorySection />
      <WhatIBring />
      <ResponsibilitiesSection />
      <ContactSection />
    </>
  );
}
