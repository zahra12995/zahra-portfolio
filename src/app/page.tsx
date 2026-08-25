import { Hero } from "@/components/sections/Hero";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CampaignsSection } from "@/components/sections/CampaignsSection";
import { AutomationShowcase } from "@/components/sections/AutomationShowcase";
import { StorySection } from "@/components/sections/StorySection";
import { WhatIBring } from "@/components/sections/WhatIBring";
import { ResponsibilitiesSection } from "@/components/sections/ResponsibilitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <SectionDivider emoji="🎯" />
      <CampaignsSection />
      <SectionDivider emoji="🚀" />
      <AutomationShowcase />
      <SectionDivider emoji="💡" />
      <StorySection />
      <SectionDivider emoji="✅" />
      <WhatIBring />
      <SectionDivider emoji="📈" />
      <ResponsibilitiesSection />
      <SectionDivider emoji="📧" />
      <ContactSection />
    </>
  );
}
