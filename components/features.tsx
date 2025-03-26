"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Thermometer, Volume2, Droplets, Paintbrush, Clock } from "lucide-react"

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "20 Year Warranty",
      description: "Built to withstand any kind of weather conditions with long-lasting durability.",
    },
    {
      icon: <Thermometer className="h-10 w-10 text-primary" />,
      title: "Superior Thermal Insulation",
      description: "22 times better than traditional materials, ideal for India's extreme weather.",
    },
    {
      icon: <Volume2 className="h-10 w-10 text-primary" />,
      title: "Sound Resistance",
      description: "Reduces outside noise significantly for a peaceful indoor environment.",
    },
    {
      icon: <Droplets className="h-10 w-10 text-primary" />,
      title: "Weather Resistance",
      description: "Water-tight during heavy rainfall, optimized for Indian weather conditions.",
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-primary" />,
      title: "Low Maintenance",
      description: "Retain shine, color, and lustre for a long period without painting or polishing.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Customized Design",
      description: "Provides lots of options in color, lamination, glazing & hardware to suit your needs.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-white" id="features" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose <span className="text-primary">DuraFrame</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Our UPVC windows and doors are designed to provide superior performance, durability, and aesthetics for your
            home or office.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-primary/20 hover:shadow-primary/10"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

