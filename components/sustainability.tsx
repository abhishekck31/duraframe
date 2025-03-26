"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Leaf, Recycle, ThermometerSnowflake, Shield } from "lucide-react"

export default function Sustainability() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Eco-Friendly",
      description: "UPVC manufacturing emits fewer greenhouse gases compared to traditional materials.",
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "100% Recyclable",
      description: "UPVC is fully recyclable, reducing environmental impact and supporting a circular economy.",
    },
    {
      icon: <ThermometerSnowflake className="h-8 w-8 text-green-600" />,
      title: "Energy Efficient",
      description: "Superior thermal insulation saves on energy costs for heating and cooling.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Long-Lasting",
      description: "Resists rot, corrosion, and UV damage, making it a durable choice that reduces waste.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="sustainability" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block bg-green-100 px-4 py-2 rounded-full">
              <span className="text-green-700 font-semibold">Sustainable Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Supporting a <span className="text-green-600">Greener Future</span>
            </h2>
            <p className="text-gray-700">
              UPVC, or Unplasticized Polyvinyl Chloride, is a versatile, eco-friendly material poised to shape the
              future. With its durability, low maintenance, and energy efficiency, UPVC is a sustainable alternative in
              construction.
            </p>
            <p className="text-gray-700">
              Its durable, low-maintenance, and recyclable, reducing environmental impact. UPVC resists rot, corrosion,
              and UV damage, making it a long-lasting choice for windows, doors, and pipes. Its thermal efficiency also
              saves on energy costs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-green-100 p-3 rounded-full">{benefit.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/greenImage.jpg?height=800&width=600')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-bold mb-3">Sustainable by Design</h3>
                <p className="text-white/90 mb-6">
                  Our UPVC windows and doors are designed with sustainability in mind, helping reduce your carbon
                  footprint while providing exceptional performance.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Eco-Friendly", "Energy Efficient", "Recyclable", "Durable"].map((tag, i) => (
                    <span key={i} className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
              className="absolute -bottom-8 -right-8 bg-green-600 text-white p-6 rounded-full shadow-lg"
            >
              <div className="text-center">
                <span className="block text-3xl font-bold">100%</span>
                <span className="text-sm">Recyclable</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

