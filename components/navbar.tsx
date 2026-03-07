"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Career", href: "#careers" },
    { label: "Contact us", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }

  const navBgColor = isScrolled ? "bg-white" : "bg-tradserv-dark"

  return (
    <nav className={`fixed top-0 w-full z-50 shadow-lg transition-colors duration-300 ${navBgColor}`}>
      <div className={`max-w-full mx-auto px-0 sm:px-0 lg:px-0 ${navBgColor}`}>
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 h-16 flex items-center pl-0 pr-6">
            <Link href="#home" className="flex items-center h-full">
              <img src="/tradserv-logo.png" alt="tradserv logo" className="h-16 w-auto object-contain" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 ml-auto pr-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? isScrolled
                      ? "text-blue-900 font-bold"
                      : "text-tradserv-accent"
                    : isScrolled
                      ? "text-blue-900 hover:text-tradserv-accent"
                      : "text-white hover:text-tradserv-accent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto pr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isScrolled
                  ? "text-blue-900 hover:bg-tradserv-light-blue"
                  : "text-tradserv-accent hover:bg-tradserv-blue"
              } focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden ${isScrolled ? "bg-white" : "bg-tradserv-blue"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "bg-tradserv-accent text-white"
                    : isScrolled
                      ? "text-blue-900 hover:bg-tradserv-accent hover:text-white"
                      : "text-white hover:bg-tradserv-dark hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
