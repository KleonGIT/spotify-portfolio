"use client"; // This ensures it's a client-side component

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.div
          className="space-y-4 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-[#1DB954]">
            Featured Project
          </h2>
          <Image
            src="/images/SITC-GMS.png"
            alt="Featured Project"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <p className="text-gray-300 text-justify max-w-lg">
            A Capstone project in my last year of college, The Grade Management
            System for St. Ignatius Technical College is a user-friendly,
            web-based platform designed to streamline the process of recording,
            managing, and analyzing student grades. It allows faculty to input
            grades, track student progress, and generate detailed reports, while
            students can access their grades and performance metrics in
            real-time. The system features secure login access, automated grade
            calculations, and customizable grading scales tailored to the
            college's technical curriculum. It also supports communication
            between instructors and students, ensuring transparency and
            fostering academic success. The platform is optimized for
            efficiency, accuracy, and ease of use, aligning with the college's
            commitment to excellence in technical education.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-[#1DB954]">
            Latest Blog Post
          </h2>
          <div className="bg-[#181818] p-4 rounded-lg max-w-lg">
            <h3 className="text-xl font-semibold mb-2">
              Watch me on Kick/iEulsPH
            </h3>
            <p className="text-gray-300">
              It&apos;s I livestream valorant and fivem/gta 5 contents on kick!
              Hop on and tambay with me!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}