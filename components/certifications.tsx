'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronDown } from 'lucide-react';

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      company: 'Manifold Institute',
      title: 'Advanced Python Programming for Competitive Coding',
      logo: '🐍',
      color: 'from-[#3776ab] to-[#ffd343]',
    },
    {
      company: 'Cisco Networking Academy',
      title: 'Virtual Internship in Cybersecurity',
      logo: '🔐',
      color: 'from-[#1ba0c8] to-[#0066cc]',
    },
    {
      company: 'IIT Bombay',
      title: 'C Programming Training - eSpoken Tutorial Project',
      logo: '✔️',
      color: 'from-[#ff6b35] to-[#004e89]',
    },
    {
      company: 'NPTEL',
      title: 'Introduction to Internet of Things',
      logo: '🌐',
      color: 'from-[#667eea] to-[#764ba2]',
    },
    {
      company: 'EduPyramids',
      title: 'HTML Training - SINE, IIT Bombay',
      logo: '📝',
      color: 'from-[#f093fb] to-[#f5576c]',
    },
  ];

  const visibleCerts = showAll ? certifications : certifications.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="certifications" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9f7aea]/5 rounded-full blur-3xl"></div>

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
            <Award size={20} className="text-[#9f7aea]" />
            <span className="text-[#9f7aea] font-semibold">Professional Credentials</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">Industry-recognized credentials from leading organizations</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {visibleCerts.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -15, rotateZ: 2 }}
              className="group relative"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-xl p-px opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="absolute inset-0 bg-background rounded-xl"></div>
              </div>

              {/* Content */}
              <div className="relative glassmorphism-dark p-8 rounded-xl h-full flex flex-col items-center text-center transition-all duration-300">
                {/* Logo */}
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-5xl mb-4"
                >
                  {cert.logo}
                </motion.div>

                {/* Company */}
                <h3 className={`text-xl font-bold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-2`}>
                  {cert.company}
                </h3>

                {/* Certification Title */}
                <p className="text-foreground font-semibold mb-6 flex-grow">
                  {cert.title}
                </p>

                {/* Verification Icon */}
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="#"
                  className="p-2 bg-foreground/10 rounded-lg hover:bg-foreground/20 transition-colors"
                  title="Verify Certificate"
                >
                  <ExternalLink size={18} className="text-[#00d9ff]" />
                </motion.a>
              </div>
            </motion.div>
            ))}
          </motion.div>

          {/* Blur Overlay for Hidden Cards */}
          <AnimatePresence>
            {!showAll && certifications.length > 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none"
              ></motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glassmorphism-dark p-8 rounded-xl max-w-2xl mx-auto">
            <p className="text-foreground/80 mb-6">
              Continuously learning and growing with industry-standard certifications to stay updated with the latest technologies and best practices.
            </p>
            {!showAll && certifications.length > 4 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(true)}
                className="px-6 py-2 bg-gradient-to-r from-[#9f7aea] to-[#00d9ff] text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-[#9f7aea]/50 transition-all flex items-center space-x-2 mx-auto"
              >
                <span>View All Certificates</span>
                <ChevronDown size={18} />
              </motion.button>
            )}
            {showAll && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(false)}
                className="px-6 py-2 border border-[#9f7aea]/50 text-[#9f7aea] rounded-lg font-semibold hover:border-[#9f7aea] transition-all flex items-center space-x-2 mx-auto"
              >
                <span>Show Less</span>
                <ChevronDown size={18} className="rotate-180" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
