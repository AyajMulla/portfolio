"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Javascript", level: 90 },
      { name: "Next.js", level: 88 },
    ],
  },
  {
    title: "Styling & Design",
    skills: [
      { name: "Tailwind CSS", level: 92 },
      { name: "CSS", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Testing", level: 78 },
    ],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars with staggered delay
          setTimeout(() => {
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(
                  () => {
                    setAnimatedSkills((prev) => new Set([...prev, skill.name]))
                  },
                  categoryIndex * 200 + skillIndex * 100,
                )
              })
            })
          }, 500)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-4">Skills & Experience</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            I&apos;m constantly learning and improving my skills to stay current with the latest technologies and best
            practices in frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-1000 ease-out ${
                            animatedSkills.has(skill.name) ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            width: animatedSkills.has(skill.name) ? `${skill.level}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
