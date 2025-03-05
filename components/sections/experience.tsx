"use client"

import { Timeline } from "@/components/ui/timeline"

const timelineData = [
  {
    title: "2024 - Present",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">Senior RPA Developer</h3>
          <p className="text-muted-foreground mb-4">Adient</p>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">• Integrated Automation Anywhere bots with enterprise systems, enabling seamless data flow and improving operational efficiency</li>
            <li className="text-sm text-muted-foreground">• Architected and implemented scalable Automation Anywhere solutions, streamlining business processes and reducing processing time by 50%</li>
            <li className="text-sm text-muted-foreground">• Developed and enforced RPA governance standards, ensuring compliance, security, and scalability across automation initiatives</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2024 - Present",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">Full Stack Developer</h3>
          <p className="text-muted-foreground mb-4">AiWebHub</p>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">• Built scalable web applications using React and Node.js</li>
            <li className="text-sm text-muted-foreground">• Implemented CI/CD pipelines</li>
            <li className="text-sm text-muted-foreground">• Reduced deployment time by 60%</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2022 - 2024",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">RPA Developer</h3>
          <p className="text-muted-foreground mb-4">IBM</p>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">• Designed and deployed end-to-end UiPath automation solutions</li>
            <li className="text-sm text-muted-foreground">• Integrated third-party APIs</li>
            <li className="text-sm text-muted-foreground">• Optimized existing RPA workflows</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2021 - 2022",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">Software Quality Operation</h3>
          <p className="text-muted-foreground mb-4">Waymo (Alphabet)</p>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">•  Executed large-scale simulations using internal software to enhance Waymo’s autonomous driving performance and safety in complex traffic scenarios</li>
            <li className="text-sm text-muted-foreground">• Analyzed simulation results to identify edge cases and improve the decision-making capabilities in real-world driving conditions</li>
            <li className="text-sm text-muted-foreground">• Collaborated with engineers to refine training models, ensuring higher accuracy in detecting and responding to various traffic situations</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2020 - 2021",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">Software Developer - Innovation Intern</h3>
          <p className="text-muted-foreground mb-4">Lowry Solutions</p>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">• Migrating cutting-edge RFID zone monitoring solution to a Raspberry Pi devic</li>
            <li className="text-sm text-muted-foreground">• Assisting the team for the troubleshooting & deployments</li>
            <li className="text-sm text-muted-foreground">• .NET Framework and C#</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2018 - 2020",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">Bachelor of Computer Science</h3>
          <p className="text-muted-foreground mb-4">Baker College</p>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">• Major in Programming</li>
            <li className="text-sm text-muted-foreground">• GPA: 3.8/4.0</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2008 - 2012",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">Bachelor of Science</h3>
          <p className="text-muted-foreground mb-4">Babes-Bolyai University</p>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">• Major in Biology</li>
            <li className="text-sm text-muted-foreground">• Scientific paper published in Studia Magazine</li>
            <li className="text-sm text-muted-foreground">• Water Quality assesment using biotic indices based on benthic invertebrates in the Caras catchment area</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export function ExperienceSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6">
      <Timeline data={timelineData} />
    </section>
  )
}