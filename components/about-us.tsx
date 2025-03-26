"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle } from "lucide-react"

export default function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const achievements = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "1000+", label: "Projects Completed" },
    { value: "20", label: "Years Warranty" },
  ]

  const certifications = [
    "ISO 9001 Certified",
    "International Quality Standards",
    "Stringent European Quality Control",
    "State-of-the-art Manufacturing",
  ]

  return (
    <section className="py-20 bg-white" id="about" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-48 shadow-md">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/placeholder.svg?height=400&width=300')",
                    }}
                  ></div>
                </div>
                <div className="rounded-lg overflow-hidden h-64 shadow-md">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/placeholder.svg?height=500&width=300')",
                    }}
                  ></div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden h-64 shadow-md">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/placeholder.svg?height=500&width=300')",
                    }}
                  ></div>
                </div>
                <div className="rounded-lg overflow-hidden h-48 shadow-md">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/placeholder.svg?height=400&width=300')",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-4 rounded-lg shadow-lg"
            >
              <div className="text-center">
                <span className="block text-xl font-bold">Since 2013</span>
                <span className="text-sm">Excellence in UPVC</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-semibold">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Duraframe Private Limited</h2>
            <p className="text-gray-700">
              Duraframe Private Limited manufactures UPVC window & door systems that adhere to international quality
              benchmarks at its automated plant located at Kada Agrahara, Bangalore.
            </p>
            <p className="text-gray-700">
              Equipped with world-class machinery, the plant designs and fabricates an array of customised windows and
              doors that are aesthetic, cost-effective, easy to install, durable and 100% recyclable.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Our Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

