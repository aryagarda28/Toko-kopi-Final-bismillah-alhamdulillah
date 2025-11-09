"use client"

import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coffee-qDDnjyQFqu4EU5aJnd5hbDOH3jb5oS.jpg"
          alt="Coffee Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl text-white mb-8 text-balance">
            Keterbatasan menciptakan inovasi citarasa yang sempurna
          </h1>
          <Link
            href="/menu"
            className="inline-block bg-amber-100 text-amber-900 px-8 py-3 rounded-lg font-open-sans font-semibold hover:bg-amber-200 transition-colors"
          >
            Lihat Menu
          </Link>
        </div>
      </section>
    </main>
  )
}
