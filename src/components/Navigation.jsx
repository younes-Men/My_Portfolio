import React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Navigation = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Resume", path: "/resume", icon: "📄" },
    { name: "Projects", path: "/projects", icon: "💼" },
    { name: "Contact", path: "/contact", icon: "📧" },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <motion.div 
        className="bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl px-6 py-3 shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center space-x-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {/* Active indicator */}
                <AnimatePresence>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gray-700/50 rounded-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.2 }}
                />
                
                <span className="relative z-10 flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navigation
