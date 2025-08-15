"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function About() {
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
    <section id="portfolio" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-800 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative">
             <div className="w-full h-auto mx-auto bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl overflow-hidden">
  <img src="/innovation1.jpg" alt="Ayaj working" className="w-full h-auto object-cover" />
</div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full animate-float"></div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-900 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>

          <div
            className={`transition-all duration-800 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <Card className="p-8 bg-gray-50 border-0 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Passionate Web Developer</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Currently pursuing B.Tech in Computer Science Engineering from Dr. D. Y. Patil Pratishthan's College
                with a GPA of 7.51. I have hands-on experience in building responsive web applications and solving
                complex problems through innovative solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey includes working as a Web Developer at Anvistar ITS Pvt Ltd and OPERA IT Solution, where I
                developed custom web applications and gained expertise in modern web technologies. I'm committed to
                delivering high-quality, user-centric digital experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "Python", "Java", "PHP", "C++", "React"].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
