"use client"

import Link from "next/link"
import { Home, User, Briefcase, Mail, Music2, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const menuItems = [
    { icon: Home, text: "Home", href: "/" },
    { icon: User, text: "About", href: "/about" },
    { icon: Briefcase, text: "Projects", href: "/projects" },
    { icon: Music2, text: "Playlist", href: "/playlist" },
    { icon: Mail, text: "Contact", href: "/contact" },
  ]

  return (
    <motion.aside
      initial={{ width: isOpen ? 250 : 60 }}
      animate={{ width: isOpen ? 250 : 60 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-[#121212] p-6 relative"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-4 text-white"
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Menu />
      </motion.button>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-8">
        {isOpen && (
          <>
            <h1 className="text-2xl font-bold text-[#1DB954]">Kleon</h1>
            <p className="text-sm text-gray-400">Web Developer</p>
          </>
        )}
      </motion.div>
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.text}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href={item.href} className="flex items-center space-x-2 text-white">
                <item.icon />
                {isOpen && <span>{item.text}</span>}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  )
}

export default Sidebar