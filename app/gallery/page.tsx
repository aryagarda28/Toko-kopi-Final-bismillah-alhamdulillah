import Image from "next/image"

export default function Gallery() {
  const images = [
    { src: "/gallery-1.jpg", alt: "Kuphi - image 1" },
    { src: "/gallery-2.jpg", alt: "Kuphi - image 2" },
    { src: "/gallery-3.jpg", alt: "Kuphi - image 3" },
    { src: "/gallery-4.jpg", alt: "Kuphi - image 4" },
    { src: "/gallery-5.jpg", alt: "Kuphi - image 5" },
  ]

  return (
    <main className="min-h-screen bg-amber-50">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="font-playfair text-4xl md:text-5xl text-center text-amber-900 mb-16">Galeri</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-80 rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
