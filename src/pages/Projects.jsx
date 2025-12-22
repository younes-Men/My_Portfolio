import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowRight, Sparkles, Code, Database, Palette } from "lucide-react";
import Project1 from "../images/project1.jpg";
import Project2 from "../images/project2.jpg";
import Project3 from "../images/Project3.jpg";
import Projetc4 from "../images/Project4.jpg";
import Project5 from "../images/Project5.jpg"

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "Ticket Management Service",
      description:
        "A comprehensive web application for managing support tickets, allowing users to create, track, and resolve issues efficiently. Built with the MERN stack, featuring user authentication, role-based access, and a responsive interface.",
      image: Project1,
      technologies: ["React", "MongoDB", "Tailwind", "Express.js", "Node.js"],
      liveUrl: "https://ticket-management-system-lxzp.vercel.app",
      githubUrl: "#",
      category: "Full Stack",
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: "Chatbot Application",
      description:
        "A smart chatbot built with the MERN stack and integrated with the OpenAI API, capable of understanding user queries and providing intelligent, context-aware responses. Features include user-friendly interface and real-time communication.",
      image: Project2,
      technologies: ["React", "Express.js", "Node.js", "OpenAI API"],
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
      technologies: ["React", "Node.js", "Tailwind", "MongoDB"],
      liveUrl: "https://ecommerce-tou-fakya.vercel.app/",
      githubUrl: "#",
      category: "E-commerce",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      title: "NewBiz | CRM",
      description:
        "A modern CRM platform , enabling advanced company search by SIRET, phone number, sector, with data export and an intuitive, responsive interface. " ,
      image: Projetc4,
      technologies: ["React", "Node.js", "Tailwind", "SupaBase" , "Express.js"],
      liveUrl: "https://www.courtierformation.com/",
      githubUrl: "#",
      category: "CRM System",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      title: "Cabinet system | Cabinet Dr Benmoro",
      description:
        "A full-stack medical management system built to handle patient data, appointments, and medical records, role-based access, and a modern responsive dashboard." ,
      image: Project5,
      technologies: ["React", "Node.js", "Tailwind", "SupaBase" , "Express.js"],
      liveUrl: "https://system-cabinet-medical.vercel.app/",
      githubUrl: "#",
      category: "Cabinet system",
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
                className="flex"
              >
                <motion.div 
                  className="bg-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm h-full flex flex-col w-full transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: "rgba(147, 51, 234, 0.3)",
                    boxShadow: "0 10px 40px rgba(147, 51, 234, 0.1)"
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full px-2.5 py-1">
                      {project.icon}
                      <span className="text-xs font-medium text-gray-300">{project.category}</span>
                    </div>

                    {/* Action Buttons Overlay */}
                    <div className="absolute bottom-3 right-3 flex space-x-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 text-white p-2 rounded-full"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 text-white p-2 rounded-full"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 
                      className="text-xl font-bold text-white mb-3"
                    >
                      {project.title}
                    </h3>
                    
                    <p 
                      className="text-gray-400 leading-relaxed mb-4 text-sm flex-grow"
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div 
                      className="flex flex-wrap gap-2 mb-5"
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md text-xs font-medium border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div 
                      className="flex gap-3 mt-auto relative"
                    >
                      <motion.div
                        className="relative flex-1"
                        initial="initial"
                        whileHover="hover"
                      >
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm relative z-10 block"
                          variants={{
                            initial: {},
                            hover: {}
                          }}
                        >
                          <span>View Live</span>
                          <ArrowRight className="w-3 h-3" />
                        </motion.a>
                        
                        {/* Preview Image on Hover */}
                        <motion.div
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20 pointer-events-none"
                          variants={{
                            initial: { opacity: 0, y: 10, scale: 0.9 },
                            hover: { opacity: 1, y: 0, scale: 1 }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-gray-900 border border-purple-500/50 rounded-lg p-2 shadow-2xl">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-64 h-40 object-cover rounded-md"
                            />
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                              <div className="w-4 h-4 bg-gray-900 border-r border-b border-purple-500/50 transform rotate-45"></div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>

                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-700/50 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                        >
                          <Github className="w-3 h-3" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
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
