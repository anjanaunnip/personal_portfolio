'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code2, Zap, BookOpen } from 'lucide-react';
import { projects } from './projects';
import { certifications } from './certifications';
export default function Journey() {
  const milestones = [
    {
      year: '2024-26',
      title: 'MCA Graduate',
      description: 'Master of Computer Applications from Vidya Academy of Science and Technology (CGPA: 9.14/10.0). Collaborated on 2 projects during Academics. Strong foundation in software development and emerging technologies.',
      icon: GraduationCap,
      position: 'left',
    },
    {
      year: '2025',
      title: 'Professional & Virtual Internships',
      description: 'Software Development Intern at ODIN Technologies (Dec 2025-Mar 2026): Full-stack web development with React.js, Next.js, FastAPI, NestJS, WhatsApp integration, and LLM features. Cybersecurity Virtual Internship at Cisco Networking Academy (Jun-Aug 2025): Network security, threat detection, and defense strategies.',
      icon: Code2,
      position: 'right',
    },
    {
      year: '2023-24',
      title: 'AI & Machine Learning',
      description: 'Developed AgriVision WeedSense using YOLOv8 and OpenCV for ML-based image analysis. Started exploring LLM integration and intelligent automation solutions. Built 4 projects total.',
      icon: Zap,
      position: 'left',
    },
    {
      year: '2021-24',
      title: 'Programming Foundation',
      description: 'Bachelor of Computer Application from St. Mary\'s College (CGPA: 8.29/10.0). Built fundamentals in Java, C, Python, databases, and problem-solving with hands-on project experience.',
      icon: BookOpen,
      position: 'right',
    },
  ];

  return (
    <section id="journey" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#9f7aea]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg">Evolution as a software developer</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#9f7aea] via-[#00d9ff] to-[#9f7aea] hidden md:block"
            style={{ top: 0, bottom: 0 }}
          >
            {/* Glowing effect */}
            <motion.div
              animate={{
                boxShadow: ['0 0 10px rgba(159, 122, 234, 0.5)', '0 0 20px rgba(0, 217, 255, 0.5)', '0 0 10px rgba(159, 122, 234, 0.5)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-full h-full rounded-full"
            ></motion.div>
          </motion.div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              const isLeft = milestone.position === 'left';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="glassmorphism-dark p-6 rounded-xl relative group"
                    >
                      {/* Background glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#9f7aea]/10 to-[#00d9ff]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      ></motion.div>

                      <div className="relative z-10">
                        <div className="text-[#00d9ff] font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-foreground/80 leading-relaxed">{milestone.description}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden md:flex items-center justify-center w-2/12">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: idx * 0.2, type: 'spring', stiffness: 300 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-[#9f7aea] to-[#00d9ff] flex items-center justify-center relative z-20 glow-purple"
                    >
                      <Icon size={28} className="text-background" />
                    </motion.div>
                  </div>

                  {/* Mobile Center Icon */}
                  <div className="md:hidden flex items-center justify-center -ml-8 mr-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: idx * 0.2, type: 'spring', stiffness: 300 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9f7aea] to-[#00d9ff] flex items-center justify-center relative z-20"
                    >
                      <Icon size={20} className="text-background" />
                    </motion.div>
                  </div>

                  {/* Empty space */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Journey Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { label: 'Years of Learning', value: '6+' },
            { label: 'Projects Built', value: '4' },
            { label: 'Certifications Earned', value: certifications.length.toString() },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glassmorphism-dark p-6 rounded-xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
