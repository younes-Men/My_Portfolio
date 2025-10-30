import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Atom, Triangle, FileCode2, Hexagon, Leaf, Waves, Download, MessageCircle, ArrowRight, Sparkles } from "lucide-react"

const Home = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const fullText = "Younes Mensoub"
  const [ref, inView] = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (!inView) return

    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(fullText.slice(0, currentIndex - 1))
        setCurrentIndex(currentIndex - 1)
      } else if (currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (currentIndex === 0 && isDeleting) {
        setIsDeleting(false)
      }
    }, isDeleting ? 50 : 150)

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, inView])

  const techStack = [
    {
      name: "React",
      icon: <Atom className="w-6 h-6" />,
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      delay: 0.1,
    },
    {
      name: "Express.js",
      icon: <Triangle className="w-6 h-6" />,
      color: "bg-gray-800/40 text-white border-gray-600/30",
      delay: 0.2,
    },
    {
      name: "JavaScript",
      icon: <FileCode2 className="w-6 h-6" />,
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      delay: 0.3,
    },
    {
      name: "Node.js",
      icon: <Hexagon className="w-6 h-6" />,
      color: "bg-green-600/20 text-green-400 border-green-600/30",
      delay: 0.4,
    },
    {
      name: "MongoDB",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-green-500/20 text-green-400 border-green-500/30",
      delay: 0.5,
    },
    {
      name: "Tailwind",
      icon: <Waves className="w-6 h-6" />,
      color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      delay: 0.6,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const techVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Available for opportunities
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-2xl text-gray-300 font-light">
                Hello 👋 I'm
              </p>
              
              <motion.h1 
                className="text-7xl md:text-9xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-purple-400"
                >
                  |
                </motion.span>
              </motion.h1>
              
              <motion.h2 
                className="text-3xl md:text-4xl text-gray-400 font-medium"
                variants={itemVariants}
              >
                Fullstack Developer
              </motion.h2>
            </motion.div>

            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              I'm specialized in{" "}
              <span className="text-blue-400 font-semibold bg-blue-500/10 px-2 py-1 rounded-lg">
                MERN stack
              </span>{" "}
              development, creating powerful web applications with modern technologies and 
              <span className="text-purple-400 font-semibold"> innovative solutions</span>.
            </motion.p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 my-16"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={techVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: tech.delay }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 border rounded-xl px-6 py-4 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer ${tech.color}`}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  {tech.icon}
                </motion.div>
                <span className="text-sm font-semibold">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
          >
            <Link to="/projects">
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-purple-500/25 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="border-2 border-gray-600 text-gray-300 px-10 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:text-white hover:border-purple-500 transition-all duration-300 flex items-center space-x-3 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 text-gray-400"
            >
              <span className="text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
