"use client"

import { motion } from "framer-motion"
import { HeroSection } from "@/components/sections/hero"
import { ExperienceSection } from "@/components/sections/experience"
import { SkillsSection } from "@/components/sections/skills"
import { ContactSection } from "@/components/sections/contact"

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1400px] mx-auto"
      >
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </motion.div>
    </main>
  )
}