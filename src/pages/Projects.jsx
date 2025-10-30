import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowRight, Sparkles, Code, Database, Palette } from "lucide-react";
import Project1 from "../images/project1.jpg";
import Project2 from "../images/project2.jpg";
import Project3 from "../images/Project3.jpg";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "Ticket Management Service",
      description:
        "A comprehensive web application for managing support tickets, allowing users to create, track, and resolve issues efficiently. Built with the MERN stack, featuring user authentication, role-based access, and a responsive interface.",
      image: Project1,
      technologies: ["React", "MongoDB", "Tailwind", "Express.js", "Node.js"],
      liveUrl: "https://ticket-management-system-nine.vercel.app/login",
      githubUrl: "#",
      category: "Full Stack",
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: "Chatbot Application",
      description:
        "A smart chatbot built with the MERN stack and integrated with the OpenAI API, capable of understanding user queries and providing intelligent, context-aware responses. Features include user-friendly interface and real-time communication.",
      image: Project2,
      technologies: ["React", "Express.js", "Node.js", "OpenAI API", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI Integration",
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "TouFakya | E-commerce Platform",
      description:
        "A modern MERN stack e-commerce platform for selling dried fruits, featuring product listing, shopping cart, payment integration, and responsive design for a seamless shopping experience.",
      image: Project3,
      technologies: ["React", "Node.js", "Tailwind", "MongoDB", "Stripe"],
      liveUrl: "https://ecommerce-tou-fakya.vercel.app/",
      githubUrl: "#",
      category: "E-commerce",
      icon: <Palette className="w-5 h-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  // simple tilt effect per card
  const TiltCard = ({ children }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-50, 50], [8, -8])
    const rotateY = useTransform(x, [-50, 50], [-8, 8])

    function handleMouseMove(e) {
      const rect = e.currentTarget.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      x.set(px - rect.width / 2)
      y.set(py - rect.height / 2)
    }

    function handleMouseLeave() {
      x.set(0); y.set(0)
    }

    return (
      <motion.div
        style={{ perspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div style={{ rotateX, rotateY }} transition={{ type: 'spring', stiffness: 150, damping: 12 }}>
          {children}
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-12 relative overflow-hidden">
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
              Portfolio Showcase
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              A showcase of my creative work across web development, design, and digital experiences. 
              Each project represents a unique challenge and innovative solution.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 }}}
                className="group"
              >
                <TiltCard>
                <div className="bg-gray-800/40 border border-gray-700/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 backdrop-blur-sm hover:border-purple-500/30 h-full">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    
                    {/* Category Badge */}
                    <motion.div
                      className="absolute top-4 left-4 flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full px-3 py-1.5"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.icon}
                      <span className="text-xs font-medium text-gray-300">{project.category}</span>
                    </motion.div>

                    {/* Action Buttons Overlay */}
                    <motion.div
                      className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                      
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-400 leading-relaxed mb-6 text-base"
                      variants={itemVariants}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div 
                      className="flex flex-wrap gap-3 mb-8"
                      variants={itemVariants}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="bg-gray-700/50 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-600/50 hover:border-purple-500/50 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div 
                      className="flex gap-4"
                      variants={itemVariants}
                    >
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>View Live</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.a>

                      {project.githubUrl && project.githubUrl !== "#" && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-700/50 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-20"
          >
            <motion.div
              className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in working together?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's discuss your next project and bring your ideas to life.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
