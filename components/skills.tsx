'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Braces,
  Zap,
  GitBranch,
  Palette,
  BarChart3,
  Cloud,
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Web Technologies',
      icon: Palette,
      color: 'from-[#9f7aea] to-[#6366f1]',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend & Frameworks',
      icon: Braces,
      color: 'from-[#00d9ff] to-[#3b82f6]',
      skills: [
        { name: 'Python', level: 92 },
        { name: 'Django', level: 90 },
        { name: 'FastAPI', level: 88 },
        { name: 'Node.js', level: 80 },
        { name: 'NestJS', level: 80 },
        { name: 'REST APIs', level: 92 },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-[#ec4899] to-[#f43f5e]',
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'SQLite', level: 90 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'Query Optimization', level: 85 },
        { name: 'Database Design', level: 87 },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: BarChart3,
      color: 'from-[#9f7aea] to-[#00d9ff]',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'YOLOv8', level: 88 },
        { name: 'OpenCV', level: 85 },
        { name: 'NLP', level: 82 },
        { name: 'OpenAI API', level: 90 },
        { name: 'LLM Integration', level: 88 },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: GitBranch,
      color: 'from-[#00d9ff] to-[#0ea5e9]',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 88 },
        { name: 'Docker', level: 85 },
        { name: 'Terminal/CLI', level: 90 },
        { name: 'Agile & SDLC', level: 87 },
      ],
    },
    {
      category: 'Programming Languages',
      icon: Cloud,
      color: 'from-[#6366f1] to-[#8b5cf6]',
      skills: [
        { name: 'Java', level: 82 },
        { name: 'C', level: 85 },
        { name: 'Python', level: 92 },
        { name: 'OOPS', level: 88 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Debugging & Testing', level: 88 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#9f7aea]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl"></div>

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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">Expertise across modern technologies and frameworks</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -15, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="glassmorphism-dark p-8 rounded-xl group transition-all duration-300 perspective"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Category Header */}
                <motion.div 
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div 
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-background`}
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-[#00d9ff] transition-colors">{category.category}</h3>
                </motion.div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIdx * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: skillIdx * 0.1, duration: 1.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color} relative overflow-hidden shadow-lg transition-all group-hover:h-4`}
                      >
                        <motion.div
                          animate={{ x: ['0%', '100%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        ></motion.div>
                        <motion.div
                          animate={{ opacity: [0.4, 0.8, 0.4] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="absolute inset-0 rounded-full"
                          style={{
                            boxShadow: `0 0 20px rgba(159, 122, 234, 0.8)`
                          }}
                        ></motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
