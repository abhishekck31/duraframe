"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-semibold">German Technology, Indian Manufacturing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              World Class <span className="text-primary">UPVC Window & Door Systems</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Optimized for Indian weather conditions with 20 years warranty. Premium quality, energy-efficient, and
              sustainable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="btn-glow btn-primary px-8 py-6 text-lg"
                onClick={() => (window.location.href = "#products")}
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="btn-glow btn-outline px-8 py-6 text-lg"
                onClick={() => (window.location.href = "#contact")}
              >
                Contact Us
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3,].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold">500+</span> Happy Customers
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/60"></div>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/HeroImage.jpg?height=800&width=600')",
                }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-xl">Premium UPVC Windows</h3>
                    <p className="text-gray-300">Strength, Style & Durability</p>
                  </div>
                  <div className="bg-primary text-white font-bold text-xl p-4 rounded-full flex items-center justify-center">
                    20
                    <span className="text-xs ml-1">YEARS WARRANTY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Resistant Floating Element - Only appears on scroll */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Weather Resistant</h4>
                  <p className="text-sm text-gray-600">Perfect for Indian climate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

