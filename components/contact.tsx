'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, MapPin, SendIcon } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anjanaunnikrishnan178@gmail.com',
      href: 'mailto:anjanaunnikrishnan178@gmail.com',
      color: 'from-[#00d9ff] to-[#0ea5e9]',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7736906326',
      href: 'tel:+917736906326',
      color: 'from-[#9f7aea] to-[#6366f1]',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Thrissur, Kerala, India',
      href: '#',
      color: 'from-[#ec4899] to-[#f43f5e]',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/anjanaunnip', color: 'hover:text-[#0a66c2]' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/anjanaunnip', color: 'hover:text-[#333]' },
    { icon: Mail, label: 'Email', href: 'mailto:anjanaunnikrishnan178@gmail.com', color: 'hover:text-[#00d9ff]' },
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
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I am currently looking for opportunities as a Software Developer. Let&apos;s connect and create impactful solutions together.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h3>

            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  href={info.href}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-background flex-shrink-0 mt-1`}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">{info.label}</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-[#00d9ff] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right - Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glassmorphism-dark p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>

            {/* Social Icons Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-lg border border-border/40 hover:border-[#00d9ff]/50 transition-all duration-300 flex items-center justify-center ${social.color}`}
                    title={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>

            {/* Message Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-[#9f7aea] to-[#00d9ff] text-background rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#9f7aea]/50 transition-all duration-300 mb-6"
            >
              <SendIcon size={20} />
              <span>Send Message</span>
            </motion.button>

            {/* Info Text */}
            <p className="text-sm text-muted-foreground text-center">
              I typically respond within 24 hours. Looking forward to connecting with you!
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-16"
        ></motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm">
            Designed & Developed with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block text-red-500 mx-1"
            >
              ❤️
            </motion.span> by Anjana
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © 2026 Anjana Unni P. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
