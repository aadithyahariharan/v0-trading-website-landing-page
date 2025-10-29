"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  image: string
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Global Trading",
    subtitle: "Enabling the global trade seamless and enhancing lives",
    image: "/images/expertise-1.jpg",
  },
  {
    id: 2,
    title: "Sea Logistics",
    subtitle: "Cost Effective Transportation on Ocean, Connecting Ends",
    image: "/images/expertise-2.jpg",
  },
  {
    id: 3,
    title: "Air Logistics",
    subtitle: "Fast, Agile and Time Critical Logistics by Air",
    image: "/images/expertise-3.jpg",
  },
  {
    id: 4,
    title: "Project Logistics",
    subtitle: "Oversize, Complex, Heavy Lifts – OOG/Breakbulk",
    image: "/images/expertise-4.jpg",
  },
  {
    id: 5,
    title: "Custom Clearance",
    subtitle: "Professional Cross Border Custom Clearance",
    image: "/images/expertise-5.jpg",
  },
  {
    id: 6,
    title: "BPO – Logistics Operation & Finance",
    subtitle: "Backend Operations, Tax Dispute Mitigation, Resolution",
    image: "/images/expertise-6.jpg",
  },
  {
    id: 7,
    title: "Compliance, Controls Taxation",
    subtitle: "Global Trade Controls, Compliance, Supply Chain Security",
    image: "/images/expertise-7.jpg",
  },
  {
    id: 8,
    title: "Corporate Governance",
    subtitle: "Regulatory Governance, CSR & ESG",
    image: "/images/expertise-8.jpg",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  return (
    <div className="relative w-full bg-tradserv-dark overflow-hidden pt-16">
      {/* Carousel Container */}
      <div className="relative w-full h-screen flex flex-col">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="max-w-2xl mx-auto fade-in">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">{slide.title}</h1>
                <p className="text-lg md:text-xl text-tradserv-gray mb-8 text-pretty">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-tradserv-accent w-8" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play Resume Hint */}
      {!isAutoPlay && (
        <div className="absolute top-24 right-4 z-20 bg-tradserv-blue/80 text-white px-4 py-2 rounded-lg text-sm">
          Auto-play paused
        </div>
      )}

      <div className="bg-tradserv-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 mb-16">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-bold text-tradserv-dark-text leading-relaxed">
                Integrated Solutions spanning global trading, logistics, compliance, and consulting.
              </p>

              <p className="text-lg md:text-xl text-tradserv-dark-text leading-relaxed">
                Sourcing and procurement across continents to optimizing supply chains and ensuring seamless
                cross-border movement of goods.
              </p>

              <p className="text-lg md:text-xl text-tradserv-dark-text leading-relaxed">
                Our expertise extends to navigating the labyrinth of global trade regulations, including tariffs,
                customs, and export controls, minimizing risks and control maximization.
              </p>
            </div>
          </div>

          {/* Service Icons Row - with Picture 9 on right and Pictures 10-15 below */}
          <div className="flex flex-col gap-8">
            {/* Top row with Picture 9 on the right */}
            <div className="flex justify-between items-center">
              <div className="flex-1"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture9-9XW9rpW3d4w3oqHL7AEXgmoKLzoPgN.png"
                alt="Global reach"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Bottom row with Pictures 10-15 */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture10-dIsizWJn3GRFOiKCehBjnOs9OrhUzi.png"
                alt="FIATA"
                className="w-16 h-16 object-contain"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture11-k5hReVQ8KUNXj6z7r0Kcgdo3dqDGsq.png"
                alt="Ship logistics"
                className="w-16 h-16 object-contain"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture12-tINJ9RNhCofxwGXBbVr6KJC2eRiGUA.png"
                alt="Checkmark"
                className="w-16 h-16 object-contain"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture13-8LHFpFps1bBbYC3yvM3rLmkVUdsrVz.png"
                alt="Truck"
                className="w-16 h-16 object-contain"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture14-oRHmcaL0rBhynEONcnTkeIzzRQUPcJ.png"
                alt="User profile"
                className="w-16 h-16 object-contain"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture15-zja4ISS4diWjVn5C5jnlBOYMcTJL5N.png"
                alt="Scales"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
