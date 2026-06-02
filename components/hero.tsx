'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const achievements = [
    { number: '10+', label: 'Projects Completed' },
    { number: 'MCA', label: 'Graduate' },
    { number: 'Full Stack', label: 'Developer' },
  ];

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#9f7aea]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Small Intro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-muted-foreground"
            >
              Hello, I&apos;m
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-6xl md:text-7xl font-bold mb-4 leading-tight"
              >
                Anjana
                <br />
                <span className="gradient-text">Unni P</span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-20 flex items-center"
              >
                <div className="text-3xl md:text-4xl font-semibold gradient-text">
                  Full Stack Developer
                </div>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground"
            >
              MCA Graduate | AI Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-foreground/80 text-lg leading-relaxed max-w-xl"
            >
              I build scalable web applications and intelligent AI-powered solutions using modern technologies. Passionate about creating efficient, user-friendly software that solves real-world problems.
            </motion.p>

            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="glassmorphism-dark p-4 rounded-lg w-fit"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm text-foreground">Currently open to Software Developer Opportunities</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-[#9f7aea] to-[#00d9ff] text-background rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-[#9f7aea]/50 transition-all duration-300 transform hover:scale-105">
                <span>View My Work</span>
                <ArrowRight size={18} />
              </button>

              <button className="px-8 py-3 glassmorphism-dark text-foreground rounded-lg font-semibold hover:border-[#00d9ff]/50 transition-all duration-300 transform hover:scale-105">
                Download Resume
              </button>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-8 pt-8 border-t border-border/40"
            >
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold gradient-text">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image & Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-lg">
              {/* Glowing Circle Background */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(159, 122, 234, 0.4)',
                    '0 0 100px rgba(159, 122, 234, 0.6)',
                    '0 0 60px rgba(159, 122, 234, 0.4)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-[#9f7aea]/30 glow-purple"
              ></motion.div>

              {/* Inner Circle */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(0, 217, 255, 0.3)',
                    '0 0 80px rgba(0, 217, 255, 0.5)',
                    '0 0 40px rgba(0, 217, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-12 rounded-full border-2 border-[#00d9ff]/20 glow-cyan"
              ></motion.div>

              {/* Center Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-3/4 glassmorphism-dark p-6 rounded-lg text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">&lt;/&gt;</div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    I love turning ideas into real-world solutions
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
