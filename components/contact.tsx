"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Factory",
      details: "81/2, Kada Agrahara Main Road, Anagalapura, Bengaluru - 560077",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Head Office",
      details: "2825, 1st Main Road, 80ft Road, Indiranagar, Bengaluru - 560008",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: "+91 97422 33939, +91 97423 75797",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "info@duraframe.in",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Working Hours",
      details: "Monday - Saturday: 9:00 AM - 6:00 PM",
    },
  ]

  return (
    <section className="py-20 bg-white" id="contact" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Have questions about our products or services? Reach out to us using the contact information below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:shadow-primary/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:shadow-primary/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose DuraFrame</h3>
              <div className="space-y-4">
                {[
                  "ISO 9001 Certified Quality",
                  "20 Years Warranty",
                  "German Technology",
                  "Customized Solutions",
                  "Professional Installation",
                  "Excellent After-Sales Service",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    className="flex items-center space-x-3 group"
                  >
                    <CheckCircle className="h-5 w-5 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9932008447!2d77.6381!3d12.9715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjQiTiA3N8KwMzgnMTcuMiJF!5e0!3m2!1sen!2sin!4v1616661315372!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-bold">Visit Our Showroom</h3>
              <p className="text-white/90">Experience our premium UPVC windows and doors in person</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

