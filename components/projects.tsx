"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    title: "Diploma Aspirant",
    description:
      "The Goal of the project is to provide diploma study material to new Students. My contribution is Designing the software using HTML, CSS, JS, Java and Android Studio SDK Java.",
    image: "/diploma.jpg",
    tech: ["Java", "Android Studio"],
    github: "#",
    live: "#",
  },
  {
    title: "Meal Planner",
    description:
      "The Goal is to get the proper diet and nutrition for body because Health is Wealth. Built using modern web technologies with focus on user experience.",
    image: "/meal.jpg",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Faculty Profile Generator",
    description:
      "The Goal of this project is to provide the information of Staff in one place. A comprehensive system for managing faculty information and profiles.",
    image: "/Faculty.png",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    github: "#",
    live: "#",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Here are some of my key projects that demonstrate my skills in web development and problem-solving
            abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={192}
                    className={`w-full h-48 object-cover transition-transform duration-300 ${
                      hoveredProject === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-orange-500/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
