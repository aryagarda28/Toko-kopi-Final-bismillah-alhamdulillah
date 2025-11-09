export default function Menu() {
  const coffeeItems = [
    {
      name: "Sweet Bliss",
      description: "Espresso with fresh milk and palm sugar",
      price: "Rp10.000",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%2020.57.20_7f9a58b2-3Fl5d5LXIzSgpRXsxBYFAaMM80nqTg.jpg",
    },
    {
      name: "Americano",
      description: "Espresso with mineral water",
      price: "Rp8.000",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%2020.57.19_d084085e-nxWGb30pPmHuq2L5waPGGTPPmyzJXC.jpg",
    },
    {
      name: "Hazelnut Latte",
      description: "Espresso with fresh milk and hazelnut sirup",
      price: "Rp12.000",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%2020.57.19_72b163fd-cw6Fd5eKVQngFizHtewDdXWLH7xCJh.jpg",
    },
    {
      name: "Spanish Latte",
      description: "Espresso with fresh milk and SKM",
      price: "Rp12.000",
      image: "/spanish-latte-coffee.jpg",
    },
    {
      name: "Coconut Latte",
      description: "Espresso with fresh milk and coconut water",
      price: "Rp12.000",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%2020.57.20_82e0117b-CRHyQLVZJM4DBJgT2KIOhGx2Ua5Nbm.jpg",
    },
  ]

  const nonCoffeeItems = [
    {
      name: "Brown Bloom",
      description: "Fresh milk and chocolate powder",
      price: "Rp12.000",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%2020.57.19_423afb18-VwgQqzLC1QqVSfPrZeO2Q5PYYlj1Sq.jpg",
    },
    {
      name: "Matcha Wave",
      description: "Fresh milk and matcha powder",
      price: "Rp12.000",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%2020.57.19_a202e951-DJfiDVSHLB7OuiSv1tBfsRUIVOW94X.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-amber-50">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="font-playfair text-5xl md:text-6xl text-center text-amber-900 mb-4 text-balance">Our Menu</h1>
        <p className="text-center text-amber-800 text-lg mb-16">
          Discover our signature coffee and specialty beverages
        </p>

        <div className="mb-16">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/daftar%20harga-7r4RFfvtiGoueBEzp8kYg3hEjfVDFS.jpg"
            alt="Kuaphi Coffee Menu Price List"
            className="w-full rounded-lg shadow-lg border border-amber-200"
          />
        </div>

        {/* Coffee Section */}
        <div className="mb-20">
          <h2 className="font-playfair text-4xl text-amber-900 mb-12 border-b-2 border-amber-800 pb-4">Coffee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeItems.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-amber-100"
              >
                {/* Menu Item Image */}
                <div className="relative h-64 overflow-hidden bg-amber-100">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Menu Item Details */}
                <div className="p-6">
                  <h3 className="font-playfair text-2xl text-amber-900 mb-2">{item.name}</h3>
                  <p className="text-amber-700 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-open-sans text-lg font-semibold text-amber-900">{item.price}</span>
                    <button className="bg-amber-900 text-amber-50 px-4 py-2 rounded-md hover:bg-amber-800 transition-colors text-sm font-semibold">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Coffee Section */}
        <div>
          <h2 className="font-playfair text-4xl text-amber-900 mb-12 border-b-2 border-amber-800 pb-4">Non Coffee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonCoffeeItems.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-amber-100"
              >
                {/* Menu Item Image */}
                <div className="relative h-64 overflow-hidden bg-amber-100">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Menu Item Details */}
                <div className="p-6">
                  <h3 className="font-playfair text-2xl text-amber-900 mb-2">{item.name}</h3>
                  <p className="text-amber-700 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-open-sans text-lg font-semibold text-amber-900">{item.price}</span>
                    <button className="bg-amber-900 text-amber-50 px-4 py-2 rounded-md hover:bg-amber-800 transition-colors text-sm font-semibold">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
