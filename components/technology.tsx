"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Technology() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const techFeatures = [
    "Multi Chambered Sections",
    "Steel Reinforcements",
    "Glazing Systems",
    "Multi Point Locking",
    "Seamless Welded Joints",
    "TPE Weather Beading",
    "Drain Holes",
    "Friction Stay",
  ]

  const partners = ["LG Chem", "BAERLOCHER", "DUPONT", "KANEKA"]

  return (
    <section className="py-20 bg-gray-50" id="technology" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Technology That Makes Us <span className="text-primary">Stand Out</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Manufactured in India using German Technology with stringent European quality control guidelines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:shadow-primary/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced UPVC Technology</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:shadow-primary/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Technology Partners</h3>
              <p className="text-gray-700 mb-6">
                Duraframe window & door systems are made out of world-renowned brands of additives to enable the best
                formulation for its UPVC profiles.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20 hover:shadow-md hover:shadow-primary/10 transition-all duration-300"
                  >
                    <span className="font-bold text-gray-800">{partner}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button className="btn-glow btn-primary" onClick={() => (window.location.href = "#contact")}>
              Learn More About Our Technology
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
                  backgroundImage: "url('/placeholder.svg?height=800&width=600')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-bold mb-3">German Engineering, Indian Manufacturing</h3>
                <p className="text-white/90 mb-6">
                  Our state-of-the-art automated manufacturing plant in Bangalore combines German precision with Indian
                  craftsmanship.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-white/80 text-sm">Strength</div>
                    <div className="text-white font-bold">2.5mm Wall Thickness</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-white/80 text-sm">Reinforcement</div>
                    <div className="text-white font-bold">Galvanized Steel</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
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
              className="absolute -top-10 right-10 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">20</span>
                </div>
                <div>
                  <h4 className="font-semibold">Years Warranty</h4>
                  <p className="text-xs text-gray-600">Industry-leading protection</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

