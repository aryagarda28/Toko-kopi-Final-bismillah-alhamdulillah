import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-amber-50">
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl text-amber-900 mb-8">Tentang Kami</h1>
        <p className="font-open-sans text-lg text-amber-900 mb-12 text-balance leading-relaxed">
          Kami percaya setiap biji kopi memiliki cerita — dari tanah, tangan, hingga cangkir Anda.
        </p>
      </section>

      {/* Decorative Coffee Beans Background */}
      <div className="relative h-64 opacity-20">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coffee-qDDnjyQFqu4EU5aJnd5hbDOH3jb5oS.jpg"
          alt="Coffee Beans"
          fill
          className="object-cover"
        />
      </div>
    </main>
  )
}
