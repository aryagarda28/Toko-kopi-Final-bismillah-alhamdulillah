import { Coffee, Users, Building2 } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Coffee,
      title: "Penyediaan Biji Kopi Premium",
      description: "Biji kopi pilihan dari perkebunan terbaik",
    },
    {
      icon: Users,
      title: "Kelas Barista",
      description: "Pelajari teknik membuat kopi profesional",
    },
    {
      icon: Building2,
      title: "Sewa Coffee Corner untuk Event",
      description: "Layanan catering kopi untuk acara Anda",
    },
  ]

  return (
    <main className="min-h-screen bg-amber-50">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="font-playfair text-4xl md:text-5xl text-center text-amber-900 mb-16">Layanan Kami</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-amber-100 p-8 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-amber-900 mx-auto mb-4" />
                <h3 className="font-playfair text-2xl text-amber-900 mb-3">{service.title}</h3>
                <p className="font-open-sans text-amber-800">{service.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
