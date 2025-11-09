"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ]

  return (
  <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-3 md:mr-4">
          <Image
            src="/logo-removebg-preview.png"
            alt="Kuphicoffee Logo"
            width={150}
            height={150}
            className="h-8 sm:h-10 md:h-[150px] lg:h-[150px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#6b3a2a] hover:text-[#8c4b36] transition-colors duration-300 font-open-sans font-semibold text-base tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#6b3a2a] hover:text-[#8c4b36] transition-colors focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3 shadow-md rounded-b-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[#6b3a2a] hover:text-[#8c4b36] transition-colors py-2 font-open-sans"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
