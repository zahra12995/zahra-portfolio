"use client";

import type { ReactNode } from "react";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { FloatingEmojiField } from "@/components/effects/FloatingEmojiField";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Header />
      <div className="relative">
        <FloatingEmojiField />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
