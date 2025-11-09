import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-amber-50">
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl text-amber-900 mb-8">Tentang Kami</h1>
        <p className="font-open-sans text-lg text-amber-900 mb-6 text-balance leading-relaxed whitespace-pre-line text-left">
          {`Awal saya mendirikan usaha ini dikarenakan saya terpaksa resign setelah selama 6 tahun saya bekerja di bank karena saya mengalami cidera meniskus yang mengharuskan saya untuk menjalankan operasi selama masa pemulihan.

Muncul lah ide untuk membangun usaha ini — berawal dari kegemaran saya minum kopi dan meracik kopi sendiri, lalu saya memberanikan diri untuk membuka usaha ini.

Kenapa usaha ini saya beri nama Kuphi? Sebenernya ini hanya karena saya suka menyebutkan kata 'kopi' menjadi 'kuphi' saat mengajak teman untuk beli kopi atau bikin kopi di kantor. Saya memilih penyebutan tersebut untuk produk saya.`}
        </p>
        <div className="mt-6">
          <Image
            src="/logo-removebg-preview.png"
            alt="Kuphi Logo"
            width={200}
            height={60}
            className="mx-auto h-auto w-auto"
          />
        </div>
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
