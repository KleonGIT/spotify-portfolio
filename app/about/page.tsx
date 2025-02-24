"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  const skills = [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React & Next.js",
    "Node.js & Express",
    "MongoDB & SQL",
    "Responsive Web Design",
    "Version Control (Git)",
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        About Me
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Image
            src="/images/about.png"
            alt="Kleon"
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-gray-300">It&apos;s
            Hello! I'm Kleon, a web developer with a love for creating beautiful and functional
            websites. With 2 years of experience in the field, I specialize in Web Development.
          </p>
          <p className="text-gray-300">It&apos;s
            When I'm not coding, you can find me on kick.com/ieulsph. I believe the best way to code is after you feel like shit losing 13-12 in a match :)
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-[#1DB954] mt-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-300">
              {skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

