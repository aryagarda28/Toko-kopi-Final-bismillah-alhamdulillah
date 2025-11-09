import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const playfairDisplay = Playfair_Display({ subsets: ["latin"] })
const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kuphicoffee - Coffee House",
  description: "Premium coffee experience",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased bg-amber-50`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
