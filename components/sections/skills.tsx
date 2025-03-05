"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const skills = {
  Technical: [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 }
  ],
  "Soft Skills": [
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Leadership", level: 85 },
    { name: "Team Collaboration", level: 90 }
  ],
  Tools: [
    { name: "Git/GitHub", level: 95 },
    { name: "Automation Anywhere", level: 85 },
    { name: "UiPath", level: 80 },
    { name: "CI/CD", level: 85 }
  ]
}

export function SkillsSection() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-center mb-6">{category}</h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}