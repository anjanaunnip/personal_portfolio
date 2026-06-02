'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lightbulb, Code, Zap, Target, MapPin } from 'lucide-react';

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const mindsetPoints = [
    { icon: Code, label: 'Clean Code', description: 'Writing maintainable, well-documented code' },
    { icon: Lightbulb, label: 'Problem Solving', description: 'Finding elegant solutions to complex problems' },
    { icon: Zap, label: 'Continuous Learning', description: 'Staying updated with latest technologies' },
    { icon: Target, label: 'Impactful Products', description: 'Building solutions that create real value' },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know the person behind the code</p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Card 1: Who I Am */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: '0 0 30px rgba(159, 122, 234, 0.3)' }}
            className="glassmorphism-dark p-8 rounded-xl transition-all duration-300 group"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#00d9ff]">Who I Am</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              MCA graduate passionate about building efficient, scalable and user-friendly software applications. I enjoy solving real-world problems through full stack development and AI-powered solutions.
            </p>
            <Link href="/about" className="text-[#9f7aea] hover:text-[#00d9ff] font-semibold flex items-center space-x-2 transition-colors group/link">
              <span>Know More About Me</span>
              <span className="group-hover/link:translate-x-2 transition-transform">→</span>
            </Link>
          </motion.div>

          {/* Card 2: Developer Mindset */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
            className="glassmorphism-dark p-8 rounded-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#00d9ff]">Developer Mindset</h3>
            <div className="space-y-4">
              {mindsetPoints.map((point, i) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="mt-1 text-[#9f7aea] flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{point.label}</p>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 3: Quick Overview */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
            className="glassmorphism-dark p-8 rounded-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#00d9ff]">Quick Overview</h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Education</p>
                <p className="text-lg font-semibold text-foreground">MCA Graduate</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Role</p>
                <p className="text-lg font-semibold text-foreground">Full Stack Developer</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Interest</p>
                <p className="text-lg font-semibold text-foreground">AI & Software Engineering</p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2 flex items-center space-x-2">
                  <MapPin size={14} />
                  <span>Location</span>
                </p>
                <p className="text-lg font-semibold text-foreground">Kerala, India</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
