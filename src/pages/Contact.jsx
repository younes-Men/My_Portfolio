import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Sparkles, MessageCircle, Phone } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  const [errors, setErrors] = useState({})
  
  const [ref, inView] = useInView({ threshold: 0.1 })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    const next = {}
    if (!formData.name.trim()) next.name = 'Please enter your name.'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) next.email = 'Enter a valid email.'
    if (formData.message.trim().length < 10) next.message = 'Message should be at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitStatus(null), 3000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 3000)
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/younes-Men",
      icon: <Github className="w-6 h-6" />,
      color: "bg-gray-800 hover:bg-gray-700",
      delay: 0.1,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/younes-mensoub-2b76a42a2/",
      icon: <Linkedin className="w-6 h-6" />,
      color: "bg-blue-700 hover:bg-blue-800",
      delay: 0.2,
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  }

  return (
    <div className="min-h-screen pt-32 pb-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full opacity-60"
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40"
          animate={{
            y: [20, -20, 20],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-8 h-8 bg-purple-600 rounded-full opacity-30"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Let's Connect
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              Let's{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                talk business
              </span>
              .
            </motion.h1>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              But you first.
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              I'm always looking for new opportunities and exciting projects. 
              Let's collaborate and create something amazing together.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Social Links */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div variants={cardVariants}>
                <h2 className="text-3xl font-bold text-white mb-6">Let's Stay Connected</h2>
                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                  Reach out on any platform and let's collaborate or chat about new opportunities. 
                  I'm always excited to connect with fellow developers and potential clients.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 gap-4 max-w-md"
                variants={containerVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-between h-20 ${social.color} rounded-xl transition-all duration-300 group cursor-pointer`}
                  >
                    <div className="flex items-center space-x-4 px-6">
                      <div>
                        {social.icon}
                      </div>
                      <span className="text-white font-semibold text-lg">{social.name}</span>
                    </div>
                    <motion.div
                      className="pr-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                variants={cardVariants}
                className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>+212 6 44 55 35 00</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>ymensoub@gmail.com</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div 
                variants={cardVariants}
                className="text-center lg:text-left"
              >
                <h2 className="text-3xl font-bold text-white mb-4">Send me a message</h2>
                <p className="text-gray-400 text-lg mb-8">
                  I am always looking for new opportunities and exciting projects.
                </p>
              </motion.div>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={cardVariants}
              >
                <motion.div variants={itemVariants}>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-800/60 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm"
                    placeholder="Who am I chatting with today?"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.name && <div className="text-red-400 text-sm mt-2">{errors.name}</div>}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-800/60 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm"
                    placeholder="Let's keep in touch via email"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.email && <div className="text-red-400 text-sm mt-2">{errors.email}</div>}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 bg-gray-800/60 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 text-lg resize-none backdrop-blur-sm"
                    placeholder="What's brewing in your mind?"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.message && <div className="text-red-400 text-sm mt-2">{errors.message}</div>}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-3 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex items-center space-x-3 p-4 rounded-xl ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                          : 'bg-red-500/20 border border-red-500/30 text-red-400'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>
                        {submitStatus === 'success' 
                          ? 'Message sent successfully!' 
                          : 'Failed to send message. Please try again.'}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
