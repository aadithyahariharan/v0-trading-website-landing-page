"use client"

import { Briefcase, MapPin, Clock, Users } from "lucide-react"

interface JobPosting {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
}

export default function CareersSection() {
  const jobPostings: JobPosting[] = [
    {
      id: 1,
      title: "Senior Logistics Manager",
      department: "Operations",
      location: "Singapore",
      type: "Full-time",
      description: "Lead our logistics operations team and optimize supply chain processes across Asia-Pacific region.",
    },
    {
      id: 2,
      title: "Supply Chain Analyst",
      department: "Analytics",
      location: "Dubai",
      type: "Full-time",
      description: "Analyze supply chain data and provide insights to improve efficiency and reduce costs.",
    },
    {
      id: 3,
      title: "Customs Compliance Officer",
      department: "Compliance",
      location: "New York",
      type: "Full-time",
      description: "Ensure all shipments meet regulatory requirements and manage customs documentation.",
    },
    {
      id: 4,
      title: "Business Development Executive",
      department: "Sales",
      location: "London",
      type: "Full-time",
      description: "Identify new business opportunities and build relationships with key clients in Europe.",
    },
  ]

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive and inclusive environment",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Enjoy flexible working arrangements and work-life balance",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career Growth",
      description: "Access professional development and advancement opportunities",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "Work across our international affiliates and expand your horizons",
    },
  ]

  return (
    <section id="careers" className="py-20 bg-tradserv-blue pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">🚀 Career</h2>
          <p className="text-lg text-tradserv-gray max-w-2xl mx-auto text-pretty">
            Join our team and let's grow together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance text-left">
              Join our team and let&apos;s grow together
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-white leading-relaxed">
                Are you passionate about Global Trade, Logistics, Compliance & Trade Controls ? We have exciting
                opportunities waiting for you to advance your career and achieve your growth aspirations!
              </p>

              <p className="text-lg text-white leading-relaxed">
                Don&apos;t hesitate – reach out to us with your interests and profile. We&apos;d love to connect with
                talented professionals like you!
              </p>

              <p className="text-xl text-tradserv-accent font-semibold leading-relaxed">
                Let&apos;s connect and enhance lives, Globally.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="bg-tradserv-dark rounded-lg p-8 border border-white mt-8 hover:border-white hover:shadow-lg transition-all text-left">
              <h3 className="text-xl font-bold text-tradserv-accent mb-4">Get in Touch</h3>
              <p className="text-tradserv-gray mb-6">
                Your journey with <span className="text-orange-500 font-semibold">tradserv</span> begins here. Share
                your vision and profile with us today.
              </p>
              <div className="flex justify-start">
                <a
                  href="#contact"
                  className="inline-block bg-tradserv-accent text-tradserv-dark px-8 py-3 rounded-lg font-semibold border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
              alt="tradserv team collaboration"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 mt-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-tradserv-dark rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-tradserv-light-blue p-3 rounded-lg text-tradserv-accent">{benefit.icon}</div>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-tradserv-gray text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}

        {/* Culture Section Removed */}

        {/* CTA Removed */}
      </div>
    </section>
  )
}
