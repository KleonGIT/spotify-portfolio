"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and the technologies used.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2 and the technologies used.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3 and the technologies used.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Project 4",
    description: "A brief description of Project 4 and the technologies used.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Projects() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="bg-[#181818] p-4 rounded-lg"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-[#1DB954] mb-2">{project.title}</h2>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

