import React from "react"
import { motion } from "framer-motion"

const AnimatedBackground = () => {
  const shapes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    type: Math.random() > 0.6 ? "square" : Math.random() > 0.3 ? "circle" : "diamond",
    size: Math.random() * 80 + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 15,
    color: Math.random() > 0.5 ? "bg-blue-500/10" : Math.random() > 0.5 ? "bg-purple-500/10" : "bg-cyan-500/10",
  }))

  const floatingShapes = [
    { id: 1, x: 10, y: 20, size: 8, color: "bg-blue-500/20", delay: 1 },
    { id: 2, x: 80, y: 40, size: 6, color: "bg-purple-500/20", delay: 2 },
    { id: 3, x: 20, y: 60, size: 10, color: "bg-cyan-500/20", delay: 3 },
    { id: 4, x: 70, y: 20, size: 4, color: "bg-blue-400/30", delay: 4 },
    { id: 5, x: 90, y: 70, size: 12, color: "bg-purple-400/20", delay: 5 },
    { id: 6, x: 40, y: 80, size: 6, color: "bg-cyan-400/25", delay: 6 },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        animate={{
          background: [
            "linear-gradient(45deg, #0f172a, #1e293b, #0f172a)",
            "linear-gradient(135deg, #1e293b, #0f172a, #1e293b)",
            "linear-gradient(225deg, #0f172a, #1e293b, #0f172a)",
            "linear-gradient(315deg, #1e293b, #0f172a, #1e293b)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

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
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
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
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + shape.delay,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
    </div>
  )
}

export default AnimatedBackground
