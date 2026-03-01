"use client"

import { useState, useEffect, useRef } from "react"

interface ServiceCard {
  id: string
  title: string
  description: string
  details: string[]
}

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const services: ServiceCard[] = [
    {
      id: "globaltrading",
      title: "Global Trading",
      description:
        "We are a 'super specialist' merchant trader that elevates the traditional merchant role by focusing on very specific, high-value areas, relying on specialized knowledge and unique trading strategy to gain competitive advantage upscaling a win-win situation on long term perspective for the trading partners and our customers.",
      details: [
        "Agri, Food, Pharma, Farm Equipments",
        "Medical, Healthcare, Industrial, Engineering",
        "Iron & Steel, Plastic Products, Chemicals",
        "Cosmetics, Hi-tech, Electrical, Electronics",
        "Renewables, Machineries, Spares & Consumables",
        "Recycled Paper/Plastic/Electronics/Cotton",
        "Raw Materials, Fancy Items, Groceries, Spices",
        "Apparel, Garments, Fabrics",
      ],
    },
    {
      id: "logistics",
      title: "Logistics",
      description:
        "Strategic partner that manages the entire supply chain for our client. We provide end-to-end visibility, optimize processes for cost reduction and efficiency, and offer flexibility and scalability to meet changing market dynamics. We serve as the single point of contact, handling multiple logistics functions and managing other providers to achieve strategic goals in the challenging geopolitical environment and volatile disruption across the markets.",
      details: [
        "Air Logistics",
        "Sea Logistics",
        "Road Logistics",
        "Project Logistics",
        "Marine Logistics",
        "Custom Clearance",
        "Warehousing",
        "FTWZ, MHE – Heavy Lifts, Packing",
      ],
    },
    {
      id: "compliance",
      title: "Compliance & Trade Controls",
      description:
        "Key offerings on global trade controls and compliance include export controls, sanctions screening, customs management, risk assessment, Product Classification (HSN), FTA, Tariffs, COO, Technology & Consulting, Supply Chain Security (C-TPAT) AEO, Trade Finance Management & solutions to help businesses navigate complex import/export regulations, reduce risk, and ensure compliance with international laws and trade policies.",
      details: [
        "Export Controls",
        "Sanctions Screening",
        "Customs Management",
        "Risk Assessment",
        "Product Classification (HSN)",
        "FTA, Tariffs, COO",
        "Technology & Consulting",
        "Supply Chain Security (C-TPAT, AEO)",
        "Trade Finance Management",
      ],
    },
    {
      id: "bpo",
      title: "BPO Consulting, Operations & Finance",
      description:
        "Offering a suite of specialized services to mitigate risk, competitive advantage, Streamlined Operations, Cost Reduction, Corporate Global Social Responsibility.",
      details: [
        "Litigation & Dispute Resolution on Indirect Taxes (GST, Customs Duties, VAT)",
        "Case Management, Legal Research, Petition, Appeal, Trial",
        "ADR & Advance Rulings, Arbitration and Mediation",
        "Contract Management - Entire lifecycle from drafting to execution",
        "ESG Strategy and Reporting - Sustainability reports aligned with global standards",
        "Supply Chain Sustainability - Eco-friendly materials and optimized logistics",
        "Regulatory Compliance - Navigate ESG regulations and avoid trade barriers",
      ],
    },
    {
      id: "industryexpertise",
      title: "Industry Expertise",
      description:
        "Our team comprises seasoned professionals with deep expertise across trading, compliance, and logistic sectors. Each member brings specialized knowledge and years of experience to deliver exceptional value.",
      details: [
        "Logistics Operations Backend Outsourcing (LOBO) - Processing & Management of Documents, Operations & Customer Service. Data Analysis, Tracking and Updation. Administrative & Accounting Services",
        "Global Trading – Founder-Member: 15 Years Merchant Trade, Break Bulk EXIM, Master Degree in Foreign Trade",
        "Logistics – Founder-Member: 38 Years Expert- FIATA, LCB(CHA), 4PL, Projects, Vessel Charter",
        "Compliance & Trade Controls – Founder-Member: LL.B 15 Years expertise in Trade Control, Compliance, DMAIC",
        "Consulting - BPO Finance, Operations, ESG, Tax & Duties – Partner-Member: CA, Finance, BPO and Legal Practising",
      ],
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
    <section id="services" className="py-20 bg-tradserv-dark pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Our Services</h2>
        </div>

        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => {
                if (el) cardRefs.current[service.id] = el
              }}
              className={`bg-tradserv-blue rounded-lg overflow-hidden border border-orange-500 transition-all duration-700 transform ${
                visibleCards.has(service.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-tradserv-light-blue to-tradserv-accent p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <p
                  className="text-tradserv-gray text-lg mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                ></p>

                {/* Details List */}
                <div className="grid md:grid-cols-2 gap-4">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-tradserv-accent font-bold text-lg mt-1">✓</span>
                      <span className="text-tradserv-gray">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
