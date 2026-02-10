"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const educationData = [
  {
    title: "B.Tech CSE",
    institution: "Dr. D. Y. Patil Pratishthan's College of Engineering Kolhapur",
    period: "2023 - 2026",
    description: "Currently pursuing Bachelor of Technology in Computer Science Engineering with GPA of 7.51.",
    icon: GraduationCap,
  },
  {
    title: "Diploma in CSE",
    institution: "Yashwantrao Chavan Polytechnic Ichalkaranji",
    period: "2020 - 2023",
    description: "Completed Diploma in Computer Science Engineering with 82.57% marks.",
    icon: BookOpen,
  },
  {
    title: "SSC (10th)",
    institution: "Tatyasaheb Masale Vidyalaya Ichalkaranji",
    period: "2020",
    description: "Completed Secondary School Certificate with 87.00% marks.",
    icon: Award,
  },
]

const certifications = [
  "Microsoft Azure AI Fundamentals",
  "Generative AI from Google Cloud",
  "Industrial Training (Web Development at Happy Visitor Dot Com Kolhapur)",
]

export function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="education" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            My educational background and continuous learning journey in technology and development.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {educationData.map((item) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.title}
                className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-serif text-xl font-bold text-gray-900">{item.title}</h3>
                        <span className="text-orange-600 font-medium">{item.period}</span>
                      </div>
                      <p className="text-gray-700 font-medium mb-2">{item.institution}</p>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        <div
          className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ animationDelay: "600ms" }}
        >
          <h3 className="font-serif text-2xl font-bold text-center text-gray-900 mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
  <Card
    key={cert}
    className="p-4 bg-orange-50 border-orange-200 hover:shadow-md transition-shadow duration-300"
  >
    <div className="flex items-center gap-3">
      <Award className="h-5 w-5 text-orange-600 flex-shrink-0" />
      <p className="text-gray-800 font-medium text-sm">{cert}</p>
    </div>
  </Card>
))}

          </div>
        </div>
      </div>
    </section>
  )
}
