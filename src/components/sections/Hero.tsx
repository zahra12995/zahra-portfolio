"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { GradientBlobBackground } from "@/components/effects/GradientBlobBackground";
import { Typewriter } from "@/components/effects/Typewriter";
import { hero } from "@/data/portfolio";
import { SECTION_IDS } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex min-h-[90vh] items-center overflow-hidden px-6 py-24"
    >
      <GradientBlobBackground />

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute inset-[-6px] animate-blob rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-purple-500 opacity-80 blur-md" />
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-background sm:h-44 sm:w-44">
            <Image
              src={hero.headshotSrc}
              alt={hero.headshotAlt}
              fill
              sizes="176px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-2 text-lg font-semibold text-foreground/70 sm:text-xl">
            {hero.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-8 text-lg font-semibold sm:text-xl"
        >
          <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-purple-500 bg-clip-text text-transparent">
            <Typewriter phrases={hero.taglines} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="max-w-xl text-base text-foreground/70 sm:text-lg"
        >
          {hero.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button targetId={hero.ctaPrimary.targetId} variant="primary">
            {hero.ctaPrimary.label}
          </Button>
          <Button targetId={hero.ctaSecondary.targetId} variant="secondary">
            {hero.ctaSecondary.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
