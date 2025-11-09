"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-amber-50">
      <section className="max-w-2xl mx-auto px-4 py-20">
        <h1 className="font-playfair text-4xl md:text-5xl text-center text-amber-900 mb-16">Hubungi Kami</h1>

        <form onSubmit={handleSubmit} className="bg-amber-100 p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="block font-open-sans text-amber-900 mb-2 font-semibold">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:border-amber-600"
            />
          </div>

          <div>
            <label className="block font-open-sans text-amber-900 mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:border-amber-600"
            />
          </div>

          <div>
            <label className="block font-open-sans text-amber-900 mb-2 font-semibold">Pesan</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:outline-none focus:border-amber-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-900 text-amber-50 py-3 rounded-lg font-open-sans font-semibold hover:bg-amber-800 transition-colors"
          >
            Kirim Pesan
          </button>
        </form>

        {/* Social Media */}
        <div className="mt-12 text-center">
          <h2 className="font-playfair text-2xl text-amber-900 mb-4">Ikuti Kami</h2>
          <div className="space-y-2 font-open-sans text-amber-900">
            <p>TikTok: @sheissyha</p>
            <p>Instagram: @kuphicoffee_</p>
          </div>
        </div>
      </section>
    </main>
  )
}
