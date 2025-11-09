export default function Testimonials() {
  const testimonials = [
    { text: "Kopi terbaik yang pernah saya coba!", author: "Andi" },
    { text: "Aromanya luar biasa dan tempatnya nyaman.", author: "Rina" },
    { text: "Pelayanan cepat dan rasa mantap.", author: "Dwi" },
  ]

  return (
    <main className="min-h-screen bg-amber-50">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="font-playfair text-4xl md:text-5xl text-center text-amber-900 mb-16">Testimonial Pelanggan</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-amber-100 p-8 rounded-lg text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p className="font-open-sans text-amber-900 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-playfair text-lg text-amber-900 font-semibold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
