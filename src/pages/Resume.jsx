import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Download, Sparkles, Code, GraduationCap, Briefcase, User, Award, Globe, ChevronRight } from "lucide-react"
import MyImage from "../images/My_image.png"

const Resume = () => {
  const [activeSection, setActiveSection] = useState("Education")
  const [ref, inView] = useInView({ threshold: 0.1 })

  const education = [
    {
      year: "2023-2025",
      title: "ISTA NTIC SYBA Marrakech",
      subtitle: "Dévelopement digital option web fullstack",
      description: "Specialized training in full-stack web development with focus on modern technologies and industry best practices.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      year: "2021 - 2023",
      title: "Faculté des Sciences Semlalia Marrakech",
      subtitle: "Etudiant a FSSM filière Science de la matière chimique",
      description: "Bachelor's degree in Chemistry with strong foundation in analytical thinking and problem-solving.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      year: "2020-2021",
      title: "Lycee Elbilia El jadida",
      subtitle: "Baccalauréat Sciences Physiques – option Biof",
      description: "High school diploma in Physical Sciences with specialization in Biology and Physics.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ]

  const experience = [
    {
      year: "2025",
      title: "Stage - Pluriel informatique et communication Marrakech",
      subtitle: "Conception et réalisation complète d'un système de gestion des tickets (Full-stack)",
      description: "Developed a comprehensive ticket management system using MERN stack, implementing user authentication, role-based access control, and real-time notifications.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Projet de synthèse",
      subtitle: "Développement d'un chatbot intelligent en MERN Stack, intégrant l'API OpenAI",
      description: "Created an intelligent chatbot application with OpenAI integration, featuring natural language processing and context-aware responses.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      year: "2024-2025",
      title: "Freelance",
      subtitle: "Développement d'un site e-commerce pour la vente de fruits secs (Full-Stack)",
      description: "Built a complete e-commerce platform for dried fruits sales with payment integration, inventory management, and responsive design.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Freelance",
      subtitle: "Développement d'un site e-commerce pour la vente d'huiles naturelles (JavaScript)",
      description: "Developed an e-commerce website for natural oils sales using vanilla JavaScript, focusing on performance and user experience.",
      icon: <Code className="w-6 h-6" />,
    },
  ]

  const skills = [
    { 
      category: "Frontend", 
      items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
      icon: <Code className="w-5 h-5" />,
    },
    { 
      category: "Backend", 
      items: ["PHP", "Laravel", "Node.js", "Express.js", "Python"],
      icon: <Code className="w-5 h-5" />,
    },
    { 
      category: "Bases de données", 
      items: ["MySQL", "MongoDB"],
      icon: <Code className="w-5 h-5" />,
    },
    { 
      category: "Méthodologies", 
      items: ["Agile", "Scrum", "Kanban"],
      icon: <Award className="w-5 h-5" />,
    },
    { 
      category: "Outils & Collaboration", 
      items: ["Git", "GitHub", "GitLab", "Jira"],
      icon: <Code className="w-5 h-5" />,
    }
  ];

  const aboutMe = {
    description:
      "I'm a Full Stack Developer passionate about turning ideas into functional and user-friendly web applications. I focus on clean code, smooth user experiences, and continuous learning to create solutions that make an impact.",
    interests: [
      "Web Development",
      "UI/UX Design",
      "Open Source",
      "Tech Innovation",
      "Learning new technologies",
      "Collaboration & Problem-solving"
    ],
    languages: ["Arabic (Native)", "French (Fluent)", "English (Professional)", "German (B1)"],
  }

  const sections = [
    { id: "Experience", name: "Experience", icon: <Briefcase className="w-5 h-5" /> },
    { id: "Education", name: "Education", icon: <GraduationCap className="w-5 h-5" /> },
    { id: "Skills", name: "Skills", icon: <Code className="w-5 h-5" /> },
    { id: "About me", name: "About me", icon: <User className="w-5 h-5" /> },
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

  const timelineItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const renderContent = () => {
    switch (activeSection) {
      case "Experience":
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <span>My Experience</span>
            </motion.h2>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

              {experience.map((exp, index) => (
                <motion.div 
                  key={index} 
                  variants={timelineItemVariants}
                  className="relative flex items-start mb-12"
                >
                  <motion.div 
                    className="absolute left-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 z-10"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div 
                    className="ml-12 bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      {exp.icon}
                      <div className="text-purple-400 font-medium">{exp.year}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-gray-300 mb-3 font-medium">{exp.subtitle}</p>
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case "Education":
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <span>My Education</span>
            </motion.h2>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  variants={timelineItemVariants}
                  className="relative flex items-start mb-12"
                >
                  <motion.div 
                    className="absolute left-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 z-10"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div 
                    className="ml-12 bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      {edu.icon}
                      <div className="text-purple-400 font-medium">{edu.year}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
                    <p className="text-gray-300 mb-3 font-medium">{edu.subtitle}</p>
                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case "Skills":
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <Code className="w-8 h-8 text-purple-400" />
              <span>My Skills</span>
            </motion.h2>
            
            <div className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div 
                  key={index} 
                  variants={cardVariants}
                  className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {skillGroup.icon}
                      <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-300 text-sm">{skill}</span>
                        </div>
                        <motion.div 
                          initial={{ width: 0 }} 
                          whileInView={{ width: `${80 - (skillIndex * 5)}%` }} 
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-2 rounded-full bg-purple-500/30 overflow-hidden"
                        >
                          <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case "About me":
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <User className="w-8 h-8 text-purple-400" />
              <span>About Me</span>
            </motion.h2>
            
            {/* Profile card with modern portrait */}
            <motion.div 
              variants={cardVariants}
              className="grid md:grid-cols-3 gap-6 items-center"
            >
              <motion.div 
                className="mx-auto md:mx-0"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <div className="p-[3px] rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 shadow-[0_10px_40px_rgba(139,92,246,0.25)]">
                  <div className="rounded-2xl overflow-hidden bg-gray-900">
                    <motion.img
                      src={MyImage}
                      alt="Younes Mensoub portrait"
                      className="w-64 h-64 md:w-72 md:h-72 object-cover"
                      initial={{ scale: 1.05 }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>

              <div className="md:col-span-2">
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <p className="text-gray-300 leading-relaxed">
                    {aboutMe.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {aboutMe.interests.slice(0,4).map((chip, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/25">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                variants={cardVariants}
                className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-gray-300 leading-relaxed mb-6">{aboutMe.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                      <Award className="w-5 h-5 text-purple-400" />
                      <span>Interests</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {aboutMe.interests.map((interest, index) => (
                        <motion.span 
                          key={index} 
                          className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm border border-blue-500/30"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {interest}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-purple-400" />
                      <span>Languages</span>
                    </h4>
                    <div className="space-y-2">
                      {aboutMe.languages.map((language, index) => (
                        <motion.div 
                          key={index} 
                          className="text-gray-300 text-sm flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <ChevronRight className="w-4 h-4 text-purple-400" />
                          <span>{language}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Profile
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Resume
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
              variants={itemVariants}
            >
              A comprehensive overview of my professional journey, skills, and achievements.
            </motion.p>

            <motion.button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/CV.pdf', '_blank')}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/3 space-y-6"
            >
              {/* Why hire me section */}
              <motion.div 
                variants={cardVariants}
                className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Why hire me?</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a Full Stack Developer who transforms ideas into functional, user-friendly web applications. 
                  I bring both creativity and solid technical skills to deliver solutions that truly make a difference.
                </p>
              </motion.div>

              {/* Navigation Menu */}
              <motion.div 
                variants={cardVariants}
                className="space-y-2"
              >
                {sections.map((section, index) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === section.id
                        ? "bg-purple-600 text-white shadow-lg"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {section.icon}
                    <span>{section.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-2/3"
            >
              <motion.div 
                className="bg-gray-800/20 border border-gray-700/30 rounded-xl p-8 backdrop-blur-sm min-h-[600px]"
                layout
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
