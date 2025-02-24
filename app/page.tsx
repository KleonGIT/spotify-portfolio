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
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-[#1DB954]">Featured Project</h2>
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Featured Project"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <p className="text-gray-300">
            A brief description of your featured project. Highlight its key features and technologies used.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-[#1DB954]">Latest Blog Post</h2>
          <div className="bg-[#181818] p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Title of Your Latest Blog Post</h3>
            <p className="text-gray-300">
              A short excerpt from your latest blog post. This could be about a recent project, a technology you've been
              learning, or your thoughts on web development trends!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
