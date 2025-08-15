"use client"

import { useEffect, useState } from "react"
import { Download, Sparkles } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number }>>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [quantumPhase, setQuantumPhase] = useState(0)
  const [neuralConnections, setNeuralConnections] = useState<Array<{ from: number; to: number; active: boolean }>>([])

  const languages = ["HTML", "CSS", "JavaScript", "Python", "Java", "PHP", "C++", "React"]

  const languageData = [
    { name: "HTML", color: "#E34F26", quantum: 0 },
    { name: "CSS", color: "#1572B6", quantum: 0.2 },
    { name: "JavaScript", color: "#F7DF1E", quantum: 0.4 },
    { name: "React", color: "#61DAFB", quantum: 0.6 },
    { name: "Python", color: "#3776AB", quantum: 0.8 },
    { name: "Java", color: "#ED8B00", quantum: 1.0 },
    { name: "PHP", color: "#777BB4", quantum: 1.2 },
    { name: "C++", color: "#00599C", quantum: 1.4 },
  ]

  useEffect(() => {
    setIsVisible(true)
    setParticles(
      Array.from({ length: 8 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
      })),
    )

    const connections = []
    for (let i = 0; i < languageData.length; i++) {
      for (let j = i + 1; j < languageData.length; j++) {
        if (Math.random() > 0.6) {
          connections.push({ from: i, to: j, active: Math.random() > 0.5 })
        }
      }
    }
    setNeuralConnections(connections)

    const quantumInterval = setInterval(() => {
      setQuantumPhase((prev) => (prev + 0.1) % (Math.PI * 2))
    }, 100)

    const neuralInterval = setInterval(() => {
      setNeuralConnections((prev) =>
        prev.map((conn) => ({
          ...conn,
          active: Math.random() > 0.3,
        })),
      )
    }, 2000)

    return () => {
      clearInterval(quantumInterval)
      clearInterval(neuralInterval)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const currentLanguage = languages[currentLanguageIndex]
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < currentLanguage.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentLanguage.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentLanguageIndex((prev) => (prev + 1) % languages.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayText, isTyping, currentLanguageIndex, languages])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="absolute inset-0 bg-orange-500">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {languages.slice(0, 4).map((lang, i) => (
          <div
            key={lang}
            className="absolute px-2 py-1 bg-white/10 rounded text-white/60 text-xs font-medium border border-white/20"
            style={{
              left: `${20 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          >
            {lang}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="inline-block animate-fade-in-up">Hi</span>
                </h1>
              </div>

              <div
                className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  I'm{" "}
                  <span className="text-gray-900 relative inline-block">
                    <span className="relative z-10">Ayaj</span>
                    <span className="absolute inset-0 bg-white/20 rounded-lg transform -skew-x-12 animate-pulse"></span>
                  </span>
                </h1>
              </div>

              <div
                className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="relative inline-block">
                    a Web Developer
                    <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 animate-spin-slow" />
                  </span>
                </h1>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="text-2xl font-semibold text-white/90 mb-4">
                I code in{" "}
                <span className="text-white font-bold border-b-2 border-white/50">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="text-xl text-white/90 max-w-lg leading-relaxed relative">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Energetic and creative with knack for problem-solving and passion for web technologies. I possess
                  solid understanding of HTML, CSS and JavaScript with hands-on experience in building user-centric
                  websites.
                </span>
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/Ayaj_Amir_Mulla_Resume.pdf"
                  download
                  className="group relative flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg font-medium transition-all duration-300 bg-transparent rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                  <Download className="mr-2 h-5 w-5 relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10">Download CV</span>
                  <div className="absolute inset-0 border-2 border-white/50 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative w-full flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 mx-auto rounded-full overflow-hidden shadow-lg relative z-10">
                  <img src="/AJ.jpg" alt="Ayaj Mulla - Web Developer" className="w-full h-auto object-contain" />
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: "scale(1.5)" }}>
                  {neuralConnections.map((conn, i) => {
                    const angle1 = (conn.from / languageData.length) * 2 * Math.PI
                    const angle2 = (conn.to / languageData.length) * 2 * Math.PI
                    const radius = 200
                    const centerX = 192
                    const centerY = 192

                    const x1 = centerX + Math.cos(angle1) * radius
                    const y1 = centerY + Math.sin(angle1) * radius
                    const x2 = centerX + Math.cos(angle2) * radius
                    const y2 = centerY + Math.sin(angle2) * radius

                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={conn.active ? "#ffffff80" : "#ffffff20"}
                        strokeWidth={conn.active ? "2" : "1"}
                        className="transition-all duration-500"
                        style={{
                          filter: conn.active ? "drop-shadow(0 0 4px #ffffff80)" : "none",
                          animation: conn.active ? "neural-pulse 2s ease-in-out infinite" : "none",
                        }}
                      />
                    )
                  })}
                </svg>

                <div className="absolute inset-0">
                  {languageData.map((lang, i) => {
                    const baseAngle = (i / languageData.length) * 2 * Math.PI
                    const quantumOffset = Math.sin(quantumPhase + lang.quantum) * 20
                    const radius = 200 + quantumOffset

                    const centerX = 192
                    const centerY = 192
                    const mouseDistance =
                      typeof window !== "undefined"
                        ? Math.sqrt(
                            Math.pow(mousePos.x - (centerX + window.innerWidth / 2 - 384), 2) +
                              Math.pow(mousePos.y - (centerY + window.innerHeight / 2 - 192), 2),
                          )
                        : 0
                    const magneticForce = Math.max(0, 100 - mouseDistance) / 100
                    const magneticOffset = magneticForce * 30

                    const finalRadius = radius + magneticOffset
                    const x = centerX + Math.cos(baseAngle) * finalRadius
                    const y = centerY + Math.sin(baseAngle) * finalRadius

                    const opacity = 0.7 + Math.sin(quantumPhase + lang.quantum) * 0.3
                    const scale = 0.8 + Math.sin(quantumPhase + lang.quantum * 2) * 0.4

                    return (
                      <div
                        key={lang.name}
                        className="absolute transition-all duration-300 ease-out"
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: `translate(-50%, -50%) scale(${scale})`,
                          opacity: opacity,
                        }}
                      >
                        <div className="relative">
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-2xl border-2 border-white/30 relative overflow-hidden"
                            style={{
                              backgroundColor: lang.color,
                              boxShadow: `0 0 20px ${lang.color}40, inset 0 0 20px ${lang.color}20`,
                              animation: "quantum-glow 3s ease-in-out infinite alternate",
                            }}
                          >
                            <span className="relative z-10">{lang.name}</span>

                            {[...Array(3)].map((_, pi) => (
                              <div
                                key={pi}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                style={{
                                  left: `${50 + Math.sin(quantumPhase * 2 + pi) * 30}%`,
                                  top: `${50 + Math.cos(quantumPhase * 2 + pi) * 30}%`,
                                  opacity: Math.sin(quantumPhase + pi) * 0.5 + 0.5,
                                  animation: `quantum-particle 2s ease-in-out infinite ${pi * 0.5}s`,
                                }}
                              />
                            ))}

                            <div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              style={{
                                transform: `translateX(${Math.sin(quantumPhase) * 100}%)`,
                                animation: "holographic-sweep 4s ease-in-out infinite",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/15 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes neural-pulse {
          0%, 100% { opacity: 0.5; stroke-width: 1; }
          50% { opacity: 1; stroke-width: 3; }
        }
        @keyframes quantum-glow {
          0% { box-shadow: 0 0 20px currentColor, inset 0 0 20px rgba(255,255,255,0.1); }
          100% { box-shadow: 0 0 40px currentColor, inset 0 0 30px rgba(255,255,255,0.2); }
        }
        @keyframes quantum-particle {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
        }
        @keyframes holographic-sweep {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
      `}</style>
    </section>
  )
}
