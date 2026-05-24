import React from "react"
import { motion } from "framer-motion"

const AnimatedBackground = () => {
  const shapes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    type: Math.random() > 0.6 ? "square" : "circle",
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 12,
    color: Math.random() > 0.5 ? "bg-blue-500/10" : "bg-purple-500/10",
  }))

  const floatingShapes = [
    { id: 1, x: 10, y: 20, size: 8, color: "bg-blue-500/20", delay: 1 },
    { id: 2, x: 80, y: 40, size: 6, color: "bg-purple-500/20", delay: 2 },
    { id: 3, x: 20, y: 60, size: 10, color: "bg-cyan-500/20", delay: 3 },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

      {/* Floating particles */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.color}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            borderRadius: shape.type === "circle" ? "50%" : shape.type === "diamond" ? "0" : "12px",
            transform: shape.type === "diamond" ? "rotate(45deg)" : "none",
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive floating shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.color} rounded-full`}
          style={{
            width: `${shape.size * 4}px`,
            height: `${shape.size * 4}px`,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 10 + shape.delay,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Static gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  )
}

export default AnimatedBackground
