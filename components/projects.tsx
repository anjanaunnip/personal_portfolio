'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'DevArchitect AI',
      description:
        'AI-powered software engineering platform that transforms natural language requirements into complete backend solutions. Generates database schemas, REST APIs, FastAPI modules, documentation, test cases, and Docker-ready project structures using advanced LLM workflows.',
      gradient: 'from-[#00d9ff] to-[#9f7aea]',
      technologies: [
        'React.js',
        'FastAPI',
        'PostgreSQL',
        'AI/LLM',
        'LangChain',
        'Docker',
        'PyTest'
      ],
      github: 'https://github.com/anjanaunnip/devarchitect-ai',
      demo: 'https://devarchitect-ai.vercel.app',
      icon: '🚀',
      featured: true,
    },

    {
      title: 'AgriVision WeedSense',
      description: 'Full-stack web application for real-time agricultural image analysis and precision recommendations using ML-based weed detection with YOLOv8 and OpenCV for accurate image processing. Achieved 80-85% accuracy across 1000+ test images.',
      gradient: 'from-[#9f7aea] to-[#6366f1]',
      technologies: ['React.js', 'Django', 'YOLOv8', 'OpenCV', 'GIS', 'ML'],
      github: 'https://github.com/anjanaunnip/AgriVision-WeedSense',
      demo: 'https://agrivision.example.com',
      icon: '🌾',
      featured: true,
    },
    {
      title: 'AI-Powered FAQ Assistant',
      description: 'Full-stack web application for managing FAQs with AI-based answer rewriting capability. Features complete CRUD operations, intelligent search, and semantic answer enhancement using modern AI text rewriting APIs.',
      gradient: 'from-[#9f7aea] to-[#00d9ff]',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'TypeScript'],
      github: 'https://github.com/anjanaunnip/ai-faq-assistant',
      demo: 'https://ai-faq-assistant.vercel.app',
      icon: '🤖',
      featured: true,
    },
    {
      title: 'ReliefHub',
      description: 'Disaster relief coordination platform with donation management, resource allocation, and real-time request tracking. Integrated Razorpay payment gateway with role-based dashboards for different user types.',
      gradient: 'from-[#00d9ff] to-[#3b82f6]',
      technologies: ['Django', 'Bootstrap', 'Razorpay', 'MySQL', 'REST APIs'],
      github: 'https://github.com/anjanaunnip/ReliefHub',
      demo: 'https://reliefhub.example.com',
      icon: '💝',
      featured: true,
    },
    {
 title:'TownLet',

 description:
 'Community issue reporting mobile application that connects residents and ward members for reporting and tracking local issues. Includes complaint management, status updates, and role-based access.',

 gradient:'from-[#ec4899] to-[#f43f5e]',

 technologies:[
 'Android',
 'Java',
 'XML',
 'PHP',
 'MySQL'
 ],

 github:null,

 demo:null,

 screenshots:[
 '/projects/townlet/1.png',
 '/projects/townlet/2.png',
 '/projects/townlet/3.png',
 '/projects/townlet/4.png',
 '/projects/townlet/5.png',
 '/projects/townlet/6.png',
 '/projects/townlet/7.png',
 '/projects/townlet/8.png',
 '/projects/townlet/9.png',
 '/projects/townlet/10.png',
 '/projects/townlet/11.png',
 '/projects/townlet/12.png',
 '/projects/townlet/13.png',
 '/projects/townlet/14.png'
],

 icon:'🏘️',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Sparkles size={20} className="text-[#00d9ff]" />
            <span className="text-[#00d9ff] font-semibold">Featured Works</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Innovative solutions built with modern technologies</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -20 }}
              className="group relative glassmorphism-dark rounded-xl overflow-hidden transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative p-8 flex flex-col h-full z-10">
                {/* Icon & Title */}
                <div className="mb-6">
                  <div className="text-5xl mb-3">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-[#00d9ff] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-foreground/80 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-background`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                {/* Links */}
<div className="flex gap-4 pt-4 border-t border-border/40">


  {project.github && (

    <motion.a

      whileHover={{
        scale:1.05,
        rotate:5
      }}

      href={project.github}

      target="_blank"

      rel="noopener noreferrer"

      className="
      flex 
      items-center 
      space-x-2 
      px-4 
      py-2 
      glassmorphism-dark 
      rounded-lg 
      hover:border-[#9f7aea]/50 
      transition-all 
      duration-300
      "

    >

      <Github size={18}/>

      <span className="text-sm font-semibold">
        Code
      </span>


    </motion.a>

  )}




  {project.demo && (

    <motion.a

      whileHover={{
        scale:1.05,
        rotate:-5
      }}

      href={project.demo}

      target="_blank"

      rel="noopener noreferrer"

      className="
      flex 
      items-center 
      space-x-2 
      px-4 
      py-2 
      bg-gradient-to-r 
      from-[#9f7aea] 
      to-[#00d9ff] 
      text-background 
      rounded-lg 
      font-semibold 
      hover:shadow-lg 
      hover:shadow-[#9f7aea]/50 
      transition-all 
      duration-300
      "

    >

      <ExternalLink size={18}/>

      <span className="text-sm">
        Live
      </span>


    </motion.a>

  )}


{project.screenshots && (

<motion.button

whileHover={{scale:1.05}}

className="
px-4
py-2
rounded-lg
bg-gradient-to-r
from-[#ec4899]
to-[#f43f5e]
text-white
font-semibold
"

>

View Screenshots

</motion.button>

)}
  {!project.github && !project.demo && (

    <span
      className="
      text-sm 
      text-muted-foreground
      italic
      "
    >
      Private Academic Project
    </span>

  )}


</div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
