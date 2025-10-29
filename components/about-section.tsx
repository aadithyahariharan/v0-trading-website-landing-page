"use client"

import { useState, useEffect, useRef } from "react"

interface Card {
  id: string
  title: string
  content: string
  emoji: string
}

export default function AboutSection() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const cards: Card[] = [
    {
      id: "overview",
      title: "Company Overview",
      emoji: "🏢",
      content:
        "Tradserv is a premier provider of integrated, technology-driven business solutions for the global trading, logistics, and compliance service offerings. We offer a comprehensive suite of services that act as a 'value chain lifeline' for companies, optimizing every stage of their business activities to drive efficiency, transparency, and profitability. By merging deep industry expertise with global reach, Tradserv helps clients navigate the complexities of global commerce and transform their supply chains into dynamic, value-generating assets.",
    },
    {
      id: "whatwedo",
      title: "What We Do",
      emoji: "⚙️",
      content:
        "Tradserv's integrated platform and expert-led services offer a single, unified solution for managing complex international business operations. Our core offerings include:\n\n• Global Trading\n• Logistics\n• Compliance & Trade Controls\n• Consulting - BPO Finance, Operations, ESG, Tax & Duties",
    },
    {
      id: "mission",
      title: "Our Mission – Connecting Lives",
      emoji: "🎯",
      content:
        "To empower businesses to thrive in the global marketplace by delivering seamless, intelligent, and compliant value chain solutions. We are committed to using innovative technology and proactive consulting to eliminate inefficiencies, mitigate risk, and unlock new growth opportunities for connecting lives.",
    },
    {
      id: "vision",
      title: "Our Vision – Enhancing Lives",
      emoji: "✨",
      content:
        "Tradserv envisions a future where global trade is effortless, efficient, and equitable for all participants. We are dedicated to pioneering innovations in the logistics landscape, moving beyond superficial improvements to address the core challenges of the industry and leave a lasting impact. By creating genuine transformation, we help businesses not only grow, but to enhance lives.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.3 },
    )

    Object.values(cardRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-tradserv-blue pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">About Us</h2>
        </div>

        <div className="space-y-8">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              ref={(el) => {
                if (el) cardRefs.current[card.id] = el
              }}
              className={`bg-tradserv-dark rounded-lg p-8 border border-white transition-all duration-700 transform ${
                visibleCards.has(card.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-tradserv-accent">
                  <span className="mr-2">{card.emoji}</span>
                  {card.title}
                </h3>
              </div>

              <p className="text-tradserv-gray leading-relaxed whitespace-pre-line">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
