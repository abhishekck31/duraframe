import { Montserrat } from "next/font/google"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Sustainability from "@/components/sustainability"
import AboutUs from "@/components/about-us"
import Technology from "@/components/technology"
import Products from "@/components/products"
import Colors from "@/components/colors"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`${montserrat.className} overflow-x-hidden`}>
      <Navbar />
      <Hero />
      <Features />
      <Sustainability />
      <AboutUs />
      <Technology />
      <Products />
      <Colors />
      <Contact />
      <Footer />
    </main>
  )
}

