"use client";

import type { ReactNode } from "react";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { FloatingEmojiField } from "@/components/effects/FloatingEmojiField";
import { ScrollToastNotifications } from "@/components/effects/ScrollToastNotifications";
import { HireMeEasterEgg } from "@/components/effects/HireMeEasterEgg";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollToastNotifications />
      <HireMeEasterEgg />
      <Header />
      <div className="relative">
        <FloatingEmojiField />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
