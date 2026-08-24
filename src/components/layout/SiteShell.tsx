"use client";

import type { ReactNode } from "react";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
