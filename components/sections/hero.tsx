"use client"

import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { GithubIcon, Linkedin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="sparkles-effect"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#ffffff"
          speed={1}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 relative z-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mx-auto w-32 h-32 mb-8"
          >
            <img
              src="images/Cosmin.png"
              alt="Profile"
              className="rounded-full shadow-2xl"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter"
          >
            Cosmin Balaur
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground"
          >
            Senior RPA Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-[600px] mx-auto text-muted-foreground"
          >
            Passionate about creating elegant solutions to complex problems. Specializing in RPA, web development and AI.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center gap-4"
          >
            <a href="https://github.com/cbalaur91" className="button-variant-outline button-size-icon" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/cosminbalaur91" className="button-variant-outline button-size-icon" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}