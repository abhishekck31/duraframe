"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Palette } from "lucide-react"

export default function Colors() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const colors = [
    { name: "White", hex: "#FFFFFF", textColor: "text-gray-900" },
    { name: "Black", hex: "#000000", textColor: "text-white" },
    { name: "Grey", hex: "#808080", textColor: "text-white" },
    { name: "Mahogany", hex: "#C04000", textColor: "text-white" },
    { name: "Dark Oak", hex: "#5D4037", textColor: "text-white" },
    { name: "Golden Oak", hex: "#B87333", textColor: "text-white" },
  ]

  return (
    <section className="py-20 bg-gray-50" id="colors" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center bg-primary/10 px-4 py-2 rounded-full mb-4"
          >
            <Palette className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Color Options</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Colors that <span className="text-primary">Captivate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Now, you don't have to worry about the wall color that matches your window. Because we are here with
            different colors so that you can design the texture that transforms.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {colors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div
                className="h-64 rounded-xl shadow-md overflow-hidden relative group-hover:shadow-lg transition-shadow duration-300 group-hover:shadow-primary/20"
                style={{ backgroundColor: color.hex }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`absolute bottom-0 left-0 right-0 p-4 ${color.textColor}`}>
                  <h3 className="font-bold text-xl">{color.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-white rounded-xl p-8 shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customized to Your Preference</h3>
              <p className="text-gray-700 mb-6">
                Our UPVC profiles are available in a range of colors and wood textures to match your interior and
                exterior design. Choose from classic white to elegant wood finishes for a perfect match with your home
                décor.
              </p>
              <ul className="space-y-3">
                {[
                  "UV resistant colors that don't fade",
                  "Wood textures that look and feel natural",
                  "Consistent color throughout the profile",
                  "Custom color options available on request",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/placeholder.svg?height=600&width=500')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold mb-2">Perfect Match for Your Home</h3>
                <p className="text-white/90">Choose colors that complement your architecture and interior design.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

