"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "emailjs-com"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs
    .send("service_dq9fcnj", "template_gp5grt6", formData, "7WKOiBwd-nRkXdiyQ")
    .then(
      (result) => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
      },
      (error) => {
        alert("Failed to send message, please try again.");
      }
    );
};

  const formControls = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8 p-4 md:p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold"
      >
        Contact Me
      </motion.h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <motion.div {...formControls}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-[#181818] text-white w-full p-2 rounded"
          />
        </motion.div>
        <motion.div {...formControls} transition={{ delay: 0.1, duration: 0.3 }}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="bg-[#181818] text-white w-full p-2 rounded"
          />
        </motion.div>
        <motion.div {...formControls} transition={{ delay: 0.2, duration: 0.3 }}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="bg-[#181818] text-white w-full p-2 rounded"
            rows={6}
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <button type="submit" className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold w-full p-2 rounded">
            Send Message
          </button>
        </motion.div>
      </form>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-500 text-white p-4 rounded-lg mt-4"
        >
          Message sent successfully!
        </motion.div>
      )}
    </motion.div>
  )
}