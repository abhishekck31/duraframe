"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Products() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const categories = ["All Products", "Windows", "Doors", "Sliding Systems"]

  const [activeCategory, setActiveCategory] = useState("All Products")

  const products = [
    {
      name: "Casement Windows",
      description: "An artistic blend of aesthetics and functionality, customized to accommodate larger glass panels.",
      image: "/placeholder.svg?height=500&width=400",
      category: "Windows",
      features: ["Energy Efficient", "Sound Insulation", "Weather Resistant"],
    },
    {
      name: "Sliding Windows",
      description: "Ideal fenestration choice that enables ease of usage and provides ample air circulation.",
      image: "/placeholder.svg?height=500&width=400",
      category: "Windows",
      features: ["Space Saving", "Smooth Operation", "Large Glass Panels"],
    },
    {
      name: "Tilt & Turn Windows",
      description: "Specifically designed to open inwards where there is exterior space constraints.",
      image: "/placeholder.svg?height=500&width=400",
      category: "Windows",
      features: ["Dual Function", "Enhanced Security", "Easy Cleaning"],
    },
    {
      name: "Fixed Windows",
      description: "Ideally designed to provide an unhindered view of outdoors, fixed and stationary in nature.",
      image: "/placeholder.svg?height=500&width=400",
      category: "Windows",
      features: ["Panoramic View", "Maximum Light", "Energy Efficient"],
    },
    {
      name: "Sliding Doors",
      description: "Specifically designed for homeowners who prefer more natural light and panoramic exterior view.",
      image: "/placeholder.svg?height=500&width=400",
      category: "Doors",
      features: ["Space Saving", "Large Glass Panels", "Smooth Operation"],
    },
    {
      name: "Casement Doors",
      description: "Designed to provide maximal thermal and acoustic insulation with multi-point locking mechanisms.",
      image: "/placeholder.svg?height=500&width=400",
      category: "Doors",
      features: ["Enhanced Security", "Weather Resistant", "Customizable"],
    },
    {
      name: "French Doors",
      description: "Ideally designed to enhance the aesthetic look and feel of residences with a picturesque view.",
      image: "/placeholder.svg?height=500&width=400",
      category: "Doors",
      features: ["Elegant Design", "Double Glazed", "High Security"],
    },
    {
      name: "Bi-Fold Doors",
      description:
        "Aesthetically designed to blend contemporary design with a modernistic touch for connecting living areas.",
      image: "/placeholder.svg?height=500&width=400",
      category: "Doors",
      features: ["Space Saving", "Maximum Opening", "Stunning Views"],
    },
  ]

  const filteredProducts =
    activeCategory === "All Products" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section className="py-20 bg-white" id="products" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Premium <span className="text-primary">UPVC Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our range of high-quality UPVC windows and doors designed for Indian weather conditions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 ${
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/90 hover:bg-primary/10 p-0 h-auto group"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Button className="btn-glow btn-primary px-8 py-6" onClick={() => setActiveCategory("All Products")}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}

