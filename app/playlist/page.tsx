"use client"

import { motion } from "framer-motion"

export default function Playlist() {
  const playlists = [
    {
      src: "https://open.spotify.com/embed/playlist/5aI0BvkSU49s8gGa7wkF6l?utm_source=generator&theme=0",
      title: "Playlist 1",
    },
    {
      src: "https://open.spotify.com/embed/playlist/5GHcVDbZvKYTI7iGBudaJQ?utm_source=generator&theme=0",
      title: "Playlist 2",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        My Playlists
      </motion.h1>
      {playlists.map((playlist, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#181818] p-6 rounded-lg mb-8"
        >
          <div className="flex items-center gap-6 mb-8">
            <iframe
              style={{ borderRadius: "12px" }}
              src={playlist.src}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}