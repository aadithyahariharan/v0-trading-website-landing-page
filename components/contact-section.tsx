"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "fallback">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const getMailtoLink = () => {
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    return `mailto:dninmaa@gmail.com?subject=Contact: ${formData.subject}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage(null)

    try {
      const response = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server error. Please use the direct email option.")
      }

      const data = await response.json()

      if (!response.ok) {
        if (data.isConfigError) {
          setSubmitStatus("fallback")
          return
        }
        throw new Error(data.message || "Failed to send message")
      }

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 99625 82721"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["live@tradserv.com"],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Headquarters",
      details: ["BT4, Block B, Third Floor, NAVIN'S SUBHAMANGLA,", "Kalasathamman Koil St, Chellammal Nagar,", "Ramapuram, Chennai 600089, India"],
    },
  ]

  return (
    <section className="py-20 bg-tradserv-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-tradserv-gray max-w-2xl mx-auto text-pretty">
            Have questions? Our team is ready to help you find the perfect solution for your business
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-tradserv-blue rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-tradserv-light-blue p-3 rounded-lg text-tradserv-accent">{info.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-tradserv-gray text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-tradserv-blue rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-tradserv-gray mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-tradserv-dark border-tradserv-light-blue text-white placeholder:text-tradserv-gray"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-tradserv-gray mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-tradserv-dark border-tradserv-light-blue text-white placeholder:text-tradserv-gray"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-tradserv-gray mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="bg-tradserv-dark border-tradserv-light-blue text-white placeholder:text-tradserv-gray"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-tradserv-gray mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-tradserv-dark border-tradserv-light-blue text-white placeholder:text-tradserv-gray"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-tradserv-gray mb-2">
                  Subject
                </label>
                <select
  id="subject"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  required
  className="w-full bg-tradserv-dark border border-tradserv-light-blue text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tradserv-accent"
>
  <option value="" className="text-tradserv-accent">
    Select a subject
  </option>
  <option value="global-trading" className="text-tradserv-accent">
    Global Trading
  </option>
  <option value="logistics" className="text-tradserv-accent">
    Logistics
  </option>
  <option value="compliance-trade-controls" className="text-tradserv-accent">
    Compliance and Trade Controls
  </option>
  <option value="consulting-bpo" className="text-tradserv-accent">
    Consulting - BPO
  </option>
  <option value="careers" className="text-tradserv-accent">
    Careers
  </option>
  <option value="others" className="text-tradserv-accent">
    Others
  </option>
</select>

              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-tradserv-gray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  required
                  rows={5}
                  className="w-full bg-tradserv-dark border border-tradserv-light-blue text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tradserv-accent placeholder:text-tradserv-gray"
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-md text-sm">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-md text-sm">
                  {errorMessage || "Something went wrong. Please try again."}
                </div>
              )}

              {submitStatus === "fallback" && (
                <div className="bg-orange-500/20 border border-orange-500 text-orange-400 px-4 py-3 rounded-md text-sm">
                  <p className="mb-2">The automated email service requires configuration.</p>
                  <p className="mb-2 text-xs opacity-80">
                    To enable automatic sending, please add your <strong>GMAIL_USER</strong> and{" "}
                    <strong>GMAIL_PASSWORD</strong> (App Password) to the Vars section.
                  </p>
                  <a href={getMailtoLink()} className="underline font-bold hover:text-white transition-colors">
                    Click here to send your message via your email app instead
                  </a>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-tradserv-accent text-tradserv-dark hover:bg-white font-semibold py-6 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Map and Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-tradserv-blue rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.056!2d80.184816!3d13.026133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzM0LjEiTiA4MMKwMTEnMDUuMyJF!5e0!3m2!1sen!2sin!4v1710000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Business Hours */}
            <div className="bg-tradserv-blue rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-tradserv-gray text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-tradserv-accent font-semibold">IST :- 09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-tradserv-accent font-semibold">IST :- 09:00 - 13:00</span>
                </div>
              </div>
              <p className="text-xs text-tradserv-gray mt-4 pt-4 border-t border-tradserv-light-blue">
                We respond to all inquiries within 24 business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
