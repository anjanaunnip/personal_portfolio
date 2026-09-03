'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const projects = [
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
    github: null,
    demo: null,

    status: 'Progress: Backend and AI portions completed. Pending: frontend design, GitHub, and deployment.',

    icon: '🚀',
    featured: true,
  },

  {
    title: 'AgriVision WeedSense',
    description: 'Full-stack web application for real-time agricultural image analysis and precision recommendations using ML-based weed detection with YOLOv8 and OpenCV for accurate image processing. Achieved 80-85% accuracy across 1000+ test images.',
    gradient: 'from-[#9f7aea] to-[#6366f1]',
    technologies: ['React.js', 'Django', 'YOLOv8', 'OpenCV', 'GIS', 'ML'],
    github: 'https://github.com/anjanaunnip/AgriVision-WeedSense',
    demo: 'https://agri-vision-weed-sense.vercel.app',
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
    status: 'Deployment pending',
    icon: '🤖',
    featured: true,
  },
  {
    title: 'ReliefHub',
    description: 'Disaster relief coordination platform with donation management, resource allocation, and real-time request tracking. Integrated Razorpay payment gateway with role-based dashboards for different user types.',
    gradient: 'from-[#00d9ff] to-[#3b82f6]',
    technologies: ['Django', 'Bootstrap', 'Razorpay', 'MySQL', 'REST APIs'],
    github: 'https://github.com/anjanaunnip/ReliefHub',
    demo: 'https://reliefhub-b4vc.onrender.com/',
    icon: '💝',
    featured: true,
  },
  {
    title: 'TownLet',

    description:
      'Community issue reporting mobile application that connects residents and ward members for reporting and tracking local issues. Includes complaint management, status updates, and role-based access.',

    gradient: 'from-[#ec4899] to-[#f43f5e]',

    technologies: [
      'Android',
      'Java',
      'XML',
      'PHP',
      'MySQL'
    ],

    github: null,

    demo: null,

    screenshots: [
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

    icon: '🏘️',
  },
];

export default function Projects() {

  const [openScreenshots, setOpenScreenshots] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [projectTitle, setProjectTitle] = useState('');



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
                  {project.status && (

                    <motion.div

                      animate={{
                        opacity: [0.6, 1, 0.6]
                      }}

                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}

                      className="
                    mt-3
                    inline-flex
                    items-center
                    px-4
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    bg-gradient-to-r
                    from-yellow-500/20
                    to-orange-500/20
                    text-yellow-300
                    border
                    border-yellow-400/30
                    "

                    >

                      {project.status}

                    </motion.div>

                  )}
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
                        scale: 1.05,
                        rotate: 5
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

                      <Github size={18} />

                      <span className="text-sm font-semibold">
                        Code
                      </span>


                    </motion.a>

                  )}




                  {project.demo && (

                    <motion.a

                      whileHover={{
                        scale: 1.05,
                        rotate: -5
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

                      <ExternalLink size={18} />

                      <span className="text-sm">
                        Live
                      </span>


                    </motion.a>

                  )}


                  {project.screenshots && (

                    <motion.button

                      whileHover={{
                        scale: 1.05
                      }}

                      onClick={() => {
                        setSelectedImages(project.screenshots);
                        setProjectTitle(project.title);
                        setCurrentImage(0);
                        setOpenScreenshots(true);
                      }}

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



                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Screenshot Modal */}

        {/* Screenshot Modal */}

        {/* Premium Screenshot Gallery */}

        {openScreenshots && (

          <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

            className="
fixed
inset-0
z-[999999]
bg-black/80
backdrop-blur-xl
flex
items-center
justify-center
p-6
"

          >


            <motion.div

              initial={{
                scale: 0.85,
                opacity: 0,
                y: 50
              }}

              animate={{
                scale: 1,
                opacity: 1,
                y: 0
              }}

              className="
relative
w-[90vw]
max-w-6xl
h-[85vh]
rounded-3xl
bg-[#020617]/90
border
border-cyan-400/30
shadow-[0_0_60px_#00d9ff40]
overflow-hidden
flex
flex-col
"

            >


              {/* Header */}

              <div className="
h-20
px-8
flex
items-center
justify-between
border-b
border-white/10
">


                <div>

                  <h2 className="
text-3xl
font-bold
gradient-text
">
                    {projectTitle}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Project Screenshots
                  </p>

                </div>



                <button
                  onClick={() => setOpenScreenshots(false)}
                  className="
w-10
h-10
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-red-500
transition
"
                >

                  <X />

                </button>


              </div>



              {/* Main Image */}

              <div className="
relative
flex-1
flex
items-center
justify-center
">


                <button

                  onClick={() => setCurrentImage(
                    currentImage === 0
                      ? selectedImages.length - 1
                      : currentImage - 1
                  )}

                  className="
absolute
left-8
w-14
h-14
rounded-full
bg-white/10
hover:bg-cyan-500
flex
items-center
justify-center
transition
"

                >

                  <ChevronLeft />

                </button>



                <motion.img

                  key={currentImage}

                  initial={{
                    opacity: 0,
                    x: 80
                  }}

                  animate={{
                    opacity: 1,
                    x: 0
                  }}

                  transition={{
                    duration: 0.35
                  }}

                  src={selectedImages[currentImage]}


                  className="
max-h-[65vh]
max-w-[75%]
object-contain
rounded-2xl
border
border-white/20
shadow-2xl
"

                />



                <button

                  onClick={() => setCurrentImage(
                    currentImage === selectedImages.length - 1
                      ? 0
                      : currentImage + 1
                  )}

                  className="
absolute
right-8
w-14
h-14
rounded-full
bg-white/10
hover:bg-cyan-500
flex
items-center
justify-center
transition
"

                >

                  <ChevronRight />

                </button>


              </div>




              {/* Footer */}

              <div className="
h-20
flex
flex-col
items-center
justify-center
gap-3
border-t
border-white/10
">


                <p className="text-gray-400">

                  {currentImage + 1} / {selectedImages.length}

                </p>


                <div className="flex gap-2">

                  {selectedImages.map((_, i) => (

                    <button

                      key={i}

                      onClick={() => setCurrentImage(i)}

                      className={`
w-3
h-3
rounded-full

${currentImage === i
                          ? 'bg-cyan-400'
                          : 'bg-white/20'
                        }

`}

                    />

                  ))}

                </div>


              </div>


            </motion.div>


          </motion.div>

        )}


      </div>
    </section>
  );
}
