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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Trade%201.0-jBXoS17xSTDWyMyLMqfNzSfirVVjN9.png",
  },
  {
    id: 2,
    title: "Sea Logistics",
    subtitle: "Cost Effective and Time Sensitive Transportation on Ocean, Connecting Ends",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sea%20Logistics%202.0-XYpd66LaaM4XcYaq1wNldGHBceOFC1.jpeg",
  },
  {
    id: 3,
    title: "Air Logistics",
    subtitle: "Fast, Agile and Time Critical Logistics by Air",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Air%20Logistics%202.0-IkRhBRvM3mT7gOd4nzWm7Q0UjbBLEG.png",
  },
  {
    id: 4,
    title: "Project Logistics",
    subtitle: "Oversize, Complex, Heavy Lifts – OOG/Breakbulk",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project%20Logistics-xIiOtwCIpiw9Pa9w5LPhhpyYDbh5NO.jpeg",
  },
  {
    id: 5,
    title: "Custom Clearance",
    subtitle: "Professional Cross Border Custom Clearance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Customs%20Clearance-XiEgbXwZzxyAVvNZn8rnuTzf8ODFtT.png",
  },
  {
    id: 6,
    title: "BPO – Logistics Operation & Finance",
    subtitle: "Backend Operations, Tax Dispute Mitigation, Resolution",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BPO%20Consulting%20Operations%2C%20Financce%2C%20Data%20Updation%20and%20Customer%20Services-Ve5vqhYNT4FphgLY6rReKYbbQwFDPj.png",
  },
  {
    id: 7,
    title: "Compliance, Controls and Taxation",
    subtitle: "Global Trade Controls, Compliance, Supply Chain Security",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tax%2C%20Duty%2C%20Trade%20Control%20and%20Legal-akrj0yxNXE6874E8jTZ41zuWtV3tXQ.png",
  },
  {
    id: 8,
    title: "Corporate Governance",
    subtitle: "Regulatory Governance, CSR & ESG",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ESG-v8qrVv65QyhlwuEhCjn3s2hdN3hkCq.png",
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
          {/* Realigned text content and Picture 9 (globe) to be parallel, with text on left and globe on right */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-bold text-tradserv-dark-text leading-relaxed">
                  Integrated Solutions spanning Trading, Logistics, Compliance and Consulting.
                </p>

                <p className="text-lg md:text-xl text-tradserv-dark-text leading-relaxed">
                  Sourcing and procurement across continents for optimizing supply chains and ensuring seamless
                  cross-border movement of goods.
                </p>

                <p className="text-lg md:text-xl text-tradserv-dark-text leading-relaxed">
                  Our expertise extends to navigating the labyrinth of global trade regulations, including tariffs,
                  customs, and export controls, minimizing risks and control maximization.
                </p>
              </div>
            </div>

            {/* Picture 9 (globe) positioned to the right of the text, with consistent lighter blue tint */}
            <div className="flex-shrink-0">
              <img
                src="/images/picture9.png"
                alt="Global reach"
                className="w-32 h-32 md:w-48 md:h-48 object-contain brightness-150 contrast-125"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
          </div>

          {/* Service Icons Row with white color */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <img
              src="/fiata-logo.png"
              alt="FIATA"
              className="w-20 h-20 object-contain"
            />
            <img
              src="/images/picture11.png"
              alt="Ship logistics"
              className="w-16 h-16 object-contain"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
            <img
              src="/images/picture12.png"
              alt="Checkmark"
              className="w-16 h-16 object-contain"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
            <img
              src="/images/picture13.png"
              alt="Truck"
              className="w-16 h-16 object-contain"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
            <img
              src="/images/picture14.png"
              alt="User profile"
              className="w-16 h-16 object-contain"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
            <img
              src="/images/picture15.png"
              alt="Scales"
              className="w-16 h-16 object-contain"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
