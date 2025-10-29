"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import CareersSection from "@/components/careers-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "careers", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-tradserv-dark">
      <Navbar activeSection={activeSection} />
      <section id="home">
        <HeroCarousel />
      </section>
      <div className="h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
      <section id="about">
        <AboutSection />
      </section>
      <div className="h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
      <section id="services">
        <ServicesSection />
      </section>
      <div className="h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
      <section id="careers">
        <CareersSection />
      </section>
      <div className="h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}
