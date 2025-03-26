"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Casement Windows", href: "#products" },
        { name: "Sliding Windows", href: "#products" },
        { name: "Tilt & Turn Windows", href: "#products" },
        { name: "Sliding Doors", href: "#products" },
        { name: "French Doors", href: "#products" },
        { name: "Bi-Fold Doors", href: "#products" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Technology", href: "#technology" },
        { name: "Sustainability", href: "#sustainability" },
        { name: "Careers", href: "#" },
        { name: "News & Events", href: "#" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", href: "#" },
        { name: "Warranty", href: "#" },
        { name: "Installation Guide", href: "#" },
        { name: "Maintenance Tips", href: "#" },
        { name: "Find a Dealer", href: "#" },
        { name: "Request a Quote", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-white">
                  <span className="text-primary">Dura</span>Frame
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              DuraFrame Private Limited manufactures UPVC window & door systems that adhere to international quality
              benchmarks. Optimized for Indian weather with German technology.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "https://facebook.com" },
                { icon: <Twitter size={20} />, href: "https://twitter.com" },
                { icon: <Instagram size={20} />, href: "https://instagram.com" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center hover:shadow-md hover:shadow-primary/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DuraFrame Private Limited. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-primary text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-primary transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center hover:shadow-md hover:shadow-primary/30"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

