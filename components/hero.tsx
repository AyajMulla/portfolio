"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen bg-orange-500 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi
              <br />
              I'm <span className="text-gray-900">Ayaj</span>
              <br />
              <span className="text-gray-900">a Web Developer</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
              Energetic and creative with knack for problem-solving and passion for web technologies. I possess solid
              understanding of HTML, CSS and JavaScript with hands-on experience in building user-centric websites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button
                onClick={scrollToProjects}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
              >
                About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
              <a
  href="/Ayaj_Amir_Mulla_Resume.pdf"
  download
  className="flex items-center justify-center border border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 text-lg font-medium transition-all duration-200 bg-transparent rounded-md"
>
  <Download className="mr-2 h-5 w-5" />
  Download CV
</a>

            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="w-full">
              <div className="w-96 h-96 mx-auto rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/AJ.jpg"
                  alt="Ayaj Mulla - Web Developer"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full animate-float"></div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-900/20 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
