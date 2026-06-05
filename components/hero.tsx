'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Zap, Brain, Download } from 'lucide-react';

export default function Hero() {
  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    { number: '6', label: 'Projects Built' },
    { number: 'MCA', label: 'Graduate' },
    { number: 'Full Stack', label: 'Developer' },
  ];

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#9f7aea]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Small Intro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-muted-foreground pt-0"
            >
              Hello, I&apos;m
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
              >
                <span className="gradient-text">Anjana Unni P</span>
              </motion.h1>

              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-16 flex items-center"
              >
                <div className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#00d9ff] via-[#0ea5e9] to-[#00d9ff] bg-clip-text text-transparent">
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

            {/* Opportunity Card with CTA Buttons */}
            <div className="flex flex-col gap-6 items-start max-w-xl">
              {/* Opportunity Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ y: -5 }}
                className="relative w-full max-w-xl group"
              >
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00e5ff] via-[#a855f7] to-[#00e5ff] opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500 -z-10"></div>

                {/* Background lighting effects */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative p-6 rounded-xl backdrop-blur-xl bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 border border-[#00d9ff]/30 hover:border-[#00d9ff]/60 transition-all duration-300 overflow-hidden">
                  {/* Subtle grid pattern background */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 229, 255, 0.05) 25%, rgba(0, 229, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 229, 255, 0.05) 75%, rgba(0, 229, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 229, 255, 0.05) 25%, rgba(0, 229, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 229, 255, 0.05) 75%, rgba(0, 229, 255, 0.05) 76%, transparent 77%, transparent)',
                    backgroundSize: '50px 50px'
                  }}></div>

                  {/* Status Header */}
                  <div className="flex items-center space-x-3 mb-4 relative z-10">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative w-3 h-3"
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                      <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full"
                      ></motion.div>
                    </motion.div>
                    <h3 className="font-semibold text-foreground relative z-10 drop-shadow-lg">Currently Open To Opportunities</h3>
                  </div>

                  {/* Roles Grid */}
                  <div className="space-y-3 relative z-10">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Seeking Roles</p>
                    <div className="grid grid-cols-2 gap-2">
                      <motion.div
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="flex items-center space-x-2 p-2.5 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        <Code2 size={16} className="text-[#00d9ff] flex-shrink-0" />
                        <span className="text-sm text-foreground/90">Software Developer</span>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="flex items-center space-x-2 p-2.5 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        <Cpu size={16} className="text-[#a855f7] flex-shrink-0" />
                        <span className="text-sm text-foreground/90">Software Engineer</span>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="flex items-center space-x-2 p-2.5 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        <Zap size={16} className="text-[#00d9ff] flex-shrink-0" />
                        <span className="text-sm text-foreground/90">Full Stack Developer</span>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="flex items-center space-x-2 p-2.5 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        <Brain size={16} className="text-[#a855f7] flex-shrink-0" />
                        <span className="text-sm text-foreground/90">AI-Augmented Dev</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 w-full"
              >
                <button
                  onClick={handleViewWork}
                  className="px-8 py-3 bg-gradient-to-r from-[#9f7aea] to-[#00d9ff] text-background rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#9f7aea]/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span>View My Work</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href="/resume/Anjana_Unni_P_Resume.pdf"
                  download="Anjana_Unni_P_Resume.pdf"
                  className="px-8 py-3 border border-[#00d9ff]/40 rounded-lg 
                  font-semibold flex items-center justify-center gap-2
                  hover:bg-[#00d9ff]/10
                  hover:shadow-lg hover:shadow-[#00d9ff]/40
                  transition-all duration-300"
                >

                  <Download size={18} />

                  <span>
                    Download Resume
                  </span>

                </a>
              </motion.div>
            </div>

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
            className="hidden lg:flex items-start justify-center"
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

              {/* Center Content - Professional Portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#9f7aea]/40 flex items-center justify-center"
                >
                  <img
                    src="/anjana-portrait.jpg"
                    alt="Anjana Unni P - Full Stack Developer"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Overlay gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40 rounded-full"></div>
                </motion.div>
              </motion.div>

              {/* Code Card Floating */}
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glassmorphism-dark p-4 rounded-lg w-48 z-20"
              >
                <div className="text-3xl font-bold gradient-text mb-2">&lt;/&gt;</div>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  I love turning ideas into real-world solutions
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
