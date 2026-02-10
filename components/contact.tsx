"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from "lucide-react"
import emailjs from "emailjs-com"
import {toast} from "react-toastify"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        "service_zq0qns7",
        "template_u54be1m",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "VTVTS2eawMHwtGUJM",
      )
      .then(() => {
        // alert("Message sent successfully!")
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      })
      .catch(() => {
        alert("Failed to send message. Please try again later.")
      })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-4">
          Let&apos;s Work Together
        </h2>

        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <Card className="p-8 bg-white shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-orange-600" />
                <span>ayajmulla2341@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-orange-600" />
                <span>+91 935 940 5574</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-orange-600" />
                <span>Ichalkaranji</span>
              </div>

              <div className="flex gap-4 pt-4">
                <Github />
                <Linkedin />
                <Instagram />
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-8 bg-white shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
              <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
              <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required />
              <Button type="submit" className="w-full bg-orange-500 text-white">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </Card>
        </div>

        <p className="text-center mt-16 text-gray-600">
          © 2025 Ayaj. Built with ❤️ passion for great design ✨
        </p>
      </div>
    </section>
  )
}
