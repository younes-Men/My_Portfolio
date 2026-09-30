import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Home, FileText, Briefcase, Mail, Menu, X, ArrowRight } from "lucide-react"

const Navigation = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/", icon: Home, description: "Overview & Tech Stack" },
    { name: "Resume", path: "/resume", icon: FileText, description: "Experience & Education" },
    { name: "Projects", path: "/projects", icon: Briefcase, description: "Selected Works" },
    { name: "Contact", path: "/contact", icon: Mail, description: "Get in Touch" },
  ]

  // Hide/Show navbar on scroll (desktop)
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Only hide if mobile menu is closed
        if (!isMobileMenuOpen) {
          setIsVisible(false)
        }
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY, isMobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* ================= DESKTOP NAVIGATION ================= */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
      >
        <motion.div 
          className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl px-3 py-2 shadow-2xl shadow-purple-950/20"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {/* Active indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="activeDesktopTab"
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg shadow-purple-500/25"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gray-800/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    
                    <span className="relative z-10 flex items-center space-x-2">
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span>{item.name}</span>
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.nav>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        {/* Top Floating Header Bar */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ 
            y: isVisible || isMobileMenuOpen ? 0 : -100, 
            opacity: isVisible || isMobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="mx-3 mt-3 bg-gray-900/90 backdrop-blur-xl border border-gray-700/60 rounded-2xl px-4 py-3 shadow-xl flex items-center justify-between"
        >
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2.5 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-0.5 shadow-md shadow-purple-500/30 flex items-center justify-center">
              <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center font-bold text-white text-xs tracking-wider">
                YM
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm tracking-wide">
                Younes<span className="text-purple-400">.</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium -mt-0.5">
                Full Stack Dev
              </span>
            </div>
          </Link>

          {/* Hamburger / Close Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative p-2 rounded-xl bg-gray-800/80 border border-gray-700/60 text-gray-200 hover:text-white transition-colors focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-purple-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Mobile Menu Overlay & Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
              />

              {/* Menu Card Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mx-3 mt-2 bg-gray-900/95 backdrop-blur-2xl border border-gray-700/70 rounded-2xl p-4 shadow-2xl shadow-purple-950/40 overflow-hidden"
              >
                <div className="space-y-1.5">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.path

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                            isActive
                              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md shadow-purple-500/25"
                              : "text-gray-300 hover:text-white hover:bg-gray-800/60"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-2 rounded-lg ${
                                isActive
                                  ? "bg-white/20 text-white"
                                  : "bg-gray-800/80 text-gray-400 group-hover:text-purple-400 group-hover:bg-purple-500/10"
                              } transition-colors`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="text-left">
                              <p className="text-sm font-semibold leading-tight">
                                {item.name}
                              </p>
                              <p
                                className={`text-[11px] ${
                                  isActive ? "text-purple-100" : "text-gray-500 group-hover:text-gray-400"
                                }`}
                              >
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <ArrowRight
                            className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                              isActive ? "text-white" : "text-gray-500"
                            }`}
                          />
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navigation

